import Link from 'next/link'
import { ArrowRight, Rocket, Target, Heart, Code, Sparkles, Calendar } from 'lucide-react'

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We push boundaries and explore new technologies to create forward-thinking solutions.',
    color: 'blue',
  },
  {
    icon: Code,
    title: 'Quality Code',
    description: 'Clean, maintainable, and well-tested code is the foundation of everything we build.',
    color: 'purple',
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'We focus on delivering real value — working software that solves actual problems.',
    color: 'green',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and it shows in the care and dedication we put into every project.',
    color: 'red',
  },
]

const milestones = [
  { year: '2021', event: 'ScriptLabs Studios founded as an indie software development studio', highlight: 'Founded' },
  { year: '2023', event: 'Began development of Web3 and DeFi exchange platform projects', highlight: 'Web3 Division' },
  { year: '2024', event: 'Launched MVFN (Moral Value Foundation Network) — our first client project', highlight: 'First Client' },
  { year: '2025', event: 'Expanding service offerings across AI, mobile, and blockchain development', highlight: 'Growing' },
]

const colorClasses: Record<string, string> = {
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
  green: 'from-green-500 to-green-600',
  red: 'from-red-500 to-red-600',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            About ScriptLabs
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Building the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Future
            </span>
            <br />
            Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're an indie software studio creating modern web, mobile, AI, and blockchain
            solutions. We move fast, build with care, and ship real products.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To build high-quality software that solves real problems. We believe great technology
                doesn't have to come from a massive agency — it comes from skilled developers who
                care about their craft.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our expertise in AI, web development, mobile applications, and blockchain technology,
                we partner with clients to turn ideas into working products.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="text-xl font-semibold text-gray-700">Innovation Through Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[value.color]} rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we got here and where we're headed
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-shrink-0 lg:w-32">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">
                    <Calendar className="w-4 h-4" />
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.highlight}</h3>
                        <p className="text-gray-600">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Have a project in mind? We'd love to hear about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
