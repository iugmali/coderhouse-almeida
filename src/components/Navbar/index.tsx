'use client';

import Link from "next/link";
import {useState} from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen((prevState) => !prevState);
  }
  return (
    <nav className="bg-gradient-to-b from-gray-800 to-gray-900 drop-shadow-lg">
      <div className="flex px-8 py-6 justify-between items-start mx-auto max-w-3xl">
        <Link className={'font-extrabold font-mono'} href={'/'}>Coderstore</Link>
        <div className={`flex flex-col items-end justify-normal`}>
          <button className={`${menuOpen && 'mb-16 mt-3'} md:hidden`} onClick={handleMenuOpen}>
            <div className={`transition-all ${menuOpen ? 'space-y-0' : 'space-y-2'}`}>
              <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen && 'rotate-45'}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen && 'translate-x-100 hidden'}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen && '-rotate-45 -translate-y-0.5'}`}></span>
            </div>
          </button>
          <ul className={`${menuOpen ? 'flex flex-col' : 'hidden'} md:flex md:flex-row gap-8`}>
            <li className="hover:text-gray-500 active:text-blue-400"><Link href={'/artigos'}>Artigos</Link></li>
            <li className="hover:text-gray-500 active:text-blue-400"><Link href={'/livros'}>Livros</Link></li>
            <li className="hover:text-gray-500 active:text-blue-400"><Link href={'/videos'}>Vídeos</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
