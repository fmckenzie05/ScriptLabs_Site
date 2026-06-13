import Link from 'next/link'
import { ArrowRight, Calendar, User, Tag, Search, Filter, BookOpen, TrendingUp, Code, Lightbulb } from 'lucide-react'
import blogData from '@/lib/blog-data'

const categories = [
  { name: 'All', count: 24, active: true },
  { name: 'AI & Machine Learning', count: 8 },
  { name: 'Web Development', count: 6 },
  { name: 'Mobile Development', count: 4 },
  { name: 'Blockchain & Web3', count: 3 },
  { name: 'Industry Insights', count: 3 },
]

// Convert blog data to array format and find featured post
const blogPostsArray = Object.entries(blogData).map(([slug, post]) => ({
  ...post,
  slug,
  image: `https://images.unsplash.com/photo-${slug === 'ai-future-software-development' ? '1677442136019-21780ecad995' : slug === 'nextjs-server-components' ? '1627398242454-45a1465c2479' : '1620712943543-bcc4688e7485'}?w=400&h=250&fit=crop`
}))

const featuredPost = {
  ...blogPostsArray[0],
  author: blogPostsArray[0].author.name,
  excerpt: 'Learn how we leveraged GPT-4 Vision capabilities to create an intelligent UI testing framework that can understand and validate visual elements, detect accessibility issues, and generate comprehensive test reports without traditional selectors.',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
  featured: true,
}

// Use the remaining posts (excluding the featured one) for the grid
const blogPosts = blogPostsArray.slice(1).map(post => ({
  ...post,
  excerpt: post.subtitle,
  author: post.author.name
}))

const popularTags = [
  'React', 'Next.js', 'TypeScript', 'AI/ML', 'Blockchain', 
  'Mobile Development', 'DevOps', 'Cloud Computing', 'Security', 'UI/UX'
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Tech Blog
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Insights &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with our latest insights on technology trends, development best practices, and industry innovations.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">Featured Article</span>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div>{featuredPost.readTime}</div>
                </div>
                <Link 
                  href={`/insights/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Most Commented</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-2 border border-gray-100">
                <div className="aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div>{post.readTime}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <Link 
                      href={`/insights/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Popular Tags */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/insights/blog?tag=${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6">
                Get the latest insights and tutorials delivered to your inbox.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Resources
              </h3>
              <div className="space-y-4">
                <Link 
                  href="/docs"
                  className="block text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Documentation
                </Link>
                <Link 
                  href="/insights/white-papers"
                  className="block text-blue-600 hover:text-blue-700 transition-colors"
                >
                  White Papers
                </Link>
                <Link 
                  href="/api"
                  className="block text-blue-600 hover:text-blue-700 transition-colors"
                >
                  API Reference
                </Link>
                <Link 
                  href="/support"
                  className="block text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Support Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Have a Topic in Mind?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We'd love to hear about topics you'd like us to cover or questions you have about technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Suggest a Topic
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/insights/white-papers"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              View White Papers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}