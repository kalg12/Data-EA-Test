import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';

const Table = () => {
  /* Realizamos fetch a http://localhost:4000/group y resolvemos la promesa, entramos al array data e iteramos cada objeto */
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/group')
      .then(response => response.json())
      .then(data => setData(data.data))
  }, [])

  /* Destructuramos la data del fetch por cada objeto */
  const newObjetc = data.map((item) => {
    const { auditivo, kinestesico, visual } = item
    const max = Math.max(visual, auditivo, kinestesico);

    const dominantLearningType = []
    if (max === visual) {
      dominantLearningType.push('Visual');
    }
    if (max === auditivo) {
        dominantLearningType.push('Auditivo');
    }
    if (max === kinestesico) {
        dominantLearningType.push('Kinestesico');
    }

    return {
      dominante: dominantLearningType
    }
  })

  /* Creamos un array de objetos con los datos que queremos mostrar en la tabla */
  const rows = data.map((item, index) => (
    {
      id: index,
      curp: item.curp,
      nombre: item.nombre,
      apellido: item.apellido,
      grupo: item.grupo,
      estilo: newObjetc[index].dominante
    }
  ))

  /* Creamos un array de objetos con los datos que queremos mostrar en la tabla */
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'curp', headerName: 'CURP', width: 200 },
    { field: 'nombre', headerName: 'Nombre', width: 200 },
    { field: 'apellido', headerName: 'Apellido', width: 200 },
    { field: 'grupo', headerName: 'Grupo', width: 130 },
    { field: 'estilo', headerName: 'Estilo de aprendizaje', width: 200 },
  ];


  return (
    <>
         <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  )
}

export default Table