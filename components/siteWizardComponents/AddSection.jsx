"use client"
import React from 'react'
import { useState } from "react"
import axios from "axios"
import { useRouter } from 'next/navigation'


const AddSection = () => {


    const router = useRouter()
    const [visibility, setVisibility] = useState(false)
    const [inputs, setInputs] = useState({})

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("/api/secciones", inputs).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setInputs({})
            router.refresh()
        })
}

const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((prevState) => ({...prevState, [name]: value}))
}

return(

<div className="w-auto h-auto flex justify-center">

<form className="space-y-4 mt-5 text-start font-roboto" onSubmit={handleSubmit}>

    <input className="block w-full py-2 px-3" type="text" placeholder="Titulossscsac" name="titulo" value={inputs.titulo || ""} onChange={handleChange}/>

    <input className="block w-full py-2 px-3" type="text" placeholder="subtcsacsa" name="subtitulo1" value={inputs.subtitulo1 || ""} onChange={handleChange}></input>

    <input className="block w-full py-2 px-3" type="text" placeholder="subtitulo2cc" name="subtitulo2" value={inputs.subtitulo2 || ""} onChange={handleChange}></input>

    <input className="block w-full py-2 px-3" type="text" placeholder="boton"
    name="boton" value={inputs.boton || ""} onChange={handleChange}></input>

    <input className="block w-full py-2 px-3" type="text" placeholder="imagen"
    name="imagen" value={inputs.imagen || ""} onChange={handleChange}></input>

    <button className="block mx-auto text-lg bg-white" type='submit'> DALE! </button>
  </form>

</div>

)

}

export default AddSection