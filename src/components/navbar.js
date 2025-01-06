import React, { useState } from 'react';
import IconPlanify from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menus = ['Beranda', 'Tentang Kami', 'Layanan'];
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (location.pathname === '/login') {
    return null;
  }
  if (location.pathname === '/register') {
    return null;
  }
  if (location.pathname === '/dashboard') {
    return null;
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container max-w-5xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <img alt="icon-planify" src={IconPlanify} className="w-24" />

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-gray-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Menu Items */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full lg:w-auto lg:flex lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
            {menus.map((val, index) => (
              <li key={index} className="text-gray-700 hover:text-blue-500 text-lg lg:text-base py-2 lg:py-0">
                {/* Menggunakan Link untuk navigasi */}
                <Link to={`/${val.toLowerCase().replace(" ", "")}`}>{val}</Link>
              </li>
            ))}
              <li className="lg:hidden">
                <Link to ='/login'>
                  <button className="border border-x-blue-500 rounded-full py-2 px-6 text-gray-700 hover:bg-blue-500 hover:text-white">
                    Login
                  </button>
                </Link>
              </li>
          </ul>
        </nav>

        {/* Login Button */}
        <div className="hidden lg:block">
          <Link to ='/login'>
            <button className="border border-x-blue-500 rounded-full py-2 px-6 text-gray-700 hover:bg-blue-500 hover:text-white">
              Login
            </button>
          </Link>    
        </div>
      </div>
    </header>
  );
}

export default Navbar;
