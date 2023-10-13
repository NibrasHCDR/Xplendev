import React from 'react'

type Props = {}

function Membersias({}: Props) {

  
  return (
    <div className="h-screen w-screen bg-center bg-cover bg-fixed fondo-img9 z-0 shadow-xl">
      <div className="h-screen w-screen bg-white/50">

      <div className="w-screen h-auto my-auto">

      <div className="text-center text-black">
        <h1 className="pt-5 xl:text-6xl text-2xl cursor-default">Hazte miembro y comienza a construir</h1>
        <h1 className="pt-5 xl:text-6xl text-2xl cursor-default">tu presencia en línea</h1>
      </div>       
      </div>

      <div className="flex h-auto w-auto justify-center">
        <div className="bg-[#F3F3F3] shadow-xl border-2 border-[#ED1FE8]/20 shadow-[#ED1FE8]/40 rounded-md w-[420px] h-[550px] xl:m-10">
          <div className="flex w-full h-1/6 bg-blue-900 text-center">
            <h1 className="text-white xl:text-2xl mx-auto my-auto">One Page Standart</h1>
          </div>
          <div className="flex w-full h-1/5">
            <h1 className="xl:text-6xl mx-auto my-auto textShadow text-blue-900">$0.00</h1>
          </div>
          <div className="w-auto h-auto bg-red-400 xl:mx-4 xl:my-4">
            <h1 className="xl:text-xl font-principal"> - Diseño Pre-Diseñado</h1>
            <h1 className=""> - 1 Correo Corporativo</h1>
            <h1 className=""> - 1 Correo Corporativo</h1>
            <h1 className=""> - 1 Correo Corporativo</h1>
            <h1 className=""> - 1 Correo Corporativo</h1>
          </div>
        </div>

        <div className="bg-[#F3F3F3] shadow-xl border-2 border-[#ED1FE8]/20 shadow-[#ED1FE8]/40 rounded-md w-[420px] h-[550px] xl:m-10">
          <div className="flex w-full h-1/6 bg-blue-900 text-center">
            <h1 className="text-white xl:text-2xl mx-auto my-auto">One Page Personalizada</h1>

          </div>
        </div>

        <div className="bg-[#F3F3F3] shadow-xl border-2 border-[#ED1FE8]/20 shadow-[#ED1FE8]/40 rounded-md w-[420px] h-[550px] xl:m-10">
        <div className="flex w-full h-1/6 bg-[#ED1FE8]/60 text-center">
            <h1 className="text-white xl:text-2xl mx-auto my-auto">Web Custom Pro</h1>

          </div>
        </div>
      </div>

      <div className="flex w-full h-full justify-center bg-[#ED1FE8]/60 max-h-[290px] border-2 border-blue-900/40">

        <div className="inline:block text-white h-full text-center">

          <h1 className="xl:text-4xl xl:mt-12">Únete a XplenDevelopers</h1>
          <h1 className="xl:text-xl xl:mt-4">Si tienes dudas respecto a como funcionan los planes de contratación contáctanos directamente</h1>
          <button className="xl:text-lg xl:mt-10 mt-2 bg-white text-[#ED1FE8] hover:scale-110 hover:animate-pulse rounded-full  border-4 border-white font-medium uppercase leading-normal transition duration-150 ease-in-out active:border-primary-700 active:text-primary-700 shadow-md shadow-[#ED1FE8] px-6 pb-[6px] pt-2">Conocer más</button>

        </div>

      </div>

      </div>

    </div>
  )
}

export default Membersias