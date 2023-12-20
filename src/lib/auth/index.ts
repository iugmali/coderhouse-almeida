import Credentials from "@auth/core/providers/credentials";
import bcrypt from 'bcrypt';
import {z} from "zod";
import NextAuth from "next-auth"
import {authConfig} from "@/lib/auth/config";
import {fetchUser} from "@/lib/firebase/data/users";
import {LoginFormSchema} from "@/lib/zod/schemas";


export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = LoginFormSchema.safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await fetchUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ]
});
