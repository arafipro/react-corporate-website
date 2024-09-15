"use client";

import { useState } from "react";
import MenuLink from "./ui/menu-link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-20 flex justify-between items-center fixed top-0 left-0 right-0">
      <div className="w-48 flex justify-end items-end">
        <a href="#">
          <img src="/logo.svg" alt="logo" width="100" height="100" />
        </a>
      </div>
      <button
        className="lg:hidden z-10 mr-8 text-3xl flex justify-center items-center h-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
      <ul
        className={`lg:flex ${
          isMenuOpen ? "flex text-center text-xl" : "hidden"
        } flex-col lg:flex-row absolute lg:relative top-20 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent`}
      >
        <li className="p-4">
          <MenuLink href="#">NEWS</MenuLink>
        </li>
        <li className="p-4">
          <MenuLink href="#">ABOUT</MenuLink>
        </li>
        <li className="p-4">
          <MenuLink href="#">BUSINESS</MenuLink>
        </li>
        <li className="p-4">
          <MenuLink href="#">COMPANY</MenuLink>
        </li>
      </ul>
      <a
        href="#"
        className="hidden lg:flex justify-center items-center bg-black text-white w-52 h-full hover:bg-gray-700"
      >
        お問い合わせ
      </a>
    </header>
  );
}
