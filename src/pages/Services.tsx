import React from 'react';
import { Code, Smartphone, Cloud, Shield, Database, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and responsive design principles.',
      features: ['React & Angular Development', 'Full-Stack Solutions', 'E-commerce Platforms', 'Progressive Web Apps']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: ['Native iOS/Android Apps', 'React Native Development', 'Flutter Applications', 'App Store Optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance.',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps Implementation', 'Serverless Architecture']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from digital threats.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and visualization.',
      features: ['Business Intelligence', 'Data Visualization', 'Machine Learning', 'Predictive Analytics']
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business operations.',
      features: ['Process Automation', 'Legacy System Modernization', 'Digital Strategy', 'Change Management']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end solutions that drive results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h4>
              <p className="text-gray-600">Understanding your business needs, goals, and challenges</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Planning</h4>
              <p className="text-gray-600">Creating a detailed roadmap and technical architecture</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Development</h4>
              <p className="text-gray-600">Building and testing your solution with regular updates</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Deployment</h4>
              <p className="text-gray-600">Launching your solution with ongoing support and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;