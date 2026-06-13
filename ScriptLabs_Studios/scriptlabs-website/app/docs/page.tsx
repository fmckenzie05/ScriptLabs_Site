import Link from 'next/link'
import { ArrowRight, BookOpen, Code, Download, Search, Filter, FileText, Video, ExternalLink, Star, Clock, User } from 'lucide-react'

const categories = [
  { name: 'Getting Started', count: 12, icon: BookOpen },
  { name: 'API Reference', count: 24, icon: Code },
  { name: 'Tutorials', count: 18, icon: Video },
  { name: 'Best Practices', count: 8, icon: Star },
  { name: 'Integration Guides', count: 15, icon: ExternalLink },
]

const quickStart = [
  {
    title: 'Installation & Setup',
    description: 'Get up and running with our development tools in minutes.',
    time: '5 min read',
    difficulty: 'Beginner',
    link: '/docs/installation',
  },
  {
    title: 'Your First API Call',
    description: 'Learn how to make your first API request and handle responses.',
    time: '10 min read',
    difficulty: 'Beginner',
    link: '/docs/first-api-call',
  },
  {
    title: 'Authentication Guide',
    description: 'Secure your applications with our authentication system.',
    time: '15 min read',
    difficulty: 'Intermediate',
    link: '/docs/authentication',
  },
  {
    title: 'SDK Integration',
    description: 'Integrate our SDKs into your favorite programming language.',
    time: '20 min read',
    difficulty: 'Intermediate',
    link: '/docs/sdk-integration',
  },
]

const popularDocs = [
  {
    title: 'REST API Reference',
    description: 'Complete reference for all REST API endpoints, parameters, and responses.',
    category: 'API Reference',
    updated: '2024-01-15',
    views: '15.2K',
  },
  {
    title: 'WebSocket Integration',
    description: 'Real-time data streaming with WebSocket connections and event handling.',
    category: 'Integration Guides',
    updated: '2024-01-12',
    views: '8.7K',
  },
  {
    title: 'Error Handling Best Practices',
    description: 'Comprehensive guide to handling errors gracefully in your applications.',
    category: 'Best Practices',
    updated: '2024-01-10',
    views: '12.3K',
  },
  {
    title: 'React Native SDK Tutorial',
    description: 'Step-by-step tutorial for integrating our services into React Native apps.',
    category: 'Tutorials',
    updated: '2024-01-08',
    views: '9.1K',
  },
]

const sdks = [
  { name: 'JavaScript/Node.js', version: 'v2.1.0', downloads: '50K+' },
  { name: 'Python', version: 'v1.8.2', downloads: '35K+' },
  { name: 'React Native', version: 'v1.5.1', downloads: '28K+' },
  { name: 'Swift/iOS', version: 'v1.3.0', downloads: '15K+' },
  { name: 'Kotlin/Android', version: 'v1.2.4', downloads: '12K+' },
  { name: 'Go', version: 'v1.1.0', downloads: '8K+' },
]

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Documentation
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Developer{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to integrate our services, from quick start guides to comprehensive API references.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/docs/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} articles</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Quick Start Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running in minutes with our step-by-step guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickStart.map((guide, index) => (
              <Link
                key={index}
                href={guide.link}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-4" />
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {guide.time}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {guide.difficulty}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Popular Documentation</h2>
              <p className="text-xl text-gray-600">Most viewed and helpful resources</p>
            </div>
            <Link 
              href="/docs/all"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Docs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularDocs.map((doc, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-grow">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        {doc.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 mb-4">{doc.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div>Updated: {new Date(doc.updated).toLocaleDateString()}</div>
                    <div>{doc.views} views</div>
                  </div>
                  <Link 
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Downloads */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">SDK Downloads</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official SDKs and libraries for your favorite programming languages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdks.map((sdk, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{sdk.name}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {sdk.version}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-600">{sdk.downloads} downloads</span>
                </div>
                <div className="flex gap-2">
                  <Link
                    href="#"
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    Download
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Need More Help?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Forum</h3>
              <p className="text-gray-600 mb-4">Join our developer community to ask questions and share knowledge.</p>
              <Link href="/community" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Visit Forum →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Submit a Ticket</h3>
              <p className="text-gray-600 mb-4">Get direct support from our technical team for complex issues.</p>
              <Link href="/support" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Create Ticket →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Watch step-by-step video guides for common integration patterns.</p>
              <Link href="/tutorials" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Watch Videos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers already using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}