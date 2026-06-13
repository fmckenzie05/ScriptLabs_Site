import Link from 'next/link'
import { Cookie, Shield, Settings, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'

const cookieTypes = [
  {
    type: 'Essential Cookies',
    required: true,
    description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
    examples: [
      'User session management',
      'Security tokens',
      'Form submission data',
      'Load balancing preferences',
    ],
    duration: 'Session or up to 1 year',
  },
  {
    type: 'Analytics Cookies',
    required: false,
    description: 'These cookies help us understand how visitors interact with our website.',
    examples: [
      'Google Analytics tracking',
      'Page view statistics',
      'User behavior analysis',
      'Performance monitoring',
    ],
    duration: 'Up to 2 years',
    thirdParty: ['Google Analytics', 'Mixpanel'],
  },
  {
    type: 'Marketing Cookies',
    required: false,
    description: 'These cookies are used to deliver relevant advertisements and track campaign effectiveness.',
    examples: [
      'Advertisement targeting',
      'Conversion tracking',
      'Social media integration',
      'Retargeting campaigns',
    ],
    duration: 'Up to 1 year',
    thirdParty: ['Google Ads', 'Facebook Pixel', 'LinkedIn Insight Tag'],
  },
  {
    type: 'Functional Cookies',
    required: false,
    description: 'These cookies enhance website functionality and personalization.',
    examples: [
      'Language preferences',
      'Theme settings',
      'User interface customizations',
      'Chat widget functionality',
    ],
    duration: 'Up to 1 year',
    thirdParty: ['Intercom', 'Zendesk'],
  },
]

const thirdPartyServices = [
  {
    name: 'Google Analytics',
    purpose: 'Website analytics and user behavior tracking',
    type: 'Analytics',
    privacy: 'https://policies.google.com/privacy',
    optOut: 'https://tools.google.com/dlpage/gaoptout',
  },
  {
    name: 'Google Ads',
    purpose: 'Advertisement targeting and conversion tracking',
    type: 'Marketing',
    privacy: 'https://policies.google.com/privacy',
    optOut: 'https://adssettings.google.com/',
  },
  {
    name: 'Facebook Pixel',
    purpose: 'Social media advertising and audience insights',
    type: 'Marketing',
    privacy: 'https://www.facebook.com/privacy/explanation',
    optOut: 'https://www.facebook.com/settings?tab=ads',
  },
  {
    name: 'Intercom',
    purpose: 'Customer support chat functionality',
    type: 'Functional',
    privacy: 'https://www.intercom.com/legal/privacy',
    optOut: 'Contact us to disable',
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 font-medium mb-6">
              <Cookie className="w-4 h-4" />
              Cookie Policy
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cookie{' '}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Learn how ScriptLabs uses cookies and similar technologies to improve your browsing experience, 
              analyze website traffic, and personalize content.
            </p>
            <div className="text-sm text-gray-500">
              Last updated: January 15, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-3">What Are Cookies?</h2>
                <p className="text-blue-800 leading-relaxed">
                  Cookies are small text files stored on your device when you visit a website. They help websites 
                  remember your preferences, improve functionality, and provide analytics about website usage. 
                  We use cookies to enhance your experience on our website and provide you with relevant content and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We categorize cookies based on their purpose and functionality
            </p>
          </div>

          <div className="space-y-8">
            {cookieTypes.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{category.type}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        category.required 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {category.required ? 'Required' : 'Optional'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                  </div>
                  <Settings className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples</h4>
                    <ul className="space-y-2">
                      {category.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Duration</h4>
                    <p className="text-sm text-gray-600">{category.duration}</p>
                  </div>

                  {category.thirdParty && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Third Parties</h4>
                      <div className="space-y-1">
                        {category.thirdParty.map((party) => (
                          <div key={party} className="text-sm text-gray-600">{party}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Details about external services that may set cookies on our website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {service.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{service.purpose}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={service.privacy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Privacy Policy
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link
                    href={service.optOut}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 font-medium hover:text-gray-700 transition-colors"
                  >
                    Opt Out
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Choices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Cookie Choices
            </h2>
            <p className="text-xl text-gray-600">
              You have control over how cookies are used on our website
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Settings</h3>
              <p className="text-gray-600 mb-6">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Block all cookies',
                  'Block third-party cookies only',
                  'Delete existing cookies',
                  'Set cookies to be deleted when you close your browser',
                  'Receive notifications when cookies are set',
                ].map((option, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{option}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">
                Note: Blocking essential cookies may prevent some website features from working properly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Preferences</h3>
              <p className="text-gray-600 mb-6">
                You can manage your cookie preferences for our website using our cookie consent tool. 
                This allows you to enable or disable different categories of cookies.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors">
                <Settings className="w-5 h-5" />
                Manage Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have questions about our cookie policy or how we use cookies, 
                please don't hesitate to contact us.
              </p>
              <div className="space-y-3">
                <div className="text-gray-600">
                  <strong>Email:</strong> privacy@scriptstudio8.com
                </div>
                <div className="text-gray-600">
                  <strong>Phone:</strong> +1 (916) 660-3509
                </div>
                <div className="text-gray-600">
                  <strong>Address:</strong> Seattle, WA
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>
              <p className="text-gray-600 mb-6">
                We may update this cookie policy periodically to reflect changes in our 
                practices or for legal compliance. We will notify you of significant changes 
                through our website or other communication methods.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600">
                  <strong>Last Updated:</strong> January 15, 2024
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Version:</strong> 1.2
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Related Privacy Information
          </h2>
          <p className="text-amber-100 mb-8">
            Learn more about how we protect your privacy and handle your data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/privacy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Shield className="w-5 h-5" />
              Privacy Policy
            </Link>
            <Link 
              href="/terms"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-all"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}