import Link from "next/link";
import { useState } from "react";


export interface NavItemInterface {
  url: string;
  label: string;
  isActive?: boolean;
}

export const items: NavItemInterface[] = [
  {
    url: "/grifo-nosso",
    label: "Grifo Nosso",
  },
  {
    url: "/sobre-mim",
    label: "Sobre Mim",
  },
];

export const textosSubItems: NavItemInterface[] = [
  {
    url: "/apresentacao",
    label: "Apresentação",
  },
  {
    url: "/ficcao",
    label: "Ficção",
  },
  {
    url: "/filosofia",
    label: "Filosofia",
  },
  {
    url: "/contribuicoes",
    label: "Contribuições",
  },
];

export const somSubItems: NavItemInterface[] = [
  {
    url: "/menos-depois",
    label: "Menos Depois",
  },
  {
    url: "/axaxaxas-mlo",
    label: "Axaxaxas-mlö",
  },
];

export default function NavItem(props: NavItemInterface) {
  return (
    <>
      <li>
        <Link
          href={props.url}
          className={`hover:text-blue-600 transition ${
            props.isActive ? "border-b border-red-500" : ""
          }`}
        >
          {props.label}
        </Link>
      </li>
    </>
  );
}

export function SubMenu(props: NavItemInterface) {
  return (
    <li>
      <Link
        href={props.url}
        className={`block px-4 py-2 hover:bg-gray-100 rounded-t-lg ${
          props.isActive ? "border-b border-red-500" : ""
        }`}
      >
        {props.label}
      </Link>
    </li>
  );
}

export function SubMenuMobile(props: NavItemInterface) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <li>
      <Link
        href={props.url}
        onClick={() => setMenuOpen(false)}
        className={`block hover:text-blue-600 ${
          props.isActive ? "border-b border-red-500" : ""
        }`}
      >
        {props.label}
      </Link>
    </li>
  );
}
