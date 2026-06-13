import Link from 'next/link'
import { ArrowRight, Smartphone, Tablet, Zap, Shield, Users, Star, CheckCircle, Play, Code, Globe, Rocket } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Native iOS & Android',
    description: 'Platform-specific apps that leverage native capabilities for maximum performance and user experience.',
  },
  {
    icon: Code,
    title: 'Cross-Platform Solutions',
    description: 'React Native and Flutter apps that run seamlessly across multiple platforms with shared codebase.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized apps with fast loading times, smooth animations, and efficient memory usage.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with encryption, secure authentication, and compliance standards.',
  },
  {
    icon: Globe,
    title: 'Cloud Integration',
    description: 'Seamless integration with cloud services, APIs, and real-time data synchronization.',
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description: 'Intuitive interfaces designed for optimal user experience and accessibility.',
  },
]

const technologies = [
  { name: 'Swift', category: 'iOS' },
  { name: 'Kotlin', category: 'Android' },
  { name: 'React Native', category: 'Cross-Platform' },
  { name: 'Flutter', category: 'Cross-Platform' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'AWS Mobile', category: 'Cloud' },
  { name: 'GraphQL', category: 'API' },
  { name: 'PostgreSQL', category: 'Database' },
]

const portfolio = [
  {
    title: 'FinTech Mobile App',
    description: 'Secure banking app with biometric authentication and real-time transactions.',
    metrics: { users: '500K+', rating: '4.8', downloads: '1M+' },
    tech: ['React Native', 'Firebase', 'Biometric Auth'],
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-featured shopping app with AR try-on and AI-powered recommendations.',
    metrics: { users: '200K+', rating: '4.9', downloads: '750K+' },
    tech: ['Flutter', 'AWS', 'ML Kit'],
  },
  {
    title: 'Healthcare App',
    description: 'Telemedicine platform connecting patients with healthcare providers.',
    metrics: { users: '100K+', rating: '4.7', downloads: '500K+' },
    tech: ['Swift', 'Kotlin', 'WebRTC'],
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, target audience, and business goals to create a comprehensive mobile strategy.',
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Our designers create intuitive user interfaces and interactive prototypes for validation and testing.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Agile development process with continuous testing, code reviews, and quality assurance.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'App store deployment, post-launch monitoring, and ongoing maintenance and updates.',
  },
]

export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              Mobile Development
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Build Amazing{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mobile Apps
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Create powerful, user-friendly mobile applications that engage your audience and drive business growth across iOS and Android platforms.
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
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Mobile Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge mobile solutions that exceed expectations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks for superior mobile experiences
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors">
                <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-sm text-blue-600">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mobile apps that have made a real impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">{project.metrics.users}</div>
                    <div className="text-sm text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {project.metrics.rating}
                    </div>
                    <div className="text-sm text-gray-500">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">{project.metrics.downloads}</div>
                    <div className="text-sm text-gray-500">Downloads</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures success from concept to launch
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's turn your mobile app idea into a successful reality
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
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}