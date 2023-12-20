import { NextResponse } from "next/server";
import {auth} from "@/lib/auth";
import {fetchUser, fetchUserImageURLFromStorage} from "@/lib/firebase/data/users";

export const GET = auth(async function GET(req) {
  if (req.auth?.user) {
    const user = await fetchUser(req.auth.user.email as string);
    if (user && user.image) {
      try {
        const imageUrl = await fetchUserImageURLFromStorage(user.id, user.image);
        const response = await fetch(imageUrl);
        return new Response(response.body, {headers: response.headers})
      } catch (e) {
        return NextResponse.json({ message: "Imagem de usuário não encontrada." }, { status: 404 });
      }
    } else {
      return NextResponse.json({ message: "Imagem não encontrada." }, { status: 404 });
    }
  }
  return NextResponse.json({ message: "Não autenticado." }, { status: 401 });
}) as any // hack to workaround protected route auth type error
