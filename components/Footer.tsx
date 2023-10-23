'use client'
import Link from 'next/link'
import React from 'react'
import Map from '../components/Map'
import NewMap from "../components/NewMap"
import { IoLogoWhatsapp, IoMdMail, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className=" h-full z-0 w-screen bg-center bg-cover bg-fixed fondo-img5">
      <div className="grid-container h-full w-full bg-black/60 pb-4 p-12">

      
      <div className="footer-1 lg:ml-32 lg:mt-8 ml-1 mt-1 pb-4">

      <h1 className="lg:text-4xl text-blue-400 no-select lg:pb-4">Acerca de nosotros</h1>
               <h2 className="lg:text-md text-white">XplenDev, Liderado por Luis Rivera Araya, creamos sitios web</h2>
               <h2 className="lg:text-md text-white"> excepcionales para llevar su presencia en línea al éxito.</h2>
               <h1 className="lg:text-4xl lg:pt-8 text-[#ED1FE8] no-select lg:pb-4">Contáctanos</h1>
               <div className="flex space-y-2">
                 <IoLogoWhatsapp size={28} className="text-green-400 transition-all hover:scale-110"/>
                 <h1 className="lg:text-md mx-2 text-white cursor-default lg:pb-2">+569 40898950</h1>
               </div>
               <div className="flex">
                 <IoMdMail size={28} className="text-white transition-all hover:scale-110"/>
                 <h1 className="lg:text-md mx-2 text-white cursor-default">xplendevelopers.cl</h1>
               </div>
     </div>

     <div className="footer-2 lg:mt-8 lg:mr-32 mr-1 mt-1">
         
     <h1 className="lg:text-4xl text-blue-400">Información</h1>
               <div className="h-auto w-[210px] lg:py-4">
                <Link href={''} className="">
                 <h2 className="lg:text-md text-white transition-all hover:scale-105 border-b border-transparent hover:border-blue-500 hover:text-blue-500">Acerca de nosotros</h2>
                </Link>
                <Link href={''}>
                 <h2 className="lg:text-md text-white py-1 transition-all hover:scale-105 border-b border-transparent hover:border-blue-500 hover:text-blue-500">Más información</h2>
                </Link>
                <Link href={''}>
                 <h2 className="lg:text-md text-white py-1 transition-all hover:scale-105 border-b border-transparent hover:border-blue-500 hover:text-blue-500">Nuestras Páginas</h2>
                </Link>
                <Link href={''}>
                 <h2 className="lg:text-md text-white py-1 transition-all hover:scale-105 border-b border-transparent hover:border-blue-500 hover:text-blue-500">Términos & Condiciones</h2>
                </Link>
               </div>

     </div>
     <div className="footer-4 lg:mx-32 border-t-4 border-white">

     <div className="flex space-x-4 text-center items-center justify-center pt-2">
            <Link href={'https://web.facebook.com/TeckwareRegiones'}>
               <IoLogoFacebook size={35} className="text-white transition-all hover:scale-110"/>
            </Link>
            <Link href={'https://www.instagram.com/teckware.regiones/?hl=es'} style={{ marginLeft: '-1px' }}>
               <IoLogoInstagram size={36} className="text-white transition-all hover:scale-110 ml-1"/>
            </Link>
          </div>
          <div className="text-center pt-2">
            <h1 className="text-white">© 2023 XplenDev | Code By Luis Rivera Araya</h1>
          </div>
 
     </div>

     </div>

      </div>
  )
}