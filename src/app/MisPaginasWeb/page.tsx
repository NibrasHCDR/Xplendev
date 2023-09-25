import '../globals.css'
import React from 'react'
import Header from '../../../components/Header'
import Head from 'next/head'
import Inicio from '../../../components/Inicio'
import Presentacion from '../../../components/PaginasWeb'

export default function MisPaginasWeb({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover fondo-img4">
    
    </div>
    <Presentacion/>
    </>

  )
}