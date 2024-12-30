'use client';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container that switches from row on mobile to column on desktop */}
        <div className="flex items-center justify-between py-4 md:flex-col md:items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/images/LogoEli.webp" alt="Logo" className="h-24 w-auto" />
          </div>

          {/* Desktop Links (hidden on mobile) */}
          <div className="hidden md:block mt-4">
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="/collections/men"
                className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Men
              </a>
              <a
                href="/collections/women"
                className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Women
              </a>
              <a
                href="/your-brand"
                className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Your Brand
              </a>
            </div>
          </div>

          {/* Mobile Menu Button (hidden on desktop) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Men
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Women
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Your Brand
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
