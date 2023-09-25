'use client';
import  { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useEffect } from 'react';
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav);
};

useEffect(() => {
     const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor('#ffffff')
            setTextColor('#000000')
        } else {
            setColor('transparent')
            setTextColor('#ffffff')
        }
     };
     window.addEventListener('scroll', changeColor);
}, []);


  return (
    <div style={{backgroundColor: `${color}`}} className="w-screen fixed left-0 top-0 z-10 ease-in duration-300">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4 text-white">
            <Link href={""}>
            <motion.img 
              className="w-[45%] h-[45%] font-bold text-4xl hover:scale-125 transition duration-20 ease-in-out cursor-default"
              src="https://i.postimg.cc/nhjkmZ67/xplendev-1-Transparent.png"
              >
              </motion.img>
            </Link>
            <ul style={{color: `${textColor}`}} className="hidden sm:flex">
                <li className="p-4">
                  <Link href={"/"}>
                  <button type="button"
                        className="inline-block hover:scale-105 rounded-full border-2 border-fuchsia-500 hover:text-fuchsia-500 px-6 pb-[6px] pt-2 lg:text-lg text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-white hover:bg-opacity-[2%] focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700"
                        data-te-ripple-init>Inicio</button>
                  </Link>
                </li>
                <li className="p-4">
                <Link href="/MisPaginasWeb">
                <button type="button"
                        className="inline-block hover:scale-105 rounded-full border-2 border-fuchsia-500 hover:text-fuchsia-500 px-6 pb-[6px] pt-2 lg:text-lg text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-opacity-[2%] hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 hover:bg-white "
                        data-te-ripple-init>Páginas Web</button>
                </Link>
                </li>
                <li className="p-4">
                <Link href={"/Membersias"}>
                <button type="button"
                        className="inline-block hover:scale-105 rounded-full border-2 hover:bg-white border-fuchsia-500 hover:text-fuchsia-500 lg:text-lg text-xs px-6 pb-[6px] pt-2 font-medium uppercase leading-normal text-primary transition duration-150 hover:bg-opacity-[2%] ease-in-out hover:border-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700"
                        data-te-ripple-init>Membersías</button>
                </Link>
                </li>
                <li className="p-4">
                <Link href={"/contacto"}>
                <button type="button"
                        className="inline-block hover:scale-105 rounded-full border-2 border-fuchsia-500 hover:text-fuchsia-500 px-6 pb-[6px] pt-2 lg:text-lg text-xs hover:bg-white hover:bg-opacity-[2%] font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700"
                        data-te-ripple-init>Contacto</button>
                </Link>
                </li>
            </ul>

            {/* Botones Móviles */}
            <button onClick={handleNav} className="block sm:hidden z-10 hover:scale-150 hover:text-fuchsia-500 transition duration-150 ease-in-out">
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} style={{color: `${textColor}`}} />}
                
            </button>
            {/* Movile Menu */}
            <div className={
                nav
                 ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                 : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                   
                }
                 >
            <ul>
                <li onClick={handleNav} className="p-4 text-4xl hover:text-fuchsia-500 transition duration-150 ease-in-out hover:scale-125">
                  <Link href={"/"}>Inicio</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-4xl hover:text-fuchsia-500 transition duration-150 ease-in-out hover:scale-125">
                <Link href={"/MisPaginasWeb"}>Páginas Web</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-4xl hover:text-fuchsia-500 transition duration-150 ease-in-out hover:scale-125">
                <Link href={"/Membersias"}>Membersías</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-4xl hover:text-fuchsia-500 transition duration-150 ease-in-out hover:scale-125">
                <Link href={"/contacto"}>Contacto</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Header