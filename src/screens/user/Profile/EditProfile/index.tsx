import Link from "next/link";
import {LinkButton} from "@/components/ui/Button";

const EditProfileScreen = () => {
  return (
    <main className={`w-full flex flex-col items-center gap-8 mt-4`}>
      <h1 className={`text-center`}>Funcionalidade de Editar perfil ainda não implementada.</h1>
      <LinkButton className={`w-60`} href={'/profile/'}>Voltar</LinkButton>
    </main>
  )
}

export default EditProfileScreen;
