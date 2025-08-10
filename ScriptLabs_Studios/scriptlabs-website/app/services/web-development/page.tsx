import Link from 'next/link'
import { Globe, CheckCircle, ArrowRight, Zap, Shield, Layers, Code2 } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with sub-second load times and smooth interactions',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Built with security best practices and regular vulnerability assessments',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Designed to grow with your business from startup to enterprise',
  },
  {
    icon: Code2,
    title: 'Modern Stack',
    description: 'Using the latest technologies and frameworks for optimal performance',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We understand your business goals, target audience, and technical requirements',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Create wireframes, prototypes, and design systems tailored to your brand',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build your application using agile methodology with regular updates',
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Comprehensive testing across devices, browsers, and user scenarios',
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Deploy to production with monitoring and performance optimization',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Ongoing maintenance, updates, and technical support',
  },
]

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-deep-space pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-electric-blue/10 to-neural-purple/10 dark:from-electric-blue/20 dark:to-neural-purple/20">
        <div className="section-padding">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-electric-blue/20 flex items-center justify-center">
                <Globe className="w-7 h-7 text-electric-blue" />
              </div>
              <span className="text-electric-blue font-semibold">Our Service</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Web Development
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Build modern, scalable web applications that deliver exceptional user experiences 
              and drive business growth. From responsive websites to complex enterprise platforms, 
              we create solutions that perform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/get-started" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="btn-outline inline-flex items-center gap-2">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="section-padding">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose Our Web Development Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-electric-blue/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50 dark:bg-silver-code/5">
        <div className="section-padding">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
            Technologies We Master
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'TypeScript', 
              'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker'].map((tech) => (
              <div
                key={tech}
                className="bg-white dark:bg-silver-code/10 rounded-lg p-4 text-center border border-gray-200 dark:border-silver-code/20"
              >
                <span className="font-semibold text-gray-900 dark:text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="section-padding">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Development Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-electric-blue/20">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-electric-blue to-neural-purple">
        <div className="section-padding text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary together
          </p>
          <Link href="/contact/get-started" className="btn-primary bg-white text-electric-blue hover:bg-gray-100 inline-flex items-center gap-2">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}