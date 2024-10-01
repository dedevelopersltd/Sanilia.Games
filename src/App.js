import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Advertisement, Static, Dashboard } from './pages'

const App = () => {
  return (
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='games/advertisement' element={<Advertisement />} />
       <Route path='/:slug' element={<Static />} />
       <Route path='/dashboard' element={<Dashboard />} />
       
    </Routes>


  )
}

export default App
