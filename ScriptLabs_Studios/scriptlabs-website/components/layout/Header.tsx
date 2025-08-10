'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Code2, Sparkles, Cpu, Globe, Users, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = {
  services: {
    name: 'Services',
    items: [
      { name: 'Web Development', href: '/services/web-development', icon: Globe, description: 'Modern web applications' },
      { name: 'Mobile Development', href: '/services/mobile-development', icon: Cpu, description: 'iOS & Android apps' },
      { name: 'Web3 & Blockchain', href: '/services/web3-blockchain', icon: Code2, description: 'Decentralized solutions' },
      { name: 'AI-Powered SaaS', href: '/services/ai-saas', icon: Sparkles, description: 'Intelligent platforms' },
      { name: 'Consulting', href: '/services/consulting', icon: Users, description: 'Strategic guidance' },
    ],
  },
  technology: {
    name: 'Technology',
    items: [
      { name: 'AI Algorithms', href: '/technology/ai-algorithms' },
      { name: 'Development Stack', href: '/technology/stack' },
      { name: 'Platform Architecture', href: '/technology/architecture' },
    ],
  },
  portfolio: {
    name: 'Portfolio',
    href: '/portfolio',
  },
  about: {
    name: 'About',
    items: [
      { name: 'Our Story', href: '/about/story' },
      { name: 'Team', href: '/about/team' },
      { name: 'Careers', href: '/about/careers' },
    ],
  },
  insights: {
    name: 'Insights',
    items: [
      { name: 'Blog', href: '/insights/blog' },
      { name: 'White Papers', href: '/insights/white-papers' },
      { name: 'Industry Reports', href: '/insights/reports' },
    ],
  },
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 dark:bg-deep-space/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="section-padding" aria-label="Global">
        <div className="flex items-center justify-between py-6">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold gradient-text">
                ScriptLabs
              </span>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-electric-blue transition-colors">
                {navigation.services.name}
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute -left-8 top-full z-10 mt-3 w-96 overflow-hidden rounded-3xl bg-white dark:bg-deep-space shadow-lg ring-1 ring-gray-900/5 animate-slide-down">
                  <div className="p-4">
                    {navigation.services.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group relative flex items-center gap-x-4 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-silver-code/10"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-silver-code/10 group-hover:bg-electric-blue/10">
                          <item.icon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-electric-blue" />
                        </div>
                        <div className="flex-auto">
                          <span className="block font-semibold text-gray-900 dark:text-white">
                            {item.name}
                          </span>
                          <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Technology Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('technology')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-electric-blue transition-colors">
                {navigation.technology.name}
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'technology' && (
                <div className="absolute -left-8 top-full z-10 mt-3 w-64 rounded-3xl bg-white dark:bg-deep-space shadow-lg ring-1 ring-gray-900/5 animate-slide-down">
                  <div className="p-2">
                    {navigation.technology.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-silver-code/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio Link */}
            <Link
              href={navigation.portfolio.href}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-electric-blue transition-colors"
            >
              {navigation.portfolio.name}
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-electric-blue transition-colors">
                {navigation.about.name}
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'about' && (
                <div className="absolute -left-8 top-full z-10 mt-3 w-48 rounded-3xl bg-white dark:bg-deep-space shadow-lg ring-1 ring-gray-900/5 animate-slide-down">
                  <div className="p-2">
                    {navigation.about.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-silver-code/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Insights Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('insights')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-electric-blue transition-colors">
                {navigation.insights.name}
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'insights' && (
                <div className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-3xl bg-white dark:bg-deep-space shadow-lg ring-1 ring-gray-900/5 animate-slide-down">
                  <div className="p-2">
                    {navigation.insights.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-silver-code/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Link
              href="/contact/demo"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-electric-blue transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="/contact/get-started"
              className="btn-primary text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-deep-space">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
                <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-display font-bold gradient-text">
                  ScriptLabs
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* Mobile navigation items */}
                  <Link
                    href="/services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-silver-code/10"
                  >
                    Services
                  </Link>
                  <Link
                    href="/technology"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-silver-code/10"
                  >
                    Technology
                  </Link>
                  <Link
                    href="/portfolio"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-silver-code/10"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-silver-code/10"
                  >
                    About
                  </Link>
                  <Link
                    href="/insights"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-silver-code/10"
                  >
                    Insights
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="/contact/get-started"
                    className="btn-primary block text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}