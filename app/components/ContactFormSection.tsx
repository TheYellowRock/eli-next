'use client';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactFormSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center p-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/form-bg.jpg')` }}
    >
      {/* Use a responsive grid with two columns on md+; one column on mobile */}
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-8 opacity-90 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about starting your brand? Fill out the form below and our team will
            contact you shortly.
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column: Contact Details */}
        <div className="flex flex-col justify-center text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Details</h3>
          <ul className="text-gray-700 space-y-6">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>ul. Stefana Jaracza 108/3, 90-244 Łódź</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-600" />
              <span>+48 728 930 202</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <span>contact@yourbrand.com</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
