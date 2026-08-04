import { listPosts } from "@/lib/data";
// import { DeleteExpense, UpdateExpense } from "@/lib/buttons";
import Link from "next/link";

function getFirstThreeWords(paragraph: string) {
  if (!paragraph || typeof paragraph !== "string") {
    return "";
  }

  const regex = /^(\s*\S+){1,3}/u;
  const match = paragraph.match(regex);

  if (match) {
    const firstThree = match[0].trim();
    return firstThree;
  }

  return "";
}
 
export default async function TitlesTable({section} : {section: string}) {

  const data = await listPosts(section);

  return (
    <div className="w-full bg-black ">
      {data.length > 0 ? (
        data.map((item, index) => (
          <ul key={index}>
            <Link href={`/posts/${item.slug}`}>
              <li className="px-6 py-2 text-lg text-[#b4b4b4] font-bold">
                {item.title}
                <div className="text-sm font-normal text-[#b4b4b4] ">
                  {getFirstThreeWords(item.content) + "..."}
                </div>
              </li>
            </Link>
          </ul>
        ))
      ) : (
        <ul>
          <li className="text-center text-gray-500 py-6 italic">
            No data available
          </li>
        </ul>
      )}
    </div>
  );
}
