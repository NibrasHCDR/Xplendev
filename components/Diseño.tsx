import React from 'react'
import Image from 'next/image'
import myImage from '../public/diseñoA.png'
import myImage2 from '../public/diseñoB.png'
import myImage3 from '../public/diseñoC.png'

type Props = {}

function Diseño({}: Props) {

  
  return (
    <div className="h-auto w-screen bg-[#0C0F18] z-0 shadow-xl border-b-4 border-[#ED1FE8]">

      <div className="h-auto w-full pb-24 pt-20">

        <div className="w-full h-auto lg:px-32 px-4">
           <h1 className="flex justify-end text-white font-kanit lg:text-5xl text-2xl cursor-default">
           Tu Sitio Web Perfecto: Diseño, Hosting y Dominio en un Solo Lugar
           </h1>
        </div>

        <div className="grid-container3 pt-12 lg:mx-32 mx-3 justify-center">

          <div className="dis-1 bg-gradient-to-r from-blue-400 to-blue-400/60 max-h-[780px] w-auto rounded-lg shadow-lg border-2 border-blue-400 shadow-blue-400/40 transition duration-300 ease-in-out hover:scale-105">
           
          <h1 className="xl:text-4xl text-2xl text-start mx-12 mt-16 textShadow text-black font-kanit">Responsive<br></br> Design</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 textShadow text-white font-kanit">Disfruta de visualización</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 textShadow text-white font-kanit">en cualquier dispositivo</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 textShadow text-white font-kanit">con nuestro</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 textShadow text-white font-kanit">diseño responsivo</h1>
        
          <Image className="w-[450px] h-auto mt-24 ml-auto" src={myImage} alt={''} />

          </div>

          <div className="dis-2 bg-[#F3F3F3] max-h-[780px] w-auto rounded-lg shadow-lg border-2 shadow-[#ED1FE8]/40 transition duration-300 ease-in-out hover:scale-105">
          
          <Image className="w-[380px] h-auto rounded-lg " src={myImage2} alt={'500px'} />
        <h1 className="xl:text-4xl text-2xl text-start mx-12 mt-12 font-kanit">Tu dominio, tu marca</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 text-[#D4D3D6] font-kanit">Haz que tu sitio sea reconocible con un dominio personalizado</h1>

          </div>

          <div className="dis-3 bg-[#F3F3F3] max-h-[780px] max-w-auto rounded-lg shadow-lg border-2 shadow-[#ED1FE8]/40 transition duration-300 ease-in-out hover:scale-105">
          
          <h1 className="xl:text-4xl text-2xl text-start mx-12 mt-12 font-kanit">Alojamiento confiable</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 text-[#D4D3D6] font-kanit">Hosting con el rendimiento óptimo para la mejor experiencia de navegación</h1>
        <Image className="flex w-[380px] h-auto max-h-[440px] mt-24  ml-auto rounded-lg" src={myImage3} alt={'500px'} />
          </div>
 
        </div>      
        
      </div>      


    </div>
  )
}

export default Diseño