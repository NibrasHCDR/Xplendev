'use client'
import React from 'react'

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from 'react'



const Seccion = ({seccion}) => {
  const router = useRouter()
  const [visibility, setVisibility] = useState(false)
  const [noteToEdit, setNoteToEdit] = useState(seccion)

  const editForm = () => {
    setVisibility(visibility => !visibility)

    
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    axios.patch(`/api/secciones/${seccion.id}`, noteToEdit).then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      router.refresh()
    })
     
  }

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value
  setNoteToEdit((prevState) => ({...prevState, [name]: value}))
}

const handleDeleteNote = (id) => {
  axios.delete(`/api/secciones/${id}`)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  }).finally (() => {
    router.refresh()
  })
}
  return (
    <div className="w-auto h-auto flex">
      <li className="w-auto" key={seccion.id}>
        <div className="space-y-2">
          <h2 className="text-lg font-kanit">Título: <br></br>{seccion.titulo}</h2> 
          <p className="text-lg font-kanit">Subtiítulo 1: <br></br>{seccion.subtitulo1}</p>
          <p className="text-lg font-kanit">Subtítulo 2:<br></br>{seccion.subtitulo2}</p>
          <p className="text-lg font-kanit">Botón:<br></br>{seccion.boton}</p>
          <p className="text-lg font-kanit">URL Imagen<br></br>{seccion.imagen}</p>
        </div>

        <div className="pt-5">
          <button className="btn btn-sm mr-3 bg-[#2D62ED] mt-2 p-2 rounded-md text-white" onClick={(e) =>editForm()}>
            Editar
          </button>
           <button onClick={() => handleDeleteNote(seccion.id)} 
           className="btn btn-sm mr-3 bg-[#2D62ED] mt-2 p-2 rounded-md text-white">Eliminar</button>
  
           {visibility && <div>
            <h2 className="text-center">Update</h2>
            <form onSubmit={handleEditSubmit} className="p-4 bg-warning mt-1 rounded-lg flex-col">
              <div>
                <input
                value={noteToEdit.titulo || ""}
                onChange={handleChange}
                name="titulo"
                className="p-4 w-full outline-none" type="text"  id="titulo"></input>
              </div>
                <div>
                  <input
                  value={noteToEdit.subtitulo1 || ""}
                  onChange={handleChange}
                  name="subtitulo1"
                  className="p-4 w-full mt-3 outline-none" type="text" id="subtitulo1"></input>
                </div>
                <div>
                  <input
                  value={noteToEdit.subtitulo2 || ""}
                  onChange={handleChange}
                  name="subtitulo2"
                  className="p-4 w-full mt-3 outline-none" type="text" id="subtitulo2"></input>
                </div>
                <div>
                  <input
                  value={noteToEdit.boton || ""}
                  onChange={handleChange}
                  name="boton"
                  className="p-4 w-full mt-3 outline-none" type="text" id="boton"></input>
                </div>
                <div>
                  <input
                  value={noteToEdit.imagen || ""}
                  onChange={handleChange}
                  name="imagen"
                  className="p-4 w-full mt-3 outline-none" type="text" id="imagen"></input>
                </div>
                <button type="submit" className="btn btn-sm mr-3 bg-[#2D62ED] mt-2 p-2 rounded-md text-white">Update</button>
                <button onClick={() => setVisibility(visibility => !visibility)} 
                className="btn btn-sm mr-3 bg-[#2D62ED] mt-2 p-2 rounded-md text-white">Ocultar</button>
            </form>
            
            </div>
            }

        </div>

      </li>
    </div>
  )
}

export default Seccion