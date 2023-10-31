import React from 'react'
import Seccion from './Seccion'

const SeccionList = ({secciones}) => {
  return (
    <ul className="flex flex-wrap gap-4 mt-8 justify-center bg-white p-4 rounded-lg">

      {
        secciones.map(seccion => (
          <Seccion key={seccion.id} seccion={seccion} />
        ))
      }

    </ul>
  )
}

export default SeccionList