import Link from "next/link";
import {auth} from "@/lib/auth";
import {TextButton} from "@/components/ui/Button";
import {montserrat} from "@/app/fonts";

const ProfilePage = async () => {
  const session = await auth();

  return (
    <main className={`w-full flex flex-col items-center gap-8 mt-4`}>
      <h1 className={`${montserrat.className} text-center`}>Olá, {session?.user!.name}! Bem vindo!</h1>
      <Link href={'/profile/orders'}><TextButton className={`w-60 rounded-3xl border border-gray-950`}>Ver meus pedidos</TextButton></Link>
      <Link href={'/profile/edit'}><TextButton className={`w-60 rounded-3xl border border-gray-950`}>Alterar meus dados</TextButton></Link>
    </main>
  )
}

export default ProfilePage;
