import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'XplenDev',
  description: '© 2023 XplenDev | Code By Luis Rivera Araya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
    <title>XplenDev</title>
      <body className={inter.className}>{children}
      </body>
    </html>
    </>
  )
}
