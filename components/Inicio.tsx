'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import myGif from '../public/gero_img-2.png'
import myGif2 from '../public/hero_img-5.png'


type Props = {}

function Inicio({ }: Props) {
  return (
    <motion.div className="flex items-center justify-center h-screen w-screen bg-[#0C0F18] z-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-screen w-full shadow-xl border-b-4 border-[#ED1FE8]"></div>
        <div className="relative flex h-full w-full m-4 ml-5">

          <div className="absolute mt-32 flex h-[950px] w-full">

             <div className="relative mt-auto my-auto min-w-[200px] xl:h-[850px] xl:w-[800px] h-[550px] w-[350px] hidden lg:inline-flex">

             <Image className="absolute cursor-default transition duration-150 ease-in-out h-full" src={myGif} alt="my gif" height={500} width={500} />

             </div>

             <div className="relative h-full w-[1100px]">
              
              <div className="absolute w-full h-full">

                <div className="block blur-div border-xl w-full h-auto text-white xl:mt-52 lg:mt-32 md:mt-28 mt-10 mx-auto">
                     
                <h1 className="text-center xl:text-5xl text-2xl mb-6 cursor-default hover:scale-105 transition duration-200 ease-in-out"> <motion.span className="text-white hover:text-yellow-400 cursor-default hover:scale-105 transition duration-150 ease-in-out">Diseño y
            </motion.span><span className="text-white hover:text-sky-500 cursor-default font-kanit"> Desarrollo de
            </span> <span className="text-white hover:text-[#ED1FE8] cursor-default font-kanit">Páginas Web   
            </span> <span className="text-white hover:text-rose-500 cursor-default font-kanit">Personalizadas a
            </span> <span className="text-white hover:text-green-500 cursor-default font-kanit">Tu Medida
            </span> </h1>
                     <h2 className="py-5 xl:text-xl cursor-default font-roboto">Bienvenido a  <span className="text-2xl text-[#5694E0] cursor-default"> XplenDevelopers
                      </span> Tu socio confiable en la creación de experiencias web excepcionales. Nos especializamos en transformar ideas en sitios web personalizados y cautivadores que reflejen la identidad única de tu negocio. Trabajamos contigo en cada paso para convertir tus visiones en realidad digital.¡Estamos aquí para hacerlo realidad!.</h2>
                     <button type="button"
                        className="xl:mt-12 lg:text-xl p-4 font-kanit border-2 grid mx-auto border-[#5694E0] hover:scale-105 transition duration-250 ease-in-out hover:animate-pulse"
                        data-te-ripple-init>Comenzar Ahora!</button>
                </div>
              </div>
             </div>
             <div className="relative h-screen w-[850px] hidden lg:inline-flex">

             <div className="absolute xl:h-[850px] xl:w-[450px] h-[550px] w-[350px] mt-40 hidden lg:inline-flex position">
             <Image className="absolute cursor-default transition duration-150 ease-in-out" src={myGif2} alt="my gif" height={1800} width={1800} />

             </div>

             </div> 
          </div>
          <div>
          </div>
        </div>
    </motion.div>
  )
}

export default Inicio