import React from 'react';
import video from '../assets/videos/sea-beach.mp4';
import room from '../assets/images/luxury-room.jpg';
import pool from '../assets/images/pool.jpg';
import view from '../assets/images/view.jpg';


function Home() {
  return (
<div className="bg-white">
    {/* Hero Section */}
    <section className="relative h-[80vh] overflow-hidden">
        {/* Video */}
        <video
          src={video}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay and Content */}
<div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center">
  <div className="text-center text-white drop-shadow-lg">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
      Welcome to <span className="text-blue-300">Sea Beach Villa</span>
    </h1>
    <p className="text-lg md:text-2xl font-medium text-white/90">
      Experience the serenity and comfort of the Sri Lankan sea
    </p>
  </div>
</div>

    </section>



      {/* Highlights */}
    <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Choose Us?</h2>
      <div className="grid gap-10 md:grid-cols-3">
      
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <img src={room} alt="Luxury Rooms" className="w-full h-48 object-cover rounded-xl mb-6" />
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Luxury Rooms</h3>
          <p className="text-gray-600">Spacious, sea-view rooms with top-tier amenities for your comfort.</p>
        </div>

        
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <img src={pool} alt="Private Pool" className="w-full h-48 object-cover rounded-xl mb-6" />
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Private Pool</h3>
          <p className="text-gray-600">Relax in your own private pool, perfect for quiet getaways and family fun.</p>
        </div>

      
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <img src={view} alt="Nature Views" className="w-full h-48 object-cover rounded-xl mb-6" />
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Nature Views</h3>
          <p className="text-gray-600">Wake up to palm trees, ocean breeze, and birdsong in a peaceful setting.</p>
        </div>
      </div>
    </section>

      {/* Call to Action */}
      <section className="bg-blue-400 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Book Your Stay Today</h2>
        <p className="mb-6">Escape to paradise at Ocean Breeze Villa. Limited rooms available!</p>
        <a href="/contact" className="bg-white text-blue-400 px-6 py-3 rounded font-semibold hover:bg-gray-200">
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default Home;
