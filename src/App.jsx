import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importa los componentes
import Login from './components/login'
import ExpandableMenu from './components/perfil'

function App() {
  return (
    <BrowserRouter> {/* Cambié Router por BrowserRouter */}
      <Routes>
        <Route path="perfil" element={<ExpandableMenu />} /> {/* Rutas para los componentes */}
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
