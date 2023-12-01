'use client';

import Button from "@/components/ui/Button";
import {useRouter} from "next/navigation";

const CartContainer = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  }

  return (
    <main className={`flex flex-col mt-4`}>
      <p className={`text-center`}>Este é o seu carrinho</p>
      <Button className={`mt-4 bg-green-800 mx-auto`} handleClick={goBack}>Voltar</Button>
    </main>
  )
}

export default CartContainer;
