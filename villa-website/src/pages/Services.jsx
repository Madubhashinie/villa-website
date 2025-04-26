import React from 'react';
import breakfast from '../assets/images/breakfast.jpg';
import privatePool from '../assets/images/private-pool.webp';
import accommodations from '../assets/images/Luxury-Accommodations.webp';
import bg from '../assets/images/bg-sea.jpg';

function Services() {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-white text-center mb-16 tracking-tight">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[ 
            { img: accommodations, title: "Luxury Accommodations", desc: "Spacious rooms with ocean views, king-size beds, and elegant decor for a dreamy stay." },
            { img: privatePool, title: "Private Pool Access", desc: "Enjoy a peaceful dip in our private pool, open exclusively to guests of the villa." },
            { img: breakfast, title: "Free Breakfast", desc: "Wake up to delicious, locally sourced breakfast served fresh every morning." }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
