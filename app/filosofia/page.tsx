import TitlesTable from "@/components/titles-table";

export default function Page() {
  return (
    <>
      <div className="bg-black text-[#b4b4b4] px-6 py-4 font-bold text-white text-justify">
        <h1 className="text-2xl">Textos • Filosofia</h1>
      </div>
      <div className="pb-4 bg-black h-80 ">
        <TitlesTable section={"filosofia"}/>
      </div>
    </>
  );
}
