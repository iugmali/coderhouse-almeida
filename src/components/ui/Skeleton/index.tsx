import Image from "next/image";
import {jetBrainsMono} from "@/app/fonts";

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

const ItemSkeleton = () => {
  return (
    <article
      className={`group rounded-3xl justify-self-center w-[288px] h-[350px] text-gray-950 shadow-sm hover:shadow-2xl flex flex-col justify-center items-center relative`}>
      <div className={`${shimmer} overflow-hidden relative h-[200px] w-[200px] bg-gray-100 rounded-3xl drop-shadow-sm`}>
        <Image className={`object-contain opacity-20`}
               src={"/image-placeholder.png"} alt={"produto sendo carregado..."} fill={true}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={`${shimmer} overflow-hidden relative w-60 bg-gray-100 h-6 mt-4 text-center text-xl py-2 rounded-3xl`} />
    </article>
  );
}

export const ItemListSkeleton = () => {
  return (
    <main className={`flex flex-col mt-4 mb-4`}>
      <h1 className={`${jetBrainsMono.className} text-center text-gray-600 text-sm md:text-base`}>Carregando...</h1>
      <section className={`flex-1 grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 mx-auto`}>
        <ItemSkeleton/>
        <ItemSkeleton/>
        <ItemSkeleton/>
        <ItemSkeleton/>
        <ItemSkeleton/>
        <ItemSkeleton/>
      </section>
    </main>

  );
}
