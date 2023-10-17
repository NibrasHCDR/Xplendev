'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import myGif from '../public/gero_img-2.png'
import myGif2 from '../public/hero_img-5.png'


type Props = {}

function Inicio({ }: Props) {
  return (
    <motion.div className="flex items-center justify-center h-screen w-auto bg-center bg-cover fondo-img5 z-0
    ">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 h-screen w-full shadow-xl border-b-4 border-[#ED1FE8]"></div>
        <div className="relative flex h-full w-full m-4 ml-5">

          <div className="absolute mt-32 flex h-[950px] w-full">

             <div className="relative mt-auto my-auto min-w-[200px] xl:h-[850px] xl:w-[800px] h-[550px] w-[350px] hidden xl:inline-flex">

             <Image className="absolute cursor-default transition duration-150 ease-in-out h-full" src={myGif} alt="my gif" height={500} width={500} />

             </div>

             <div className="relative h-full w-[1100px]">
              
              <div className="absolute w-full h-full">

                <div className="block blur-div border-xl w-full h-auto text-white xl:mt-52 lg:mt-32 md:mt-28 mt-10 mx-auto">
                     
                <h1 className="text-center text-5xl mb-6 cursor-default hover:scale-105 transition duration-200 ease-in-out"> <motion.span className="text-white hover:text-yellow-400 cursor-default hover:scale-105 transition duration-150 ease-in-out">Diseño y
            </motion.span><span className="text-white hover:text-sky-500 cursor-default"> Desarrollo de
            </span> <span className="text-white hover:text-[#ED1FE8] cursor-default">Páginas Web   
            </span> <span className="text-white hover:text-rose-500 cursor-default">Personalizadas a
            </span> <span className="text-white hover:text-green-500 cursor-default">Tu Medida
            </span> </h1>
                     <h2 className="py-5 text-xl cursor-default">Bienvenido a  <span className="text-2xl text-blue-500 cursor-default"> XplenDevelopers
                      </span> Tu socio confiable en la creación de experiencias web excepcionales. Nos especializamos en transformar ideas en sitios web personalizados y cautivadores que reflejen la identidad única de tu negocio. Trabajamos contigo en cada paso para convertir tus visiones en realidad digital.¡Estamos aquí para hacerlo realidad!.</h2>
                     <button type="button"
                        className="xl:mt-12 xl:text-2xl px-6 pb-[6px] pt-2 center grid mx-auto hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 shadow-md shadow-[#ED1FE8] miBoton"
                        data-te-ripple-init>Comenzar Ahora!</button>
                </div>
              </div>
             </div>
             <div className="relative h-screen w-[850px] hidden xl:inline-flex">

             <div className="absolute xl:h-[850px] xl:w-[450px] h-[550px] w-[350px] mt-40 hidden xl:inline-flex position">
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