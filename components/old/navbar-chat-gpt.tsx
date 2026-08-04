"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react"; // ✅ using lucide-react icons
import NavItem, {
  SubMenu,
  SubMenuMobile,
  textosSubItems,
  items,
  somSubItems,
} from "./navitem-chat-gpt";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [textosSubmenuOpen, setTextosSubmenuOpen] = useState<boolean>(false);
  const [somSubmenuOpen, setSomSubmenuOpen] = useState<boolean>(false)


  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop Menu */}

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          {/* Textos Dropdown */}

          <li className="relative group">
            <button className="hover:text-blue-600 transition flex items-center">
              Textos
              <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
            </button>

            <ul className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-md w-34">
              {textosSubItems.map((item, index) => (
                <SubMenu
                  key={index}
                  url={item.url}
                  label={item.label}
                  isActive={pathname === item.url}
                />
              ))}
            </ul>
          </li>

          <NavItem
            url={items[0].url}
            label={items[0].label}
            isActive={pathname === items[0].url}
          />

          <li className="relative group">
            <button className="hover:text-blue-600 transition flex items-center">
              Som
              <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
            </button>

            <ul className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-md w-36 text-center">
              {somSubItems.map((item, index) => (
                <SubMenu
                  key={index}
                  url={item.url}
                  label={item.label}
                  isActive={pathname === item.url}
                />
              ))}
            </ul>
          </li>

          <NavItem
            url={items[1].url}
            label={items[1].label}
            isActive={pathname === items[1].url}
          />
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
          {/* Textos Submenu (Mobile) */}
          <li>
            <button
              className="w-full flex justify-between items-center hover:text-blue-600"
              onClick={() => setTextosSubmenuOpen(!textosSubmenuOpen)}
            >
              <span>Textos</span>
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform ${
                  textosSubmenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`pl-4 mt-2 space-y-2 text-sm text-gray-600 transition-all duration-300 ${
                textosSubmenuOpen ? "max-h-30 opacity-100" : "max-h-0 opacity-0"
              } `}
            >
              {textosSubItems.map((item, index) => (
                <SubMenuMobile
                  key={index}
                  url={item.url}
                  label={item.label}
                  isActive={pathname === item.url}
                />
              ))}
            </ul>
          </li>

          

          <li>
            <Link
              href="/grifo-nosso"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Grifo Nosso
            </Link>
          </li>

           {/* Som Submenu (Mobile) */}
          

          <li>
            <Link
              href="/sobre-mim"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Sobre Mim
            </Link>
          </li>

              
              <li>
            <button
              className="w-full flex justify-between items-center hover:text-blue-600"
              onClick={() => setSomSubmenuOpen(!somSubmenuOpen)}
            >
              <span>Som</span>
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform ${
                  somSubmenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`pl-4 mt-2 space-y-2 text-sm text-gray-600 transition-all duration-300 ${
                somSubmenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              } `}
            >
              {somSubItems.map((item, index) => (
                <SubMenuMobile
                  key={index}
                  url={item.url}
                  label={item.label}
                  isActive={pathname === item.url}
                />
              ))}
            </ul>
          </li>


        </ul>
      </div>
    </nav>
  );
}

// return (
//     <nav className="bg-white border-b border-gray-200 shadow-sm">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold text-blue-600">
//           MySite
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
//           <li>
//             <Link href="/" className="hover:text-blue-600 transition">
//               Home
//             </Link>
//           </li>

//           {/* Products Dropdown */}
//           <li className="relative group">
//             <button className="hover:text-blue-600 transition flex items-center">
//               Products
//               <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
//             </button>

//             <ul className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-md w-32">
//               <li>
//                 <Link
//                   href="/products/color"
//                   className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg"
//                 >
//                   Color
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/products/size"
//                   className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg"
//                 >
//                   Size
//                 </Link>
//               </li>
//             </ul>
//           </li>

//           <li className="relative group">
//             <button
//               className="hover:text-blue-600 transition flex items-center"
//               onClick={() => setSubmenuOpen(!submenuOpen)}
//             >
//               Products
//               <ChevronDown
//                 className={`w-4 h-4 ml-1 transition-transform ${
//                   submenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//             <ul
//               className={`absolute bg-white border border-gray-200 rounded-lg shadow-md mt-2 w-32 ${
//                 submenuOpen ? "max-h-40 " : "max-h-0 opacity-0"
//               } `}
//             >
//               <li>
//                 <Link
//                   href="/products/color"
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg"
//                 >
//                   Color
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/products/size"
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg"
//                 >
//                   Size
//                 </Link>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <Link href="/contact" className="hover:text-blue-600 transition">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Hamburger Button */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
//           menuOpen ? "max-h-96" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
//           <li>
//             <Link
//               href="/"
//               onClick={() => setMenuOpen(false)}
//               className="block hover:text-blue-600"
//             >
//               Home
//             </Link>
//           </li>

//           {/* Products Submenu (Mobile) */}
//           <li>
//             <button
//               className="w-full flex justify-between items-center hover:text-blue-600"
//               onClick={() => setSubmenuOpen(!submenuOpen)}
//             >
//               <span>Products</span>
//               <ChevronDown
//                 className={`w-4 h-4 ml-1 transition-transform ${
//                   submenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//             <ul
//               className={`pl-4 mt-2 space-y-2 text-sm text-gray-600 transition-all duration-300 ${
//                 submenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//               } `}
//             >
//               <li>
//                 <Link
//                   href="/products/color"
//                   onClick={() => setMenuOpen(false)}
//                   className="block hover:text-blue-600"
//                 >
//                   Color
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/products/size"
//                   onClick={() => setMenuOpen(false)}
//                   className="block hover:text-blue-600"
//                 >
//                   Size
//                 </Link>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <Link
//               href="/contact"
//               onClick={() => setMenuOpen(false)}
//               className="block hover:text-blue-600"
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
