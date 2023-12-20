import {NextAuthConfig} from "next-auth";

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   else if (new URL(url).origin === baseUrl) return url
    //   return baseUrl
    // },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProfile = nextUrl.pathname.startsWith('/profile');
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      if (isOnProfile) {
        return isLoggedIn;
      } else if (isOnLogin && isLoggedIn) {
        return Response.redirect(new URL('/profile', nextUrl));
      }
      return true;
    },
    // session({ session, token, user }) {
    //   return session
    // },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
