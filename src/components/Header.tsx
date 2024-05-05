import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";

function Header() {
  const [toggleMenu, setToggleMenu] = useState<Boolean>(false);
  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-black" href="#">
        Jathurshan
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li className="px-3">
            <a href="#">Home</a>
          </li>
          <li className="px-3">
            <a href="#">About</a>
          </li>
          <li className="px-3">
            <a href="#">Projects</a>
          </li>
          <li className="px-3">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden">
          <ul className="flex flex-col text-white mobile-nav">
            <li className="px-3">
              <a href="#">Home</a>
            </li>
            <li className="px-3">
              <a href="#">About</a>
            </li>
            <li className="px-3">
              <a href="#">Projects</a>
            </li>
            <li className="px-3">
              <a href="#">Contact</a>
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
