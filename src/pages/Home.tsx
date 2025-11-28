import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Rocket, Users, Star, Award, Heart, Code, Globe, Smartphone, CheckCircle, Calendar, FolderOpen, ThumbsUp, Cloud, ChevronLeft, ChevronRight } from "lucide-react";
// import BgImages from "../assets/images/Dashboard.jpg"; // Removed unused import

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920",
    title: "Innovate Your Digital Future",
    subtitle: "Transforming businesses through cutting-edge technology solutions and digital excellence.",
    ctaText: "Our Services",
    ctaLink: "/services"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920",
    title: "Expert Team, Proven Results",
    subtitle: "Collaborate with industry experts to build scalable and secure software tailored to your needs.",
    ctaText: "Meet the Team",
    ctaLink: "/about"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1920",
    title: "Design That Inspires",
    subtitle: "Crafting intuitive and beautiful user experiences that engage and delight your customers.",
    ctaText: "View Projects",
    ctaLink: "/projects"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920",
    title: "Strategic Digital Marketing",
    subtitle: "Data-driven strategies to grow your brand and reach your target audience effectively.",
    ctaText: "Get Started",
    ctaLink: "/contact"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Slider */}
      <section className="relative text-white h-[600px] md:h-[700px] overflow-hidden group">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10000ms]"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-700 delay-300 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                {slide.title}
              </h1>
              <p className={`text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto transform transition-all duration-700 delay-500 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                {slide.subtitle}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-700 delay-700 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                <Link
                  to={slide.ctaLink}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  {slide.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-blue-500 w-8" : "bg-white/50 hover:bg-white"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cybernated?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              We engineer digital excellence with a focus on scalability, security, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Rapid Innovation
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Accelerate your time-to-market with our agile development methodologies and cutting-edge tech stack.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="bg-green-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Bank-Grade Security
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Protect your assets with enterprise-grade security protocols, encryption, and compliance standards.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="bg-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-7 w-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  High Performance
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Systems designed for scale. We optimize every line of code to ensure lightning-fast performance.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="bg-orange-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Dedicated Support
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Your success is our priority. Our expert team provides 24/7 support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Years of Experience & Stats Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built on Consistent Delivery
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Three focused years of building production-ready software for ambitious teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-blue-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-10 w-10 text-blue-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">3+</div>
              <div className="text-lg text-slate-400">Years of Experience</div>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-purple-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-purple-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">5</div>
              <div className="text-lg text-slate-400">Long-term Clients</div>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-green-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FolderOpen className="h-10 w-10 text-green-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">11</div>
              <div className="text-lg text-slate-400">Projects Delivered</div>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-orange-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-orange-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">2</div>
              <div className="text-lg text-slate-400">Industry Awards</div>
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
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
                  alt="E-commerce Shopping"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                  alt="Healthcare Technology"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                  alt="Cloud Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                  alt="Cybersecurity"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                  alt="Logistics Analytics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
                  alt="Construction Management"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
              to="/projects"
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
