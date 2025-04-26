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
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center">
        <div className="text-center text-white mt-40">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Sea Beach Villa</h1>
            <p className="text-lg md:text-xl">Experience the serenity and comfort of the Sri Lankan sea</p>
          </div>
        </div>
    </section>



      {/* Highlights */}
      <section className="py-12 px-4 md:px-16 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
          <img src={room} alt="Luxury Accommodations" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Luxury Rooms</h3>
            <p>Spacious, sea-view rooms with top-tier amenities for your comfort.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
          <img src={pool} alt="Luxury Accommodations" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Private Pool</h3>
            <p>Relax in your own private pool, perfect for quiet getaways and family fun.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
          <img src={view} alt="Luxury Accommodations" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Nature Views</h3>
            <p>Wake up to palm trees, ocean breeze, and birdsong in a peaceful setting.</p>
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
