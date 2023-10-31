import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import Image from 'next/image'
import myImage from '../../../public/icons/sitewizardicon-75x75.png'
import Link from 'next/link'
import SideBar from '../../../components/siteWizardComponents/SideBar'

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
      <head>
      <title>SiteWizard</title>
      </head>
      <body className="flex relative">
      <header>
      <SideBar/>
      </header>
      

        <div className="flex">
        {children}
        </div>
      </body>
    </html>
    </>
  )
}
