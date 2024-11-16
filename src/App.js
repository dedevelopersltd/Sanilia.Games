import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Advertisement, Static, Dashboard, Games, Wallet, Chat, GameDetails, UpdateProfile } from './pages'
import VerifyEmail from './pages/Static/verify-email'
import ProtectedRoute from './hooks/protected-routes'

const App = () => {
  return (
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='games/advertisement' element={<Advertisement />} />
       <Route path='/:slug' element={<Static />} />
       <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
       <Route path='/wallet' element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
       <Route path='/chat' element={<ProtectedRoute><Chat /></ProtectedRoute>} />
       <Route path='/profile/update' element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
       <Route path='/profile/:slug' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
       <Route path='/my/games' element={<ProtectedRoute><Games /></ProtectedRoute>} />
       <Route path='/game/:slug' element={<GameDetails />} />
       <Route path='/verify-email/:token' element={<VerifyEmail />} />
    </Routes>


  )
}

export default App
