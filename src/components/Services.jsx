import React from 'react'

const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    headline: "We don’t just rank you—we grow you.",
    subline: 'Clients typically see a 130% traffic boost in 90 days.',
    bullets: [
      'Technical SEO audits and fixes within 2 weeks',
      'Content strategy mapped to revenue-driving keywords',
      'Authority growth with safe, editorial link acquisition',
      'Transparent dashboards with weekly movement reports',
    ],
    metrics: [
      { label: 'Avg. Traffic Lift', value: '+130%' },
      { label: 'Time to Impact', value: '90 days' },
      { label: 'Keyword Growth', value: '+68%' },
    ],
  },
  {
    title: 'Paid Media (PPC + Paid Social)',
    headline: 'Scale efficiently, not expensively.',
    subline: 'Reduce CPL by 25–40% while increasing qualified pipeline.',
    bullets: [
      'Full-funnel strategy across search, social, and retargeting',
      'Creative testing frameworks and winning ad iterations',
      'Budget allocation models tied to CAC and LTV',
      'Weekly experiments with clear go/no-go criteria',
    ],
    metrics: [
      { label: 'CPL Reduction', value: '-32%' },
      { label: 'ROAS', value: '3.2x' },
      { label: 'Lead Quality', value: '+41%' },
    ],
  },
  {
    title: 'Content & Digital PR',
    headline: 'Earn attention, build authority, drive demand.',
    subline: 'Publish assets that rank, convert, and get cited.',
    bullets: [
      'Topical authority maps and cluster-based content plans',
      'Expert interviews and SME-driven production',
      'Digital PR with newsworthy angles editors want to cover',
      'On-page CRO for better engagement and conversion',
    ],
    metrics: [
      { label: 'Referring Domains', value: '+120' },
      { label: 'Avg. Time on Page', value: '+38%' },
      { label: 'Assisted Conversions', value: '+52%' },
    ],
  },
]

function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.2),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services that drive outcomes</h2>
          <p className="mt-3 text-blue-200/90">No fluff. No vanity metrics. Just compounding growth.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition">
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-blue-100">{s.headline}</p>
              <p className="mt-1 text-sm text-blue-200/80">{s.subline}</p>

              <ul className="mt-5 space-y-2 text-blue-100/90 text-sm">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {s.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-slate-900/60 p-3 ring-1 ring-white/10">
                    <p className="text-xs text-blue-300/80">{m.label}</p>
                    <p className="text-lg font-bold text-white">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
