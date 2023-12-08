'use client';

import Link from "next/link";
import {useContext, useState} from "react";
import CartWidget from "@/components/ui/CartWidget";
import {useParams} from "next/navigation";
import CartContext from "@/context/cartContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const {totalItems} = useContext(CartContext);
  const {category} = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen((prevState) => !prevState);
  }
  return (
    <>
      {menuOpen ? <div className={`z-50 fixed w-full h-full`} onClick={handleMenuOpen} /> : <div />}
      <motion.nav
        className="sticky top-0 z-50 bg-gradient-to-b from-gray-800 to-gray-900 drop-shadow-lg text-gray-50"
      >
        <div className="flex px-8 py-6 justify-between items-start mx-auto max-w-3xl">
          <Link className={'font-extrabold font-mono'} href={'/'} scroll={false}>Coderstore</Link>
          {(totalItems > 0) && <Link href={`/cart`} scroll={false}><CartWidget quantity={totalItems} /></Link>}
          <div className={`flex flex-col items-end justify-normal`}>
            <button className={`${menuOpen ? 'mb-16 mt-3' : ''} md:hidden`} onClick={handleMenuOpen}>
              <div className={`transition-all ${menuOpen ? 'space-y-0' : 'space-y-2'}`}>
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen ? 'rotate-45' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen ? 'translate-x-100 hidden' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
              </div>
            </button>
            <ul className={`${menuOpen ? 'flex flex-col' : 'hidden'} md:flex md:flex-row gap-8`}>
              <li className={`${(category === 'artigos') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}><Link href={'/artigos'} scroll={false}>Artigos</Link></li>
              <li className={`${(category === 'livros') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}><Link href={'/livros'} scroll={false}>Livros</Link></li>
              <li className={`${(category === 'videos') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}><Link href={'/videos'} scroll={false}>Vídeos</Link></li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
