import 'server-only';

import {TUser} from "@/types/user";
import {db, storage} from "@/lib/firebase/config";
import {getDownloadURL} from "firebase-admin/storage";
import {firestoreAutoId} from "@/lib/util";
import {unstable_noStore as noStore} from "next/dist/server/web/spec-extension/unstable-no-store";

export const createUser = async (user: Omit<TUser, "id" | "role" | "createdAt">) => {
  const id = firestoreAutoId()
  try {
    await db.collection('users').doc(id).set({
      ...user,
      role: 'user',
      createdAt: new Date()
    }).then((data) => {
      console.log(`Usuário ${id} criado.`)
    });
  } catch (e) {
    throw e;
  }
}

export const fetchUser = async (email: string): Promise<TUser | null> => {
  noStore();
  const user = await db.collection('users').where("email", "==", email).limit(1).get();
  if (user.empty) return null;
  return {...user.docs[0].data() as TUser,id: user.docs[0].id};
}

export const fetchUserImageURLFromStorage = async (userId: string, imageFile: string) => {
  noStore();
  return await getDownloadURL(storage.bucket().file(`images/users/${userId}/${imageFile}`));
}
