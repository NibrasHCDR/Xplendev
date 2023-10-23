import React from 'react'
import Image from 'next/image'
import myImage from '../public/diseñoA.png'
import myImage2 from '../public/diseñoB.png'
import myImage3 from '../public/diseñoC.png'

type Props = {}

function Diseño({}: Props) {

  
  return (
    <div className="h-auto w-screen bg-center bg-cover bg-fixed fondo-img9 z-0 shadow-xl border-b-4 border-[#ED1FE8]">

      <div className="h-auto w-full pb-24 pt-24 bg-white/50">

        <div className="grid-container3 pt-32 lg:mx-32 mx-3 justify-center">

          <div className="dis-1 bg-gradient-to-r from-blue-400 to-blue-400/60 max-h-[780px] w-auto rounded-lg shadow-lg border-2 shadow-blue-400/40">
           
          <h1 className="xl:text-4xl text-2xl text-start mx-12 mt-16 textShadow text-black">Responsive<br></br> Design</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 textShadow text-white">Disfruta de visualización</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 textShadow text-white">en cualquier dispositivo</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 textShadow text-white">con nuestro</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 textShadow text-white">diseño responsivo</h1>
        
          <Image className="w-[450px] h-auto mt-24 ml-auto" src={myImage} alt={''} />

          </div>

          <div className="dis-2 bg-[#F3F3F3] max-h-[780px] w-auto rounded-lg shadow-lg border-2 shadow-[#ED1FE8]/40">
          
          <Image className="w-[380px] h-auto rounded-lg " src={myImage2} alt={'500px'} />
        <h1 className="xl:text-4xl text-2xl text-start mx-12 mt-12">Tu dominio, tu marca</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 text-[#D4D3D6]">Haz que tu sitio sea reconocible con un dominio personalizado</h1>

          </div>

          <div className="dis-3 bg-[#F3F3F3] max-h-[780px] max-w-auto rounded-lg shadow-lg border-2 shadow-[#ED1FE8]/40">
          
          <h1 className="xl:text-4xl text-2xl text-start mx-12 mt-12">Alojamiento confiable</h1>
        <h1 className="xl:text-3xl text-xl text-start mx-12 mt-2 text-[#D4D3D6]">Hosting con el rendimiento óptimo para la mejor experiencia de navegación</h1>
        <Image className="flex w-[380px] h-auto max-h-[440px] mt-24  ml-auto rounded-lg" src={myImage3} alt={'500px'} />
          </div>
 
        </div>      
        
      </div>      


    </div>
  )
}

export default Diseño