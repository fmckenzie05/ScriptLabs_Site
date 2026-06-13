import Link from 'next/link'
import { ArrowRight, Code2, Database, Cloud, Shield, Layers, GitBranch, Cpu, Globe } from 'lucide-react'

const techStack = {
  frontend: {
    title: 'Frontend Technologies',
    icon: Globe,
    technologies: [
      { name: 'React', version: '18.2+', description: 'Component-based UI library' },
      { name: 'Next.js', version: '14+', description: 'Full-stack React framework' },
      { name: 'Vue.js', version: '3+', description: 'Progressive JavaScript framework' },
      { name: 'Angular', version: '17+', description: 'Enterprise application framework' },
      { name: 'TypeScript', version: '5+', description: 'Type-safe JavaScript' },
      { name: 'Tailwind CSS', version: '3+', description: 'Utility-first CSS framework' },
    ],
  },
  backend: {
    title: 'Backend Technologies',
    icon: Code2,
    technologies: [
      { name: 'Node.js', version: '20 LTS', description: 'JavaScript runtime' },
      { name: 'Python', version: '3.11+', description: 'AI/ML and API development' },
      { name: 'Go', version: '1.21+', description: 'High-performance services' },
      { name: 'Rust', version: '1.7+', description: 'System-level programming' },
      { name: 'GraphQL', version: 'Latest', description: 'API query language' },
      { name: '.NET Core', version: '8+', description: 'Enterprise applications' },
    ],
  },
  database: {
    title: 'Database & Storage',
    icon: Database,
    technologies: [
      { name: 'PostgreSQL', version: '16+', description: 'Relational database' },
      { name: 'MongoDB', version: '7+', description: 'NoSQL document database' },
      { name: 'Redis', version: '7+', description: 'In-memory data store' },
      { name: 'Elasticsearch', version: '8+', description: 'Search and analytics' },
      { name: 'Apache Kafka', version: '3+', description: 'Event streaming platform' },
      { name: 'MinIO', version: 'Latest', description: 'Object storage' },
    ],
  },
  cloud: {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    technologies: [
      { name: 'AWS', version: 'Full Suite', description: 'Amazon Web Services' },
      { name: 'Google Cloud', version: 'Full Suite', description: 'Google Cloud Platform' },
      { name: 'Azure', version: 'Full Suite', description: 'Microsoft Azure' },
      { name: 'Kubernetes', version: '1.28+', description: 'Container orchestration' },
      { name: 'Docker', version: '24+', description: 'Containerization' },
      { name: 'Terraform', version: '1.6+', description: 'Infrastructure as Code' },
    ],
  },
  ai: {
    title: 'AI & Machine Learning',
    icon: Cpu,
    technologies: [
      { name: 'TensorFlow', version: '2.15+', description: 'ML framework' },
      { name: 'PyTorch', version: '2.1+', description: 'Deep learning' },
      { name: 'Hugging Face', version: 'Latest', description: 'NLP models' },
      { name: 'LangChain', version: '0.1+', description: 'LLM applications' },
      { name: 'OpenAI API', version: 'Latest', description: 'GPT integration' },
      { name: 'scikit-learn', version: '1.3+', description: 'ML algorithms' },
    ],
  },
  blockchain: {
    title: 'Web3 & Blockchain',
    icon: Layers,
    technologies: [
      { name: 'Solidity', version: '0.8+', description: 'Smart contracts' },
      { name: 'Ethereum', version: 'Latest', description: 'Blockchain platform' },
      { name: 'Web3.js', version: '4+', description: 'Ethereum JavaScript API' },
      { name: 'Hardhat', version: '2.19+', description: 'Development environment' },
      { name: 'IPFS', version: 'Latest', description: 'Distributed storage' },
      { name: 'Polygon', version: 'Latest', description: 'Layer 2 scaling' },
    ],
  },
}

const architectureFeatures = [
  {
    title: 'Microservices Architecture',
    description: 'Scalable, maintainable, and independently deployable services',
    icon: GitBranch,
  },
  {
    title: 'Event-Driven Design',
    description: 'Real-time data processing and reactive system architecture',
    icon: Layers,
  },
  {
    title: 'Security-First Approach',
    description: 'End-to-end encryption, OAuth 2.0, and zero-trust security',
    icon: Shield,
  },
  {
    title: 'CI/CD Pipeline',
    description: 'Automated testing, building, and deployment workflows',
    icon: Code2,
  },
]

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
              <Code2 className="w-4 h-4" />
              Technology Excellence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Technology
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stack & Architecture
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and best practices to build 
              scalable, secure, and high-performance applications.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {Object.values(techStack).map((category) => (
              <div
                key={category.title}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.technologies.map((tech) => (
                    <div key={tech.name} className="border-l-2 border-blue-200 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">
                          {tech.version}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Architecture & Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architectureFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Optimization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Performance Optimization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Optimization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Code splitting & lazy loading</li>
                <li>• Image optimization & WebP</li>
                <li>• CDN integration</li>
                <li>• Service workers & PWA</li>
                <li>• Bundle size optimization</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Optimization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Database query optimization</li>
                <li>• Caching strategies</li>
                <li>• Load balancing</li>
                <li>• Async processing</li>
                <li>• Connection pooling</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Auto-scaling policies</li>
                <li>• Container orchestration</li>
                <li>• Multi-region deployment</li>
                <li>• Monitoring & alerting</li>
                <li>• Disaster recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Implementation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Security Implementation
          </h2>
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">SSL/TLS</div>
                <p className="text-gray-600">End-to-end encryption</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">OAuth 2.0</div>
                <p className="text-gray-600">Secure authentication</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">OWASP</div>
                <p className="text-gray-600">Security best practices</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">SOC 2</div>
                <p className="text-gray-600">Compliance ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Build with the Best Technology?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your project requirements and find the perfect technology stack for your needs.
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
              href="/technology/ai-algorithms"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              Explore AI Technology
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}