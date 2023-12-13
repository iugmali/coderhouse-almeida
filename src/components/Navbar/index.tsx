'use client';

import Link from "next/link";
import {useContext} from "react";
import CartWidget from "@/components/ui/CartWidget";
import {useParams} from "next/navigation";
import CartContext from "@/context/cartContext";
import {jetBrainsMono} from "@/app/fonts";
import {UserIcon} from "@heroicons/react/24/outline";

const Navbar = () => {
  const {totalItems} = useContext(CartContext);
  const {category} = useParams();
  return (
      <nav
        className="sticky top-0 z-50 bg-gradient-to-b from-gray-800 to-gray-900 drop-shadow-lg text-gray-50"
      >
        <div className="flex px-8 py-6 justify-between items-center mx-auto max-w-3xl">
          <Link className={`${jetBrainsMono.className} font-extrabold p-3`} href={'/'} scroll={false}>Coderstore</Link>
          <ul className={`hidden p-3 md:flex md:flex-row gap-8`}>
            <li
              className={`${(category === 'artigos') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}>
              <Link href={'/artigos'} scroll={false}> Artigos</Link>
            </li>
            <li className={`${(category === 'livros') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}>
              <Link href={'/livros'} scroll={false}>Livros</Link></li>
            <li className={`${(category === 'videos') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}>
              <Link href={'/videos'} scroll={false}>Vídeos</Link></li>
          </ul>
          <div className={`flex justify-end`}>
            <button className={`group p-3 mx-2 md:hidden`}>
              <div className={`transition-all space-y-2 group-focus-within:space-y-0`}>
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all group-focus-within:rotate-45`}></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-300 transition-all group-focus-within:translate-x-100 group-focus-within:hidden`}></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-300 transition-all group-focus-within:-rotate-45 group-focus-within:-translate-y-0.5`}></span>
              </div>
              <div
                className={`z-50 hidden group-focus-within:block md:group-focus-within:hidden absolute right-24 top-[100px] w-40 px-8 py-4 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg text-gray-50 rounded-2xl`}>
                <ul className={`flex flex-col items-center gap-8`}>
                  <li
                    className={`${(category === 'artigos') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}>
                    <Link href={'/artigos'} scroll={false}> Artigos</Link>
                  </li>
                  <li
                    className={`${(category === 'livros') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}>
                    <Link href={'/livros'} scroll={false}>Livros</Link></li>
                  <li
                    className={`${(category === 'videos') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}>
                    <Link href={'/videos'} scroll={false}>Vídeos</Link></li>
                </ul>
              </div>
            </button>
            <button className={`group p-3 mx-1 relative`}>
              <UserIcon className={`w-6 h-6`}/>
              <div
                className={`z-50 hidden group-focus-within:block absolute -right-10 top-[76px] w-40 px-8 py-4 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg text-gray-50 rounded-2xl`}>
                <ul className={`flex flex-col items-center gap-8`}>
                  <li
                    className={`hover:opacity-50 active:text-blue-400`}>
                    <Link href={'#'} scroll={false}>Entrar</Link>
                  </li>
                </ul>
              </div>
            </button>
            <Link className={`mt-1 p-3`} href={`/cart`} scroll={false}><CartWidget quantity={totalItems}/></Link>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
