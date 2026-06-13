import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Team
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Small Team,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Big Ambitions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're a lean indie studio that moves fast and builds with care.
            We're always looking for talented people who share our passion for great software.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in Working Together?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you want to join as a collaborator or partner on a project, we'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
