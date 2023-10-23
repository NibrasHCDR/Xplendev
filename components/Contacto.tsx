'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import myImage from '../public/email_send.png'
import myGif from '../public/message.gif'


type Props = {}



function Contacto({}: Props) {




  return (
    <div className="h-full w-ascreen bg-fixed bg-center bg-cover fondo-img7">

      <div className="h-screen xl:px-20 pt-24 bg-white/50">

      <div className="grid-container4 text-center justify-center mx-2">

        <div className="con-1">
           
      <div className="text-center pb-12">
        <h1 className="pt-5 xl:text-6xl text-2xl cursor-default">
          <span className="text-[#ED1FE8]">Conversemos</span> de <span>Tu Idea</span>
        </h1>
        
      </div>
        </div>

        <div className="con-2">
           
        <motion.div className="relative w-[550px] h-[550px] hidden lg:inline-flex xl:mb-auto mx-auto object-center" style={{  }}>

       <Image className="absolute cursor-default transition duration-1000 ease-in-out hidden lg:inline-flex" alt="my gif" height={550} width={800} src={myGif} >
       </Image>
       </motion.div>

        </div>

        <div className="con-3 h-[600px] inline-block bg-white/90 rounded-lg shadow-lg border-2 shadow-[#ED1FE8]/40 xl:mr-4">
          
        <div className="w-full h-[80px] inline-block xl:mt-10 text-center my-auto">
            <h1 className="xl:text-4xl text-xl text-blue-500"> Hablemos! </h1>
            <h2 className="mt-2 xl:text-lg mx-4 text-sm text-blue-950">Cuéntanos tu idea y te responderemos lo antes posible</h2>
          </div>


          <div className="text-start w-auto xl:mx-14 mx-10">

          <form className="space-y-4 mt-5 text-start">
            <input className="block w-full shadow-md appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#ED1FE8] shadow-[#ED1FE8]/20" id="username" type="text" placeholder="Nombre"></input>
            <input className="block w-full shadow-md shadow-[#ED1FE8]/20 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#ED1FE8]" type="email" name="Nombre" placeholder="Email"></input>
            <textarea className="w-full h-[250px] max-h-[250px] min-h-[250px] text-start block shadow-md border rounded shadow-[#ED1FE8]/20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#ED1FE8]" name="Nombre" placeholder="Mensaje"></textarea>
            <button className="block text-[#ED1FE8] no-select mx-auto text-lg hover:scale-110 hover:animate-pulse rounded-full hover:text-[#ED1FE8] border-4 border-white hover:border-[#ED1FE8] px-6 pb-[6px] pt-2 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 shadow-md shadow-[#ED1FE8] font-principal" type='submit'> Enviar </button>
          </form>

          </div>

        </div>

      </div>       
      </div>

    </div>
  )
}

export default Contacto