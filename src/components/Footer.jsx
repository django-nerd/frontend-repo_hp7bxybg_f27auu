import React from 'react'

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Flames Digital. All rights reserved.</p>
          <div className="flex items-center gap-5 text-blue-100/80 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#case-studies" className="hover:text-white">Case Studies</a>
            <a href="#contact" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
