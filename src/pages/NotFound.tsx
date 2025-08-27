import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-blue-100 rounded-full p-6">
              <HelpCircle className="h-16 w-16 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-500">
            Don't worry, we'll help you get back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 font-medium"
          >
            <Home className="h-5 w-5" />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="bg-gray-50 rounded-lg p-8 max-w-lg mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center">
            <Search className="h-5 w-5 mr-2" />
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-4 text-left">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 p-2 rounded hover:bg-white"
            >
              → Home
            </Link>
            <Link
              to="/about"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 p-2 rounded hover:bg-white"
            >
              → About Us
            </Link>
            <Link
              to="/services"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 p-2 rounded hover:bg-white"
            >
              → Services
            </Link>
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 p-2 rounded hover:bg-white"
            >
              → Contact Us
            </Link>
            <Link
              to="/partners"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 p-2 rounded hover:bg-white"
            >
              → Our Partners
            </Link>
            <Link
              to="/privacy"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 p-2 rounded hover:bg-white"
            >
              → Privacy Policy
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12">
          <p className="text-gray-600 mb-4">
            Still need help finding what you're looking for?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              Contact our support team
            </Link>
            <span className="text-gray-400 hidden sm:block">|</span>
            <a
              href="mailto:deependrajhariya@gmail.com"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              Send us an email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;