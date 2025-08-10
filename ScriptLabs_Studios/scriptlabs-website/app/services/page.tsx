import Link from 'next/link'
import { ArrowRight, CheckCircle, Code, Smartphone, Brain, Coins, Users, Headphones } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, scalable web applications built with cutting-edge technologies',
    longDescription: 'We create responsive, fast, and secure web applications using the latest frameworks and best practices. From simple landing pages to complex enterprise applications, we deliver solutions that drive business growth.',
    features: [
      'React, Next.js, Vue.js development',
      'Full-stack solutions with Node.js, Python',
      'Progressive Web Apps (PWAs)',
      'E-commerce platforms',
      'Content Management Systems',
      'API development and integration',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    startingPrice: '$5,000',
    timeline: '4-12 weeks',
    href: '/services/web-development',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that users love',
    longDescription: 'Create engaging mobile experiences with native iOS and Android apps or cross-platform solutions. We focus on user experience, performance, and scalability to ensure your app stands out in the app stores.',
    features: [
      'iOS and Android native development',
      'Cross-platform with React Native',
      'Flutter development',
      'App Store optimization',
      'Push notifications and analytics',
      'Backend integration and APIs',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'MongoDB'],
    startingPrice: '$8,000',
    timeline: '6-16 weeks',
    href: '/services/mobile-development',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Intelligent systems that transform your business operations',
    longDescription: 'Leverage the power of artificial intelligence to automate processes, gain insights from data, and create intelligent user experiences. We build custom AI solutions tailored to your specific business needs.',
    features: [
      'Machine Learning model development',
      'Natural Language Processing',
      'Computer Vision applications',
      'Predictive analytics platforms',
      'Chatbots and virtual assistants',
      'AI integration with existing systems',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Langchain', 'Docker'],
    startingPrice: '$12,000',
    timeline: '8-20 weeks',
    href: '/services/ai-saas',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Coins,
    title: 'Web3 & Blockchain',
    description: 'Decentralized applications and smart contract development',
    longDescription: 'Build the future of decentralized technology with blockchain solutions. From smart contracts to full DeFi platforms, we create secure, transparent, and efficient blockchain applications.',
    features: [
      'Smart contract development',
      'DeFi platform creation',
      'NFT marketplace development',
      'Cryptocurrency integration',
      'Blockchain consulting',
      'Security audits and testing',
    ],
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Polygon', 'IPFS', 'Hardhat'],
    startingPrice: '$15,000',
    timeline: '10-24 weeks',
    href: '/services/web3-blockchain',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Consulting Services',
    description: 'Strategic technology guidance and digital transformation',
    longDescription: 'Get expert advice on technology strategy, architecture decisions, and digital transformation. Our senior consultants help you make informed decisions and avoid costly mistakes.',
    features: [
      'Technology strategy planning',
      'Architecture review and design',
      'Code audits and optimization',
      'Team training and mentorship',
      'Digital transformation roadmaps',
      'Performance optimization',
    ],
    technologies: ['Best Practices', 'Architecture', 'DevOps', 'Cloud', 'Security', 'Agile'],
    startingPrice: '$200/hour',
    timeline: '1-12 weeks',
    href: '/services/consulting',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Headphones,
    title: 'Support & Maintenance',
    description: '24/7 support and ongoing maintenance for your applications',
    longDescription: 'Keep your applications running smoothly with our comprehensive support and maintenance services. We provide ongoing updates, security patches, and technical support.',
    features: [
      '24/7 monitoring and support',
      'Security updates and patches',
      'Performance optimization',
      'Bug fixes and improvements',
      'Hosting and infrastructure management',
      'Backup and disaster recovery',
    ],
    technologies: ['Monitoring', 'AWS', 'Docker', 'CI/CD', 'Security', 'Analytics'],
    startingPrice: '$500/month',
    timeline: 'Ongoing',
    href: '/contact',
    gradient: 'from-teal-500 to-cyan-500',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We understand your goals, requirements, and target audience',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We create a detailed plan and technology roadmap',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We design user-friendly interfaces and system architecture',
  },
  {
    number: '04',
    title: 'Development',
    description: 'We build your solution using modern technologies',
  },
  {
    number: '05',
    title: 'Testing',
    description: 'We thoroughly test for quality, security, and performance',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'We deploy your solution and provide ongoing support',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
            <Code className="w-4 h-4" />
            Our Services
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vision
            </span>
            <br />
            Into Reality
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From web applications to AI-powered solutions, we provide end-to-end development 
            services that drive innovation and business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.longDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex gap-6">
                    <div>
                      <div className="text-sm text-gray-500">Starting at</div>
                      <div className="font-bold text-gray-900">{service.startingPrice}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-bold text-gray-900">{service.timeline}</div>
                    </div>
                  </div>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your requirements and create a custom solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}