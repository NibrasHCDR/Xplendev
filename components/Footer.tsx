'use client'
import Link from 'next/link'
import React from 'react'
import Map from '../components/Map'
import { IoLogoWhatsapp, IoMdMail, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="w-full h-[450px] max-h-[429px] bg-center bg-cover fondo-img5 bg-fixed z-0">

      <div className="w-auto h-auto bg-black/50 max-h-[450px]">
        <div className="flex h-full w-full bg-black/50 justify-between max-h-[440px]">
          <div className="block h-full w-full">
            <div className="xl:px-28 xl:pt-8 p-4 space-y-2">
               <h1 className="xl:text-4xl text-blue-400 no-select">Acerca de nosotros</h1>
               <h2 className="xl:text-md text-white">XplenDev, Liderado por Luis Rivera Araya, creamos sitios web excepcionales para llevar su presencia en línea al éxito.</h2>
               <h1 className="xl:text-4xl xl:pt-8 text-[#ED1FE8] no-select">Contáctanos</h1>
               <div className="flex space-y-2">
               <IoLogoWhatsapp size={28} className="text-green-400 transition-all hover:scale-110"/> <h1 className="xl:text-md mx-2 text-white cursor-default">+569 40898950</h1>
               </div>
               <div className="flex">
               <IoMdMail size={28} className="text-white transition-all hover:scale-110"/> <h1 className="xl:text-md mx-2 text-white cursor-default">xplendevelopers.cl</h1>
               </div>
            </div>
          </div>

          <div className="block h-full w-full text-center max-h-[450px]">
          <div className="xl:px-32 xl:pt-8 p-4 space-y-2 no-select">
               <h1 className="xl:text-4xl text-blue-400">Información</h1>
               <div className="h-auto w-[210px] mx-auto">
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
          <div className="block h-full w-full max-h-[450px]">
          <div className="xl:px-28 xl:pt-8 p-4 space-y-2">
               <h1 className="xl:text-4xl text-blue-400 no-select">Encuéntranos</h1>
                <div>
                <Map className="map-container" />
                </div>
               
            </div>
          </div>
        </div>
        <div className="h-auto w-auto xl:mx-24 shadow-xl border-t-4 border-white max-h-[450px]">
          <div className="flex text-center justify-center xl:pt-6 p-2 space-x-2 max-h-[450px]">
            <Link href={'https://web.facebook.com/TeckwareRegiones'}>
               <IoLogoFacebook size={35} className="text-white transition-all hover:scale-110"/>
            </Link>
            <Link href={'https://www.instagram.com/teckware.regiones/?hl=es'}>
               <IoLogoInstagram size={35} className="text-white transition-all hover:scale-110"/>
            </Link>
          </div>
          <div className="block text-center pt-2 max-h-[450px]">
            <h1 className="text-white">© 2023 XplenDev | Code By Luis Rivera Araya</h1>

          </div>
        </div>
    </div>

    </div>
  )
}