import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Callpage from '../components/Callpage/Callpage'
import Home from '../components/Homepage/Home'
import NoMatch from '../components/NoMatch/NoMatch'
function Mainrouter() {
  return (
    <div>
        <Routes>
            <Route path='/:id' element={<Callpage/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='*' element={<NoMatch/>}></Route>
        </Routes>
    </div>
  )
}

export default Mainrouter