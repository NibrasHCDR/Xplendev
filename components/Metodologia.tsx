'use client';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import myImage from '../public/met-1.gif'
import myImage2 from '../public/met-2.gif'
import myImage3 from '../public/met-3.gif'
import myImage4 from '../public/met-4.gif'
import { animate } from "framer-motion"
import { motion, useTime, useTransform } from "framer-motion";

type Props = {}

function Metodologia({}: Props) {

  const time = useTime()
  //const rotate = useTransform(time, [0, 45000], [0, 360], { clamp: false });

  const [iconMove, setIconMove] = useState(false);


  return (
    <div className="h-auto w-screen bg-fixed bg-center bg-cover fondo-img7 z-0 border-b-4 border-[#ED1FE8]">

      <div className="h-auto w-full bg-white/70 pb-24">

      <div className="grid-container5 text-start text-black pt-32 lg:mx-32 mx-3 justify-center">

        <div className="met-1 w-full space-y-2">
        <h1 className="pt-5 xl:text-5xl lg:text-5xl text-2xl cursor-default">DESCRUBRIENDO LA METODOLOGÍA USADA POR</h1>
        <h1 className="xl:text-5xl lg:text-5xl text-2xl cursor-default">XPLENDEVELOPERS</h1>
        <h2 className="pt-10 xl:text-2xl text-lg text-blue-950">El diseño de tu página web es lo más importante, por esto, contamos con un enfoque centrado en el crecimiento de tu negocio</h2>
        <h2 className="pb-5 pt-5 xl:text-2xl text-lg text-blue-950">Conoce Nuestra <span className="xl:text-3xl text-xl text-blue-400">MET</span><span className="xl:text-3xl text-xl text-[#ED1FE8]">ODO</span><span className="xl:text-3xl text-xl text-yellow-400">LOG</span><span className="xl:text-3xl text-xl text-blue-400">ÍA</span></h2>
        </div>

        <div className="met-2 lg:mt-[30px] shadow-lg rounded-lg shadow-blue-400/40 bg-gradient-to-r from-blue-400 to-blue-400/60">
          
        <motion.div className="w-[180px] h-[180px] m-12 mx-auto" style={{  }}>
             <Image className="cursor-default transition duration-1000 ease-in-out hover:last:scale-110" alt="my gif"   height={324} width={450} src={myImage} >
             </Image>
          </motion.div>
          <div className="h-auto w-auto pb-1">
          <h1 className="lg:text-4xl text-2xl text-start ml-4 mt-8 textShadw text-black">Análisis</h1>
          <h1 className="lg:text-lg text-md text-start pb-[5px] ml-4 mt-6 textShadow text-white">Análisis detallado de tus <br></br> necesidades y objetivos</h1>
          </div>
          
        </div>

        <div className="met-3 lg:mb-[30px] shadow-lg rounded-lg shadow-[#ED1FE8]/40 bg-gradient-to-r from-[#ED1FE8]/70 to-[#ED1FE8]/50">
          
        <motion.div className="w-[180px] h-[180px] m-12 mx-auto" style={{  }}>
             <Image className="cursor-default transition duration-1000 ease-in-out hover:last:scale-110" alt="my gif"   height={324} width={450} src={myImage2} >
             </Image>
          </motion.div>
          <div className="h-auto w-auto pb-1">
          <h1 className="lg:text-4xl text-2xl text-start ml-4 mt-8 textShadow text-white">Diseño</h1>
          <h1 className="lg:text-lg text-md text-start pb-[5px] ml-4 mt-6 textShadow text-black">Diseñamos una página web<br></br>atractiva y funcional</h1>
          </div>

        </div>

        <div className="met-4 lg:mt-[30px] shadow-lg rounded-lg shadow-blue-400/40 bg-gradient-to-r from-blue-400 to-blue-400/60">
          
        <motion.div className="w-[180px] h-[180px] m-12 mx-auto" style={{  }}>
             <Image className="cursor-default transition duration-1000 ease-in-out hover:last:scale-110" alt="my gif"   height={324} width={450} src={myImage3} >
             </Image>
          </motion.div>
          <div className="h-auto w-auto pb-1">
          <h1 className="lg:text-4xl text-2xl text-start ml-4 mt-8 textShadow text-black">Entrega</h1>
          <h1 className="lg:text-lg text-md text-start pb-[5px] ml-4 mt-6 textShadow text-white">Análisis detallado de tus <br></br> necesidades y objetivos</h1>
          </div>

        </div>

        <div className="met-5 lg:mb-[30px] shadow-lg rounded-lg shadow-[#ED1FE8]/40 bg-gradient-to-r from-[#ED1FE8]/70 to-[#ED1FE8]/50">
          
         
        <motion.div className="w-[180px] h-[180px] m-12 mx-auto" style={{  }}>
             <Image className="cursor-default transition duration-1000 ease-in-out hover:last:scale-110" alt="my gif"   height={324} width={450} src={myImage4} >
             </Image>
          </motion.div>
          <div className="h-auto w-auto pb-1">
          <h1 className="lg:text-4xl text-2xl text-start ml-4 mt-8 textShadow text-white">Seguimiento</h1>
          <h1 className="lg:text-lg text-md text-start pb-[5px] ml-4 mt-6 textShadow text-black">Análisis detallado de tus <br></br> necesidades y objetivos</h1>
          </div>


        </div>

        </div>
      </div>
    </div>
  )
}

export default Metodologia