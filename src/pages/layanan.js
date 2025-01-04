import React from 'react';

const Layanan = () => {
  const services = [
    {
      title: 'Perencanaan Acara',
      description: 'Kami membantu Anda merencanakan acara dengan detail, mulai dari konsep hingga pelaksanaan.',
      icon: '🎉',
    },
    {
      title: 'Pengelolaan Jadwal',
      description: 'Atur jadwal acara dengan mudah dan efisien menggunakan fitur kami yang terorganisir.',
      icon: '🗓️',
    },
    {
      title: 'Kolaborasi Tim',
      description: 'Kolaborasi dengan tim Anda menjadi lebih mudah dengan menggunakan aplikasi buatan kami.',
      icon: '🤝',
    },
    {
      title: 'Pelacakan Progres',
      description: 'Pantau progres acara Anda secara real-time dan pastikan semua berjalan sesuai rencana.',
      icon: '📈',
    },
  ];

  return (
    <div className="">
      <div className="container max-w-5xl mx-auto pt-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Layanan Kami
          </h1>
          <p className="text-gray-600 text-sm lg:text-base mt-4">
            Kami menyediakan berbagai layanan untuk mendukung kesuksesan acara Anda.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl">{service.icon}</span>
                <h2 className="ml-4 text-xl font-semibold text-gray-800">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm lg:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layanan;
