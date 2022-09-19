import React, {useState, useEffect} from 'react'

const TableIndividual = () => {
  const [data, setData] = useState([])
  const [currentCurp, setCurrentCurp] = useState(0)

  useEffect(() => {
    fetch('http://localhost:4000/group')
    .then(res => res.json())
    .then(data => {
        setData(data)
        console.log(data)
    })
}, [])

const getArrayLength = (array) => {
  console.log((data.data.length))
}

const getCurrentCurp = () => {
  console.log(data.data[currentCurp].curp)
}

const handleNext = () => {
  if (currentCurp < data.data.length - 1) {
    setCurrentCurp(currentCurp + 1)
    console.log(data.data[currentCurp].curp)
    return data.data[currentCurp].curp
  }
}

const handlePrev = () => {
  if (currentCurp > 0) {
    setCurrentCurp(currentCurp - 1)
    console.log(data.data[currentCurp].curp)
    return data.data[currentCurp].curp
  }
}

/* Hacemos fetch para http://localhost:4000/individual/${curp} para recuperar los registros por usuario que retornamos de handleNext y handlePrev */
const handleIndividual = (curp) => {
  fetch(`http://localhost:4000/individual/${curp}`)
  .then(res => res.json())
  .then(data => {
      setData(data)
      console.log(data)
  })
}
  return (
    <>
    <h1>Tabla individual por alumno</h1>
    {/* Colocamos dos botones para registro anterior y siguiente */}
    <button onClick={getArrayLength}>Get array length</button>
    <button onClick={getCurrentCurp}>Get current curp</button>
    <button onClick={handleNext}>Next</button>
    <button onClick={handlePrev}>Prev</button>
    <button onClick={() => handleIndividual(data.data[currentCurp].curp)}>Individual</button>
    </>
  )
}

export default TableIndividual