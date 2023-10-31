'use client'
import Image from 'next/image'
import myImage from '../../public/cms-sitewizard.png'

import axios from "axios"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

function AdministracionHome({}: Props) {

  return ( 
      <div className="w-screen h-screen bg-[#0C0F18]">
        <div className="w-full h-full">
        <div className="grid-containerAdmin1 w-auto h-auto lg:pt-72 lg:mx-32 pt-32 mx-3">

        <div className="ah-1 flex flex-col justify-center"> 
           <div className="w-auto h-auto lg:text-start text-center inline:block">
             <h1 className="font-kanit no-select lg:text-7xl text-4xl text-white">
             SiteWizard CMS
             </h1>
             <h2 className="font-kanit no-select xl:text-2xl text-white">
               ByXplenDev
             </h2>
             <h2 className="font-kanit no-select lg:pt-6 pt-1 xl:text-2xl text-white">
               Administra tu página web
             </h2>
             <button className="bg-[#0494FC] mt-8 text-center xl:text-xl font-rubik text-white p-4 rounded-sm no-select hover:scale-105 transition duration-300 ease-in-out">
               Administrar →
             </button>
            </div>
        </div>

        <div className="ah-2 w-full h-full flex flex-col justify-end items-center">
          <div className="w-auto h-auto">
          <Image className="w-auto h-auto" src={myImage} alt={''}></Image>
          </div>
        
        </div>
        </div>
        </div> 
      </div>
  )
}

export default AdministracionHome
