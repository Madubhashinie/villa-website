import React, { useState } from 'react';
import breakfast from '../assets/images/breakfast.jpg';
import privatePool from '../assets/images/private-pool.webp';
import accommodations from '../assets/images/Luxury-Accommodations.webp';
import bg from '../assets/images/bg-sea.jpg';

import accommodationsVideo from '../assets/videos/room.mp4';
import privatePoolVideo from '../assets/videos/pool.mp4';
import breakfastVideo from '../assets/videos/breakfastVideo.mp4';

function Services() {
  const services = [
    { 
      img: accommodations, 
      video: accommodationsVideo, 
      title: "Luxury Accommodations", 
      desc: "Spacious rooms with ocean views, king-size beds, and elegant decor for a dreamy stay." 
    },
    { 
      img: privatePool, 
      video: privatePoolVideo, 
      title: "Private Pool Access", 
      desc: "Enjoy a peaceful dip in our private pool, open exclusively to guests of the villa." 
    },
    { 
      img: breakfast, 
      video: breakfastVideo, 
      title: "Free Breakfast", 
      desc: "Wake up to delicious, locally sourced breakfast served fresh every morning." 
    }
  ];

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
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-white/30 hover:border-white/50 transition-transform transform hover:-translate-y-3 duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="aspect-[3/4] w-full overflow-hidden relative">
        {/* Image */}
        <img
          src={service.img}
          alt={service.title}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Video on hover */}
        {hovered && (
          <video
            src={service.video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-200">{service.desc}</p>
      </div>
    </div>
  );
}

export default Services;
