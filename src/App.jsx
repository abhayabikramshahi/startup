import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Fotter from './components/Fotter';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import { Analytics } from '@vercel/analytics/react';
import Products from './pages/Products';
import ProductDetail from './Products/Cookie';
import Payment from './pages/Payment';
import About from './pages/About';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51SBbNXAZFH4vqn4pD6g0bLcr8FhXkkS0ZbJW2oqk2XDLnHwIX2UliW3S5NcVv2NZcGa3jrngLCRMfc3gAkzcBpa700dPRXMefY');


// Layout wrapper to conditionally show navbar/footer
function Layout({ children }) {
  const location = useLocation();

  // Hide navbar/footer on dashboard route
  const hideLayout = location.pathname == '/dashboard' || location.pathname === '/panel' ;

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
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/cookie-stealer" element={<ProductDetail />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </Layout>
        <Analytics />
      </BrowserRouter>
    </Elements>
  );
}

export default App;
