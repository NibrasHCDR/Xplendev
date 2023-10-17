'use client';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import myImage from '../public/puzzle.png'
import { animate } from "framer-motion"
import { motion, useTime, useTransform } from "framer-motion";

type Props = {}

function Metodologia({}: Props) {

  const time = useTime()
  //const rotate = useTransform(time, [0, 45000], [0, 360], { clamp: false });

  const [iconMove, setIconMove] = useState(false);


  return (
    <div className="inline:block h-full w-full bg-fixed bg-center bg-cover fondo-img7 z-0 border-b-4 border-[#ED1FE8]">

      <div className="h-screen lg:mx-20 lg:pt-5 my-auto bg-white/70 xl:pt-24">

      <div className="text-center text-black">
        <h1 className="pt-5 xl:text-6xl text-2xl cursor-default">La Metodología de <span className="text-blue-500">XplenDevelopers</span></h1>
        <h2 className="pt-10 xl:text-2xl text-lg text-blue-950">El diseño de tu página web es lo más importante, por esto, contamos con un enfoque centrado en el crecimiento de tu negocio</h2>
        <h2 className="pb-5 pt-5 xl:text-2xl text-lg text-blue-950">Conoce Nuestra <span className="xl:text-3xl text-xl text-[#FE5364]">MET</span><span className="xl:text-3xl text-xl text-[#945BA5]">ODO</span><span className="xl:text-3xl text-xl text-[#EFC518]">LOG</span><span className="xl:text-3xl text-xl text-[#2FA8CD]">ÍA</span></h2>
      </div>

        
        <div className="flex h-[700px] justify-between shadow-2xl rounded-xl mt-5 mx-12 bg-white/90 shadow-[#ED1FE8]/70">

       
        <motion.div className="relative w-[520px] h-[324px] hidden xl:inline-flex my-auto ml-32" style={{  }}>

          <Image className="absolute cursor-default transition duration-1000 ease-in-out hidden lg:inline-flex hover:last:rotate-180" alt="my gif" height={324} width={450} src={myImage} >
         </Image>
        </motion.div>

        <div className="text-black text-start w-auto lg:mr-32 my-auto md:mx-20">
         <h1 className="xl:text-4xl text-xl hover:text-[#FE5364] hover:scale-105 transition duration-200 ease-in-out cursor-default">
          <span className="underline decoration-solid text-[#FE5364]">Fase 1:</span>
          <span className="underline decoration-solid"> Análisis detallado de tus necesidades y objetivos</span>
         </h1>
         <h2 className="pt-2 xl:text-xl text-lg cursor-default">
          Creamos un plan personalizado que cumpla con tus expectativas y evaluamos tu competencia.
         </h2>
         <h1 className="mt-10 xl:text-4xl text-xl hover:text-[#945BA5] hover:scale-105 transition duration-200 ease-in-out cursor-default">
          <span className="underline decoration-solid text-[#945BA5]">Fase 2:</span> 
          <span className="underline decoration-solid"> Diseño y desarrollo de la página web</span>
         </h1>
         <h2 className="pt-2 xl:text-xl text-lg cursor-default">
          Diseñamos una página web atractiva y funcional, utilizando tecnologías de vanguardia.
         </h2>
         <h1 className="mt-10 xl:text-4xl text-xl hover:text-[#EFC518] hover:scale-105 transition duration-200 ease-in-out cursor-default">
          <span className="underline decoration-solid text-[#EFC518]">Fase 3:</span>
          <span className="underline decoration-solid"> Entrega del sitio web para pruebas</span>
         </h1>
         <h2 className="pt-2 xl:text-xl text-lg cursor-default">
          Te entregamos un prototipo para que puedas probar tu sitio web antes de su lanzamiento.
         </h2>
         <h1 className="mt-10 xl:text-4xl text-xl hover:text-[#2FA8CD] hover:scale-105 transition duration-200 ease-in-out cursor-default">
          <span className="underline decoration-solid text-[#2FA8CD]">Fase 4:</span> 
          <span className="underline decoration-solid"> Seguimiento final</span>
         </h1>
         <h2 className="pt-2 xl:text-xl text-lg cursor-default">
          Te brindamos soporte técnico en caso de ser necesario y te brindamos recomendaciones para mejorar la experiencia del usuario en tu sitio web.
         </h2>
         </div>

        </div>          

      </div>

    </div>
  )
}

export default Metodologia