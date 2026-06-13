'use client'

import { useState } from 'react'
import { Brain, Zap, Shield, Layers, GitBranch, Cloud } from 'lucide-react'

const technologies = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Custom models and intelligent features built into your applications',
    features: [
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Deep Learning Models',
    ],
    stats: { value: 'GPT-4 / Claude', label: 'AI Integration' },
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    icon: Zap,
    description: 'Fast applications with optimal resource utilization',
    features: [
      'Code Splitting',
      'Edge Computing',
      'CDN Integration',
      'Database Optimization',
    ],
    stats: { value: '<100ms', label: 'Target Response Time' },
  },
  {
    id: 'security',
    title: 'Security First',
    icon: Shield,
    description: 'Security best practices built into every layer of your application',
    features: [
      'End-to-End Encryption',
      'OWASP Best Practices',
      'Regular Security Audits',
      'Zero-Trust Architecture',
    ],
    stats: { value: 'OWASP', label: 'Security Standards' },
  },
  {
    id: 'architecture',
    title: 'Scalable Architecture',
    icon: Layers,
    description: 'Built to grow with your business from day one',
    features: [
      'Microservices',
      'Containerization',
      'Auto-scaling',
      'Load Balancing',
    ],
    stats: { value: 'Cloud', label: 'Native Architecture' },
  },
  {
    id: 'devops',
    title: 'Modern DevOps',
    icon: GitBranch,
    description: 'Continuous integration and deployment for rapid iteration',
    features: [
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Automated Testing',
      'Monitoring & Logging',
    ],
    stats: { value: 'CI/CD', label: 'Automated Pipelines' },
  },
  {
    id: 'cloud',
    title: 'Cloud Native',
    icon: Cloud,
    description: 'Leveraging the best of cloud platforms for optimal performance',
    features: [
      'AWS/GCP/Azure',
      'Serverless Functions',
      'Cloud Storage',
      'Global Distribution',
    ],
    stats: { value: 'Multi-Cloud', label: 'Platform Support' },
  },
]

export default function TechnologyShowcase() {
  const [activeTech, setActiveTech] = useState('ai')
  const active = technologies.find(t => t.id === activeTech)!

  return (
    <section className="py-24 bg-gradient-to-br from-deep-space to-deep-space/95">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Modern technologies and proven patterns for reliable software
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technology selector */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {technologies.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTech(tech.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    activeTech === tech.id
                      ? 'bg-electric-blue/20 border-electric-blue/50'
                      : 'bg-silver-code/10 border-silver-code/20 hover:bg-silver-code/20'
                  } border`}
                >
                  <div className="flex items-center gap-3">
                    <tech.icon className={`w-5 h-5 ${
                      activeTech === tech.id ? 'text-electric-blue' : 'text-gray-400'
                    }`} />
                    <span className={`font-semibold ${
                      activeTech === tech.id ? 'text-white' : 'text-gray-300'
                    }`}>
                      {tech.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Technology details */}
          <div className="lg:col-span-2">
            <div className="bg-silver-code/10 rounded-2xl p-8 border border-silver-code/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-electric-blue/20 flex items-center justify-center">
                  <active.icon className="w-7 h-7 text-electric-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {active.title}
                  </h3>
                  <p className="text-gray-400">
                    {active.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {active.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-electric-blue rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-electric-blue mb-2">
                      {active.stats.value}
                    </div>
                    <div className="text-gray-400">
                      {active.stats.label}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-silver-code/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    Production-ready technology stack
                  </span>
                  <div className="flex gap-2">
                    {['TypeScript', 'Python', 'Go', 'Rust'].map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 bg-silver-code/20 rounded-full text-xs text-gray-300"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
