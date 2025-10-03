import Link from 'next/link'
import { Code2, Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react'

const footerNavigation = {
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Development', href: '/services/mobile-development' },
    { name: 'Web3 & Blockchain', href: '/services/web3-blockchain' },
    { name: 'AI-Powered SaaS', href: '/services/ai-saas' },
    { name: 'Consulting', href: '/services/consulting' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/about/team' },
    { name: 'Careers', href: '/about/careers' },
    { name: 'Blog', href: '/insights/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'White Papers', href: '/insights/white-papers' },
    { name: 'Case Studies', href: '/portfolio/case-studies' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
  ],
}

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
]

export default function Footer() {
  return (
    <footer className="bg-deep-space text-white">
      <div className="section-padding">
        <div className="py-16 lg:py-24">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-display font-bold">
                  ScriptLabs
                </span>
              </Link>
              <p className="text-sm leading-6 text-gray-300">
                Creating innovative solutions out of thin air. We specialize in AI-powered applications, 
                web and mobile development, and Web3 technologies.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-electric-blue transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.services.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-electric-blue transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-electric-blue transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.resources.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-electric-blue transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-electric-blue transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA | New York, NY | Austin, TX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@scriptlabs.io" className="hover:text-electric-blue transition-colors">
                  hello@scriptlabs.io
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <a href="tel:+14155551234" className="hover:text-electric-blue transition-colors">
                  +1 (415) 555-1234
                </a>
              </div>
            </div>
            
            <p className="mt-8 text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} ScriptLabs Studios. All rights reserved. Creating solutions out of thin air.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}