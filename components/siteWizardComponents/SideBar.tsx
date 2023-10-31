import React from 'react'
import Image from 'next/image'
import myImage from '../../public/icons/sitewizardicon-75x75.png'
import Link from 'next/link'

type Props = {}

const links = [{
    label: 'Sitewizard',
    route: '/Sitewizard'
  }, {
    label: 'Home',
    route: '/Home'
  }, {
    label: 'Seccion1',
    route: '/Seccion1'
  }, {
    label: 'Seccion2',
    route: '/Seccion2'
  }, {
    label: 'Seccion3',
    route: '/Seccion3'
  }, {
    label: 'Seccion4',
    route: '/Seccion4'
  }, {
    label: 'Seccion5',
    route: '/Seccion5'
  }, {
    label: 'Pie de Página',
    route: '/Footer'
  }, {
    label: 'Encabezado',
    route: '/Header'
  }, {
    label: 'Cerrar Sesión',
    route: '/'
  }]

const SideBar = (props: Props) => {
  return (
    <div className="h-screen w-[250px] bg-[#2D62ED] text-white space-y-3 absolute pt-32 border-r-4 rounded-tr-3xl">
    <div className="h-auto w-auto">
        <div className="flex w-auto h-auto px-8 py-4 no-select">
          <Link href={links[0].route}>
          
                <Image className="w-[75px] h-[75px]" src={myImage} alt={''}>
                </Image>
          </Link>
                <div className="my-auto">
                <h1 className="text-white font-kanit text-lg">SiteWizard</h1>
                <h1 className="text-white font-kanit text-lg">V0.01</h1>
                </div>   
        </div>
        <Link href={links[8].route}>
        <div className="flex w-[250px] h-auto px-8 py-4 hover:bg-blue-400 cursor-pointer">
            
                <h1 className="text-white font-kanit lg:text-2xl no-select">{links[8].label}</h1>
            
        </div>
        </Link>
        <Link href={links[1].route}>
        <div className="flex w-[250px] h-auto px-8 py-4 hover:bg-blue-400 cursor-pointer">
            
                <h1 className="text-white font-kanit lg:text-2xl no-select">{links[1].label}</h1>
            
        </div>
        </Link>
        <Link href={links[2].route}>
        <div className="flex w-[250px] h-auto px-8 py-4 hover:bg-blue-400 cursor-pointer">
                <h1 className="text-white font-kanit lg:text-2xl no-select">{links[2].label}</h1>
        </div>
        </Link>
        <Link href={links[3].route}>
        <div className="flex w-[250px] h-auto px-8 py-4 hover:bg-blue-400 cursor-pointer">
                <h1 className="text-white font-kanit lg:text-2xl no-select">{links[3].label}</h1>
        </div>
        </Link>
        <Link href={links[4].route}>
        <div className="flex w-[250px] h-auto px-8 py-4 hover:bg-blue-400 cursor-pointer"> 

                <h1 className="text-white font-kanit lg:text-2xl no-select">{links[4].label}</h1>
        </div>
        </Link>
        <Link href={links[5].route}>
        <div className="flex w-[250px] h-auto px-8 py-4 hover:bg-blue-400 cursor-pointer">

                <h1 className="text-white font-kanit lg:text-2xl no-select">{links[5].label}</h1>
        </div>
        </Link>
        <Link href={links[6].route}>
        <div className="flex w-[250px] h-auto px-8 py-4 hover:bg-blue-400 cursor-pointer">

                <h1 className="text-white font-kanit lg:text-2xl no-select">{links[6].label}</h1>
        </div>
        </Link>
        <Link href={links[7].route}>
        <div className="flex w-[250px] h-auto px-8 py-4 hover:bg-blue-400 cursor-pointer">

                <h1 className="text-white font-kanit lg:text-2xl no-select">{links[7].label}</h1>
        </div>
        </Link>
        <Link href={links[9].route}>
        <div className="flex w-[250px] h-auto px-8 py-4 hover:bg-blue-400 cursor-pointer">

                <h1 className="text-white font-kanit lg:text-2xl no-select">{links[9].label}</h1>
        </div>
        </Link>

        </div>
    </div>
  )
}

export default SideBar