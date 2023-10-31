import Head from 'next/head'
import Inicio from '../../components/Inicio'
import Presentacion from '../../components/Presentacion'
import Membersias from '../../components/Membersias'
import Metodologia from '../../components/Metodologia'
import Contacto from '../../components/Contacto'
import Diseño from '../../components/Diseño'
import Footer from '../../components/Footer'
import Header from '../../components/Header'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>XplenDev</title>
        <meta name='description' content='Generates By Create' />
        <link rel='icon' href='https://i.postimg.cc/nhjkmZ67/xplendev-1-Transparent.png' />
      </Head>
      <Header />
      <section><Inicio/></section>
      <section id="diseño"><Presentacion/></section>
      <section><Diseño></Diseño></section>
      <section id="metodologia"><Metodologia/></section>
      <section id="membersias"><Membersias/></section>
      <section id="contacto"><Contacto/></section>
      <section id="footer"><Footer></Footer></section>
      
    </div>
  )
}
