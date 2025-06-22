import Link from "next/link";
import {TextButton} from "@/components/ui/Button";
import {ItemSkeleton} from "@/components/ui/Skeleton";

const EditProfilePage = () => {
  return (
    <main className={`w-full flex flex-col items-center gap-8 mt-4`}>
      <ItemSkeleton />
      <Link href={'/profile/'}><TextButton className={`w-60 rounded-3xl border border-gray-950`}>Voltar</TextButton></Link>
    </main>
  )
}

export default EditProfilePage;
