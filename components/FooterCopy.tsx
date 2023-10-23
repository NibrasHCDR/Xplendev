'use client'
import Link from 'next/link'
import React from 'react'
import Map from './Map'
import { IoLogoWhatsapp, IoMdMail, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="bg-center bg-cover bg-fixed fondo-img5 z-0">
      <div className="bg-black/50">
        <div className="flex flex-col md:flex-row h-full w-full justify-between max-h-screen overflow-x-hidden">
          <div className="block w-full">
            <div className="xl:px-28 xl:pt-8 p-4 space-y-2">
               <h1 className="xl:text-4xl text-blue-400 no-select">Acerca de nosotros</h1>
               <h2 className="xl:text-md text-white">XplenDev, Liderado por Luis Rivera Araya, creamos sitios web excepcionales para llevar su presencia en línea al éxito.</h2>
               <h1 className="xl:text-4xl xl:pt-8 text-[#ED1FE8] no-select">Contáctanos</h1>
               <div className="flex space-y-2">
                 <IoLogoWhatsapp size={28} className="text-green-400 transition-all hover:scale-110"/>
                 <h1 className="xl:text-md mx-2 text-white cursor-default">+569 40898950</h1>
               </div>
               <div className="flex">
                 <IoMdMail size={28} className="text-white transition-all hover:scale-110"/>
                 <h1 className="xl:text-md mx-2 text-white cursor-default">xplendevelopers.cl</h1>
               </div>
            </div>
          </div>

          <div className="w-full mx-auto">
            <div className="xl:px-32 xl:pt-8 p-4 space-y-2 no-select xl:text-center">
               <h1 className="xl:text-4xl text-blue-400">Información</h1>
               <div className="h-auto w-[210px] xl:mx-auto xl:text-center lg:text-center md:text-center text-start">
                <Link href={''} className="">
                 <h2 className="xl:text-md text-white py-1 transition-all hover:scale-105 border-b border-transparent hover:border-blue-500 hover:text-blue-500">Acerca de nosotros</h2>
                </Link>
                <Link href={''}>
                 <h2 className="xl:text-md text-white py-1 transition-all hover:scale-105 border-b border-transparent hover:border-blue-500 hover:text-blue-500">Más información</h2>
                </Link>
                <Link href={''}>
                 <h2 className="xl:text-md text-white py-1 transition-all hover:scale-105 border-b border-transparent hover:border-blue-500 hover:text-blue-500">Nuestras Páginas</h2>
                </Link>
                <Link href={''}>
                 <h2 className="xl:text-md text-white py-1 transition-all hover:scale-105 border-b border-transparent hover:border-blue-500 hover:text-blue-500">Términos & Condiciones</h2>
                </Link>
               </div>
            </div>
          </div>

          <div className="w-full">
            <div className="xl:px-28 xl:pt-8 p-4 space-y-2">
               <h1 className="xl:text-4xl text-blue-400 no-select">Encuéntranos</h1>
               <div className="w-auto h-auto">
                 <Map className="h-[50px] w-[50px] hidden md:inline-flex" />
               </div>
            </div>
          </div>
        </div>
        <div className="h-auto w-auto xl:mx-24 shadow-xl border-t-4 border-white">
          <div className="flex md:flex-row flex-col space-x-4 text-center items-center justify-center xl:pt-6 p-2">
            <Link href={'https://web.facebook.com/TeckwareRegiones'}>
               <IoLogoFacebook size={35} className="text-white transition-all hover:scale-110"/>
            </Link>
            <Link href={'https://www.instagram.com/teckware.regiones/?hl=es'} style={{ marginLeft: '-2px' }}>
               <IoLogoInstagram size={36} className="text-white transition-all hover:scale-110 ml-1"/>
            </Link>
          </div>
          <div className="flex flex-col text-center pt-2">
            <h1 className="text-white">© 2023 XplenDev | Code By Luis Rivera Araya</h1>
          </div>
        </div>
      </div>
    </div>
  )
}