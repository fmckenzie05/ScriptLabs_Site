import Link from 'next/link'
import { ArrowRight, Coins, Shield, Zap, Globe, Users, CheckCircle, Play, Layers, Lock } from 'lucide-react'

const features = [
  {
    icon: Coins,
    title: 'Smart Contracts',
    description: 'Secure, audited smart contracts built on Ethereum, Polygon, and other leading blockchain platforms.',
  },
  {
    icon: Shield,
    title: 'DeFi Protocols',
    description: 'Decentralized finance solutions including DEXs, lending platforms, and yield farming protocols.',
  },
  {
    icon: Globe,
    title: 'NFT Marketplaces',
    description: 'Complete NFT platforms with minting, trading, and royalty management systems.',
  },
  {
    icon: Layers,
    title: 'dApp Development',
    description: 'Full-stack decentralized applications with intuitive user interfaces and Web3 integration.',
  },
  {
    icon: Lock,
    title: 'Security Audits',
    description: 'Comprehensive security audits and testing to ensure your blockchain applications are bulletproof.',
  },
  {
    icon: Zap,
    title: 'Layer 2 Solutions',
    description: 'Scalable solutions on Polygon, Arbitrum, and other Layer 2 networks for reduced gas fees.',
  },
]

const technologies = [
  { name: 'Solidity', category: 'Smart Contracts' },
  { name: 'Ethereum', category: 'Blockchain' },
  { name: 'Polygon', category: 'Layer 2' },
  { name: 'Web3.js', category: 'Integration' },
  { name: 'Hardhat', category: 'Development' },
  { name: 'IPFS', category: 'Storage' },
  { name: 'MetaMask', category: 'Wallet' },
  { name: 'The Graph', category: 'Indexing' },
]

const services = [
  {
    title: 'Token Creation & ICO/IDO',
    description: 'Custom token development with tokenomics design and successful launch strategies.',
    features: ['ERC-20/ERC-721 Tokens', 'Tokenomics Design', 'ICO/IDO Platform', 'Vesting Contracts'],
  },
  {
    title: 'DeFi Platform Development',
    description: 'Complete DeFi ecosystems with lending, borrowing, staking, and yield farming.',
    features: ['DEX Development', 'Lending Protocols', 'Yield Farming', 'Governance Tokens'],
  },
  {
    title: 'NFT Marketplace & Tools',
    description: 'End-to-end NFT solutions from minting platforms to full-featured marketplaces.',
    features: ['NFT Minting Platform', 'Marketplace Development', 'Royalty Systems', 'Metadata Management'],
  },
  {
    title: 'Blockchain Integration',
    description: 'Integrate blockchain technology into existing applications and business processes.',
    features: ['API Integration', 'Wallet Connection', 'Payment Gateways', 'Cross-chain Bridges'],
  },
]

const blockchainCapabilities = [
  {
    title: 'DeFi Protocol Development',
    description: 'Lending, borrowing, and liquidity pool protocols with automated liquidation and interest rate models.',
    tech: ['Solidity', 'Ethereum', 'Web3.js'],
  },
  {
    title: 'NFT Marketplace Development',
    description: 'Full-featured NFT platforms with minting, listing, auction mechanics, and royalty distribution.',
    tech: ['Polygon', 'IPFS', 'React'],
  },
  {
    title: 'GameFi & Play-to-Earn',
    description: 'Blockchain-integrated gaming with NFT rewards, token economies, and on-chain governance.',
    tech: ['Solidity', 'Unity', 'Moralis'],
  },
]

const process = [
  {
    step: '01',
    title: 'Strategy & Architecture',
    description: 'Define blockchain strategy, choose optimal networks, and design smart contract architecture.',
  },
  {
    step: '02',
    title: 'Smart Contract Development',
    description: 'Build, test, and optimize smart contracts with comprehensive unit and integration testing.',
  },
  {
    step: '03',
    title: 'Frontend & Integration',
    description: 'Develop user-friendly interfaces with seamless Web3 wallet integration and blockchain connectivity.',
  },
  {
    step: '04',
    title: 'Audit & Deployment',
    description: 'Conduct security audits, deploy to mainnet, and provide ongoing maintenance and updates.',
  },
]

export default function Web3BlockchainPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium mb-6">
              <Coins className="w-4 h-4" />
              Web3 & Blockchain
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Build the{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Decentralized
              </span>
              <br />
              Future
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Create revolutionary blockchain applications, DeFi protocols, NFT platforms, and smart contracts that shape the future of finance and digital ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact/get-started"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
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
              Web3 & Blockchain Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive blockchain solutions for the decentralized economy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Blockchain Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end blockchain development services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Blockchain Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and platforms for Web3 development
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center hover:bg-purple-50 transition-colors">
                <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-sm text-purple-600">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Can Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Types of blockchain applications we develop
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blockchainCapabilities.map((cap, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                <p className="text-gray-600 mb-6">{cap.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cap.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodology for successful blockchain projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 mx-auto">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Enter Web3?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's build the decentralized future together with cutting-edge blockchain technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}