import Link from 'next/link'
import { ArrowRight, Code, Wrench, BookOpen, AlertCircle, Clock, CheckCircle } from 'lucide-react'

const roadmapItems = [
  {
    phase: 'Phase 1',
    title: 'Core API Documentation',
    status: 'completed',
    description: 'Basic API endpoints, authentication, and getting started guide.',
    eta: 'Completed',
  },
  {
    phase: 'Phase 2',
    title: 'Interactive API Explorer',
    status: 'in-progress',
    description: 'Live API testing interface with real-time examples and responses.',
    eta: 'Q2 2024',
  },
  {
    phase: 'Phase 3',
    title: 'SDK Documentation',
    status: 'planned',
    description: 'Comprehensive documentation for all supported programming languages.',
    eta: 'Q3 2024',
  },
  {
    phase: 'Phase 4',
    title: 'Advanced Integrations',
    status: 'planned',
    description: 'Webhooks, GraphQL endpoints, and advanced integration patterns.',
    eta: 'Q4 2024',
  },
]

const availableSections = [
  {
    title: 'Authentication',
    description: 'API key management, OAuth flows, and security best practices.',
    status: 'available',
    link: '/api/auth',
  },
  {
    title: 'Getting Started',
    description: 'Quick start guide with your first API calls and basic integration.',
    status: 'available',
    link: '/api/getting-started',
  },
  {
    title: 'Rate Limiting',
    description: 'Understanding rate limits, quotas, and optimization strategies.',
    status: 'available',
    link: '/api/rate-limiting',
  },
  {
    title: 'Error Handling',
    description: 'HTTP status codes, error responses, and troubleshooting guide.',
    status: 'available',
    link: '/api/errors',
  },
]

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-medium mb-6">
            <Wrench className="w-4 h-4" />
            Work in Progress
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            API{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Reference
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're building comprehensive API documentation to help you integrate our services seamlessly. 
            Some sections are available now, with more coming soon.
          </p>

          {/* Status Alert */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-yellow-800 mb-2">Documentation in Development</h3>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    Our API reference is actively being developed. While core endpoints are documented, 
                    we're continuously adding new sections, examples, and interactive tools. 
                    Check back regularly for updates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#available"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Browse Available Docs
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              Request Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Development Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track our progress as we build comprehensive API documentation
            </p>
          </div>

          <div className="space-y-6">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border-l-4 ${
                  item.status === 'completed' 
                    ? 'border-green-500' 
                    : item.status === 'in-progress' 
                    ? 'border-orange-500' 
                    : 'border-gray-300'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {item.phase}
                      </span>
                      <div className="flex items-center gap-2">
                        {item.status === 'completed' && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                        {item.status === 'in-progress' && (
                          <Clock className="w-5 h-5 text-orange-500" />
                        )}
                        <span className={`text-sm font-medium ${
                          item.status === 'completed' 
                            ? 'text-green-700' 
                            : item.status === 'in-progress'
                            ? 'text-orange-700'
                            : 'text-gray-600'
                        }`}>
                          {item.status === 'completed' ? 'Completed' : 
                           item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">ETA</div>
                    <div className="font-semibold text-gray-900">{item.eta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Sections */}
      <section className="py-20 bg-white" id="available">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Available Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with these sections while we complete the full reference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {availableSections.map((section, index) => (
              <Link
                key={index}
                href={section.link}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-2 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="w-6 h-6 text-blue-600" />
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Available
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{section.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preview of what's coming to our API documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Interactive API Explorer',
              'Code Examples Library',
              'Webhook Documentation',
              'GraphQL Schema',
              'Postman Collections',
              'OpenAPI Specification',
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center opacity-60"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Help Us Build Better Documentation
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your feedback helps us prioritize and improve our API documentation. 
            Let us know what you need most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Request Features
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/support"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Get Notified of Updates
          </h2>
          <p className="text-orange-100 mb-8">
            Subscribe to receive notifications when new API documentation is released.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}