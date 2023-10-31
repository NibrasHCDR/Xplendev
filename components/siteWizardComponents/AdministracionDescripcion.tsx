import React from 'react'
import { MdPhonelinkLock } from "react-icons/md";
import { FcMultipleSmartphones, FcLockPortrait, FcStart, FcPanorama } from "react-icons/fc";
import { FaCubesStacked } from "react-icons/fa6";
import Image from 'next/image'
import myImage from '../../public/admin-img4.jpg'
import myIcon1 from '../../public/icons/xplendevicon-75x75.png'
import myIcon2 from '../../public/icons/sitewizardicon-75x75.png'
import myIcon3 from '../../public/icons/prismaicon-75x75.png'
import myIcon4 from '../../public/icons/mongodbicon-75x75.png'

type Props = {}

function AdministracionDescripcion({}: Props) {
  return (
    <div className="w-screen h-screen bg-[#0C0F18]">
        <div className="w-full h-full">

          <div className="grid-containerAdmin3 pt-32 xl:mx-32 mx-3 w-auto h-auto">

            <div className="ad-1 md:mb-10 no-select">
            
            <h1 className="lg:text-6xl text-white font-kanit">
            XplenDev & SiteWizard
            </h1>

            <h1 className="lg:text-3xl text-white font-kanit pt-5">
            La Combinación Definitiva para Potenciar tu Página Web
            </h1>
            
            </div>

            <div className="ad-2 xl:h-[490px] w-full overflow-hidden relative no-select">
              <div>

              <Image
             className="cursor-default transition duration-500 hover:scale-105" alt=""
             objectFit="contain"
             layout='fill'
             src={myImage} >
             </Image>

              </div>
            
            </div>

            <div className="ad-3 xl:h-[200px] flex items-center no-select">

               <div className="mt-8 space-y-1">
                 <h1 className="text-white font-kanit xl:text-3xl">  
                 Con <span className="text-[#ED1FE8]">XplenDev</span> Creamos tú diseño
                 </h1>
                 <h1 className="text-white font-kanit xl:text-3xl">
                 Con <span className="text-[#2C64F8]">SiteWizard</span> Administras el contenido
                 </h1>
                 <h1 className="text-white font-kanit xl:text-xl">
                 
                 </h1>
               </div>  
                 
            </div>

            <div className="ad-4 bg-[#1C2B3B] rounded-xl h-auto lg:w-[85%] no-select">
            
            <div className="m-8">
            <h1 className="text-white font-kanit xl:text-4xl">  
            Alcanza la Excelencia en Gestión
            </h1>
            <h1 className="text-white font-kanit xl:text-xl pt-4 pl-1">
            Aprovecha al máximo todas las aplicaciones diseñadas con XplenDev. Ofrecemos una solución integral para la administración de cada sitio web.
            </h1>
            </div>
            
            </div>

            <div className="ad-7 w-full h-auto">

            <div className="flex justify-center">
              <h1 className="text-white font-kanit xl:text-3xl"> Optimizing With</h1>
              </div>

            </div>

            <div className="ad-5 h-[120px] no-select">

            <div className="flex md:justify-end justify-center md:pt-4">

              <div className="bg-[#1C2B3B] w-[250px] h-[76px] md:mt-2 rounded-full flex justify-center space-x-2">
             <div className="w-[75px] h-[75px] transition duration-500 hover:scale-105">
             <Image
             className="cursor-default" alt=""
             objectFit="cover"
             src={myIcon1} >
             </Image>
             </div>

             <div className="w-[75px] h-[75px] transition duration-500 hover:scale-105">
             <Image
             className="cursor-default" alt=""
             objectFit="cover"
             src={myIcon2} >
             </Image>
             </div>

              </div>

            </div>

            </div>

            <div className="ad-6 h-[120px] no-select">

            <div className="flex md:justify-start justify-center md:pt-4">

              <div className="bg-[#1C2B3B] w-[250px] h-[76px] md:mt-2 rounded-full flex justify-center space-x-2">
             <div className="w-[75px] h-[75px] transition duration-500 hover:scale-105">
             <Image
             className="cursor-default" alt=""
             objectFit="cover"
             src={myIcon3} >
             </Image>
             </div>

             <div className="w-[75px] h-[75px] transition duration-500 hover:scale-105">
             <Image
             className="cursor-default" alt=""
             objectFit="cover"
             src={myIcon4} >
             </Image>
             </div>

              </div>

            </div>
              

            </div>


        </div>  
      </div>
    
    </div>
  )
}

export default AdministracionDescripcion