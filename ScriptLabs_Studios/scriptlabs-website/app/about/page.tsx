import Link from 'next/link'
import { ArrowRight, Users, Target, Rocket, Award, Heart, Linkedin, Github, Twitter, Sparkles, MapPin, Mail, Calendar } from 'lucide-react'

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We push boundaries and challenge the status quo to create revolutionary solutions that define the future.',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our mission. We\'re committed to delivering exceptional value and exceeding expectations.',
    color: 'purple',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to communication.',
    color: 'green',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and it shows in the quality of our work and dedication to every project.',
    color: 'red',
  },
]

const team = [
  {
    name: 'Honorine Ndom Ndzah',
    role: 'CEO & Co-Founder',
    image: '/Honorine.jpg',
    bio: 'Software Engineer and AI specialist with experience at Infosys and Cognizant. OpenStack contributor with an M.S. in Computer Science from City University of Seattle, specializing in scalable AI-driven systems.',
    expertise: ['AI/ML', 'Cloud Architecture', 'Team Leadership'],
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'Fernando A McKenzie',
    role: 'CIO & Co-Founder',
    image: '/Fernando.jpg',
    bio: 'IT & Supply Chain professional with 8+ years military logistics experience. Holds a B.S. in Information Technology and M.S. in Computer Science. Currently an Enterprise Architect at Costco IT, expert in data-driven solutions.',
    expertise: ['Enterprise Architecture', 'Data Systems', 'Operations'],
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
]

const milestones = [
  { year: '2018', event: 'ScriptLabs founded with a vision to revolutionize software development', highlight: 'Founded' },
  { year: '2020', event: 'Launched proprietary AI algorithms and secured first enterprise clients', highlight: 'AI Launch' },
  { year: '2021', event: 'Expanded to 50+ team members and opened offices in 3 countries', highlight: 'Global Expansion' },
  { year: '2022', event: 'Achieved $10M in revenue and launched Web3 division', highlight: '$10M Revenue' },
  { year: '2023', event: 'Recognized as top AI development studio by TechCrunch', highlight: 'Industry Recognition' },
  { year: '2024', event: 'Serving 200+ clients globally with 99.9% satisfaction rate', highlight: '200+ Clients' },
]

const stats = [
  { number: '200+', label: 'Happy Clients' },
  { number: '350+', label: 'Projects Completed' },
  { number: '50+', label: 'Team Members' },
  { number: '99.9%', label: 'Uptime Guarantee' },
]

const colorClasses = {
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
            We're a team of passionate innovators, engineers, and designers creating 
            solutions that transform industries and improve lives through cutting-edge technology.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                growth, and positive change. We believe in creating technology that not only solves 
                problems but also opens new possibilities for human advancement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our expertise in AI, web development, mobile applications, and blockchain technology, 
                we partner with organizations to transform their vision into reality.
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
              From startup to industry leader - our story of growth and innovation
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

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">The visionaries driving our success</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-2xl object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Expertise:</div>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link href={member.social.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </Link>
                      <Link href={member.social.github} className="text-blue-600 hover:text-blue-800 transition-colors">
                        <Github className="w-5 h-5" />
                      </Link>
                      <Link href={member.social.twitter} className="text-blue-600 hover:text-blue-800 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </Link>
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
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're looking to build something amazing or join our team, we'd love to hear from you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/about/careers"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}