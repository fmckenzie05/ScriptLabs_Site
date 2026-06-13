import Link from 'next/link'
import { ArrowRight, Users, Linkedin, Github, Twitter, Mail, MapPin, Award, Star, Code, Briefcase } from 'lucide-react'

const leadership = [
  {
    name: 'Honorine Ndom Ndzah',
    role: 'CEO & Co-Founder',
    image: '/Honorine.jpg',
    bio: 'Software Engineer and AI specialist with experience at Infosys and Cognizant. OpenStack contributor with an M.S. in Computer Science from City University of Seattle, specializing in scalable AI-driven systems.',
    longBio: 'Honorine brings deep technical expertise in artificial intelligence and distributed systems. Her experience at major tech companies, combined with her contributions to open-source projects like OpenStack, positions her as a visionary leader in the AI space. She holds an M.S. in Computer Science and is passionate about building AI systems that scale.',
    expertise: ['AI/ML Engineering', 'Cloud Architecture', 'Team Leadership', 'OpenStack', 'Distributed Systems'],
    achievements: ['OpenStack Contributor', 'M.S. Computer Science', 'Former Infosys Engineer', 'AI Research Publications'],
    location: 'Seattle, WA',
    social: { 
      linkedin: 'https://linkedin.com/in/honorine-ndom', 
      github: 'https://github.com/honorine-ndom', 
      twitter: 'https://twitter.com/honorine_ndom',
      email: 'honorine@scriptstudio8.com'
    },
  },
  {
    name: 'Fernando A McKenzie',
    role: 'CIO & Co-Founder',
    image: '/Fernando.jpg',
    bio: 'IT & Supply Chain professional with 8+ years military logistics experience. Holds a B.S. in Information Technology and M.S. in Computer Science. Currently an Enterprise Architect at Costco IT, expert in data-driven solutions.',
    longBio: 'Fernando combines extensive military logistics experience with enterprise IT architecture expertise. His unique background in both operational efficiency and technology implementation makes him invaluable for scaling complex systems. Currently serving as Enterprise Architect at Costco IT, he specializes in data-driven solutions and organizational transformation.',
    expertise: ['Enterprise Architecture', 'Data Systems', 'Operations Management', 'Supply Chain Tech', 'Strategic Planning'],
    achievements: ['Enterprise Architect at Costco', 'Military Logistics Veteran', 'M.S. Computer Science', 'B.S. Information Technology'],
    location: 'Seattle, WA',
    social: { 
      linkedin: 'https://linkedin.com/in/fernando-mckenzie', 
      github: 'https://github.com/fernando-mckenzie', 
      twitter: 'https://twitter.com/fernando_mck',
      email: 'fernando@scriptstudio8.com'
    },
  },
]

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Senior Full-Stack Developer',
    image: '/api/placeholder/300/300',
    bio: 'Full-stack engineer with 6+ years experience in React, Node.js, and cloud architecture. Passionate about building scalable web applications.',
    expertise: ['React', 'Node.js', 'AWS', 'TypeScript'],
    location: 'San Francisco, CA',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Mobile Development Lead',
    image: '/api/placeholder/300/300',
    bio: 'Mobile development expert specializing in React Native and Flutter. Former Apple and Google engineer with 8+ years experience.',
    expertise: ['React Native', 'Flutter', 'iOS', 'Android'],
    location: 'Austin, TX',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'Aisha Patel',
    role: 'Blockchain Developer',
    image: '/api/placeholder/300/300',
    bio: 'Blockchain specialist with expertise in Solidity, DeFi protocols, and smart contract security. Former ConsenSys developer.',
    expertise: ['Solidity', 'Ethereum', 'DeFi', 'Smart Contracts'],
    location: 'New York, NY',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'David Kim',
    role: 'DevOps Engineer',
    image: '/api/placeholder/300/300',
    bio: 'DevOps and cloud infrastructure specialist. Expert in Kubernetes, Docker, and CI/CD pipelines with 7+ years experience.',
    expertise: ['Kubernetes', 'Docker', 'AWS', 'CI/CD'],
    location: 'Seattle, WA',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'Emily Johnson',
    role: 'UX/UI Designer',
    image: '/api/placeholder/300/300',
    bio: 'Creative designer with a passion for user-centered design. Expert in Figma, user research, and design systems.',
    expertise: ['Figma', 'User Research', 'Design Systems', 'Prototyping'],
    location: 'Los Angeles, CA',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'James Thompson',
    role: 'AI/ML Engineer',
    image: '/api/placeholder/300/300',
    bio: 'Machine learning engineer with expertise in deep learning, computer vision, and natural language processing.',
    expertise: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
    location: 'Boston, MA',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
]

const stats = [
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Countries Represented' },
  { number: '8+', label: 'Years Average Experience' },
  { number: '200+', label: 'Projects Delivered' },
]

const values = [
  {
    icon: Code,
    title: 'Technical Excellence',
    description: 'We maintain the highest standards in code quality, architecture, and technical implementation.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe the best solutions come from diverse perspectives and collaborative problem-solving.',
  },
  {
    icon: Star,
    title: 'Innovation',
    description: 'We stay at the forefront of technology, constantly learning and adopting new tools and methodologies.',
  },
  {
    icon: Award,
    title: 'Client Success',
    description: 'Our success is measured by our clients\' success. We are committed to delivering exceptional value.',
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Meet the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovators
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our diverse team of experts brings together decades of experience in cutting-edge technologies, 
              united by a passion for innovation and excellence.
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
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders driving innovation and growth
            </p>
          </div>
          
          <div className="space-y-16">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="flex flex-col">
                    <div className="relative mb-6 flex justify-center lg:justify-center">
                      <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-3xl overflow-hidden shadow-md">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                      <p className="text-lg text-blue-600 font-medium mb-4">{leader.role}</p>
                      <div className="flex items-center justify-center gap-2 mb-4 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {leader.location}
                      </div>
                      <div className="flex gap-4 justify-center">
                        <Link href={leader.social.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors">
                          <Linkedin className="w-6 h-6" />
                        </Link>
                        <Link href={leader.social.github} className="text-blue-600 hover:text-blue-800 transition-colors">
                          <Github className="w-6 h-6" />
                        </Link>
                        <Link href={leader.social.twitter} className="text-blue-600 hover:text-blue-800 transition-colors">
                          <Twitter className="w-6 h-6" />
                        </Link>
                        <Link href={`mailto:${leader.social.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                          <Mail className="w-6 h-6" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {leader.longBio}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <div className="space-y-2">
                        {leader.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals bringing expertise across all technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <div className="flex items-center justify-center gap-2 mb-4 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {member.location}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Specializations:</div>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 justify-center">
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
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values that unite our team and guide our work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}