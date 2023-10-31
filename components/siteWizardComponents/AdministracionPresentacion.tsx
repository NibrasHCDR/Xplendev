import React from 'react'
import { MdPhonelinkLock } from "react-icons/md";
import { FcMultipleSmartphones, FcLockPortrait, FcStart, FcPanorama } from "react-icons/fc";
import { FaCubesStacked } from "react-icons/fa6";
import Image from 'next/image'
import myImage from '../../public/admin-img1.png'


type Props = {}

function AdministracionPresentacion({}: Props) {
  return (
    <div className="w-screen lg:h-screen md-auto bg-[#0C0F18]">
        <div className="w-full h-full">

          <div className="grid-containerAdmin2 pt-32 xl:mx-32 mx-3 w-auto h-auto">

          <div className="ap-1 mb-10">

            <h1 className="lg:text-6xl text-white font-kanit">
            Crea, Edita y Publica con SiteWizard
            </h1>

            <h1 className="lg:text-3xl text-white font-kanit pt-5">
            El Arte de Gobernar el contenido Web
            </h1>

          </div>
          <div className="ap-2 text-white bg-[#3498db] h-[290px] w-full rounded-2xl transition duration-500 ease-in-out hover:scale-105">
 
            <div className="m-8">
            <h1 className="text-white font-kanit xl:text-4xl">  
              SiteWizard
            </h1>
            </div>
            <div className="m-6 flex h-auto w-auto pt-[50px]">
            <FaCubesStacked size={85} className="text-blue-800 transition duration-500 hover:scale-105"/>
            <h1 className="xl:text-xl text-white font-kanit">
             Gestor de Contenidos<br></br> ByXplenDev
            </h1>
            </div>
            
          </div>
          <div className="ap-3 text-white bg-[#2ecc71] h-[595px] w-full rounded-2xl transition duration-500 ease-in-out hover:scale-105">
           
           <div className="m-8">
            <h1 className="text-white font-kanit xl:text-4xl">  
              Tu contenido
            </h1>
            <h1 className="text-white font-kanit xl:text-xl pt-4 pl-1">
            Descubre la magia de SiteWizard
            </h1>
            <h1 className="text-white font-kanit xl:text-xl pt-1 pl-1">
            Cambia Textos, Imagenes y Colores
            </h1>
            </div>
            <div className="mx-10 flex h-auto w-auto pt-2">
            <h1 className="xl:text-xl text-white font-kanit">
            <FcPanorama size={90} className="text-white transition duration-500 hover:scale-105"/>
            </h1>

            </div>
            <div className="flex h-auto pt-2 lg:justify-end items-center">
            <Image
             className="cursor-default h-[270px] w-[270px]" alt="Descripción de la imagen"
             layout="intrinsic"
             objectFit="cover"
             src={myImage} >
             </Image>
            </div>
            
          </div>
          <div className="ap-4 text-white bg-[#1C2B3B] h-[290px] lg:w-[70%] w-auto rounded-2xl transition duration-500 ease-in-out hover:scale-105">
            
          <div className="m-8">
            <h1 className="text-white font-kanit xl:text-4xl">  
              Admin
            </h1>
            </div>
            <div className="m-4 flex h-auto w-auto pt-[50px]">
            <FcLockPortrait size={90} className=" transition duration-500 hover:scale-105"/>
            <h1 className="xl:text-xl text-white font-kanit">
             TU administras<br></br> de manera segura
            </h1>
            </div>
            
          </div>

          <div className="ap-5 text-white bg-[#8985F2] h-[290px] w-full rounded-2xl transition duration-500 ease-in-out hover:scale-105">

          <div className="m-8">
            <h1 className="text-white font-kanit xl:text-4xl">  
            Videoguías
            </h1>
            <h1 className="text-white font-kanit xl:text-xl pt-4 pl-1">
            ¡Aprende con Videos!
            </h1>
            </div>
            <div className="m-6 flex h-auto w-auto pt-[5px]">
            <FcStart size={90} className=" transition duration-300 hover:scale-105"/>
            </div>
          
          </div>
          <div className="ap-6 text-white bg-[#2C64F8] h-[290px] w-full rounded-2xl transition duration-500 ease-in-out hover:scale-105">
            
          <div className="m-8">
            <h1 className="text-white font-kanit xl:text-4xl">  
            Diseño Exclusivo de tu Panel
            </h1>
            <h1 className="text-white font-kanit xl:text-xl pt-4 pl-1">
            Diseñamos un panel distinto para cada proyecto
            </h1>
            </div>
            <div className="m-6 flex h-auto w-auto">
            <FcMultipleSmartphones size={80} className=" transition duration-300 hover:scale-105"/>
            
            </div>

          </div>
        </div>  
      </div>
    
    </div>
  )
}

export default AdministracionPresentacion