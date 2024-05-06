import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";

function Header() {
  const [toggleMenu, setToggleMenu] = useState<Boolean>(false);
  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-black text-xl" href="#">
        Jathurshan
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white text-xl">
          <li className="px-3">
            <a href="/">Home</a>
          </li>
          <li className="px-3">
            <a href="#about">About</a>
          </li>
          <li className="px-3">
            <a href="#projects">Projects</a>
          </li>
          <li className="px-3">
            <a href="#resume">Resume</a>
          </li>
          <li className="px-3">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden">
          <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li className="px-3">
              <a href="/">Home</a>
            </li>
            <li className="px-3">
              <a href="#about">About</a>
            </li>
            <li className="px-3">
              <a href="#projects">Projects</a>
            </li>
            <li className="px-3">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}

export default Header;
