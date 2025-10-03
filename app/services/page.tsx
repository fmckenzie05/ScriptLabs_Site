import Link from 'next/link'
import { Globe, Smartphone, Box, Sparkles, Users, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Build modern, scalable web applications that deliver exceptional user experiences',
    icon: Globe,
    href: '/services/web-development',
    gradient: 'from-electric-blue to-neural-purple',
    features: [
      'Progressive Web Apps',
      'E-commerce Platforms',
      'Enterprise Solutions',
      'Real-time Applications',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js'],
  },
  {
    title: 'Mobile Development',
    description: 'Create native and cross-platform mobile apps that users love',
    icon: Smartphone,
    href: '/services/mobile-development',
    gradient: 'from-neural-purple to-quantum-green',
    features: [
      'iOS & Android Native',
      'Cross-platform Solutions',
      'App Store Optimization',
      'Push Notifications',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    title: 'Web3 & Blockchain',
    description: 'Build decentralized applications and smart contract solutions',
    icon: Box,
    href: '/services/web3-blockchain',
    gradient: 'from-quantum-green to-ai-orange',
    features: [
      'Smart Contracts',
      'DeFi Platforms',
      'NFT Marketplaces',
      'Blockchain Integration',
    ],
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Polygon', 'IPFS'],
  },
  {
    title: 'AI-Powered SaaS',
    description: 'Leverage our proprietary AI algorithms to build intelligent platforms',
    icon: Sparkles,
    href: '/services/ai-saas',
    gradient: 'from-ai-orange to-web3-pink',
    features: [
      'Custom AI Models',
      'Machine Learning',
      'Predictive Analytics',
      'Natural Language Processing',
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Langchain', 'Python'],
  },
  {
    title: 'Consulting',
    description: 'Strategic technology guidance and digital transformation services',
    icon: Users,
    href: '/services/consulting',
    gradient: 'from-web3-pink to-electric-blue',
    features: [
      'Architecture Review',
      'Technology Strategy',
      'Team Training',
      'Performance Optimization',
    ],
    technologies: ['Best Practices', 'Agile', 'DevOps', 'Cloud', 'Security'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-deep-space pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-deep-space to-electric-blue/10">
        <div className="section-padding text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end development solutions powered by cutting-edge technology and AI innovation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="section-padding">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Service Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-quantum-green flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                      Technologies we use:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-silver-code/20 rounded-full text-sm text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-electric-blue font-semibold hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Service Visual */}
                <div className="flex-1">
                  <div className={`aspect-square rounded-2xl bg-gradient-to-br ${service.gradient} p-1`}>
                    <div className="w-full h-full rounded-2xl bg-white dark:bg-deep-space flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-gray-200 dark:text-silver-code/20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-electric-blue to-neural-purple">
        <div className="section-padding text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/get-started" className="btn-primary bg-white text-electric-blue hover:bg-gray-100">
              Start Your Project
            </Link>
            <Link href="/contact/demo" className="btn-outline border-white text-white hover:bg-white hover:text-electric-blue">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}