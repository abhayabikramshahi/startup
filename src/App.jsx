import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import './App.css'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        <Fotter />
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
