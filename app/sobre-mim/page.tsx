import { notFound } from "next/navigation";
import { fetchPostBySlug } from "@/lib/data";
import Credits from "@/components/credits";
import Image from "next/image";

export default async function Page() {
  
  const [post] = await Promise.all([fetchPostBySlug("sobre-mim")]);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="bg-black px-6 py-4 font-bold text-white text-justify">
        <h1 className="text-3xl">{post.title} </h1>
      </div>
      <div className="bg-black w-full px-6 py-4">
        <Image
          src={`/assets/images/posts/${post.image}`}
          width={1000}
          height={1000}
          alt={`Fotograma do filme ${post.image}`}
        />
      </div>
      <div>
        {post.section === "contribuições" && (
          <Credits/>
        )}
      </div>
      <div className="bg-black text-[#b4b4b4] px-6 py-4 font-semibold text-lg text-justify">
        <p className="pb-4" style={{ whiteSpace: "pre-wrap" }}>
          {post.content}
        </p>
      </div>
    </>
  );
}
