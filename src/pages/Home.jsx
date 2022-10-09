import React from 'react'
import ChartGeneral from '../components/ChartGeneral'
import Inicio from '../components/Inicio'
import Table from '../components/Table'

const Home = () => {
  return (
    <>
    <Inicio/>
    <Table/>
    <h3>Estadísticas Generales</h3>
    <ChartGeneral/>
    </>
  )
}

export default Home