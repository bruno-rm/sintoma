import Rot13Converter from "@/components/rot13";

export default async function Page() {
  return (
    <>
      <div className="bg-black px-6 py-4 font-bold text-white text-justify-center">
        <h1 className="text-2xl">Contato</h1>
      </div>
      <div className="bg-black text-[#b4b4b4] px-2 pt-5 pb-30 font-semibold text-lg flex justify-center">
        <Rot13Converter/>
      </div>
    </>
  );
}
