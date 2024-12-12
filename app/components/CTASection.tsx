'use client';
import { useEffect, useState } from 'react';

export default function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ctaSection = document.getElementById('cta-section');
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="cta-section"
      className={`container mx-auto bg-gradient-to-r from-blue-500 to-blue-700 py-16 px-8 shadow-lg text-center font-sans transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <h2 className="text-3xl md:text-4xl  text-white mb-6">Start Your Own Perfume Brand</h2>
      <p className="text-white mb-8 text-lg leading-relaxed">
        Unleash your creativity and bring your unique scents to life. Partner with us to create a
        custom perfume line that reflects your style and vision. Whether for personal branding or
        as a business venture, we make it easy to craft fragrances that captivate.
      </p>
      <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
        Get Started
      </button>
    </div>
  );
}
