import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Shield, Users, Sparkles, Star, Play } from 'lucide-react'

const services = [
  {
    icon: '🚀',
    title: 'Web Development',
    description: 'Modern, scalable web applications built with cutting-edge technologies',
    features: ['React/Next.js', 'Full-stack solutions', 'Cloud deployment'],
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that users love',
    features: ['iOS & Android', 'React Native', 'App Store optimization'],
  },
  {
    icon: '🤖',
    title: 'AI-Powered Solutions',
    description: 'Intelligent systems that transform your business operations',
    features: ['Machine Learning', 'Custom AI models', 'Data analytics'],
  },
  {
    icon: '⚡',
    title: 'Web3 & Blockchain',
    description: 'Decentralized applications and smart contract development',
    features: ['Smart contracts', 'DeFi platforms', 'NFT marketplaces'],
  },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechStart Inc.',
    content: 'ScriptLabs delivered our mobile app ahead of schedule with exceptional quality. Their AI integration exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder, GreenEarth Solutions',
    content: 'The web3 platform they built for us has processed over $2M in transactions flawlessly. Outstanding work!',
    rating: 5,
  },
  {
    name: 'Emily Johnson',
    role: 'VP Product, DataFlow Corp',
    content: 'Their AI-powered analytics dashboard transformed how we make business decisions. Highly recommended!',
    rating: 5,
  },
]

const stats = [
  { number: '150+', label: 'Projects Delivered' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '5+', label: 'Years Experience' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Trusted by 150+ Companies
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Build the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Future
              </span>
              <br />
              of Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We create innovative software solutions that transform businesses. From AI-powered applications 
              to blockchain platforms, we turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact/get-started"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                <Play className="w-5 h-5" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions powered by the latest technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose ScriptLabs?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                    <p className="text-gray-600">We deliver projects 40% faster than industry average using modern development practices.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                    <p className="text-gray-600">Bank-level security standards with comprehensive testing and monitoring.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Senior developers with 8+ years experience in cutting-edge technologies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">Join hundreds of satisfied clients worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}