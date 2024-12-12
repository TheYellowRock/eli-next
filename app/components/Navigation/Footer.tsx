import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex-shrink-0 mb-4">
            <img src="/images/LogoEli.webp" alt="Logo" className="h-12 w-auto" />
          </div>
          <p className="text-gray-600 text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-black text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
