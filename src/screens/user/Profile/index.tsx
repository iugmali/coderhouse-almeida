import Link from "next/link";
import {auth} from "@/lib/auth";
import {LinkButton} from "@/components/ui/Button";
import {montserrat} from "@/app/fonts";

const ProfileScreen = async () => {
  const session = await auth();

  return (
    <main className={`w-full flex flex-col items-center gap-8 mt-4`}>
      <h1 className={`${montserrat.className} text-center`}>Olá, {session?.user!.name}! Bem vindo!</h1>
      <LinkButton className={`w-60`} href={'/profile/orders'}>Ver meus pedidos</LinkButton>
      <LinkButton className={`w-60`} href={'/profile/edit'}>Alterar meus dados</LinkButton>
    </main>
  )
}

export default ProfileScreen;
