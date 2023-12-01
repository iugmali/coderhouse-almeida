'use client';

import Link from "next/link";
import {useState} from "react";
import CartWidget from "@/components/ui/CartWidget";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen((prevState) => !prevState);
  }
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-gray-800 to-gray-900 drop-shadow-lg text-gray-50">
      <div className="flex px-8 py-6 justify-between items-start mx-auto max-w-3xl">
        <Link className={'font-extrabold font-mono'} href={'/'}>Coderstore</Link>
        <CartWidget quantity={3}/>
        <div className={`flex flex-col items-end justify-normal`}>
          <button className={`${menuOpen ? 'mb-16 mt-3' : ''} md:hidden`} onClick={handleMenuOpen}>
            <div className={`transition-all ${menuOpen ? 'space-y-0' : 'space-y-2'}`}>
              <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen ? 'rotate-45' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen ? 'translate-x-100 hidden' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
            </div>
          </button>
          <ul className={`${menuOpen ? 'flex flex-col' : 'hidden'} md:flex md:flex-row gap-8`}>
            <li className="hover:opacity-50 active:text-blue-400"><Link href={'/artigos'}>Artigos</Link></li>
            <li className="hover:opacity-50 active:text-blue-400"><Link href={'/livros'}>Livros</Link></li>
            <li className="hover:opacity-50 active:text-blue-400"><Link href={'/videos'}>Vídeos</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
