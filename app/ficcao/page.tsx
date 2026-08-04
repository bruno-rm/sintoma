import TitlesTable from "@/components/titles-table";

export default function Page() {
  return (
    <>
      <div className="bg-black  px-6 py-4 font-bold text-white text-justify">
        <h1 className="text-2xl">Textos • Ficção</h1>
      </div>
      <div>
        <TitlesTable section={"ficção"}/>
      </div>
    </>
  );
}
