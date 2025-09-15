import React, { useState } from 'react';
import axios from 'axios';
import { LogOut } from 'lucide-react';

function Dashboard() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Handle input changes
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Dummy API call function
  const dummyApiCall = async (url, data) => {
    try {
      // Replace this with real API endpoint later
      // For now simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (url.includes('login')) {
        if (data.email === '123' && data.password === '123') {
          return { status: 200, data: { message: 'Login Successful' } };
        } else {
          throw new Error('Invalid ID or Password');
        }
      } else if (url.includes('register')) {
        return { status: 200, data: { message: 'Registered Successfully' } };
      }
    } catch (err) {
      throw new Error(err.message || 'API Failed');
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      if (isLogin) {
        const res = await dummyApiCall('/login', formData);
        setMessage(res.data.message);
        setLoggedIn(true);
      } else {
        const res = await dummyApiCall('/register', formData);
        setMessage(res.data.message);
        setIsLogin(true);
        setFormData({ email: '', password: '', name: '' });
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  // Logout handler
  const handleLogout = () => {
    setLoggedIn(false);
    setFormData({ email: '', password: '', name: '' });
    setMessage('');
  };

  // Dashboard view
  if (loggedIn) {
    return (
      <div className="min-h-screen bg-black text-white font-sans p-6 relative">
        {/* Logout button top-right */}
        <button
          onClick={handleLogout}
          className="absolute flex gap-2 top-4 right-4 bg-white px-4 py-2 rounded text-black cursor-pointer transition"
        >
         <LogOut /> Logout
        </button>

        <header className="mb-6">
          <h1 className="text-3xl font-bold">Your Dashboard</h1>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Explore Your Posted Products</h2>
          <p className="text-gray-400">
            From here you can post, view, and analyze your products.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <h2 className='text-xl font-bold text-center mt-5'>Api Integration Failed</h2>
        </section>
      </div>
    );
  }

  // Login/Register view
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-sans">
      <div className="bg-gray-900 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Register'}</h2>

        {message && <div className="mb-4 text-center text-red-500">{message}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-700 p-2 rounded bg-gray-800 text-white"
              required
            />
          )}
          <input
            type="text"
            name="email"
            placeholder="ID (use 123)"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-700 p-2 rounded bg-gray-800 text-white"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password (use 123)"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-700 p-2 rounded bg-gray-800 text-white"
            required
          />

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-gray-400 text-sm">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-red-600 cursor-pointer"
          >
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
