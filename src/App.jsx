import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Fotter from './components/Fotter';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/Dashboard';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Products from './pages/Products';
import About from './pages/About';

// Layout wrapper to conditionally show navbar/footer
function Layout({ children }) {
  const location = useLocation();

  // Hide navbar/footer on dashboard route
  const hideLayout = location.pathname === '/dashboard';

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Fotter />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
           <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
