'use client';   
import { useState } from 'react';
import { FaFlask, FaPaintBrush, FaBox, FaTruck } from 'react-icons/fa';

const colorClasses: Record<string, { bg: string; text: string }> = {
  purple: { bg: 'bg-purple-500', text: 'text-purple-500' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-500' },
  yellow: { bg: 'bg-yellow-500', text: 'text-yellow-500' },
  green: { bg: 'bg-green-500', text: 'text-green-500' },
};

const steps = [
  {
    title: 'Select Perfume',
    icon: FaFlask,
    description: 'Choose from a wide variety of fragrances to start your unique brand.',
    colorClass: 'purple',
  },
  {
    title: 'Design Label',
    icon: FaPaintBrush,
    description: 'Work with our designers to create a stunning label for your product.',
    colorClass: 'pink',
  },
  {
    title: 'Choose Packaging',
    icon: FaBox,
    description: 'Select high-quality packaging that matches your brand identity.',
    colorClass: 'yellow',
  },
  {
    title: 'Deliver',
    icon: FaTruck,
    description: 'We handle the delivery logistics to get your product to market.',
    colorClass: 'green',
  },
];

export default function StartNewBrandSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="bg-gray-100 py-20 px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Start Your Own Brand</h2>
        <p className="text-gray-700 mb-16 text-lg font-sans">
          Join us in building your unique perfume brand with our easy four-step process. Bring
          your vision to life and captivate your audience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colors = colorClasses[step.colorClass];
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative bg-white shadow-md  p-10 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                {/* Hover Overlay */}
                <div
                  className={`
                    absolute inset-0 
                    ${colors.bg} text-white 
                    flex items-center justify-center 
                     p-6 
                    transition-opacity duration-300 ease-in-out 
                    ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  <p className="text-sm px-4">{step.description}</p>
                </div>

                {/* Icon and Title */}
                <div
                  className={`relative z-10 text-center flex flex-col items-center transition-opacity duration-300 ease-in-out ${
                    hoveredCard === index ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <Icon className={colors.text} size={50} />
                  <h3 className="text-xl font-semibold mt-6">{step.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
