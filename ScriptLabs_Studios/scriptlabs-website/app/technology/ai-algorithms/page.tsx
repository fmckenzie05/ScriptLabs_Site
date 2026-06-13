import Link from 'next/link'
import { ArrowRight, Brain, Cpu, Layers, BarChart3, GitBranch, Sparkles, CheckCircle } from 'lucide-react'

const algorithms = [
  {
    name: 'Neural Language Processing',
    description: 'Advanced NLP models for text understanding and generation',
    performance: '98.5% accuracy',
    applications: ['Chatbots', 'Content Generation', 'Sentiment Analysis'],
    icon: Brain,
  },
  {
    name: 'Computer Vision Engine',
    description: 'Real-time image and video analysis with object detection',
    performance: '95ms latency',
    applications: ['Quality Control', 'Security Systems', 'Medical Imaging'],
    icon: Layers,
  },
  {
    name: 'Predictive Analytics Suite',
    description: 'Machine learning models for forecasting and optimization',
    performance: '92% prediction accuracy',
    applications: ['Sales Forecasting', 'Risk Assessment', 'Resource Planning'],
    icon: BarChart3,
  },
  {
    name: 'Recommendation Engine',
    description: 'Personalized content and product recommendation system',
    performance: '3x engagement increase',
    applications: ['E-commerce', 'Content Platforms', 'Marketing'],
    icon: GitBranch,
  },
]

const benchmarks = [
  { metric: 'Processing Speed', value: 'Low latency', comparison: 'Optimized inference pipelines' },
  { metric: 'Model Quality', value: 'High accuracy', comparison: 'Fine-tuned for your domain' },
  { metric: 'Scalability', value: 'Cloud-native', comparison: 'Built to scale with demand' },
  { metric: 'Energy Efficiency', value: 'Optimized', comparison: 'Efficient model architectures' },
]

export default function AIAlgorithmsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Proprietary AI Technology
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI Algorithms That
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Transform Businesses
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our custom-built AI algorithms leverage cutting-edge machine learning techniques 
              to deliver unparalleled performance and accuracy for your applications.
            </p>
          </div>

          {/* Interactive Demo Button */}
          <div className="text-center mb-20">
            <Link
              href="/contact/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Request Live Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Algorithm Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Algorithm Suite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {algorithms.map((algo) => (
              <div
                key={algo.name}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl">
                    <algo.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{algo.name}</h3>
                    <p className="text-gray-600">{algo.description}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Performance:</span>
                  <p className="text-lg font-semibold text-purple-600">{algo.performance}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Applications:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {algo.applications.map((app) => (
                      <span
                        key={app}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Benchmarks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Performance Benchmarks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benchmarks.map((benchmark) => (
              <div
                key={benchmark.metric}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-colors"
              >
                <h3 className="text-sm font-medium text-gray-500 mb-2">{benchmark.metric}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">{benchmark.value}</p>
                <p className="text-sm text-purple-600">{benchmark.comparison}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Model Architecture</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Transformer-based neural networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Multi-modal learning capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Adaptive learning algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Real-time inference optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Processing</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Distributed computing framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Real-time stream processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Automated data preprocessing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Privacy-preserving techniques</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deployment Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Cloud-native architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Edge computing support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Containerized deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Auto-scaling capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Leverage Our AI Technology?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our proprietary AI algorithms can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Schedule Technical Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/technology/stack"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              View Tech Stack
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}