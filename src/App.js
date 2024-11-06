import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Advertisement, Static, Dashboard, Games, Wallet, Chat, GameDetails } from './pages'

const App = () => {
  return (
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='games/advertisement' element={<Advertisement />} />
       <Route path='/:slug' element={<Static />} />
       <Route path='/dashboard' element={<Dashboard />} />
       <Route path='/wallet' element={<Wallet />} />
       <Route path='/chat' element={<Chat />} />
       <Route path='/profile/:slug' element={<Dashboard />} />
       <Route path='/my/games' element={<Games />} />
       <Route path='/game/:slug' element={<GameDetails />} />
    </Routes>


  )
}

export default App
