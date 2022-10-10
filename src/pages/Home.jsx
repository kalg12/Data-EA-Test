import React from 'react'
import ChartGeneral from '../components/ChartGeneral'
import EstadisticasGeneralesHome from '../components/EstadisticasGeneralesHome'
import Inicio from '../components/Inicio'
import Table from '../components/Table'

const Home = () => {
  return (
    <>
    <Inicio/>
    <Table/>
    <EstadisticasGeneralesHome/>
    <ChartGeneral/>
    </>
  )
}

export default Home