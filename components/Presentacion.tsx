import Link from 'next/link'
import React from 'react'
import myImage from '../public/presentacion-img-1.png'
import Image from 'next/image'
import myImage2 from '../public/work-img.png'
import myImage3 from '../public/email-img.png'


type Props = {}


function Presentacion({}: Props) {
  return (
    <div className="h-full w-screen bg-center bg-cover fondo-img9 bg-fixed z-0">
      <div className="h-auto w-full bg-white/50">

         <div className="grid-container6 pt-32 xl:mx-32 lg:mx-32 mx-3 w-auto h-auto">

          <div className="pre-1 h-auto w-full">
           
          <div className="m-2 w-auto h-auto">
              <h1 className="pt-5 xl:text-5xl lg:text-5xl text-2xl cursor-default font-kanit">UNA NUEVA IMAGEN PARA TU NEGOCIO</h1>
              <h2 className="lg:text-2xl lg:mt-10 mt-2 font-roboto">Utilizamos tecnologías de vanguardia dentro de la Programación Web. Integrando sistemas personalizados para lograr una experiencia de personalización única y explusiva</h2>
              <h2 className="lg:text-2xl lg:mt-1 font-roboto">Conoce nuestro sistema único Sitewizard CMS...</h2>
              <div className="flex mb-4">
                <Link href={'/Administracion'}>
                <button type="button"
                        className="xl:mt-12 xl:text-2xl p-4 font-kanit border-2 grid mx-auto border-[#5694E0] hover:scale-105 transition duration-250 ease-in-out"
                        data-te-ripple-init>SiteWizard CMS</button>
               </Link>
          </div>
           </div>

          </div>

          <div className="pre-2 h-auto w-auto">

          <div className="xl:w-[400px] w-auto h-auto mx-2">
             <Image className="w-32 h-32" src={myImage2} alt={''}></Image>
              <h1 className="lg:mt-10 lg:text-4xl mt-2 textShadow font-kanit">Administración</h1>
              <h2 className="lg:mt-4 lg:text-xl xl:mb-10 mt-2 font-roboto">Si tu negocio lo requiere, creamos un pánel de administración completamente personalizado y adaptado al diseño de tu página web</h2>
              <Link className="" href={'Sitewizard'}>
              <h1 className="lg:mt-10 lg:text-lg mt-4 underline text-blue-500 font-roboto">
              Quiero saber como funciona →
              </h1>
              </Link>
            </div>
            
          </div>

          <div className="pre-3 h-auto w-auto">
            
          <div className="xl:w-[400px] w-auto h-auto xl:mb-32 mx-2">
              <Image className="w-32 h-32" src={myImage3} alt={''}></Image>
              <h1 className="lg:mt-10 lg:text-4xl mt-2 textShadow font-kanit">Mensajería</h1>
              <h2 className="lg:mt-4 lg:text-xl xl:mb-10 mt-2 font-roboto">El contacto por mensaje directo es importante, contamos con diversos diseños para mensajéria de correos y redes sociales</h2>
              <Link className="" href={''}>
              <h1 className="lg:mt-10 lg:text-lg mt-4 underline text-blue-500 font-roboto">
              Quiero saber como funciona →
              </h1>
              </Link>
            </div>

          </div>

          <div className="pre-4 my-auto xl:ml-auto mx-auto">
            
          <div className="xl:w-[400px] xl:h-[400px] w-auto h-auto">

            <Image src={myImage} className="w-auto h-auto lg:max-h-[400px] lg-max-w-[400px] xl:max-w-[420px] xl:max-h-[420px] md:max-w-[350px] cursor-default transition duration-1000 ease-in-out" alt={''}>
            </Image>
          </div>

          </div>

         </div>        
      </div>

    </div>
  )
}

export default Presentacion