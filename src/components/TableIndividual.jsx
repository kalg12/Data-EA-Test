import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TableIndividual = () => {

  const [data, setData] = useState([]); // Trae los datos de la API y los guarda en un array
  const [individualData, setIndividualData] = useState([]); // Guarda los datos de la API en un array
  const [currentCurp, setCurrentCurp] = useState(0);
  const [curp, setCurp] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGrupal = async () => {
      try {
        const response = await fetch("http://localhost:4000/group");
        const data = await response.json();
        setData(data);
        setCurp(data.data[currentCurp].curp)
      } catch (error) {
        console.log(error);
      }
    };

    const getIndividual = async () => {
      try {
        const response = await fetch(`http://localhost:4000/individual/${curp}`);
        const data = await response.json();
        setIndividualData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGrupal();
    getIndividual();
  }, [currentCurp, curp]);

  const handleNext = () => {
    if (currentCurp < data.data.length - 1) {
      setCurrentCurp(currentCurp + 1);
      setCurp(data.data[currentCurp].curp)
    }
  };

  const handlePrev = () => {
    if (currentCurp > 0) {
      setCurrentCurp(currentCurp - 1);
      setCurp(data.data[currentCurp].curp)
    }
  };

  return (
    <>
      <h1>Tabla individual por alumno</h1>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => handlePrev()}>
          Atrás
        </Button>
        <Button variant="contained" onClick={() => handleNext()}>
          Siguiente
        </Button>
      </Stack>
      <h3>La curp actual es: {curp}</h3>
      <h3>
        Nombre del alumno: {data.data && data.data[currentCurp].nombre} {data.data && data.data[currentCurp].apellido}
      </h3>
      <h4>
        Tipo de estilo de aprendizaje: {individualData.dominantLearningType}
      </h4>
      {/* Creamos una tabla, que tenga como encabezado: Pregunta, Visual, Auditivo y Kinestésico; del lado izquierdo iran los números del 1 al 40 de las respuestas */}
      <table>
        <thead>
          <tr>
            <th>Resultados</th>
            <th>Visual</th>
            <th>Auditivo</th>
            <th>Kinestésico</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <td>Total</td>
                <td>{individualData.data && individualData.data[0].visual}</td>
                <td>{individualData.data && individualData.data[0].auditivo}</td>
                <td>{individualData.data && individualData.data[0].kinestesico}</td>
              </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableIndividual;