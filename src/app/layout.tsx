import type { Metadata } from 'next'
import './globals.css'
import React from "react";
import Navbar from "@/components/Navbar";
import {CartContextProvider} from "@/context/cartContext";
import {inter} from "@/app/fonts";


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
      <body className={`min-h-screen bg-gray-50 ${inter.className} antialiased`}>
        <CartContextProvider>
          <Navbar />
          {children}
        </CartContextProvider>
      </body>
    </html>
  )
}
