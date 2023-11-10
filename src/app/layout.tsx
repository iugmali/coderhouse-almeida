import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";
import DefaultPage from "@/components/DefaultPage";

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
      <body className={inter.className}>
        <DefaultPage>
          {children}
        </DefaultPage>
      </body>
    </html>
  )
}
