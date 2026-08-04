"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import z from "zod";

// import { Expenses } from "./definitions";



const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function createPost(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    title: z.string(),
    section: z.string(),
    author: z.string(),
    content: z.string(),
    image: z.string(),
    slug: z.string(),
  });

  const parse = schema.safeParse({
    title: formData.get("title"),
    section: formData.get("section"),
    author: formData.get("author"),
    content: formData.get("content"),
    image: formData.get("image"),
    slug: formData.get("slug"),
  });

  if (!parse.success) {
    return { message: "Failed to create post" };
  }

  const data = parse.data;

  try {
    await sql`
      INSERT INTO posts (section, title, author, content, image, slug)
        VALUES (${data.section}, ${data.title}, ${data.author}, ${data.content}, ${data.image}, ${data.slug})
    `;
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return {
      message: "Database Error: Failed to Create Post.",
    };
  }

  console.log(data.title);

  revalidatePath("/criar-post");
  redirect("/criar-post");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

// export async function updateExpense(id: number, formData: FormData) {
//   const description = formData.get("description");
//   const value = formData.get("content");
//   const day = formData.get("day");
//   const month = formData.get("month");

//   try {
//     await sql`
//         UPDATE expenses
//         SET description = ${description}, value = ${value}, day = ${day}, month = ${month}
//         WHERE id = ${id}
//       `;
//   } catch (error) {
//     // We'll also log the error to the console for now
//     console.error(error);
//     return { message: "Database Error: Failed to Update expense." };
//   }

//   revalidatePath("/");
//   redirect("/");
// }

// export async function deleteExpense(id: number) {
//   await sql`DELETE FROM expenses WHERE id = ${id}`;
//   revalidatePath("/");
// }
