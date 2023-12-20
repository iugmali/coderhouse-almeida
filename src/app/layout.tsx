import type { Metadata } from 'next'
import './globals.css'
import React from "react";
import Navbar from "@/components/Navbar";
import {inter} from "@/app/fonts";
import {logout} from "@/lib/actions/auth";
import {auth} from "@/lib/auth";

export const metadata: Metadata = {
  title: 'Coderstore Almeida',
  description: 'Loja virtual onde se encontra de tudo um pouco.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();
  return (
    <html lang="pt-BR">
      <body className={`min-h-screen bg-gray-50 ${inter.className} antialiased`}>
          <Navbar logout={logout} session={session}/>
          {children}
      </body>
    </html>
  )
}
