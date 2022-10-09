import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Home from '../pages/Home'
import ResultsByStudent from '../pages/ResultsByStudent'

const AppRoutes = () => {
  return (
    <Router>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resultados-por-estudiante" element={<ResultsByStudent/>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes