import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Rocket, Users } from "lucide-react";
import BgImages from "../assets/images/Dashboard.jpg";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}

      <section className="relative text-white h-screen overflow-hidden">
        {/* Background with zoom animation */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom"
          style={{ backgroundImage: `url(${BgImages})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/70"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-white">Cybernated</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transforming businesses through innovative technology solutions
              and digital excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
              >
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Cybernated?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver cutting-edge solutions that drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                Cutting-edge technology solutions that keep you ahead of the
                competition
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Security
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security measures to protect your valuable data
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Performance
              </h3>
              <p className="text-gray-600">
                High-performance solutions that scale with your growing business
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Support
              </h3>
              <p className="text-gray-600">
                24/7 expert support to ensure your success every step of the way
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help you achieve
            your digital transformation goals
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
          >
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
