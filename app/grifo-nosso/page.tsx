import { grifos } from "@/lib/grifos";


export default function Page() {
  return (
    <>
      <div className="bg-black text-[#b4b4b4] px-6 py-4 font-bold text-white text-justify">
        <h1 className="text-2xl">Grifo Nosso</h1>
      </div>
      <div className="bg-black text-[#b4b4b4] px-6 py-4 font-semibold text-lg text-justify">
        {grifos.map((item, index) => (
          // Use a unique key for each row, like user.id
          <div  style={{ whiteSpace: "pre-wrap" }} key={index}>
            {item.grifo} <br /> <br />({item.autor}, {item.obra})
            <div className="py-10">
              <hr className="border mx-auto w-1/2" />
            </div>
          </div>
        ))}        
      </div>
    </>
  );
}
