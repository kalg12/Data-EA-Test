import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TableIndividual = () => {

  const [data, setData] = useState([]); // Trae los datos de la API y los guarda en un array
  const [individualData, setIndividualData] = useState([]); // Guarda los datos de la API en un array
  const [currentCurp, setCurrentCurp] = useState(0); // Guarda la posición del array de la CURP seleccionada
  const [curp, setCurp] = useState(""); // Guarda la CURP seleccionada
  const [answers, setAnswers] = useState({}); // Guarda las respuestas de la encuesta

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
        setAnswers(data.answers);
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
    }
  };

  const handlePrev = () => {
    if (currentCurp > 0) {
      setCurrentCurp(currentCurp - 1);
    }
  };

  console.log(answers[0]);

  /* Destrcturamos answers.[0], los 40 elementos, element1, element2... hasta element40 */
  const {
    element1,
    element2,
    element3,
    element4,
    element5,
    element6,
    element7,
    element8,
    element9,
    element10,
    element11,
    element12,
    element13,
    element14,
    element15,
    element16,
    element17,
    element18,
    element19,
    element20,
    element21,
    element22,
    element23,
    element24,
    element25,
    element26,
    element27,
    element28,
    element29,
    element30,
    element31,
    element32,
    element33,
    element34,
    element35,
    element36,
    element37,
    element38,
    element39,
    element40,
  } = answers[0] || {};

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
      <table>
		<thead>
			<tr>
				<th>Pregunta</th>
				<th>Visual</th>
				<th>Auditivo</th>
				<th>Kinestéssico</th>
			</tr>
		</thead>
		<tbody>
			<td>1</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element1 === "A" ? "X" : ""}</td>
      <td>{element1 === "B" ? "X" : ""}</td>
      <td>{element1 === "C" ? "X" : ""}</td>
		</tbody>
    <tbody>
			<td>2</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element2 === "A" ? "X" : ""}</td>
      <td>{element2 === "B" ? "X" : ""}</td>
      <td>{element2 === "C" ? "X" : ""}</td>
		</tbody>

	</table>
      <hr></hr>
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