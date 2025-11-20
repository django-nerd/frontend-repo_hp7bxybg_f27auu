import React from 'react'

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-900/60 p-3 ring-1 ring-white/10 backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white font-bold">F</span>
            <span className="text-white font-semibold">Flames</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-blue-100/90">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#case-studies" className="hover:text-white transition">Case Studies</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-white font-medium ring-1 ring-white/15 hover:bg-white/15 transition">
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
