// import { useState } from 'react's
// import React from 'react'
// import {BrowserRouter as Router} from 'react-dom'
// import Router from './Routes'
import CarSelection from './CarSelection'
import { ListCars } from './ListCars'
import Timer from './Timer'
import Clock from './Clock'

function App() {
  // const [count, setCount] = useState(0)
  const listCars = ListCars
  return (
    <>
      <CarSelection data ={listCars}/>
      <Timer />
      <Clock />
    </>
  )
}

export default App
