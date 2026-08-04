"use client";

import { useState } from "react";

const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"] as const;

export default function MultiSelect() {
  const [selected, setSelected] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelected(values);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Selected options:", selected);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
    >
      <label
        htmlFor="options"
        className="block text-sm font-medium text-gray-700"
      >
        Selecione opções
      </label>

      <select
        id="options"
        name="options"
        multiple
        size={4}
        value={selected}
        onChange={handleChange}
        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
                   focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="cursor-pointer px-2 py-1"
          >
            {option}
          </option>
        ))}
      </select>

      <p className="text-xs text-gray-500">
        Use <strong>Ctrl</strong> (Windows) ou <strong>Cmd</strong> (Mac) para
        selecionar múltiplas opções.
      </p>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Enviar
      </button>
    </form>
  );
}
