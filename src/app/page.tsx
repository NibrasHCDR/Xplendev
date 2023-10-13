import Image from 'next/image'
import Head from 'next/head'
import Inicio from '../../components/Inicio'
import Slider from '../../components/Slider'
import { SliderData } from '../../components/SliderData'
import Presentacion from '../../components/Presentacion'
import PaginasWeb from '../../components/PaginasWeb'
import Membersias from '../../components/Membersias'
import Script from 'next/script'
import Metodologia from '../../components/Metodologia'
import Contacto from '../../components/Contacto'
import Diseño from '../../components/Diseño'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <meta name='description' content='Generates By Create' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Inicio/>
      <Presentacion/>
      <Diseño/>
      <Metodologia/>
      <Membersias/>
      <Contacto/>
      <Footer/>
    </div>
  )
}
