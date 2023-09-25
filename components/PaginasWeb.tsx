'use client'
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'

//importamos framer motion (Para crear contenedores animados)
import { motion } from 'framer-motion';

//importamos nuestros ICONOS (Derecha e Izquierda) de HeroIcons
import {ArrowLeftIcon,ArrowRightIcon} from "@heroicons/react/24/solid"

//importamos nuestro slideshow
import {Zoom} from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'

//importamos nuestra libreria swiper para cambios de imagen
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide_image_1 from "../public/Screenshot_3.jpg"
import slide_image_2 from "../public/Screenshot_3.jpg"
import slide_image_3 from "../public/Screenshot_3.jpg"

//importamos nuestro Script de JavaScript Script.js
import Script from 'next/script';


type Props = {}

function PaginasWeb({}: Props) {

       const images = [
        "https://i.postimg.cc/TPj55YNq/Screenshot-3.png",
        "https://i.postimg.cc/ydYYN1MY/fondo-2.jpg",
        "https://i.postimg.cc/kgwLvP31/wallpaperflare-com-wallpaper.jpg"
       ];

       const zoomInProperties = {
        scale:1.1,
        duration:2000,
        transitionDuration:200,
        infinity: true,
        
        //icons
        prevArrow:(
          <div className="lg:mx-[18%] mx-[9%] lg:top-[35%] md:rop-72 hover:scale-125 transition duration-150 ease-in-out">
            <ArrowLeftIcon className='lg:h-10 lg:w-10 h-6 w-6 lg:text-white text-yellow-500 cursor-pointer'/>
          </div>
        ),
        nextArrow:(
          <div className="lg:mx-[18%] mx-[9%] lg:top-[35%] md:rop-72 hover:scale-125 transition duration-150 ease-in-out">
            <ArrowRightIcon className='lg:h-10 lg:w-10 h-6 w-6 lg:text-white text-yellow-500 cursor-pointer'/>
          </div>
        )
       }


  return ( 

      <div className="w-full h-full bg-fixed bg-center bg-cover fondo-img6 z-0">

        <div className="top-0 left-0 right-0 bottom-0 z-[1] bg-black/50">
        <p id="demostracion"></p>
          <h1 className="text-white text-center text-5xl lg:pt-10 pt-20 hover:text-yellow-400 cursor-default hover:scale-105 transition duration-150 ease-in-out font-bold mx-auto lg:w-[65%] w-full">
            ¿No sabes como comenzar? ¡Elige TU Plantilla!
          </h1>

          <Zoom {...zoomInProperties}>
            {images.map((each, index) => (
              <div key={index} className="flex justify-center lg:items-top lg:pt-14 pt-[50%] lg:w-full lg:h-full w-screen h-screen relative">
                <img className="lg:w-[55%] lg:h-[80%] w-[80%] h-[50%] border rounded-lg border-fuchsia-500 hover:scale-105 transition duration-150 ease-in-out cursor-pointer" src={each} />
              </div>
            ))}
          </Zoom>

          


        </div>
      </div>
    
  )
}

export default PaginasWeb
