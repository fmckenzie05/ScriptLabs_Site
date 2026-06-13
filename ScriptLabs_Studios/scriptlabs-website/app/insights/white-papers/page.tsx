import Link from 'next/link'
import { ArrowRight, FileText, Download, Calendar, User, Upload, CheckCircle, Star, TrendingUp, Filter } from 'lucide-react'

const whitePapers = [
  {
    title: 'The Future of AI in Enterprise Software Development',
    description: 'Comprehensive analysis of how artificial intelligence is transforming enterprise software development processes, from automated testing to intelligent code generation.',
    author: 'Honorine Ndom Ndzah',
    date: '2024-01-15',
    pages: 28,
    downloads: '2.1K',
    category: 'AI & Machine Learning',
    featured: true,
    topics: ['AI Development', 'Enterprise Software', 'Automation', 'Code Generation'],
  },
  {
    title: 'Blockchain Scalability Solutions: Layer 2 Protocols Analysis',
    description: 'In-depth examination of Layer 2 scaling solutions for blockchain networks, comparing performance, security, and adoption metrics across major protocols.',
    author: 'Fernando A McKenzie',
    date: '2024-01-10',
    pages: 35,
    downloads: '1.8K',
    category: 'Blockchain & Web3',
    topics: ['Layer 2', 'Scalability', 'DeFi', 'Protocol Analysis'],
  },
  {
    title: 'Mobile-First Architecture: Building Scalable Cross-Platform Applications',
    description: 'Strategic guide to mobile-first development approaches, covering architecture patterns, performance optimization, and user experience best practices.',
    author: 'ScriptLabs Team',
    date: '2024-01-05',
    pages: 22,
    downloads: '1.5K',
    category: 'Mobile Development',
    topics: ['Mobile Architecture', 'Cross-Platform', 'Performance', 'UX Design'],
  },
  {
    title: 'Cloud-Native Security: Zero Trust Implementation Guide',
    description: 'Practical framework for implementing zero trust security models in cloud-native environments, with real-world case studies and implementation strategies.',
    author: 'Fernando A McKenzie',
    date: '2023-12-28',
    pages: 31,
    downloads: '2.3K',
    category: 'Cloud Security',
    topics: ['Zero Trust', 'Cloud Security', 'DevSecOps', 'Implementation'],
  },
  {
    title: 'The Economics of No-Code Development Platforms',
    description: 'Economic impact analysis of no-code platforms on software development costs, time-to-market, and organizational efficiency across different industry sectors.',
    author: 'Honorine Ndom Ndzah',
    date: '2023-12-20',
    pages: 26,
    downloads: '1.9K',
    category: 'Industry Analysis',
    topics: ['No-Code', 'Economics', 'Industry Analysis', 'ROI'],
  },
  {
    title: 'API-First Development: Microservices Architecture Best Practices',
    description: 'Comprehensive guide to API-first development methodologies, microservices patterns, and governance strategies for enterprise applications.',
    author: 'ScriptLabs Team',
    date: '2023-12-15',
    pages: 29,
    downloads: '1.7K',
    category: 'Software Architecture',
    topics: ['API Design', 'Microservices', 'Architecture', 'Best Practices'],
  },
]

const categories = [
  { name: 'All Papers', count: 24, active: true },
  { name: 'AI & Machine Learning', count: 8 },
  { name: 'Blockchain & Web3', count: 6 },
  { name: 'Mobile Development', count: 4 },
  { name: 'Cloud Security', count: 3 },
  { name: 'Industry Analysis', count: 3 },
]

const submissionGuidelines = [
  'Original research or comprehensive analysis',
  'Minimum 15 pages with proper citations',
  'Technical accuracy reviewed by our experts',
  'Clear methodology and conclusions',
  'Relevant to current technology trends',
  'Professional formatting and presentation',
]

export default function WhitePapersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium mb-6">
              <FileText className="w-4 h-4" />
              White Papers
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Research &{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              In-depth research papers and technical analyses on emerging technologies, industry trends, and innovative solutions shaping the future of software development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#submission"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                Submit Your Paper
                <Upload className="w-5 h-5" />
              </Link>
              <Link 
                href="#papers"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                Browse Papers
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b" id="papers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category.active
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Paper */}
      {whitePapers.filter(paper => paper.featured).map((paper, index) => (
        <section key={index} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-purple-600" />
                <span className="text-lg font-semibold text-gray-900">Featured Paper</span>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <div className="text-6xl">📊</div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {paper.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {paper.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {paper.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {paper.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(paper.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div>{paper.pages} pages</div>
                    <div>{paper.downloads} downloads</div>
                  </div>
                  <div className="flex gap-3">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                    <Link 
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Read Online
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* White Papers Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">All White Papers</h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Most Recent</option>
                <option>Most Downloaded</option>
                <option>Most Relevant</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.filter(paper => !paper.featured).map((paper, index) => (
              <article key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {paper.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {paper.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {paper.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {paper.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                    {paper.topics.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{paper.topics.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {paper.author}
                  </div>
                  <div>{paper.pages} pages</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {new Date(paper.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <Link 
                      href="#"
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section className="py-20 bg-gray-50" id="submission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Submit Your White Paper
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Share your research and insights with our global community of developers and technology professionals. 
                We welcome original research, technical analyses, and industry insights that contribute to the advancement 
                of software development and emerging technologies.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Submission Guidelines</h3>
                <div className="space-y-3">
                  {submissionGuidelines.map((guideline, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{guideline}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                Submit Your Paper
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Submission Form</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Paper Title *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your paper title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author(s) *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter author names"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Select a category</option>
                    <option>AI & Machine Learning</option>
                    <option>Blockchain & Web3</option>
                    <option>Mobile Development</option>
                    <option>Cloud Security</option>
                    <option>Industry Analysis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Abstract *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Brief summary of your paper (max 300 words)"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Paper *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Drag and drop your PDF file here, or click to browse</p>
                    <p className="text-sm text-gray-500">PDF files up to 50MB</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Submit for Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated on Latest Research
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to get notified when new white papers are published
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}