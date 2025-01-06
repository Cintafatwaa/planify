import React from 'react';
import Ilustrasi1 from '../assets/beranda.png';

function Beranda() {
  return (
    <div className="bg-white">
      {/* Main Content */}
      <main className="container max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 pt-16 pb-18 px-4 mb-28">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-3xl lg:text-4xl pb-5">
            Want anything to be easy
            <br />
            with Planify
          </h1>
          <p className="font-normal text-sm lg:text-base pb-8 text-gray-600">
            Planify membantu mengelola acara dengan mudah dan cepat, menghadirkan kenyamanan dalam setiap perencanaan.
          </p>
          <button className="py-3 px-12 bg-blue-500 rounded-md text-white drop-shadow-lg hover:bg-blue-600 transition">
            <a href='/login'>Get Started</a>
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            alt="Beranda"
            src={Ilustrasi1}
            className="w-full max-w-xs lg:max-w-md"
          />
        </div>
      </main>
    </div>
  );
}

export default Beranda;
