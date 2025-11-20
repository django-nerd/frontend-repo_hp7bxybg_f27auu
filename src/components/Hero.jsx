import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.25),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              We Help Ambitious Brands Grow with Proven SEO & Digital Marketing
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-100/90 max-w-2xl">
              Trusted by clients across USA & Canada. Our monthly retainers drive real results—measurable, transparent, and growth-focused.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:bg-blue-400 transition">
                Book Your Free Strategy Call
              </a>
              <a href="#case-studies" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white font-semibold ring-1 ring-white/15 hover:bg-white/15 transition">
                See Case Studies
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-blue-200/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                <span>Average 130% traffic lift in 90 days</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/20" />
              <div className="hidden sm:flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-400" />
                <span>Transparent reporting & weekly check-ins</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10">
                  <p className="text-sm text-blue-200">Organic Traffic</p>
                  <p className="mt-2 text-2xl font-bold text-white">+130%</p>
                  <p className="mt-1 text-xs text-blue-300/70">last 90 days</p>
                </div>
                <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10">
                  <p className="text-sm text-blue-200">Lead Volume</p>
                  <p className="mt-2 text-2xl font-bold text-white">+78%</p>
                  <p className="mt-1 text-xs text-blue-300/70">QoQ</p>
                </div>
                <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10">
                  <p className="text-sm text-blue-200">Cost per Lead</p>
                  <p className="mt-2 text-2xl font-bold text-white">-32%</p>
                  <p className="mt-1 text-xs text-blue-300/70">efficiency gain</p>
                </div>
                <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10">
                  <p className="text-sm text-blue-200">Search Visibility</p>
                  <p className="mt-2 text-2xl font-bold text-white">+64%</p>
                  <p className="mt-1 text-xs text-blue-300/70">tracked terms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
