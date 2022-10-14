import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TableIndividual = () => {
  const [data, setData] = useState([]);
  const [individual, setIndividual] = useState(0);
  const [currentCurp, setCurrentCurp] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/group")
      .then((res) => res.json())
      .then((dataApi) => {
        return setData(dataApi)
      });
  }, []);

  const handleNext = () => {
    if (currentCurp < data.data.length - 1) {
      setIndividual(individual + 1);
      setCurrentCurp(currentCurp + 1);
    }
  };

  const handlePrev = () => {
    if (currentCurp > 0) {
      setIndividual(individual - 1);
      setCurrentCurp(currentCurp - 1);
    }
  };

  return (
    <>
      <h1>Tabla individual por alumno</h1>
      <h1>La curp actual es: {individual}</h1>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => handlePrev()}>
          Atrás
        </Button>
        <Button variant="contained" onClick={() => handleNext()}>
          Siguiente
        </Button>
      </Stack>
      <h3>
        Nombre del alumno: {data.data && data.data[currentCurp].nombre} {data.data && data.data[currentCurp].apellido}
      </h3>
      <h4>
        Tipo de estilo:{" "}
      </h4>
    </>
  );
};

export default TableIndividual;