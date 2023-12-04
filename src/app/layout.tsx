import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React, {Suspense} from "react";
import Navbar from "@/components/Navbar";
import Loading from "@/app/loading";
import {CartContextProvider} from "@/context/cartContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coderstore Almeida',
  description: 'Criado para o curso da Coderhouse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`min-h-screen bg-gray-50 ${inter.className}`}>
        <CartContextProvider>
          <Navbar />
          {children}
        </CartContextProvider>
      </body>
    </html>
  )
}
