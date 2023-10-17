import React from 'react'
import Image from 'next/image'
import myImage from '../public/diseñoA.png'
import myImage2 from '../public/diseñoB.png'
import myImage3 from '../public/diseñoC.png'

type Props = {}

function Diseño({}: Props) {

  
  return (
    <div className="h-screen w-full bg-center bg-cover bg-fixed fondo-img9 z-0 shadow-xl border-b-4 border-[#ED1FE8]">

      <div className="flex h-full w-full justify-between xl:px-32 xl:pt-20 bg-white/50">

        <div className="diseñoContainer">
        <h1 className="xl:text-4xl text-start xl:mx-12 xl:mt-16 textShadow text-white">Responsive Design</h1>
        <h1 className="xl:text-4xl text-start xl:mx-12 xl:mt-2 textShadow text-white">Disfruta de la mejor visualización</h1>
        <h1 className="xl:text-4xl text-start xl:mx-12 xl:mt-2 textShadow text-white">en cualquier dispositivo con nuestro</h1>
        <h1 className="xl:text-4xl text-start xl:mx-12 xl:mt-2 textShadow text-white">diseño responsivo</h1>
        
          <Image className="w-[600px] h-[600px] max-w-[600px] max-h-[600px] min-h-[250px] min-w-[250px] mt-16 ml-auto" src={myImage} alt={''} />

        </div>
        <div className="diseñoContainer2">
        <Image className="w-auto h-[500px] max-w-[460px] min-h-[250px] min-w-[250px] rounded-lg" src={myImage2} alt={'500px'} />
        <h1 className="xl:text-4xl text-start xl:mx-12 xl:mt-12">Tu dominio, tu marca</h1>
        <h1 className="xl:text-4xl text-start xl:mx-12 xl:mt-2 text-[#D4D3D6]">Haz que tu sitio sea reconocible con un dominio personalizado</h1>
          

        </div>
        <div className="diseñoContainer2">
        <h1 className="xl:text-4xl text-start xl:mx-12 xl:mt-12">Alojamiento confiable</h1>
        <h1 className="xl:text-4xl text-start xl:mx-12 xl:mt-2 text-[#D4D3D6]">Hosting con el rendimiento óptimo para la mejor experiencia de navegación</h1>
        <Image className="w-[448px] h-[594px] max-h-[594px] max-w-[448px] min-h-[250px] min-w-[250px] rounded-lg xl:pb-20" src={myImage3} alt={'500px'} />

        </div>
        
      </div>      


    </div>
  )
}

export default Diseño