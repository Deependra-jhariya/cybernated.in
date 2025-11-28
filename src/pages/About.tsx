import React from 'react';
import { Target, Eye, Award, TrendingUp, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cybernated</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
              We are a forward-thinking technology company dedicated to providing innovative solutions that drive business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between technology and business success, Cybernated Technology Pvt Ltd has been at the forefront of digital innovation. We specialize in creating custom solutions that not only meet current needs but anticipate future challenges.
                </p>
                <p>
                  Our team of experienced professionals combines technical expertise with business acumen to deliver solutions that drive real results. We believe in building long-term partnerships with our clients, supporting their growth every step of the way.
                </p>
                <p>
                  From startups to enterprise-level organizations, we've helped businesses across various industries leverage technology to achieve their goals and stay competitive in today's fast-paced digital landscape.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Commitment</h3>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <Award className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quality First</h4>
                    <p className="text-gray-600 text-sm">Quality-first approach in everything we do</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <TrendingUp className="h-6 w-6 text-purple-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Continuous Innovation</h4>
                    <p className="text-gray-600 text-sm">Continuous innovation and improvement</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <Shield className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Client-Focused</h4>
                    <p className="text-gray-600 text-sm">Client-focused solutions and support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <Target className="h-10 w-10 text-blue-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We strive to be the trusted partner that organizations rely on for their digital transformation journey.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <Eye className="h-10 w-10 text-purple-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                To be the leading technology partner that shapes the future of business operations through cutting-edge solutions, exceptional service, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We strive for excellence in every project, delivering solutions that exceed expectations and set new standards.",
                color: "blue"
              },
              {
                title: "Innovation",
                desc: "We embrace new technologies and creative approaches to solve complex challenges and drive progress.",
                color: "purple"
              },
              {
                title: "Integrity",
                desc: "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
                color: "green"
              },
              {
                title: "Collaboration",
                desc: "We work closely with our clients as true partners, understanding their needs and goals.",
                color: "orange"
              },
              {
                title: "Growth",
                desc: "We are committed to continuous learning and improvement, both personally and professionally.",
                color: "indigo"
              },
              {
                title: "Impact",
                desc: "We measure our success by the positive impact we create for our clients and communities.",
                color: "pink"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className={`w-12 h-12 rounded-xl bg-${value.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-6 h-6 rounded-full bg-${value.color}-600`}></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;