import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Beranda from '../pages/beranda';
import About from '../pages/about';
import Layanan from '../pages/layanan';
import LoginForm from'../pages/login';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';
import Footer from '../components/footer'

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/tentangkami" element={<About />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="*" element={<Navigate to="/beranda" />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default AppRouter;
