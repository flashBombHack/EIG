import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import heroBg from './assets/hero-bg.png'
// Place your white logo file at: src/assets/logo-white.png
// and this import will pick it up. You can rename as needed.
import logoWhite from './assets/logo-white.png'
import imgInsight from './assets/img2.png'
import secondSectionBg from './assets/second-section-BG.png'

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

const navItem = {
  hidden: (index: number) => ({
    opacity: 0,
    x: -32 - index * 8,
    scale: 0.96,
  }),
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: 0.15 + index * 0.07,
      ease: easing,
    },
  }),
}

function App() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const growthBars = [
    {
      year: '2020',
      value: '0.8k',
      heightClass: 'h-10',
    },
    {
      year: '2021',
      value: '1.2k',
      heightClass: 'h-14',
    },
    {
      year: '2022',
      value: '1.6k',
      heightClass: 'h-16',
    },
    {
      year: '2023',
      value: '2.0k',
      heightClass: 'h-20',
    },
    {
      year: '2024',
      value: '2.4k',
      heightClass: 'h-24',
      isHighlight: true,
      tag: '+3x',
    },
  ]

  const guardServices = [
    {
      label: 'Security Guards',
      icon: 'shield',
    },
    {
      label: 'Mobile Patrol Security',
      icon: 'car',
    },
    {
      label: 'Event security',
      icon: 'star',
    },
    {
      label: 'Construction site security',
      icon: 'cone',
    },
    {
      label: 'Fire Protection and Confined Space Monitoring',
      icon: 'alert',
    },
    {
      label: 'Traffic Control Services',
      icon: 'lanes',
    },
  ]

  return (
    <div className="min-h-screen bg-eig-bg text-white">
      {/* Top nav */}
      <header
        className={`fixed inset-x-0 top-0 pt-5 md:pt-7 z-50 transition-all duration-300 ${
          isSticky
            ? 'bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <img
              src={logoWhite}
              alt="EIG Security"
              className="h-14 md:h-16 w-auto"
            />
          </motion.div>

          <motion.nav
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-8 text-sm font-medium bg-white/10 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md"
          >
            {['Home', 'About Us', 'Services', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                variants={navItem}
                initial="hidden"
                animate="visible"
                custom={index}
                className={`px-4 py-1.5 rounded-full transition-colors ${
                  index === 0
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-100/80 hover:text-white'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.nav>

          <motion.button
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
            className="hidden md:inline-flex items-center rounded-full border border-white/30 bg-white text-slate-900 text-sm font-semibold px-4 py-2 shadow-sm shadow-white/40 hover:bg-slate-100 transition-colors"
          >
            Get In Touch
            <span className="ml-1.5 text-base">↗</span>
          </motion.button>
        </div>
      </header>

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
                  className="text-sm font-medium tracking-[0.2em] uppercase text-slate-200/70"
                >
                  Security &amp; Loss Prevention
                </motion.p>

                <motion.h1
                  initial="hidden"
                  animate="visible"
                  custom={0.15}
                  variants={fadeUp}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-semibold tracking-tight leading-tight"
                >
                  Security that protects
                  <br />
                  what matters most
                </motion.h1>

                <motion.p
                  initial="hidden"
                  animate="visible"
                  custom={0.22}
                  variants={fadeUp}
                  className="text-sm sm:text-base text-slate-200/80 max-w-xl"
                >
                  EIG provides licensed security, loss prevention, and private
                  investigations across Ontario, delivering clear protection for
                  your business with a community‑first approach.
                </motion.p>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={0.28}
                  variants={fadeUp}
                  className="flex flex-wrap items-center gap-4"
                >
                  <button className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white text-slate-900 text-sm font-semibold px-5 py-2.5 shadow-sm shadow-white/40 hover:bg-slate-100 transition-colors">
                    Get In Touch
                    <span className="ml-1.5 text-base">↗</span>
                  </button>
                  <button className="inline-flex items-center justify-center rounded-full border border-white/40 text-sm font-medium px-5 py-2.5 text-slate-100/90 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-colors">
                    Our Portfolio
                  </button>
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
                className="justify-self-end"
              >
                <div className="w-64 sm:w-72 rounded-3xl bg-slate-900/70 border border-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-[0_32px_90px_rgba(0,0,0,0.9)]">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                    Proven Results
                  </p>
                  <p className="mt-3 text-4xl font-semibold text-white">7x</p>
                  <p className="mt-2 text-xs text-slate-300/90">
                    Our real recovery rate is over seven times the industry
                    average, with 200+ apprehensions and 1000+ preventions per
                    officer each year.
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
      <section className="relative overflow-hidden text-slate-900 py-20 md:py-24">
        {/* Background image for second section */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${secondSectionBg})` }}
          />
          {/* Soft overlay so content stays readable but lets the design show through */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-eig-accent">
              We Stand Behind
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Layered protection for every site
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              From loss prevention to investigations and uniformed security, our
              teams work together to keep your people, property, and profits
              protected.
            </p>
          </motion.div>

          <div className="mt-10 md:mt-14 grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] items-stretch">
            {/* Left: image + overlay card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl shadow-slate-900/25"
            >
              <img
                src={imgInsight}
                alt="EIG leadership and operations"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6 space-y-3">
                <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 backdrop-blur-md">
                  Our results over time
                </div>
                <div className="rounded-2xl border border-white/40 bg-white/10 px-4 py-3 md:px-5 md:py-4 backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="max-w-xs">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Field‑tested performance
                    </p>
                    <p className="mt-1 text-[11px] md:text-xs text-slate-300">
                      Recovery rates and prevented incidents that consistently
                      outperform standard security providers.
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                        Recovery Rate
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-white">
                        7x
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-300">
                        Higher recovery vs. industry average.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                        Prevented Incidents
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-white">
                        1000+
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-300">
                        Proactive interventions across partner sites each year.
                      </p>
                    </div>
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
                className="rounded-3xl bg-white/40 backdrop-blur-lg border border-white/70 shadow-[0_18px_50px_rgba(15,23,42,0.15)] px-6 py-5 md:px-7 md:py-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900">
                    Strategic coverage across partners
                  </h3>
                  <span className="text-xs font-medium text-slate-500">
                    Live footprint
                  </span>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-3 text-sm text-slate-700">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Locations
                    </p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">
                      40+
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      Retail &amp; logistics sites under active coverage.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Regions
                    </p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">
                      3
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      GTA, Western Canada, and cross‑border corridors.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Mobile units
                    </p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">
                      24/7
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      Rapid response teams on call every hour of the day.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] md:text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-eig-accent" />
                    GTA &amp; Southern Ontario
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-eig-accent/80" />
                    Western Canada partners
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-eig-accent/70" />
                    Cross‑border logistics sites
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                    24/7 mobile response coverage
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-3xl bg-slate-900/5 backdrop-blur-lg border border-slate-200 px-6 py-5 md:px-7 md:py-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900">
                    Disciplined growth in protection
                  </h3>
                  <span className="text-xs font-medium text-slate-500">
                    Year‑over‑year trend
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
                  {growthBars.map((bar) => (
                    <div key={bar.year} className="flex items-center gap-3">
                      <div className="w-14 text-[11px] font-medium text-slate-500">
                        {bar.year}
                      </div>
                      <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-eig-accent ${bar.heightClass}`}
                        />
                      </div>
                      <div className="w-12 text-right text-[11px] font-semibold text-slate-900">
                        {bar.value}
                      </div>
                      {bar.isHighlight && (
                        <span className="ml-1 rounded-full bg-slate-900 text-[10px] font-semibold text-white px-2 py-0.5">
                          {bar.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs md:text-sm text-slate-600">
                  A steady, research‑driven approach that translates into more
                  incidents prevented and fewer disruptions for our partners
                  every single year.
                </p>
              </motion.div>
            </div>

          </div>

          <div className="mt-14 grid gap-y-6 gap-x-8 md:grid-cols-4 text-sm md:text-base text-slate-700">
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-semibold text-slate-900">
                4+
              </p>
              <p className="text-sm text-slate-600">
                Years of experience delivering focused security solutions.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-semibold text-slate-900">
                200+
              </p>
              <p className="text-sm text-slate-600">
                Arrests per year per officer across partner locations.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-semibold text-slate-900">
                Quality
              </p>
              <p className="text-sm text-slate-600">
                We stand behind a consistently high standard of service on every
                shift.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-semibold text-slate-900">
                Expert team
              </p>
              <p className="text-sm text-slate-600">
                Trained professionals ready to adapt our playbook to your
                business.
              </p>
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
                Uniformed Guard Protection
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Our approach
                <br />
                to on‑site protection
              </h2>
              <p className="text-sm md:text-base text-slate-100/85">
                We combine licensed guards, mobile patrols, and incident reporting to give you
                a clear, consistent presence across every site.
              </p>
            </div>

            <div className="max-w-sm rounded-3xl border border-white/20 bg-white/5 px-6 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.35)] backdrop-blur-md">
              <p className="text-sm text-slate-100">
                We focus on prevention, de‑escalation, and detailed documentation so you can
                demonstrate due diligence and keep your teams safe.
              </p>
              <button className="mt-4 inline-flex items-center justify-center rounded-full border border-white/40 text-sm font-medium px-5 py-2.5 text-slate-100/90 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-colors">
                Discover more
                <span className="ml-1.5 text-base">↗</span>
              </button>
            </div>
          </motion.div>

          {/* Tab list */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-14 rounded-3xl border border-white/20 bg-white/5 overflow-hidden shadow-[0_18px_60px_rgba(15,23,42,0.25)] backdrop-blur-md"
          >
            {guardServices.map((item, index) => {
              const isActive = index === 0
              return (
                <button
                  key={item.label}
                  type="button"
                  className={`group w-full flex items-center justify-between gap-6 px-4 sm:px-6 md:px-8 py-4 md:py-5 text-left transition-colors ${
                    isActive ? 'bg-eig-accent text-white' : 'bg-white/40 hover:bg-slate-50'
                  } ${index !== guardServices.length - 1 ? 'border-b border-slate-200/80' : ''}`}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-medium ${
                        isActive
                          ? 'border-white/70 bg-white/10 text-white'
                          : 'border-eig-accent/30 bg-eig-accent/5 text-eig-accent group-hover:border-eig-accent group-hover:bg-eig-accent/10'
                      }`}
                    >
                      {/* Simple icon hint using first letter */}
                      {item.label.charAt(0)}
                    </div>
                    <p
                      className={`text-sm sm:text-base font-semibold ${
                        isActive ? 'text-white' : 'text-slate-900 group-hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 text-xs font-medium ${
                      isActive ? 'text-slate-100/90' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    {/* right arrow indicator */}
                    →
                  </span>
                </button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-eig-accent text-white pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="px-0 py-0 md:px-0 md:py-0"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              {/* Left: logo + tagline + CTA */}
              <div className="space-y-5 max-w-sm">
                <div className="flex items-center gap-3">
                  <img
                    src={logoWhite}
                    alt="EIG Security"
                    className="h-14 w-auto"
                  />
                </div>
                <p className="text-sm text-slate-100/85">
                  EIG backs retailers, construction partners, and organizations that take loss
                  prevention and safety seriously — with guard programs built for the real world.
                </p>
                <button className="inline-flex items-center justify-center rounded-full border border-white/40 text-sm font-medium px-5 py-2.5 text-slate-100/90 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-colors">
                  Get in touch
                  <span className="ml-1.5 text-base">↗</span>
                </button>
              </div>

              {/* Middle: navigation */}
              <div className="flex-1 grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-sm">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Company
                  </p>
                  <button className="block text-left text-slate-100/85 hover:text-white">
                    Home
                  </button>
                  <button className="block text-left text-slate-100/85 hover:text-white">
                    About
                  </button>
                  <button className="block text-left text-slate-100/85 hover:text-white">
                    Services
                  </button>
                  <button className="block text-left text-slate-100/85 hover:text-white">
                    Contact
                  </button>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Resources
                  </p>
                  <button className="block text-left text-slate-100/85 hover:text-white">
                    Guard programs
                  </button>
                  <button className="block text-left text-slate-100/85 hover:text-white">
                    Loss prevention
                  </button>
                  <button className="block text-left text-slate-100/85 hover:text-white">
                    Private investigations
                  </button>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Contact
                  </p>
                  <p className="text-slate-100/85 text-sm">
                    info@eigsecurity.com
                    <br />
                    Ontario, Canada
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    {['in', 'x', 'ig'].map((abbr) => (
                      <button
                        key={abbr}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-white/5 text-[11px] font-semibold uppercase tracking-wide text-slate-100/90 hover:bg-white/15 transition-colors"
                      >
                        {abbr}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-slate-300 md:flex-row md:items-center md:justify-between"
            >
              <p>© {new Date().getFullYear()} EIG Security. All rights reserved.</p>
              <div className="flex flex-wrap gap-4">
                <button className="text-slate-300 hover:text-white">Terms of use</button>
                <button className="text-slate-300 hover:text-white">Privacy policy</button>
                <button className="text-slate-300 hover:text-white">Back to top ↑</button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App
