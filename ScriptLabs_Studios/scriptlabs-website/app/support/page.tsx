import Link from 'next/link'
import { ArrowRight, MessageCircle, Mail, Phone, Clock, Search, BookOpen, Users, Zap, CheckCircle } from 'lucide-react'

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team during business hours.',
    availability: 'Mon-Fri, 9 AM - 6 PM PST',
    responseTime: 'Within 2 minutes',
    action: 'Start Chat',
    href: '#chat',
    recommended: true,
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send detailed questions and receive comprehensive responses.',
    availability: '24/7',
    responseTime: 'Within 4 hours',
    action: 'Send Email',
    href: 'mailto:support@scriptstudio8.com',
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts for complex issues.',
    availability: 'Mon-Fri, 8 AM - 8 PM PST',
    responseTime: 'Immediate',
    action: 'Call Now',
    href: 'tel:+19166603509',
  },
]

const faqCategories = [
  {
    title: 'Getting Started',
    questions: [
      {
        question: 'How do I create an account and get started?',
        answer: 'You can create an account by visiting our signup page and following the step-by-step onboarding process. Once registered, you\'ll receive access to our developer dashboard and documentation.',
      },
      {
        question: 'What programming languages do you support?',
        answer: 'We provide SDKs and libraries for JavaScript/Node.js, Python, React Native, Swift, Kotlin, and Go. We also offer REST APIs that work with any programming language.',
      },
    ],
  },
  {
    title: 'Billing & Pricing',
    questions: [
      {
        question: 'How does your pricing model work?',
        answer: 'We offer flexible pricing based on usage and features. Our plans start with a free tier for development and small projects, with paid plans for production use and advanced features.',
      },
      {
        question: 'Can I change my plan at any time?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time from your account dashboard. Changes take effect immediately, and billing is prorated accordingly.',
      },
    ],
  },
  {
    title: 'Technical Support',
    questions: [
      {
        question: 'How do I troubleshoot API connection issues?',
        answer: 'First, check your API credentials and endpoint URLs. Ensure your network allows outbound HTTPS connections. Review our troubleshooting guide in the documentation for detailed steps.',
      },
      {
        question: 'What are your API rate limits?',
        answer: 'Rate limits vary by plan and endpoint. Free tier allows 1,000 requests per hour, while paid plans offer higher limits. You can monitor your usage in the developer dashboard.',
      },
    ],
  },
]

const resources = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive guides, API references, and tutorials.',
    link: '/docs',
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other developers and share knowledge.',
    link: '/community',
  },
  {
    icon: Zap,
    title: 'Status Page',
    description: 'Real-time system status and incident reports.',
    link: '/status',
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Support Center
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              We're Here to{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Help
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get the support you need to succeed with our platform. From technical questions to account assistance, 
              our expert team is ready to help you build amazing things.
            </p>
            
            {/* Quick Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Support Channel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to get help, tailored to your needs and urgency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-2 ${
                  channel.recommended ? 'ring-2 ring-green-500' : 'border border-gray-200'
                }`}
              >
                {channel.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`w-16 h-16 ${channel.recommended ? 'bg-green-100' : 'bg-blue-100'} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <channel.icon className={`w-8 h-8 ${channel.recommended ? 'text-green-600' : 'text-blue-600'}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{channel.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{channel.description}</p>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center gap-2 justify-center text-gray-500">
                      <Clock className="w-4 h-4" />
                      {channel.availability}
                    </div>
                    <div className="font-medium text-gray-700">
                      Response: {channel.responseTime}
                    </div>
                  </div>
                  
                  <Link
                    href={channel.href}
                    className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all ${
                      channel.recommended
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {channel.action}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category.title}</h3>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white rounded-2xl p-8 shadow-sm">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            {faq.question}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/support/faq"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              View All FAQs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Self-Service Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Self-Service Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our resources to find solutions independently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <resource.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600">
              Send us a message and we'll get back to you as soon as possible
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select a subject</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Feature Request</option>
                  <option>Bug Report</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Describe your issue or question in detail..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Enterprise Support */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Enterprise Support?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get dedicated support with priority response times, custom integrations, and direct access to our engineering team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/enterprise"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}