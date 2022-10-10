import React, {useState, useEffect} from 'react'

const EstadisticasGeneralesHome = () => {
    const [answers, setAnswers] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const dataFromServer = await fetch('http://localhost:4000/group')
            const data = await dataFromServer.json()
            return setAnswers(data.data.length)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
        setLoading(false)
    }, [])

  return (
    <>
     <h3>Estadísticas Generales</h3>
     <p>Total de encuestas: {loading ? 'Cargando...' : answers}</p>
    </>
  )
}

export default EstadisticasGeneralesHome