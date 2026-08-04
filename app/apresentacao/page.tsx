import { notFound } from "next/navigation";
import { fetchPostBySlug } from "@/lib/data";

export default async function Page() {
  
  const slug = "apresentacao";

  const [post] = await Promise.all([fetchPostBySlug(slug)]);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="bg-black px-6 py-4 font-bold text-white text-justify">
        <h1 className="text-2xl">Textos • Apresentação</h1>
      </div>
      <div className="bg-black text-[#b4b4b4] px-6 py-4 font-semibold text-lg text-justify">
        <p className="pb-4" style={{ whiteSpace: "pre-wrap" }}>
          {post.content}
        </p>
      </div>
    </>
  );
}


