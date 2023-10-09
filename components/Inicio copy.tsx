'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import myGif from '../public/animation_6.gif'


type Props = {}

function Inicio({ }: Props) {
  return (
    <motion.div className="flex items-center justify-center h-screen w-screen bg-center bg-cover fondo-img5 z-0 shadow-xl">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 h-screen w-screen"/>
            <div className="lg:w-[60%] lg:p-20 lg:ml-32 mx-12 text-white z-[2] object-center justify-center mt-32">
            <h2 className="text-center text-5xl mb-6 font-mono cursor-default hover:scale-105 transition duration-200 ease-in-out "> <motion.span className="text-white hover:text-yellow-400 cursor-default hover:scale-105 transition duration-150 ease-in-out">Diseño y
            </motion.span><span className="text-white hover:text-sky-500 cursor-default"> Desarrollo de
            </span> <span className="text-white hover:text-fuchsia-500 cursor-default">Páginas Web   
            </span> <span className="text-white hover:text-rose-500 cursor-default">Personalizadas a
            </span> <span className="text-white hover:text-green-500 cursor-default">Tu Medida
            </span> </h2>
            <h1 className="py-5 text-xl cursor-default">Bienvenido a  <span className="text-2xl font-semibold text-fuchsia-500 cursor-default"> XplenDevelopers
            </span> Tu socio confiable en la creación de experiencias web excepcionales. Nos especializamos en transformar ideas en sitios web personalizados y cautivadores que reflejen la identidad única de tu negocio. Trabajamos contigo en cada paso para convertir tus visiones en realidad digital. Ya sea que necesites una presencia en línea impactante desde cero o desees revitalizar tu sitio existente. ¡Estamos aquí para hacerlo realidad!.</h1>
            <button type="button"
                        className="xl:text-2xl text-xl mt-10 xl:ml-[38%] lg:ml-[38%] md:ml-[32%] sm:ml-[30%] ml-[27%] inline-block hover:scale-110 animate-pulse rounded-full hover:text-fuchsia-500 border-4 border-white hover:border-fuchsia-500 px-6 pb-[6px] pt-2 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 font-mono"
                        data-te-ripple-init>Comenzar Ahora!</button>
            </div>
            
            <motion.div className="lg:w-[15%] lg:h-[28%] lg:mb-24 lg:mr-[15%] text-white z-[2] mx-auto mt-32">
            <Image className="cursor-default transition duration-150 ease-in-out hidden lg:inline-flex" src={myGif} alt="my gif" height={500} width={500} />
            </motion.div>
    </motion.div>
  )
}

export default Inicio