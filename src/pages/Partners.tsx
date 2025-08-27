import React from "react";
import { User, Award, Briefcase } from "lucide-react";

import DeependraImage from "../assets/images/Deependra.jpeg";
import AmitRai from "../assets/images/AmitRai.jpeg";
const Partners: React.FC = () => {
  const partners = [
    {
      name: "Deependra Jhariya",
      role: "Founder & CEO",
      description:
        "Passionate technology leader with expertise in full-stack development and digital transformation strategies.",
      expertise: [
        "Full-Stack Development",
        "Cloud Architecture",
        "Team Leadership",
        "Digital Strategy",
      ],
      img: DeependraImage,
    },
    {
      name: "Nikhil Patel",
      role: "Co-Founder & Business Development",
      description:
        "Strategic business development professional focused on building lasting client relationships and driving growth.",
      expertise: [
        "Business Strategy",
        "Client Relations",
        "Market Analysis",
        "Partnership Development",
      ],
      img: DeependraImage,
    },
    {
      name: "Amit Rai",
      role: "Co-Founder & Operations Director",
      description:
        "Operations expert ensuring seamless project delivery and maintaining the highest quality standards.",
      expertise: [
        "Project Management",
        "Quality Assurance",
        "Process Optimization",
        "Resource Planning",
      ],
      img: AmitRai,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Meet the dedicated professionals who drive Cybernated's vision of
              technological excellence and business success
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our founders bring together decades of combined experience in
              technology, business, and operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                  <img
                    src={partner.img}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {partner.role}
                </p>
                <p className="text-gray-600 mb-6">{partner.description}</p>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {partner.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Partnership Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on trust, expertise, and shared commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from code
                quality to client communication.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600">
                Our partners work as a unified team, combining their unique
                strengths to deliver exceptional results.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Client Focus
              </h3>
              <p className="text-gray-600">
                Every decision we make is guided by our commitment to delivering
                value and exceeding client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Work With Our Team
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to partner with us? Get in touch to discuss your project and
            discover how we can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-block"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default Partners;
