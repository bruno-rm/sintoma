"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar3() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Menu */}
        <ul className="flex space-x-8 text-gray-700 font-medium relative">
          {/* Products with submenu */}

          <li
            className="relative"
            // onMouseEnter={() => setOpen(true)}
            // onMouseLeave={() => setOpen(false)}
          >
            <button
              className="hover:text-blue-600 transition flex items-center cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              Textos
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {open && (
              <ul className="absolute  mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                <li>
                  <Link
                    href="/apresentação"
                    className="block p-2 hover:bg-gray-100 rounded-t-lg"
                  >
                    Apresentação
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ficcao"
                    className="block p-2 hover:bg-gray-100 rounded-b-lg"
                  >
                    Ficção
                  </Link>
                </li>
                <li>
                  <Link
                    href="/filosofia"
                    className="block p-2 hover:bg-gray-100 rounded-b-lg"
                  >
                    Filosofia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contribuicoes"
                    className="block p-2 hover:bg-gray-100 rounded-b-lg"
                  >
                    Contribuições
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
