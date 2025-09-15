import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Product from './pages/Products'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  )
}

export default App
