"use client";
import { useState } from "react";
import { rot13 } from "@/lib/rot13";

export default function Rot13Converter() {
  const [text, setText] = useState("oehabez@tzk.pbz");

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${text} foi copiado.`);
    } catch (error) {
      console.error("Falha em copiar:", error);
    }
  }

  return (
    <div className="p-4 space-y-3 ">
      <div>
        <input
          className="w-50 pb-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
          value={text}
          readOnly
        />
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setText(rot13(text))}
          className="w-30 cursor-pointer bg-[#353535] hover:text-[#b4b4b4]  text-white font-medium py-2  transition"
        >
          Revelar
        </button>

        <button
          type="button"
          onClick={copyToClipboard}
          className="w-30 cursor-pointer bg-[#353535] hover:text-[#b4b4b4]  text-white font-medium py-2  transition"
        >
          Copiar
        </button>
      </div>
    </div>
  );
}
