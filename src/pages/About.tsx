import React from 'react';
import { Target, Eye, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cybernated</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to providing innovative solutions that drive business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded with a vision to bridge the gap between technology and business success, Cybernated Technology Pvt Ltd has been at the forefront of digital innovation. We specialize in creating custom solutions that not only meet current needs but anticipate future challenges.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our team of experienced professionals combines technical expertise with business acumen to deliver solutions that drive real results. We believe in building long-term partnerships with our clients, supporting their growth every step of the way.
              </p>
              <p className="text-lg text-gray-600">
                From startups to enterprise-level organizations, we've helped businesses across various industries leverage technology to achieve their goals and stay competitive in today's fast-paced digital landscape.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <span className="text-gray-700">Quality-first approach in everything we do</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <span className="text-gray-700">Continuous innovation and improvement</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <span className="text-gray-700">Client-focused solutions and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We strive to be the trusted partner that organizations rely on for their digital transformation journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To be the leading technology partner that shapes the future of business operations through cutting-edge solutions, exceptional service, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600">We strive for excellence in every project, delivering solutions that exceed expectations and set new standards.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600">We embrace new technologies and creative approaches to solve complex challenges and drive progress.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h4>
              <p className="text-gray-600">We conduct business with honesty, transparency, and ethical practices in all our interactions.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h4>
              <p className="text-gray-600">We work closely with our clients as true partners, understanding their needs and goals.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Growth</h4>
              <p className="text-gray-600">We are committed to continuous learning and improvement, both personally and professionally.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Impact</h4>
              <p className="text-gray-600">We measure our success by the positive impact we create for our clients and communities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;