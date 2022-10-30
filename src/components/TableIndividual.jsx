import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TableIndividual = () => {

  const [data, setData] = useState([]); // Trae los datos de la API y los guarda en un array
  const [individualData, setIndividualData] = useState([]); // Guarda los datos de la API en un array
  const [currentCurp, setCurrentCurp] = useState(0); // Guarda la posición del array de la CURP seleccionada
  const [curp, setCurp] = useState(""); // Guarda la CURP seleccionada
  const [answers, setAnswers] = useState({}); // Guarda las respuestas de la encuesta
  //Usamos el useState para usar spread operator y poder agregar las respuestas de la encuesta

  //Endpoint #1 para traer información general de alumnos de la API
  //Endpoint #2 para traer información de las respuestas de la encuesta de alumnos de la API por CURP

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
    <tbody>
      <td>3</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element3 === "A" ? "X" : ""}</td>
      <td>{element3 === "B" ? "X" : ""}</td>
      <td>{element3 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>4</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element4 === "A" ? "X" : ""}</td>
      <td>{element4 === "B" ? "X" : ""}</td>
      <td>{element4 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>5</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element5 === "A" ? "X" : ""}</td>
      <td>{element5 === "B" ? "X" : ""}</td>
      <td>{element5 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>6</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element6 === "A" ? "X" : ""}</td>
      <td>{element6 === "B" ? "X" : ""}</td>
      <td>{element6 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>7</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element7 === "A" ? "X" : ""}</td>
      <td>{element7 === "B" ? "X" : ""}</td>
      <td>{element7 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>8</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element8 === "A" ? "X" : ""}</td>
      <td>{element8 === "B" ? "X" : ""}</td>
      <td>{element8 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>9</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element9 === "A" ? "X" : ""}</td>
      <td>{element9 === "B" ? "X" : ""}</td>
      <td>{element9 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>10</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element10 === "A" ? "X" : ""}</td>
      <td>{element10 === "B" ? "X" : ""}</td>
      <td>{element10 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>11</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element11 === "A" ? "X" : ""}</td>
      <td>{element11 === "B" ? "X" : ""}</td>
      <td>{element11 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>12</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element12 === "A" ? "X" : ""}</td>
      <td>{element12 === "B" ? "X" : ""}</td>
      <td>{element12 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>13</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}

      <td>{element13 === "A" ? "X" : ""}</td>
      <td>{element13 === "B" ? "X" : ""}</td>
      <td>{element13 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>14</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element14 === "A" ? "X" : ""}</td>
      <td>{element14 === "B" ? "X" : ""}</td>
      <td>{element14 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>15</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element15 === "A" ? "X" : ""}</td>
      <td>{element15 === "B" ? "X" : ""}</td>
      <td>{element15 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>16</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element16 === "A" ? "X" : ""}</td>
      <td>{element16 === "B" ? "X" : ""}</td>
      <td>{element16 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>17</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element17 === "A" ? "X" : ""}</td>
      <td>{element17 === "B" ? "X" : ""}</td>
      <td>{element17 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>18</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element18 === "A" ? "X" : ""}</td>
      <td>{element18 === "B" ? "X" : ""}</td>
      <td>{element18 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>19</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element19 === "A" ? "X" : ""}</td>
      <td>{element19 === "B" ? "X" : ""}</td>
      <td>{element19 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>20</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element20 === "A" ? "X" : ""}</td>
      <td>{element20 === "B" ? "X" : ""}</td>
      <td>{element20 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>21</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element21 === "A" ? "X" : ""}</td>
      <td>{element21 === "B" ? "X" : ""}</td>
      <td>{element21 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>22</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element22 === "A" ? "X" : ""}</td>
      <td>{element22 === "B" ? "X" : ""}</td>
      <td>{element22 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>23</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element23 === "A" ? "X" : ""}</td>
      <td>{element23 === "B" ? "X" : ""}</td>
      <td>{element23 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>24</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element24 === "A" ? "X" : ""}</td>
      <td>{element24 === "B" ? "X" : ""}</td>
      <td>{element24 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>25</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element25 === "A" ? "X" : ""}</td>
      <td>{element25 === "B" ? "X" : ""}</td>
      <td>{element25 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>26</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element26 === "A" ? "X" : ""}</td>
      <td>{element26 === "B" ? "X" : ""}</td>
      <td>{element26 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>27</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element27 === "A" ? "X" : ""}</td>
      <td>{element27 === "B" ? "X" : ""}</td>
      <td>{element27 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>28</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element28 === "A" ? "X" : ""}</td>
      <td>{element28 === "B" ? "X" : ""}</td>
      <td>{element28 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>29</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element29 === "A" ? "X" : ""}</td>
      <td>{element29 === "B" ? "X" : ""}</td>
      <td>{element29 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>30</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element30 === "A" ? "X" : ""}</td>
      <td>{element30 === "B" ? "X" : ""}</td>
      <td>{element30 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>31</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element31 === "A" ? "X" : ""}</td>
      <td>{element31 === "B" ? "X" : ""}</td>
      <td>{element31 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>32</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element32 === "A" ? "X" : ""}</td>
      <td>{element32 === "B" ? "X" : ""}</td>
      <td>{element32 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>33</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element33 === "A" ? "X" : ""}</td>
      <td>{element33 === "B" ? "X" : ""}</td>
      <td>{element33 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>34</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element34 === "A" ? "X" : ""}</td>
      <td>{element34 === "B" ? "X" : ""}</td>
      <td>{element34 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>35</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element35 === "A" ? "X" : ""}</td>
      <td>{element35 === "B" ? "X" : ""}</td>
      <td>{element35 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>36</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element36 === "A" ? "X" : ""}</td>
      <td>{element36 === "B" ? "X" : ""}</td>
      <td>{element36 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>37</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element37 === "A" ? "X" : ""}</td>
      <td>{element37 === "B" ? "X" : ""}</td>
      <td>{element37 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>38</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element38 === "A" ? "X" : ""}</td>
      <td>{element38 === "B" ? "X" : ""}</td>
      <td>{element38 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>39</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element39 === "A" ? "X" : ""}</td>
      <td>{element39 === "B" ? "X" : ""}</td>
      <td>{element39 === "C" ? "X" : ""}</td>
    </tbody>
    <tbody>
      <td>40</td>
      {/* Si el elemento es A, lo pintamos en el primer campo, si es B, en el segundo y si es C en el tercero */}
      <td>{element40 === "A" ? "X" : ""}</td>
      <td>{element40 === "B" ? "X" : ""}</td>
      <td>{element40 === "C" ? "X" : ""}</td>
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