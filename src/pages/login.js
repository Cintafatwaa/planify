import React, { useState } from 'react';
import usersData from '../components/users.json'; // Pastikan file users.json ada di direktori yang sama
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Cari user yang cocok
    const user = usersData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setSuccess('Login berhasil!');
      setError('');
      navigate('/dashboard');
    } else {
      setError('Email atau password salah.');
      setSuccess('');
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="bg-gray-100 rounded-lg shadow-md p-8 hover:shadow-lg transition w-full max-w-md text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
          <p className="text-gray-600">
            Belum punya akun? 
            <Link to="/register" className="text-gray-500 hover:text-blue-400"> Daftar Disini</Link>
          </p>
        </form>

        {/* Pesan error atau sukses */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>
    </div>
  );
}

export default LoginForm;
