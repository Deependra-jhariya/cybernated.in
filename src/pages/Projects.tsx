import React, { useState } from 'react';
import {
    ArrowRight,
    ExternalLink,
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock Data for Projects
const projects = [
    {
        id: 1,
        title: "E-Commerce Mobile App",
        category: "Mobile Application",
        description: "A full-featured shopping app with AR product preview and seamless checkout.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        tags: ["React Native", "Redux", "Node.js"]
    },
    {
        id: 2,
        title: "Fintech Dashboard UI",
        category: "Figma Design",
        description: "Modern and clean user interface design for a financial management dashboard.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        tags: ["Figma", "UI/UX", "Prototyping"]
    },
    {
        id: 3,
        title: "Corporate Website Redesign",
        category: "Website",
        description: "Responsive corporate website with dynamic content and CMS integration.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Tailwind CSS", "Next.js"]
    },
    {
        id: 4,
        title: "Social Media Campaign",
        category: "Digital Marketing",
        description: "Comprehensive digital marketing strategy and execution for a retail brand.",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
        tags: ["SEO", "Social Media", "Analytics"]
    },
    {
        id: 5,
        title: "Health & Fitness App",
        category: "Mobile Application",
        description: "Activity tracking application with personalized workout plans and diet logs.",
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800",
        tags: ["Flutter", "Firebase", "HealthKit"]
    },
    {
        id: 6,
        title: "Travel Agency Booking System",
        category: "Website",
        description: "Complete booking engine for flights and hotels with real-time availability.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
        tags: ["Vue.js", "Laravel", "MySQL"]
    },
    {
        id: 7,
        title: "SaaS Product Landing Page",
        category: "Figma Design",
        description: "High-converting landing page design for a B2B SaaS product.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        tags: ["Figma", "Web Design", "Landing Page"]
    },
    {
        id: 8,
        title: "SEO Optimization Project",
        category: "Digital Marketing",
        description: "Technical SEO overhaul and content strategy for a logistics company.",
        image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=800",
        tags: ["SEO", "Content Marketing", "SEM"]
    }
];

const categories = ["All", "Mobile Application", "Figma Design", "Website", "Digital Marketing"];

const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
                            Explore our portfolio of successful digital transformations and innovative solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category
                                    ? "bg-blue-600 text-white shadow-md transform scale-105"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-50 transition-colors">
                                            <ExternalLink className="h-6 w-6" />
                                        </button>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-800 shadow-sm">
                                        {project.category}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="h-8 w-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">No projects found</h3>
                            <p className="text-gray-500 mt-2">Try selecting a different category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Have a Project in Mind?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Let's collaborate to bring your ideas to life with our expert team.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
                    >
                        Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Projects;
