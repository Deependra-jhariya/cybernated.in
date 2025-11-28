import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Rocket, Users, Star, Award, Briefcase, TrendingUp, Heart, Code, Globe, Smartphone, CheckCircle, Calendar, FolderOpen, ThumbsUp, Cloud } from "lucide-react";
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

      {/* Years of Experience & Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built on Consistent Delivery
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Three focused years of building production-ready software for ambitious teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">3+</div>
              <div className="text-lg text-blue-100">Years of Experience</div>
            </div>

            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">5</div>
              <div className="text-lg text-blue-100">Long-term Clients</div>
            </div>

            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FolderOpen className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">11</div>
              <div className="text-lg text-blue-100">Projects Delivered</div>
            </div>

            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">2</div>
              <div className="text-lg text-blue-100">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Satisfaction
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We measure our success by the success of our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ThumbsUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-blue-600 mb-2">96%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Client Satisfaction</div>
              <p className="text-gray-600">Tight feedback loops keep our releases aligned with client goals.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-green-600 mb-2">4.8/5</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Average CSAT</div>
              <p className="text-gray-600">Transparent communication & measurable KPIs on each sprint.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-purple-600 mb-2">80%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Repeat Engagements</div>
              <p className="text-gray-600">Most collaborations extend into multi-phase retainers.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Sprint health checks every Friday.</p>
                <p className="text-gray-600 text-sm">Shared velocity board + Loom walkthroughs keep teams synced.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">QA baked into each release.</p>
                <p className="text-gray-600 text-sm">Device lab + automated checks cover critical flows before launch.</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Cybernated rebuilt our FreshBasket commerce stack with zero downtime and doubled our conversion rate within six weeks. Their release notes and demos made stakeholder sign-off effortless."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SP
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sanjana Patel</div>
                  <div className="text-sm text-gray-600">Product Lead, FreshBasket Retail</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border-l-4 border-green-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Our FleetFox control tower app shipped in record time. Daily builds, crisp docs, and hands-on onboarding helped our ops team adopt the product in under a week."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  AM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Arjun Malhotra</div>
                  <div className="text-sm text-gray-600">Founder, FleetFox Logistics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Eleven launches in three years—here are a few teams we have shipped with recently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Code className="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-semibold text-blue-600">Commerce Rebuild</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">FreshBasket Headless Storefront</h3>
                <p className="text-gray-600 mb-4">
                  Migrated the grocer's legacy stack to Next.js + Shopify Hydrogen, enabling sub-second page loads and unified inventory syncing across 42 SKUs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Shopify</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">GraphQL</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Smartphone className="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Smartphone className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm font-semibold text-green-600">Telehealth App</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">PulseCare Patient Companion</h3>
                <p className="text-gray-600 mb-4">
                  HIPAA-ready teleconsultation experience with secure chat, prescription tracking, and doctor availability synced in real time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">AWS Amplify</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">E2E Encryption</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Rocket className="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Cloud className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm font-semibold text-purple-600">Cloud Ops</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AeroStack Cloud Migration</h3>
                <p className="text-gray-600 mb-4">
                  Shifted aviation analytics workloads from on-prem to AWS, cutting infra costs by 28% and adding auto-scaling pipelines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Kubernetes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <Shield className="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-sm font-semibold text-orange-600">Security Hardening</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">PayLink Security Uplift</h3>
                <p className="text-gray-600 mb-4">
                  Conducted PCI-DSS readiness audit, threat modeling, and rolled out SOC monitoring for the fintech's payment gateway.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Security</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Compliance</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Encryption</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Code className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="text-sm font-semibold text-indigo-600">Logistics Analytics</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">FleetFox Control Tower</h3>
                <p className="text-gray-600 mb-4">
                  Real-time dashboard for route planning, SLA tracking, and driver scorecards with alerts delivered to WhatsApp & email.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Data Analytics</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Superset</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center">
                <Briefcase className="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-pink-600 mr-2" />
                  <span className="text-sm font-semibold text-pink-600">ERP Add-on</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">BuildRight Procurement Portal</h3>
                <p className="text-gray-600 mb-4">
                  Layered vendor portal for a construction firm, streamlining bid comparison, approvals, and budget burn tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Enterprise</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Integration</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Automation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
