import Inicio from "./components/Inicio";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Table from "./components/Table";
import TableIndividual from "./components/TableIndividual";

function App() {
  return (
    <>
      <ResponsiveAppBar/>
      <Inicio/>
      <Table/>
      <br></br>
      <TableIndividual/>
      <br></br>
      <h6 align="center">Desarrollado por Kevin Luciano</h6>
    </>
  );
}

export default App;