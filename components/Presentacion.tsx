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
              <h1 className="pt-5 xl:text-5xl lg:text-5xl text-2xl cursor-default">UNA NUEVA IMAGEN PARA TU</h1>
              <h1 className="pt-2 xl:text-5xl lg:text-5xl text-2xl cursor-default">NEGOCIO</h1>
              <h2 className="xl:text-xl xl:mt-10 mt-2">Utilizamos tecnologías de vanguardia dentro de la Programación Web. Analizamos la mejor solucion adaptándonos a tu plan de negocio</h2>
              <h2 className="xl:text-xl xl:mt-1">Conoce nuestras tecnologías de trabajo y más!</h2>
              <div className="flex justify-center">
                <Link href={'/Membersias'}>
              <button id="myButton"className="xl:text-lg xl:mt-16 mt-2 no-select bg-white text-blue-500 hover:scale-110 hover:animate-pulse rounded-full hover:text-blue-500 border-4 border-blue-500/50 hover:border-text-blue-500 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 shadow-md shadow-blue-500 px-6 pb-[6px] pt-2">Conocer más</button>
               </Link>
          </div>
           </div>

          </div>

          <div className="pre-2 h-auto w-auto">

          <div className="xl:w-[400px] w-auto h-auto mx-2">
             <Image className="w-32 h-32" src={myImage2} alt={''}></Image>
              <h1 className="xl:mt-10 xl:text-4xl mt-2 textShadow">Administración</h1>
              <h2 className="xl:mt-4 xl:text-lg xl:mb-10 mt-2">Si tu negocio lo requiere, creamos un pánel de administración completamente personalizado y adaptado al diseño de tu página web</h2>
              <Link className="" href={''}>
              <h1 className="xl:mt-10 xl:text-md mt-4 underline text-blue-500">
              Quiero saber como funciona →
              </h1>
              </Link>
            </div>
            
          </div>

          <div className="pre-3 h-auto w-auto">
            
          <div className="xl:w-[400px] w-auto h-auto xl:mb-32 mx-2">
              <Image className="w-32 h-32" src={myImage3} alt={''}></Image>
              <h1 className="xl:mt-10 xl:text-4xl mt-2 textShadow">Mensajería</h1>
              <h2 className="xl:mt-4 xl:text-lg xl:mb-10 mt-2">El contacto por mensaje directo es importante, contamos con diversos diseños para mensajéria de correos y redes sociales</h2>
              <Link className="" href={''}>
              <h1 className="xl:mt-10 xl:text-md mt-4 underline text-blue-500">
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