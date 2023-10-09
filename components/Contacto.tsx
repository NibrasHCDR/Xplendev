'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import myImage from '../public/email_send.png'


type Props = {}



function Contacto({}: Props) {




  return (
    <div className="inline:block h-screen w-screen bg-fixed bg-center bg-cover fondo-img7 z-0">

      <div className="h-screen lg:mx-20 lg:pt-10 my-auto bg-white/50">

      <div className="text-center">
        <h1 className="pt-5 xl:text-6xl text-2xl font-mono cursor-default">
          <span className="text-[#ED1FE8]">Conversemos</span> de <span>Tu Idea</span>
        </h1>
      </div>       

      <div className="xl:h-[850px] h-screen object-center">

        <div className="flex h-[850px] justify-between rounded-xl mt-2 xl:mx-12mx-auto">

        <motion.div className="relative w-[700px] h-[550px] hidden xl:inline-flex xl:mb-60 my-auto mx-auto object-center" style={{  }}>

        <Image className="absolute cursor-default transition duration-1000 ease-in-out hidden lg:inline-flex" alt="my gif" height={550} width={800} src={myImage} >
        </Image>
        </motion.div>

        <div className="flex xl:w-[620px] md:w-[580px] w-[500px] my-12 mx-auto rounded-xl">

          <div className="w-full h-[650px] inline-block bg-white/90 shadow-2xl rounded-xl mx-2">

          <div className="w-full h-[80px] inline-block xl:mt-10 text-center my-auto">
            <h1 className="font-mono xl:text-4xl text-xl text-[#ED1FE8]"> Hablemos! </h1>
            <h2 className="mt-2 font-semibold xl:text-xl text-md text-blue-950">Cuéntanos tu idea y te responderemos lo antes posible</h2>
          </div>


          <div className="text-start w-[350px] mx-auto">

          <form className="space-y-4 mt-5 text-start">
            <input className="block w-full shadow-md appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#ED1FE8] shadow-[#ED1FE8]/20 font-mono" id="username" type="text" placeholder="Nombre"></input>
            <input className="block w-full shadow-md shadow-[#ED1FE8]/20 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#ED1FE8] font-mono" type="email" name="Nombre" placeholder="Email"></input>
            <textarea className="w-full h-[250px] text-start block shadow-md border rounded shadow-[#ED1FE8]/20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#ED1FE8] font-mono" name="Nombre" placeholder="Mensaje"></textarea>
            <button className="block text-[#ED1FE8] mx-auto text-lg hover:scale-110 hover:animate-pulse rounded-full hover:text-[#ED1FE8] border-4 border-white hover:border-[#ED1FE8] px-6 pb-[6px] pt-2 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 font-mono shadow-md shadow-[#ED1FE8]" type='submit'> Enviar </button>
          </form>


          </div>

          


          </div>


        </div>

        </div>


      </div>

      </div>

    </div>
  )
}

export default Contacto