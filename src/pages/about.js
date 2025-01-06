import React from 'react';

function About() {
    return (
      <div className="bg-white mb-36">
      <header className="text-center mb-14 pt-10">
        <h1 className="text-3xl font-bold text-blue-600">Tentang Kami</h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Visi */}
          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold text-blue-500 ml-4">Visi Kami</h2>
            </div>
            <p className="text-gray-600 text-justify">
              Memudahkan perencanaan dan pengelolaan acara atau jadwal penting secara efisien dengan solusi digital inovatif.
            </p>
          </section>

          {/* Misi */}
          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold text-blue-500 ml-4">Misi Kami</h2>
            </div>
            <p className="text-gray-600 text-justify">
              Menyediakan platform sederhana namun kuat untuk mengorganisir acara, dari kecil hingga besar, dengan fitur mudah dan dukungan optimal.
            </p>
          </section>

          {/* Tim Kami */}
          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold text-blue-500 ml-4">Tim Kami</h2>
            </div>
            <p className="text-gray-600 text-justify">
              Tim profesional berpengalaman di teknologi dan manajemen acara, fokus mengembangkan aplikasi intuitif yang mudah diakses semua kalangan.
            </p>
          </section>
        </div>
      </div>
    );
  }
  
  export default About;