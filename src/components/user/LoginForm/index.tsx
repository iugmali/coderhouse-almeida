'use client'

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import {useFormState, useFormStatus} from "react-dom";
import Spinner from "@/components/ui/Spinner";
import Button from "@/components/ui/Button";
import {jetBrainsMono, montserrat} from "@/app/fonts";


export default function LoginForm({login}: any) { // o type precisa ser any enquanto nao resolvem o bug das server actions com firebase-admin, que só podem ser passados por props não tipadas
  const initialState = {message: null};
  const [state, dispatch] = useFormState(login, initialState)

  return (
    <form action={dispatch} className={`flex flex-col items-center w-full`}>
      <div className="flex-1 px-6 pb-4 w-full md:w-1/2">
        <div className="w-full">
          <div>
            <label
              className={`${montserrat.className} text-sm md:text-base`}
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="email"
                type="email"
                name="email"
                placeholder="Digite aqui seu endereço de e-mail"
                autoComplete={`username`}
                required
              />
              <AtSymbolIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
          </div>
          <div className="mt-4">
            <label
              className={`${montserrat.className} text-sm md:text-base`}
              htmlFor="password"
            >
              Senha
            </label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="password"
                type="password"
                name="password"
                placeholder="Digite aqui sua senha"
                autoComplete={`current-password`}
                required
                minLength={6}
              />
              <KeyIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
          </div>
        </div>
        <LoginButton/>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {state && state.message && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500"/>
              <p className="text-sm text-red-500">{state.message}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className="rounded-3xl py-4 px-4 mt-4 w-full flex justify-evenly items-center" aria-disabled={pending} disabled={pending}>
      {pending ? <><p className={`${montserrat.className}`}>Verificando...</p><Spinner className={'h-5 w-5 border border-r-white border-b-white'}/></> : <p className={`${montserrat.className}`}>Entrar</p>}
    </Button>
  );
}
