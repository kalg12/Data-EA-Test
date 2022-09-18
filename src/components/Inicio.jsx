import React, {useEffect} from 'react'

const Inicio = () => {

  /* Realizamos fetch a http://localhost:4000/group y agregamos una opción de paginación para mostrar el siguiente objeto */
  useEffect(() => {
    fetch('http://localhost:4000/group')
      .then(response => response.json())
      .then(data => console.log(data.data))
  }, [])

  return (
    <>
        <h1>Inicio</h1>
        <p>Este sistema es para mostrar los resultados obtenidos de la encuesta de estilos de aprendizaje de los alumnos del Centro de Estudios Tecnológicos del Mar No. 18</p>
    </>
  )
}

export default Inicio