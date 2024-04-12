import Link from "next/link";
import {useCartStoreHydrate} from "@/store/useCartStoreHydrate";

type Props = {
  category: string|string[];
}

const MenuButton = ({category}: Props) => {
  return (
    <button className={`group p-3 mx-2 md:hidden`} tabIndex={0}>
      <div className={`transition-all space-y-2 group-focus-within:space-y-0 group-focus-within:space-x-3`}>
        <span className={`block w-6 h-0.5 bg-gray-300 transition-all group-focus-within:rotate-[60deg]`}></span>
        <span
          className={`block w-6 h-0.5 bg-gray-300 transition-all group-focus-within:translate-x-100 group-focus-within:hidden`}></span>
        <span
          className={`block w-6 h-0.5 bg-gray-300 transition-all group-focus-within:-rotate-[60deg] group-focus-within:-translate-y-0.5`}></span>
      </div>
      <div
        className={`z-50 hidden group-focus-within:block md:group-focus-within:hidden absolute right-[74px] top-[100px] w-40 px-8 py-4 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg text-gray-50 rounded-2xl`}>
        <ul className={`flex flex-col items-center gap-8`}>
          <li
            className={`${(category === 'linguagens') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}>
            <Link href={'/linguagens'} scroll={false}>Linguagens</Link>
          </li>
          <li
            className={`${(category === 'bibliotecas') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}>
            <Link href={'/bibliotecas'} scroll={false}>Bibliotecas</Link>
          </li>
          <li
            className={`${(category === 'frameworks') ? 'text-blue-400' : ''} hover:opacity-50 active:text-blue-400`}>
            <Link href={'/frameworks'} scroll={false}>Frameworks</Link>
          </li>
        </ul>
      </div>
    </button>
  )
}

export default MenuButton;
