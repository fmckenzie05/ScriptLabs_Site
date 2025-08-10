'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Award, Star, Calendar, Users, TrendingUp, Sparkles } from 'lucide-react'

const categories = ['All', 'Web Apps', 'Mobile Apps', 'AI/ML', 'Web3', 'SaaS']

const projects = [
  {
    id: 1,
    title: 'FinanceAI Pro',
    category: 'AI/ML',
    description: 'AI-powered financial analytics platform with predictive modeling and real-time insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'PostgreSQL'],
    results: [
      '97% prediction accuracy',
      '$2.5M revenue generated',
      '50K+ active users'
    ],
    timeline: '8 months',
    featured: true,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'HealthTrack Mobile',
    category: 'Mobile Apps',
    description: 'Cross-platform health monitoring app with real-time analytics and IoT integration',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'IoT'],
    results: [
      '100K+ downloads',
      '4.8/5 app store rating',
      '25 countries launched'
    ],
    timeline: '6 months',
    featured: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'DeFi Exchange Platform',
    category: 'Web3',
    description: 'Decentralized exchange with automated market making and advanced trading features',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
    results: [
      '$10M+ total value locked',
      '500K+ trades executed',
      '15K active traders'
    ],
    timeline: '12 months',
    featured: true,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'E-Commerce Revolution',
    category: 'Web Apps',
    description: 'Next-generation e-commerce platform with AI recommendations and seamless checkout',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
    results: [
      '$5M+ gross merchandise',
      '500+ active merchants',
      '8.5% conversion rate'
    ],
    timeline: '10 months',
    featured: false,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'TeamCollab SaaS',
    category: 'SaaS',
    description: 'Enterprise collaboration platform with AI-powered insights and workflow automation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'GraphQL', 'Kubernetes', 'AWS', 'AI'],
    results: [
      '1K+ teams using',
      '10M+ messages sent',
      '99.99% uptime'
    ],
    timeline: '14 months',
    featured: false,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'SmartCity IoT',
    category: 'AI/ML',
    description: 'IoT platform for smart city infrastructure management with predictive maintenance',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop',
    technologies: ['Python', 'IoT', 'React', 'TimescaleDB', 'ML'],
    results: [
      '10K+ devices connected',
      '5 cities deployed',
      '$1M+ cost savings'
    ],
    timeline: '16 months',
    featured: false,
    gradient: 'from-teal-500 to-cyan-500',
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
            <Award className="w-4 h-4" />
            Our Portfolio
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Success{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stories
            </span>
            <br />
            That Inspire
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of groundbreaking projects that have transformed 
            businesses and redefined industries through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Our most impactful solutions</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''} group`}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        index === 0 ? 'h-80' : 'h-48'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                          View Case Study
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white bg-opacity-90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          Featured
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                    <h3 className={`font-bold text-gray-900 mb-3 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-gray-600 mb-4 ${index === 0 ? 'text-lg' : 'text-base'}`}>
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">Key Results:</div>
                      <div className="space-y-1">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {project.timeline}
                      </div>
                      <div className="flex gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600">Explore our complete portfolio</p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-900 mb-2">Impact:</div>
                    <div className="space-y-1">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {project.timeline}
                    </div>
                    <div className="flex gap-1">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build something amazing together. Join our portfolio of successful projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}