import Image from 'next/image'
import Head from 'next/head'
import Inicio from '../../components/Inicio'
import Slider from '../../components/Slider'
import { SliderData } from '../../components/SliderData'
import Presentacion from '../../components/PaginasWeb'
import PaginasWeb from '../../components/PaginasWeb'
import Membersias from '../../components/Membersias'
import Script from 'next/script'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name='description' content='Generates By Create' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Inicio/>
      <PaginasWeb/>
      <Membersias/>
    </div>
  )
}
