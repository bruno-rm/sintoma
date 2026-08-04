"use client"

import React, { useState } from 'react';
//import { Link } from 'react-router-dom'; // Assuming you're using React Router
import Link from "next/link";

interface SubMenuItem {
  title: string;
  path: string;
}

interface MenuItem {
  title: string;
  path: string;
  submenu?: SubMenuItem[];
}

interface NavItemProps {
  item: MenuItem;
}


function NavItem({ item }: NavItemProps) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMouseEnter = () => {
    if (item.submenu) {
      setShowSubmenu(true);
    }
  };

  const handleMouseLeave = () => {
    if (item.submenu) {
      setShowSubmenu(false);
    }
  };

  return (
    <li className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href={item.path}>{item.title}</Link>
      {item.submenu && showSubmenu && (
        <ul className="submenu">
          {item.submenu.map((subItem, index) => (
            <li key={index} className="submenu-item">
              <Link href={subItem.path}>{subItem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavItem;