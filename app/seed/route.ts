import postgres from "postgres";
import { posts, users } from "@/lib/placeholder-data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// async function seedUsers() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedUsers;
// }

// export async function createTable() {
//   // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//       CREATE TABLE IF NOT EXISTS posts (
//       id SERIAL PRIMARY KEY,
//       section VARCHAR(100) NOT NULL,
//       title VARCHAR(255) NOT NULL,
//       author VARCHAR(150),
//       content TEXT NOT NULL,
//       created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
//     );
//     `;

//   const insertedPosts = await Promise.all(
//     posts.map(async (post) => {
//       return sql`
//         INSERT INTO posts (id, section, title, author, content, created_at)
//         VALUES (${post.id}, ${post.section}, ${post.title}, ${post.author}, ${post.content}, ${post.created_at})
//       `;
//     })
//   );

//   return insertedPosts;

//   //  return console.log("Posts table created or already exists");
// }

export async function insert() {
  await sql`
      CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      section VARCHAR(100) NOT NULL,
      title VARCHAR(255) NOT NULL,
      author VARCHAR(150) NOT NULL,
      content TEXT NOT NULL,
      image VARCHAR(150) NOT NULL ,
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );`;

  try {
    posts.map( (post) => {
      return sql`
        INSERT INTO posts (id, section, title, author, content, created_at)
        VALUES (${post.id}, ${post.section}, ${post.title}, ${post.author}, ${post.content}, ${post.created_at})
      `;
    });
    console.log(posts.map((desgraca) => {return desgraca.id} ))
  } catch (error) {
    console.error("Database Error:", error);
    return { message: "Failed to create item." };
  }
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [insert()]);

    return Response.json({ message: "Items inserted successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
