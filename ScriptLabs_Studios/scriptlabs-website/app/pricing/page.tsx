'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, X, Zap, Shield, Users, Star, Sparkles, TrendingUp, HelpCircle } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: 10,
    description: 'Perfect for individuals and small projects',
    features: [
      '1 Active Project',
      '5GB Storage',
      'Basic Support (48hr response)',
      'Access to Documentation',
      'Community Forum Access',
      'Basic Analytics',
      'SSL Certificate',
      'Git Integration',
    ],
    notIncluded: [
      'Priority Support',
      'Custom Domain',
      'Advanced Analytics',
      'API Access',
      'Team Collaboration',
      'White-label Options',
    ],
    color: 'gray',
    recommended: false,
  },
  {
    name: 'Professional',
    price: 35,
    description: 'Ideal for growing businesses and teams',
    features: [
      '10 Active Projects',
      '50GB Storage',
      'Priority Support (4hr response)',
      'Full Documentation Access',
      'API Access (10K calls/month)',
      'Advanced Analytics',
      'Custom Domain',
      'Team Collaboration (5 users)',
      'Automated Backups',
      'CI/CD Pipeline',
      'Staging Environment',
      'Performance Monitoring',
    ],
    notIncluded: [
      'Dedicated Account Manager',
      'Custom Integrations',
      'White-label Options',
      'SLA Guarantee',
    ],
    color: 'blue',
    recommended: true,
  },
  {
    name: 'Business',
    price: 75,
    description: 'For teams requiring advanced features',
    features: [
      '50 Active Projects',
      '200GB Storage',
      'Priority Support (1hr response)',
      'Unlimited API Calls',
      'Team Collaboration (20 users)',
      'Advanced Security Features',
      'Custom Integrations',
      'White-label Options',
      'Dedicated Staging & Production',
      'Advanced CI/CD',
      'Database Management',
      'Load Balancing',
      'Custom Analytics Dashboard',
      'Training & Onboarding',
    ],
    notIncluded: [
      'Dedicated Infrastructure',
      'Custom SLA',
    ],
    color: 'purple',
    recommended: false,
  },
  {
    name: 'Enterprise',
    price: 100,
    description: 'Complete solution for large organizations',
    features: [
      'Unlimited Projects',
      '1TB Storage',
      'Dedicated Support (24/7)',
      'Dedicated Account Manager',
      'Unlimited Team Members',
      'Enterprise Security',
      'Custom Integrations',
      'White-label Options',
      'Dedicated Infrastructure',
      'Custom SLA',
      'Security Best Practices',
      'Custom Training Programs',
      'Priority Feature Requests',
      'Quarterly Business Reviews',
      'Custom Contract Terms',
      'Dedicated Success Manager',
    ],
    notIncluded: [],
    color: 'green',
    recommended: false,
  },
]

const billingOptions = [
  { period: 'monthly', label: 'Monthly', discount: 0 },
  { period: 'yearly', label: 'Yearly', discount: 20 },
]

const addons = [
  {
    name: 'Additional Storage',
    price: 5,
    unit: 'per 10GB',
    description: 'Extra storage space for your projects',
  },
  {
    name: 'Extra Team Members',
    price: 8,
    unit: 'per user',
    description: 'Add more collaborators to your team',
  },
  {
    name: 'Premium Support',
    price: 15,
    unit: 'per month',
    description: '30-minute response time with dedicated support',
  },
  {
    name: 'Custom Domain',
    price: 10,
    unit: 'per domain',
    description: 'Connect your custom domain with SSL',
  },
]

const faqs = [
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for enterprise plans.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, all plans come with a 14-day free trial. No credit card required to start.',
  },
  {
    question: 'What happens if I exceed my limits?',
    answer: 'We\'ll notify you when you\'re approaching your limits. You can either upgrade your plan or purchase add-ons for additional resources.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for all new subscriptions. Annual plans are refundable within the first 30 days.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'You can cancel your subscription at any time. Your service will continue until the end of your billing period.',
  },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  const [selectedPlan, setSelectedPlan] = useState('Professional')

  const calculatePrice = (basePrice: number) => {
    if (billingPeriod === 'yearly') {
      return Math.round(basePrice * 0.8 * 12)
    }
    return basePrice
  }

  const formatPrice = (price: number) => {
    if (billingPeriod === 'yearly') {
      return `$${price}/year`
    }
    return `$${price}/mo`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Simple, Transparent Pricing
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Flexible subscription plans designed to scale with your business. 
              Start small and upgrade as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                    billingPeriod === 'yearly' ? 'translate-x-8' : ''
                  }`}
                />
              </button>
              <span className={`font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  Save 20%
                </span>
              </span>
            </div>

            {/* Free Trial Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 font-medium">
              <Sparkles className="w-4 h-4" />
              14-Day Free Trial • No Credit Card Required
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-3xl ${
                  plan.recommended ? 'ring-2 ring-blue-500 shadow-xl' : 'border border-gray-200'
                } p-8 hover:shadow-lg transition-all hover:-translate-y-2`}
                onMouseEnter={() => setSelectedPlan(plan.name)}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${billingPeriod === 'yearly' ? Math.round(plan.price * 0.8) : plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {billingPeriod === 'yearly' ? '/mo' : '/month'}
                    </span>
                    {billingPeriod === 'yearly' && (
                      <div className="text-sm text-gray-500 mt-2">
                        ${Math.round(plan.price * 0.8 * 12)} billed annually
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact/get-started"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all ${
                      plan.recommended
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <>
                      <div className="pt-4 border-t border-gray-200">
                        <ul className="space-y-3">
                          {plan.notIncluded.slice(0, 2).map((feature) => (
                            <li key={feature} className="flex items-start gap-3 opacity-50">
                              <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-500 line-through">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enhance Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Add extra features and resources as needed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon) => (
              <div key={addon.name} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">${addon.price}</span>
                  <span className="text-gray-600 text-sm">{addon.unit}</span>
                </div>
                <button className="mt-4 w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed comparison of all features across plans
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.name} className="text-center py-4 px-6">
                      <div className="font-semibold text-gray-900">{plan.name}</div>
                      <div className="text-sm text-gray-600">${plan.price}/mo</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Active Projects', values: ['1', '10', '50', 'Unlimited'] },
                  { feature: 'Storage', values: ['5GB', '50GB', '200GB', '1TB'] },
                  { feature: 'Team Members', values: ['1', '5', '20', 'Unlimited'] },
                  { feature: 'API Calls', values: ['1K/mo', '10K/mo', 'Unlimited', 'Unlimited'] },
                  { feature: 'Support Response', values: ['48hr', '4hr', '1hr', '24/7'] },
                  { feature: 'Custom Domain', values: [false, true, true, true] },
                  { feature: 'SSL Certificate', values: [true, true, true, true] },
                  { feature: 'Analytics', values: ['Basic', 'Advanced', 'Advanced', 'Custom'] },
                  { feature: 'White-label', values: [false, false, true, true] },
                  { feature: 'SLA Guarantee', values: [false, false, false, true] },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    {row.values.map((value, i) => (
                      <td key={i} className="text-center py-4 px-6">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-600">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using our platform. 
            Start your 14-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all"
            >
              Talk to Sales
            </Link>
          </div>
          <p className="text-sm text-blue-100 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}