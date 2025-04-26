import React, { useState } from 'react';
import findUs from '../assets/images/findUs.jpg';
import bgImage from '../assets/images/plamtree.jpg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name} (${formData.email})`;
    const body = encodeURIComponent(formData.message);
    const mailtoLink = `mailto:madubhashinietharushi@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
    setStatus('Opening your email app...');
    
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl text-white font-extrabold text-center mb-16 tracking-tight">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 transition hover:shadow-3xl">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition transform hover:-translate-y-1"
              >
                Send Message
              </button>
              {status && (
                <p className="text-center mt-4 text-lg font-semibold text-gray-700">{status}</p>
              )}
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="flex flex-col h-full space-y-6">
            <div className="bg-blue-500 text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Find Us Here</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  📍<span className="ml-2">123 Beach Road, Unawatuna, Sri Lanka</span>
                </li>
                <li className="flex items-start">
                  📞<span className="ml-2">+94 123 456 789</span>
                </li>
                <li className="flex items-start">
                  ✉️<span className="ml-2">info@seabeachvilla.com</span>
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-2">Opening Hours</h4>
                <p>Check-in: 2:00 PM - 10:00 PM</p>
                <p>Check-out: 11:00 AM</p>
                <p>Reception: 24/7</p>
              </div>
            </div>

            <div className="flex-grow rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                title="Villa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63349.85936880955!2d80.7333174!3d6.0483496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13e59dcb40c77%3A0x4a9e40c185d7b0aa!2sUnawatuna!5e0!3m2!1sen!2slk!4v1714134804102!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 relative rounded-2xl overflow-hidden h-64 shadow-2xl">
          <img
            src={findUs}
            alt="Sea Beach Villa"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h3 className="text-4xl font-bold mb-4">Experience Paradise</h3>
              <p className="text-lg">
                Book your stay at Sea Beach Villa and create unforgettable memories by the ocean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
