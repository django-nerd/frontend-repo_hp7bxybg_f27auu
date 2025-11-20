import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* Placeholder anchors for navigation targets */}
        <section id="case-studies" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Case Studies</h2>
            <p className="mt-3 text-blue-200/90 max-w-2xl">Real-world results from SEO, paid media, and content programs. Add your wins here.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-blue-100">Industry</p>
                  <h3 className="mt-2 text-xl font-semibold">Project Title</h3>
                  <p className="mt-2 text-blue-200/80 text-sm">Brief outcome-focused blurb—traffic lift, pipeline impact, or revenue influenced.</p>
                  <div className="mt-4 flex gap-3 text-sm text-blue-200/80">
                    <span className="rounded-lg bg-slate-900/60 px-2 py-1 ring-1 ring-white/10">+130% Traffic</span>
                    <span className="rounded-lg bg-slate-900/60 px-2 py-1 ring-1 ring-white/10">-28% CPL</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-3xl sm:text-4xl font-bold">Book Your Free Strategy Call</h2>
              <p className="mt-3 text-blue-200/90 max-w-2xl">Share a few details and we’ll come prepared with opportunities and quick wins for your brand.</p>
              <form className="mt-8 grid gap-4 sm:grid-cols-2">
                <input className="rounded-xl bg-slate-900/60 p-3 ring-1 ring-white/10 placeholder:text-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full name" />
                <input className="rounded-xl bg-slate-900/60 p-3 ring-1 ring-white/10 placeholder:text-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Work email" />
                <input className="rounded-xl bg-slate-900/60 p-3 ring-1 ring-white/10 placeholder:text-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company" />
                <input className="rounded-xl bg-slate-900/60 p-3 ring-1 ring-white/10 placeholder:text-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Website" />
                <textarea className="sm:col-span-2 rounded-xl bg-slate-900/60 p-3 ring-1 ring-white/10 placeholder:text-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="What are your goals?" />
                <div className="sm:col-span-2 flex items-center justify-between">
                  <p className="text-blue-300/80 text-sm">We’ll reply within 24 hours. No spam, ever.</p>
                  <button type="button" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:bg-blue-400 transition">
                    Book Call
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
