import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { animate, motion, useInView } from 'framer-motion'
import heroBg from './assets/hero-bg.png'
import security3 from './assets/security3.jpeg'
import secondSectionBg from './assets/second-section-BG.png'
import Footer from './components/Footer'
import SiteHeader from './components/SiteHeader'

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: easing,
    },
  }),
}

type StatCountProps = {
  num: number
  suffix?: string
  subheading: string
  decimals?: number
}

function StatCount({ num, suffix = '', subheading, decimals = 0 }: StatCountProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.7 })

  useEffect(() => {
    if (!isInView || !ref.current) return
    const controls = animate(0, num, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (!ref.current) return
        ref.current.textContent = value.toFixed(decimals)
      },
    })
    return () => controls.stop()
  }, [isInView, num, decimals])

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center px-3 py-5 text-center md:px-5 md:py-6">
      <p className="mb-1.5 text-4xl font-semibold leading-none tracking-tight text-white md:mb-2 md:text-5xl lg:text-6xl">
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <p className="max-w-[13.5rem] text-xs leading-snug text-slate-400/95 md:max-w-[15rem] md:text-sm">
        {subheading}
      </p>
    </div>
  )
}

function App() {

  const growthBars = [
    { year: '2020', value: '3.8%', widthClass: 'w-full' },
    { year: '2021', value: '3.1%', widthClass: 'w-10/12' },
    { year: '2022', value: '2.5%', widthClass: 'w-9/12' },
    { year: '2023', value: '1.9%', widthClass: 'w-7/12' },
    { year: '2024', value: '1.4%', widthClass: 'w-6/12' },
    { year: '2025', value: '1.1%', widthClass: 'w-5/12' },
    { year: '2026', value: '0.9%', widthClass: 'w-4/12', isHighlight: true, tag: '<1%' },
  ]

  const serviceAccordion = [
    {
      id: 'drone',
      title: 'Drone surveillance',
      items: [
        'Licensed operators & compliant flight operations',
        'Live aerial monitoring & rapid situational awareness',
        'Photo & video documentation for incidents and reporting',
        'Ideal for large footprints, events, and after-hours visibility',
      ],
      link: { to: '/services#drone-surveillance', label: 'View drone service details' },
    },
    {
      id: 'uniformed',
      title: 'Uniformed security',
      items: [
        'Security guards',
        'Mobile patrol security',
        'Event security',
        'Construction site security',
        'Fire protection & confined space monitoring',
        'Traffic control services',
      ],
      link: { to: '/services#uniformed-guard-protection', label: 'View uniformed service details' },
    },
    {
      id: 'undercover',
      title: 'Undercover security',
      items: [
        'Undercover asset protection',
        'Surveillance, apprehensions & trend intelligence',
        'Employee, vendor & integrity-focused programs',
        'Coordination with site leadership and authorities',
      ],
      link: { to: '/services#undercover-asset-protection', label: 'View undercover service details' },
    },
  ] as const

  const [openServiceId, setOpenServiceId] = useState<string | null>('uniformed')

  return (
    <div className="min-h-screen bg-eig-bg text-white">
      <SiteHeader scrollReactive />

      <div className="relative h-screen w-full overflow-hidden bg-black/60">
        <div
          className="absolute inset-0 bg-center bg-cover scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-blue-900/40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#3b82f633,_transparent_60%)] opacity-70 mix-blend-screen" />

        <div className="relative z-10 flex h-full flex-col">
          {/* Hero content */}
          <main className="relative flex-1 flex flex-col justify-between pb-6 md:pb-8 lg:pb-10">
            <div className="mt-24 md:mt-32 lg:mt-40 grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] md:items-center px-6 md:px-10">
              <div className="space-y-7 max-w-2xl">
                <motion.p
                  initial="hidden"
                  animate="visible"
                  custom={0.1}
                  variants={fadeUp}
                  className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-slate-300/90"
                >
                  Security &amp; Loss Prevention
                </motion.p>

                <motion.h1
                  initial="hidden"
                  animate="visible"
                  custom={0.15}
                  variants={fadeUp}
                  className="font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.45rem]"
                >
                  <span className="block text-white">Security that protects</span>
                  <span className="mt-1 block text-slate-200">what matters most</span>
                </motion.h1>

                <motion.p
                  initial="hidden"
                  animate="visible"
                  custom={0.22}
                  variants={fadeUp}
                  className="text-sm sm:text-base text-slate-200/80 max-w-xl"
                >
                  EIG provides uniformed security, undercover security, and drone surveillance, plus private
                  investigations across Ontario, with a community‑first approach to protecting your business.
                </motion.p>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={0.28}
                  variants={fadeUp}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white text-slate-900 text-sm font-semibold px-5 py-2.5 shadow-sm shadow-white/40 hover:bg-slate-100 transition-colors"
                  >
                    Get In Touch
                    <span className="ml-1.5 text-base">↗</span>
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 text-sm font-medium px-5 py-2.5 text-slate-100/90 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-colors"
                  >
                    Our Services
                  </Link>
                </motion.div>
              </div>

              {/* Right stat card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.3,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                className="justify-self-start md:justify-self-end"
              >
                <div className="w-64 sm:w-72 rounded-3xl bg-slate-900/70 border border-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-[0_32px_90px_rgba(0,0,0,0.9)]">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                    Proven Results
                  </p>
                  <p className="mt-3 text-4xl font-semibold text-white">3x</p>
                  <p className="mt-2 text-xs text-slate-300/90">
                    Our recovery rate is over three times the industry average,
                    with 200+ apprehensions and 1000+ preventions per officer
                    each year.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.6 },
              }}
              className="mt-10 flex items-center justify-end text-xs text-slate-200/70 gap-2"
            >
              <span>Scroll to Explore</span>
              <span className="text-base">↓</span>
            </motion.div>
          </main>
        </div>
      </div>

      {/* Insight / investment-style section */}
      <section className="relative overflow-hidden py-20 text-white md:py-24">
        {/* Background image for second section */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full scale-105 bg-center bg-cover md:scale-110"
            style={{ backgroundImage: `url(${secondSectionBg})` }}
          />
          {/* Soft overlay so content stays readable but lets the design show through */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/98 via-slate-950/90 to-slate-950/82" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%, rgba(34,211,238,0.11), transparent_38%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-cyan-300">
              We Stand Behind
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Layered protection for every site
            </h2>
            <p className="mt-4 text-sm text-slate-200/85 md:text-base">
              Uniformed security, undercover security, and drone surveillance work as one system, so your
              people, property, and profits stay protected end to end.
            </p>
          </motion.div>

          <div className="mt-10 md:mt-14 grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] md:items-start">
            {/* Left: image + overlay card (overlay on md+; mobile: image then stats below) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-0 shadow-2xl shadow-slate-900/25"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-900 md:aspect-auto md:min-h-[min(420px,52vh)]">
                <img
                  src={security3}
                  alt="EIG leadership and operations"
                  className="h-full w-full scale-110 object-cover object-center md:scale-[1.14]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent md:hidden" />
                <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black/80 via-black/20 to-transparent md:block" />

                <div className="absolute bottom-5 left-5 right-5 hidden space-y-3 text-white md:bottom-6 md:left-6 md:right-6 md:block">
                  <div className="inline-flex rounded-full bg-black/35 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
                    Our results over time
                  </div>
                  <div className="rounded-2xl border border-white/50 bg-black/35 px-4 py-3 backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 md:px-5 md:py-4 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.12)]">
                    <div className="max-w-xs">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">
                        Field‑tested performance
                      </p>
                      <p className="mt-1 text-xs text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
                        Recovery rates and prevented incidents that consistently
                        outperform standard security providers.
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">
                          Recovery Rate
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                          7x
                        </p>
                        <p className="mt-0.5 text-xs text-white/85 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
                          Higher recovery vs. industry average.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">
                          Prevented Incidents
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                          1000+
                        </p>
                        <p className="mt-0.5 text-xs text-white/85 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
                          Proactive interventions across partner sites each year.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile: stats on light background so the photo stays visible */}
              <div className="mt-4 space-y-3 rounded-2xl border border-white/15 bg-slate-950/75 p-4 shadow-[0_20px_55px_rgba(0,0,0,0.35)] md:hidden">
                <div className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                  Our results over time
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                    Field‑tested performance
                  </p>
                  <p className="mt-1 text-xs text-slate-200/80">
                    Recovery rates and prevented incidents that consistently outperform standard security
                    providers.
                  </p>
                </div>
                <div className="flex gap-8 border-t border-white/15 pt-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/90">Recovery Rate</p>
                    <p className="mt-0.5 text-2xl font-semibold text-white">7x</p>
                    <p className="mt-0.5 text-xs text-slate-200/80">Higher recovery vs. industry average.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/90">Prevented Incidents</p>
                    <p className="mt-0.5 text-2xl font-semibold text-white">1000+</p>
                    <p className="mt-0.5 text-xs text-slate-200/80">
                      Proactive interventions across partner sites each year.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: glassy insight cards */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-3xl border border-white/15 bg-slate-950/55 px-6 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-lg md:px-7 md:py-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-semibold text-white md:text-lg">
                    Strategic coverage across partners
                  </h3>
                  <span className="text-xs font-medium text-cyan-200/70">
                    Live footprint
                  </span>
                </div>

                <div className="mt-4 grid gap-4 text-sm text-slate-200/85 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Locations
                    </p>
                    <p className="mt-1 text-xl font-semibold text-white">
                      40+
                    </p>
                    <p className="mt-1 text-xs text-slate-200/80">
                      Retail &amp; logistics sites under active coverage.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Scalability
                    </p>
                    <p className="mt-1 text-xl font-semibold text-white">
                      Flexible
                    </p>
                    <p className="mt-1 text-xs text-slate-200/80">
                      Scope and staffing adjust as your operations scale, without locking you into a fixed footprint.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Mobile units
                    </p>
                    <p className="mt-1 text-base font-semibold leading-snug text-white md:text-lg">
                      Available 7 days a week
                    </p>
                    <p className="mt-1 text-xs text-slate-200/80">
                      Rapid response teams ready when your sites need coverage.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300/90">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-eig-accent" />
                    Multi‑site programs
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-eig-accent/80" />
                    Growing partner footprint
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-eig-accent/70" />
                    Flexible deployment
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                    Available 7 days a week , coordination &amp; response
                  </span>
                </div>
              </motion.div>
            </div>

          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.7,
            delay: 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 mt-10 w-full border-y border-white/10 bg-slate-950/40 py-8 backdrop-blur-md md:mt-14 md:py-10"
        >
          <div className="mx-auto w-full max-w-none px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold tracking-tight text-white md:text-lg">
                Repeat offender trend
              </h3>
              <span className="text-xs font-medium text-cyan-200/70">2020 to 2026</span>
            </div>

            <div className="mt-5 space-y-2.5 text-xs text-slate-200/90 md:mt-6 md:space-y-3 md:text-sm">
              {growthBars.map((bar) => (
                <div key={bar.year} className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 shrink-0 text-xs font-medium text-slate-400 md:w-14">
                    {bar.year}
                  </div>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800/90 md:h-2">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 ${bar.widthClass}`}
                    />
                  </div>
                  <div className="flex w-[4.5rem] shrink-0 items-center justify-end gap-2 md:w-[5.5rem]">
                    <span className="text-xs font-semibold text-white tabular-nums">{bar.value}</span>
                    {bar.isHighlight && (
                      <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-cyan-100/95">
                        {bar.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 max-w-3xl text-xs leading-relaxed text-slate-400/95 md:mt-6 md:text-sm">
              Repeat offender rates trend downward year over year, reaching below 1% in 2026 through consistent
              deterrence and rapid intervention.
            </p>
          </div>
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
          <div className="mt-12 border-t border-white/10 pt-10 md:mt-16 md:pt-14">
            <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
              Community impact metrics
            </p>

            <div className="mt-8 flex flex-col divide-y divide-white/10 md:mt-10 md:flex-row md:divide-x md:divide-y-0">
              <StatCount
                num={5}
                suffix="+"
                subheading="Years of providing services and growing with the communities"
              />
              <StatCount
                num={200}
                suffix="+"
                subheading="Arrests per year across partner locations"
              />
              <StatCount
                num={40}
                suffix="+"
                subheading="Retail and logistics locations under active coverage"
              />
              <StatCount
                num={7}
                suffix="/wk"
                subheading="Coverage and response support available each week"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Uniformed guard protection section */}
      <section className="bg-eig-accent text-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {/* Top row: title + copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
          >
            <div className="max-w-xl space-y-4">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/70">
                Services overview
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Our approach
                <br />
                to on‑site protection
              </h2>
              <p className="text-sm md:text-base text-slate-100/85">
                We combine uniformed security on the ground, undercover security and loss prevention intelligence,
                and drone surveillance where it fits, so every site gets a clear, consistent presence.
              </p>
            </div>

            <div className="max-w-sm rounded-3xl border border-white/20 bg-white/5 px-6 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.35)] backdrop-blur-md">
              <p className="text-sm text-slate-100">
                We focus on prevention, de‑escalation, and detailed documentation so you can
                demonstrate due diligence and keep your teams safe.
              </p>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-white/40 text-sm font-medium px-5 py-2.5 text-slate-100/90 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-colors"
              >
                Discover more
                <span className="ml-1.5 text-base">↗</span>
              </Link>
            </div>
          </motion.div>

          {/* Three service pillars , expand to see sub-lines */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-14 space-y-3"
          >
            {serviceAccordion.map((cat) => {
              const isOpen = openServiceId === cat.id
              return (
                <div
                  key={cat.id}
                  className={`overflow-hidden rounded-2xl border border-white/20 shadow-[0_18px_60px_rgba(15,23,42,0.25)] backdrop-blur-md transition-colors ${
                    isOpen ? 'bg-white text-slate-900' : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenServiceId((prev) => (prev === cat.id ? null : cat.id))}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] md:text-sm">
                      {cat.title}
                    </span>
                    <span
                      className={`shrink-0 text-lg transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-slate-500' : 'text-white/80'
                      }`}
                      aria-hidden
                    >
                      ⌄
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      className="border-t border-slate-200/90 bg-white px-5 pb-5 pt-1 md:px-6"
                    >
                      <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
                        {cat.items.map((line) => (
                          <li key={line} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-eig-accent" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                      {'link' in cat && cat.link && (
                        <Link
                          to={cat.link.to}
                          className="mt-4 inline-flex items-center text-sm font-semibold text-eig-accent hover:underline"
                        >
                          {cat.link.label} <span className="ml-1">→</span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
