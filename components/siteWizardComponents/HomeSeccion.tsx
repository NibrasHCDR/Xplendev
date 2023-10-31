'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface SeccionData {
  titulo: string;
  subtitulo1: string;
  subtitulo2: string;
  boton: string;
  imagen: string;
}

function Seccion1() {
  const [seccion, setSeccion] = useState<SeccionData | null>(null);

  useEffect(() => {
    // Reemplaza 'mi-id' con el ID de la sección que deseas obtener
    const id = '6540049673bc22c84895e97b';

    // Realiza una solicitud GET a la API para obtener la sección por ID
    axios.get<SeccionData>(`http://localhost:3000/api/secciones/${id}`)
      .then((response) => {
        if (response.status === 200) {
          // La solicitud fue exitosa, y los datos de la sección se encuentran en response.data
          const seccionData = response.data;
          setSeccion(seccionData);
        } else {
          console.log('Error al obtener la sección solicitada');
        }
      })
      .catch((error) => {
        console.error('Error de red o solicitud:', error);
      });
  }, []); // El segundo argumento vacío [] asegura que esto se ejecute solo una vez al montar el componente

  return (
    <div className="text-white">
      <h1>Detalles de la Sección</h1>
      {seccion ? (
        <div>
          <h2>Título: {seccion.titulo}</h2>
          <p>Subtítulo 1: {seccion.subtitulo1}</p>
          <p>Subtítulo 2: {seccion.subtitulo2}</p>
          <p>Botón: {seccion.boton}</p>
          <p>URL de la Imagen: {seccion.imagen}</p>
        </div>
      ) : (
        <p>Cargando datos de  la sección...</p>
      )}
    </div>
  );
}

export default Seccion1;