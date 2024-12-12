'use client';   
import { useState } from 'react';
import { FaFlask, FaPaintBrush, FaBox, FaTruck } from 'react-icons/fa';

const steps = [
  {
    title: 'Select Perfume',
    icon: <FaFlask size={50} />, // Increased icon size for better visibility
    description: 'Choose from a wide variety of fragrances to start your unique brand.',
  },
  {
    title: 'Design Label',
    icon: <FaPaintBrush size={50} />, // Increased icon size for better visibility
    description: 'Work with our designers to create a stunning label for your product.',
  },
  {
    title: 'Choose Packaging',
    icon: <FaBox size={50} />, // Increased icon size for better visibility
    description: 'Select high-quality packaging that matches your brand identity.',
  },
  {
    title: 'Deliver',
    icon: <FaTruck size={50} />, // Increased icon size for better visibility
    description: 'We handle the delivery logistics to get your product to market.',
  },
];

export default function StartNewBrandSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="bg-gray-100 py-20 px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Start Your Own Brand</h2>
        <p className="text-gray-700 mb-16 text-lg">
          Join us in building your unique perfume brand with our easy four-step process. Bring
          your vision to life and captivate your audience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative bg-white shadow-md rounded-lg p-10 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-blue-500 text-white flex items-center justify-center rounded-lg p-6 transition-opacity duration-300 ease-in-out ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-sm px-4">{step.description}</p>
              </div>
              <div
                className={`relative z-10 text-center flex flex-col items-center transition-opacity duration-300 ease-in-out ${
                  hoveredCard === index ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {step.icon}
                <h3 className="text-xl font-semibold mt-6">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
