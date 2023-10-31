import React from 'react'
import AddSection from '../siteWizardComponents/AddSection'
import SeccionList from './SeccionList'
import SideBar from './SideBar'

async function getData() {
  const res = await fetch("http://localhost:3000/api/secciones", { cache: 'no-store'})

  if (!res.ok) {
    throw new Error("Fallo al cargar datos")
  }
  
  return res.json()

}


const Main = async() =>{
  const secciones = await getData()

  return (
    <div className="w-screen h-screen bg-[#0C0F18] flex pl-[250px]">
    <div className="w-full h-full block">
        <div className="flex justify-center">
        <h1 className="lg:text-5xl font-kanit text-white lg:p-32 p-4">SiteWizard v 0.001</h1>
        </div>
            
            <AddSection/>
             <section>
             <SeccionList secciones={secciones}/>
             </section>
            
    </div> 
  </div>
  )
}

export default Main