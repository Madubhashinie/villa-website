import { Link } from 'react-router-dom';
import pic from "../assets/images/about.jpg";
import sea from '../assets/videos/sea.mp4';

function About() {
  return (
    <div className="pt-20 bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img
          src={pic || "/placeholder.svg"}
          alt="Sea Beach Villa Unawatuna"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sea Beach Villa</h1>
            <p className="text-xl max-w-2xl">Your luxury escape in Unawatuna, Sri Lanka since 2017</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            <div className="w-20 h-1 bg-blue-600"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nestled along the tranquil coastline of Unawatuna, Sea Beach Villa is your escape to luxury and peace. Our
              villa offers a private, serene atmosphere surrounded by the natural beauty of Sri Lanka's southern coast.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since opening in 2017, we've hosted guests from around the world who return year after year for the
              stunning views, authentic Sri Lankan hospitality, and the unique experience only we offer.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl transform md:translate-y-6">
            <img
              src="/images/villa-exterior.jpg" 
              alt="Villa Exterior"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = pic // Fallback to the existing image if the new one fails to load
              }}
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed italic">
              "To create an unforgettable sanctuary where guests can experience the true beauty of Sri Lankan coastal
              living, immerse in local culture, and find peace in our slice of paradise."
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="location"
              title="Prime Location"
              description="Situated on one of the most beautiful beaches in Unawatuna, with breathtaking ocean views and easy access to Galle Fort and local attractions."
            />
            <FeatureCard
              icon="luxury"
              title="Sri Lankan Luxury"
              description="Experience authentic Sri Lankan hospitality with modern comforts. Our villa blends local architecture with luxury amenities for a unique stay."
            />
            <FeatureCard
              icon="service"
              title="Exceptional Service"
              description="Our team is dedicated to providing warm Sri Lankan hospitality, impeccable service, and everything you need to feel at home."
            />
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative bg-blue-600 text-white rounded-xl p-8 md:p-12">
        
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            autoPlay
            loop
            muted
          >
            <source src={sea} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-blue-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl mb-6">
              "Our stay at Sea Beach Villa was nothing short of magical. The location in Unawatuna is perfect, the
              authentic Sri Lankan cuisine was incredible, and the staff made our family vacation unforgettable. We'll
              definitely be coming back!"
            </p>
            <div className="font-medium">
              <p className="text-lg">The Andersons</p>
              <p className="text-blue-300">United Kingdom</p>
            </div>
          </div>
        </div>

      </section>

      {/* Local Experiences */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Discover Unawatuna</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LocalExperience
              title="Unawatuna Beach"
              description="Just steps from our villa, enjoy the golden sands and crystal clear waters of one of Sri Lanka's most beautiful beaches."
              icon="beach"
            />
            <LocalExperience
              title="Galle Fort"
              description="Explore this UNESCO World Heritage site just 6km away, with its colonial architecture, boutiques, and cafes."
              icon="fort"
            />
            <LocalExperience
              title="Sea Turtle Hatchery"
              description="Visit nearby turtle conservation projects and learn about these magnificent creatures."
              icon="turtle"
            />
            <LocalExperience
              title="Sri Lankan Cuisine"
              description="Experience authentic local flavors with cooking classes and fresh seafood from local markets."
              icon="food"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
          Ready to Experience <span className="text-blue-600">Sea Beach Villa?</span>
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          Contact us today to inquire about availability and discover why our guests keep coming back year after year
          to our Unawatuna paradise.
        </p>
        <div className="flex justify-center">
        <Link
        to="/contact"  
        className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
    </div>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:-translate-y-1">
      <div className="mb-4">
        {icon === "location" && (
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        )}
        {icon === "luxury" && (
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
        )}
        {icon === "service" && (
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Local Experience Component
function LocalExperience({ title, description, icon }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">
        {icon === "beach" && (
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
        )}
        {icon === "fort" && (
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        {icon === "turtle" && (
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
        )}
        {icon === "food" && (
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default About
