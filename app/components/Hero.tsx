'use client';
import React, { useEffect, useState } from 'react';

const HeroBanner: React.FC = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#hero-content');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/hero1.jpg')" }}
    >
      <div id="hero-content" className="space-y-8">
        <h1
          className={`text-white font-sans text-4xl md:text-6xl font-bold mb-4 transition-opacity duration-1000 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
        >
          Discover Our Exquisite Perfume Collection
        </h1>
        <p
          className={`text-gray-100 font-sans text-lg md:text-2xl mb-6 transition-opacity duration-1000 transform delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
        >
          Step into a world of enchanting fragrances and explore the perfect scent for every occasion.
        </p>
        <button
          className={`bg-white text-black font-sans font-medium py-2 px-6 rounded-lg hover:bg-gray-200 transition-opacity duration-1000 transform delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
          onClick={() => alert('Explore Catalogue!')}
        >
          Explore the Catalogue
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
