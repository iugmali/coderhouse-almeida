'use client';

import Link from "next/link";
import CartWidget from "@/components/ui/CartWidget";
import {useParams} from "next/navigation";
import {jetBrainsMono} from "@/app/fonts";
import {UserIcon as UserIconOutLine} from "@heroicons/react/24/outline";
import {UserIcon as UserIconSolid} from "@heroicons/react/24/solid";
import {useFormStatus} from "react-dom";
import Spinner from "@/components/ui/Spinner";
import {Session} from "next-auth";
import MenuButton from "@/components/ui/MenuButton";
import {useCartStoreHydrate} from "@/store/useCartStoreHydrate";

type Props = {
  logout: () => Promise<void>
  session: Session | null
}

const Navbar = ({logout, session}:Props) => {
  const {category} = useParams();

  return (
      <nav
        className="sticky top-0 z-50 bg-gradient-to-b from-gray-800 to-gray-900 drop-shadow-lg text-gray-50"
      >
        <div className="flex px-8 py-6 justify-between items-center mx-auto max-w-3xl">
          <div className={`relative`}>
            <div className={`group rounded-3xl shadow-sm shadow-amber-50 transition-all hover:shadow-lg hover:shadow-amber-50 px-2`}>
              <Link className={`${jetBrainsMono.className} font-extrabold text-xl p-3`} href={'/'} scroll={false}>Coderstore</Link>
            </div>
          </div>
          <ul className={`hidden p-3 md:flex md:flex-row gap-8`}>
            <li
              className={`${jetBrainsMono.className} ${(category === 'linguagens') ? 'text-blue-400' : ''} flex-1 font-medium text-sm hover:opacity-50 active:text-blue-400`}>
              <Link href={'/linguagens'} scroll={false}>Linguagens</Link>
            </li>
            <li
              className={`${jetBrainsMono.className} ${(category === 'bibliotecas') ? 'text-blue-400' : ''} flex-1 font-medium text-sm hover:opacity-50 active:text-blue-400`}>
              <Link href={'/bibliotecas'} scroll={false}>Bibliotecas</Link>
            </li>
            <li
              className={`${jetBrainsMono.className} ${(category === 'frameworks') ? 'text-blue-400' : ''} flex-1 font-medium text-sm hover:opacity-50 active:text-blue-400`}>
              <Link href={'/frameworks'} scroll={false}>Frameworks</Link>
            </li>
          </ul>
          <div className={`flex justify-end`}>
            { useCartStoreHydrate() &&
              <>
                <MenuButton category={category} />
                <div className={`group p-3 mx-1 relative hover:cursor-pointer`} tabIndex={0}>
                  {(session && session.user) ? (
                    <UserIconSolid className={`absolute w-6 h-6 top-4 left-0 hover:opacity-50`}/>
                  ) : (
                    <UserIconOutLine className={`absolute w-6 h-6 top-4 left-0 hover:opacity-50`}/>
                  )}
                  <div
                    className={`z-50 hidden group-focus-within:block absolute -right-[68px] top-[76px] w-40 px-8 py-4 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg text-gray-50 rounded-2xl`}>
                    <ul className={`flex flex-col items-center gap-8`}>
                      {(session && session.user) ? (
                          <>
                            <li
                              className={`hover:opacity-50 active:text-blue-400`}>
                              <Link href={'/profile'} scroll={false}>Meu perfil</Link>
                            </li>
                            <li
                              className={`hover:opacity-50 active:text-blue-400`}>
                              <form action={logout}>
                                <LogoutButton />
                              </form>
                            </li>
                          </>
                        )
                        :
                        <li
                          className={`hover:opacity-50 active:text-blue-400`}>
                          <Link href={'/login'} scroll={false}>Entrar</Link>
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                <Link className={`mt-1 p-3`} href={`/cart`} scroll={false}><CartWidget /></Link>
              </>
            }
          </div>
        </div>
      </nav>
  );
}

const LogoutButton = () => {
  const { pending } = useFormStatus();
  return (
    <button aria-disabled={pending} disabled={pending}>
      {pending ? <span className={`flex justify-center`}><p>Saindo...</p><Spinner className={'h-5 w-5 border border-r-white border-b-white'}/></span> : <span>Sair</span>}
    </button>
  );
}

export default Navbar;
