import Link from 'next/link'
import React from 'react'
import myImage from '../public/presentacion-img-1.png'
import Image from 'next/image'
import myImage2 from '../public/work-img.png'
import myImage3 from '../public/email-img.png'


type Props = {}


function Presentacion({}: Props) {
  return (
    <div className="flex h-full w-full justify-between bg-center bg-cover fondo-img9 bg-fixed z-0">
      <div className="inline:block h-screen xl:w-1/2 w-full bg-white/50">

         <div className="inline:block w-full h-1/2 border border-transparent">
           <div className="inline:block xl:m-32 m-2 max-w-full w-auto h-auto">
              <h1 className="xl:text-4xl mx-auto textShadow">Una nueva Imagen visible para tu Negocio</h1>
              <h2 className="xl:text-xl xl:mt-10 mt-2">Utilizamos tecnologías de vanguardia dentro de la Programación Web. Analizamos la mejor solucion adaptándonos a tu plan de negocio</h2>
              <h2 className="xl:text-xl xl:mt-1">Conoce nuestras tecnologías de trabajo y más!</h2>
              <div className="flex justify-center">
                <Link href={'/Membersias'}>
              <button id="myButton"className="xl:text-lg xl:mt-14 mt-2 no-select bg-white text-blue-500 hover:scale-110 hover:animate-pulse rounded-full hover:text-blue-500 border-4 border-blue-500/50 hover:border-text-blue-500 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 shadow-md shadow-blue-500 px-6 pb-[6px] pt-2">Conocer más</button>
               </Link>
          </div>
           </div>
         </div> 
           <div className="flex w-full h-1/2">
            <div className="w-[400px] h-auto xl:mb-32 xl:mx-32">
             <Image className="w-32 h-32" src={myImage2} alt={''}></Image>
              <h1 className="xl:mt-10 xl:text-4xl mt-2 textShadow">Administración</h1>
              <h2 className="xl:mt-4 xl:text-lg xl:mb-10 mt-2">Si tu negocio lo requiere, creamos un pánel de administración completamente personalizado y adaptado al diseño de tu página web</h2>
              <Link className="xl:mt-10 xl:text-md mt-2 underline text-blue-500" href={''}>Quiero saber como funciona →</Link>
            </div>

            <div className="w-[400px] h-auto xl:mb-32">
              <Image className="w-32 h-32" src={myImage3} alt={''}></Image>
              <h1 className="xl:mt-10 xl:text-4xl mt-2 textShadow">Mensajería</h1>
              <h2 className="xl:mt-4 xl:text-lg xl:mb-10 mt-2">El contacto por mensaje directo es importante, contamos con diversos diseños para mensajéria de correos y redes sociales para tu web</h2>
              <Link className="xl:mt-10 xl:text-md mt-2 underline text-blue-500" href={''}>Quiero saber como funciona →</Link>
            </div>
          </div>         
      </div>

      <div className="w-1/2 ml-auto mx-auto hidden xl:inline-flex bg-white/50">
        <div className="xl:m-24 w-auto h-auto max-w-full max-h-1/2 m-2">

        <Image src={myImage} className="max-w-auto max-h-auto" alt={''}>

        </Image>
        </div>
      </div>
    </div>
  )
}

export default Presentacion