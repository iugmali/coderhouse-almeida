'use client'

import {useEffect, useState} from "react";
import {TCepData} from "@/types/user";
import {fetchCep, inputMaskCep, inputMaskPhone, maskAddressNumber} from "@/lib/util";
import {useDebounce} from "use-debounce";
import Button, {LinkButton} from "@/components/ui/Button";
import {AtSymbolIcon, KeyIcon, MapPinIcon, PhoneIcon, UserIcon} from "@heroicons/react/24/outline";
import {useFormState, useFormStatus} from "react-dom";
import Spinner from "@/components/ui/Spinner";
import {jetBrainsMono, montserrat} from "@/app/fonts";
import {useCartStore} from "@/store/cart.store";
import {TSignUpFormState} from "@/types/auth";

const SignupForm = ({signUp}: any) => { // o type precisa ser any enquanto nao resolvem o bug das server actions com firebase-admin, que só podem ser passados por props não tipadas

  const initialState: TSignUpFormState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(signUp, initialState)

  const cepDataInitialState = {
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: ''
  }
  const [cep, setCep] = useState('');
  const [debouncedCep] = useDebounce(cep, 300);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cepData, setCepData] = useState<TCepData>(cepDataInitialState)

  const totalItems = useCartStore(state => state.totalItems);

  useEffect(() => {
    const onMount = async () => {
      if (debouncedCep.length === 9) {
        const data = await fetchCep(debouncedCep);
        setCepData(data);
      }
    }
    onMount().catch(e => console.error(e));
  }, [debouncedCep]);

  // Esse código precisa ser passado para clients components que utilizam zustand com persist, para garantir que o zustand rode depois do nextjs hidratar
  const [hasHydrated, setHasHydrated] = useState(false);
  useEffect(() => {
    useCartStore.persist.rehydrate();
    setHasHydrated(true);
  }, []);
  if (!hasHydrated) return null;

  return (totalItems === 0) ? (
    <div className={`flex flex-col gap-4 justify-center items-center`}>
      <p className={`text-center`}>Não existem itens no seu carrinho</p>
      <LinkButton className={`w-60`} href={`/`}>Retornar para a tela inicial</LinkButton>
    </div>
  ) : (
      <form action={dispatch} className={`flex flex-col items-center w-full`}>
        <div className="flex-1 px-6 pb-4 w-full md:w-1/2">
          <h1 className={`${jetBrainsMono.className} text-center text-sm md:text-base`}>Precisamos de alguns dados para
            proceder...</h1>
          <div className={`w-full`}>
            <label className={`${montserrat.className} text-sm md:text-base`} htmlFor={`name`}>Seu Nome</label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="name"
                type="text"
                name="name"
                placeholder="Digite aqui seu nome"
                autoComplete={`name`}
                aria-describedby={`name-error`}
                required
              />
              <UserIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {state.errors?.name &&
                state.errors.name.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className={`w-full`}>
            <label className={`${montserrat.className} text-sm md:text-base`} htmlFor={`email`}>Seu E-mail</label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="email"
                type="email"
                name="email"
                placeholder="Digite aqui seu endereço de e-mail"
                autoComplete={`username`}
                aria-describedby={`email-error`}
                required
              />
              <AtSymbolIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className={`w-full`}>
            <label className={`${montserrat.className} text-sm md:text-base`} htmlFor={`phone`}>Telefone</label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="phone"
                type="text"
                name="phone"
                placeholder="Seu telefone de contato"
                onChange={e => setPhoneNumber(inputMaskPhone(e.target.value))}
                value={phoneNumber}
                aria-describedby={`phone-error`}
                required
              />
              <PhoneIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
            <div id="phone-error" aria-live="polite" aria-atomic="true">
              {state.errors?.phone &&
                state.errors.phone.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className={`w-full`}>
            <label className={`${montserrat.className} text-sm md:text-base`} htmlFor={`cep`}>CEP</label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="cep"
                type="text"
                name="cep"
                placeholder="Seu CEP"
                onChange={e => setCep(inputMaskCep(e.target.value))}
                value={cep}
                autoComplete={`postal-code`}
                aria-describedby={`cep-error`}
                required
              />
              <MapPinIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
            <div id="cep-error" aria-live="polite" aria-atomic="true">
              {state.errors?.cep &&
                state.errors.cep.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className={`w-full`}>
            <label className={`${montserrat.className} text-sm md:text-base`} htmlFor={`endereco`}>Endereço</label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="endereco"
                type="text"
                name="endereco"
                value={`${cepData.logradouro} - ${cepData.complemento}`}
                required
              />
              <MapPinIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
          </div>
          <div className={`w-full`}>
            <label className={`${montserrat.className} text-sm md:text-base`} htmlFor={`number`}>Número</label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="number"
                type="text"
                name="number"
                placeholder="Seu Número"
                onChange={e => e.target.value = maskAddressNumber(e.target.value)}
                autoComplete={`address-line1`}
                aria-describedby={`number-error`}
                required
              />
              <MapPinIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
            <div id="number-error" aria-live="polite" aria-atomic="true">
              {state.errors?.number &&
                state.errors.number.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className={`w-full`}>
            <label className={`${montserrat.className} text-sm md:text-base`}
                   htmlFor={`complement`}>Complemento</label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="complement"
                type="text"
                name="complement"
                placeholder="Seu complemento - apt, bloco"
                autoComplete={`address-line2`}
              />
              <MapPinIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
          </div>
          <div className={`w-full`}>
            <label className={`${montserrat.className} text-sm md:text-base`} htmlFor={`city`}>Cidade</label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="city"
                type="text"
                name="city"
                value={`${cepData.bairro} - ${cepData.localidade}/${cepData.uf}`}
              />
              <MapPinIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
          </div>
          <div className={`w-full`}>
            <label className={`${montserrat.className} text-sm md:text-base`} htmlFor={`password`}>Cadastre uma
              senha</label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="password"
                type="password"
                name="password"
                minLength={6}
                autoComplete="new-password"
                aria-describedby={`password-error`}
                required
              />
              <KeyIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
          </div>
          <div className={`w-full`}>
            <label className={`${montserrat.className} text-sm md:text-base`} htmlFor={`confirmPassword`}>Confirme sua senha</label>
            <div className="relative">
              <input
                className={`${jetBrainsMono.className} peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                id="confirmPassword"
                type="password"
                minLength={6}
                name="confirmPassword"
                autoComplete="new-password"
                aria-describedby={`password-error`}
                required
              />
              <KeyIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
            <div id="number-error" aria-live="polite" aria-atomic="true">
              {state.errors?.password &&
                state.errors.password.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div id="form-error" aria-live="polite" aria-atomic="true">
            {state.message && (
              <p className="mt-2 text-sm text-red-500 text-center">
                {state.message}
              </p>
            )}
          </div>
          <div className={`w-full`}>
            <ProceedButton/>
          </div>
        </div>
      </form>
  )
}

const ProceedButton = () => {
  const {pending} = useFormStatus();
  return (
    <Button className="rounded-3xl py-4 px-4 mt-4 w-full flex justify-evenly" type={`submit`}
            aria-disabled={pending} disabled={pending}>
      {pending ? <><p className={`${montserrat.className}`}>Verificando...</p><Spinner className={'h-5 w-5 border border-r-white border-b-white'}/></> : <p className={`${montserrat.className}`}>Proceder</p>}
    </Button>
  );
}
export default SignupForm;
