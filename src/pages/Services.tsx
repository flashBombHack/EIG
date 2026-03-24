import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logoWhite from '../assets/logo-white.png'
import droneBg from '../assets/droneBG.png'
import security1 from '../assets/security1.jpeg'
import security2 from '../assets/security2.jpeg'
import security4 from '../assets/security4.jpeg'
import security5 from '../assets/security5.jpeg'
import Footer from '../components/Footer'

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

const undercoverIntro =
  'Using the latest technology to compile and analyze apprehensions, identifying trends and providing our investigators with updated information on known shoplifters operating in your area.'

const undercoverBenefits = [
  'Recover your stolen inventory',
  'Eliminate re-occurring loss',
  'Eliminate shoplifter encouragement',
  'Eliminate employee theft',
  'Deter present and future suspects',
  'Provide your employees with a feeling of safety',
  'Empower your employees for success, suspect identification, on-going theft and actions to take',
  'Increase your manager/employee productivity while we focus on the apprehension',
  'Trust service, survey unproductive and/or cheating employees, suppliers or contractors',
  'Communicate with local authorities for off duty/on camera suspicious activity, trespass and charge',
  'Audit sites for security enhancements and provide regular performance reports of loss prevention',
  'Complimentary return to shelf service',
]

const guardServices = [
  { label: 'Security Guards', icon: 'shield' },
  { label: 'Mobile Patrol Security', icon: 'car' },
  { label: 'Event security', icon: 'event' },
  { label: 'Construction site security', icon: 'construction' },
  { label: 'Fire Protection and Confined Space Monitoring', icon: 'fire' },
  { label: 'Traffic Control Services', icon: 'traffic' },
]

const droneUseCases = [
  'Industrial sites',
  'Construction sites',
  'Warehouses',
  'Farms and rural properties',
  'Events and special occurrences',
  'Commercial plazas',
  'After-hours business monitoring',
]

const droneWorkflow = [
  'Client schedules patrol or an on-demand flight',
  'Transport Canada-licensed pilot conducts the mission',
  'Live feed is monitored by the security team',
  'Footage is recorded for evidence and reporting',
  'Incidents are escalated quickly when required',
]

function IconCheck() {
  return (
    <svg className="w-5 h-5 shrink-0 text-emerald-400/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function IconCar() {
  return (
    <svg className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-1.607-1.274-2.915-2.84-2.915a5.5 5.5 0 00-.676.054A5.36 5.36 0 0113.125 3h1.875c.621 0 1.129.504 1.09 1.124a17.902 17.902 0 01-3.213 9.193 2.056 2.056 0 01-1.58.86H14.25" />
    </svg>
  )
}

function IconEvent() {
  return (
    <svg className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  )
}

function IconConstruction() {
  return (
    <svg className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  )
}

function IconFire() {
  return (
    <svg className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  )
}

function IconTraffic() {
  return (
    <svg className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5-9h7.5v7.5m-7.5 0V6.75m0 7.5v7.5m0-7.5H3.75" />
    </svg>
  )
}

function GuardIcon({ name }: { name: string }) {
  switch (name) {
    case 'shield':
      return <IconShield />
    case 'car':
      return <IconCar />
    case 'event':
      return <IconEvent />
    case 'construction':
      return <IconConstruction />
    case 'fire':
      return <IconFire />
    case 'traffic':
      return <IconTraffic />
    default:
      return <IconShield />
  }
}

export default function Services() {
  return (
    <div className="min-h-screen bg-eig-bg text-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-sm pt-5 md:pt-7">
        <div className="flex items-center justify-between px-6 md:px-10">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoWhite} alt="EIG Security" className="h-14 md:h-16 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium bg-white/10 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
            <Link to="/" className="px-4 py-1.5 rounded-full text-slate-100/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="px-4 py-1.5 rounded-full text-slate-100/80 hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/services" className="px-4 py-1.5 rounded-full bg-white text-slate-900 shadow-sm">
              Services
            </Link>
            <Link to="/contact" className="px-4 py-1.5 rounded-full text-slate-100/80 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full border border-white/30 bg-white text-slate-900 text-sm font-semibold px-4 py-2 shadow-sm hover:bg-slate-100 transition-colors"
          >
            Get In Touch <span className="ml-1.5 text-base">↗</span>
          </Link>
        </div>
      </header>

      <main className="pt-0 pb-20 px-0 md:px-0">
        {/* Section 1: Drone-style services hub */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easing }}
          className="relative mb-24 md:mb-32"
        >
          <div className="relative min-h-screen w-full overflow-hidden bg-black/60">
            <div
              className="absolute inset-0 bg-center bg-cover scale-105"
              style={{ backgroundImage: `url(${droneBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.25),_transparent_55%)]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-24 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
              {/* Left: headline + CTAs */}
              <div className="space-y-6 max-w-xl">
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-slate-300/80">
                  Drone Surveillance Services
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                  Aerial Security Coverage,
                  <br />
                  in Real Time.
                </h1>
                <p className="text-slate-200/85 text-sm md:text-base max-w-lg">
                  Licensed drone operators provide rapid aerial monitoring, live incident visibility, and
                  cost-efficient coverage across large or complex properties.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(249,115,22,0.55)] hover:bg-orange-400 transition-colors">
                    Book a Drone Assessment
                  </button>
                  <div className="flex items-baseline gap-2 text-xs md:text-sm text-slate-200/85">
                    <span className="text-lg md:text-2xl font-semibold text-white">24/7</span>
                    <span>
                      Aerial visibility and rapid
                      <br className="hidden sm:block" /> response support
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: futuristic stats pod */}
              <div className="relative lg:self-end lg:mb-6">
                <div className="relative rounded-3xl border border-white/12 bg-white/8 backdrop-blur-2xl px-5 py-5 md:px-7 md:py-7 shadow-[0_30px_80px_rgba(0,0,0,0.85)]">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-200/80">
                        Drone Mission Pod
                      </p>
                      <p className="mt-1 text-sm font-medium text-white/95">
                        Live surveillance status
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-200/80">
                      <span className="inline-flex h-7 items-center rounded-full bg-slate-900/70 px-3 backdrop-blur">
                        Flight Ready
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] md:text-xs">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3 flex flex-col gap-1">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Range</p>
                      <p className="text-lg font-semibold text-white">Wide</p>
                      <p className="text-slate-400">Large properties scanned fast</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3 flex flex-col gap-1">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Feed</p>
                      <p className="text-lg font-semibold text-white">Live</p>
                      <p className="text-slate-400">Real-time situational awareness</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-3 flex flex-col gap-1">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-emerald-200">Status</p>
                      <p className="text-lg font-semibold text-emerald-200">Compliant</p>
                      <p className="text-emerald-100/80">Transport Canada standards</p>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -right-4 -top-4 w-40 md:w-48 rounded-2xl border border-white/15 bg-slate-950/90 px-4 py-3 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.9)]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1">
                    Aerial Intel
                  </p>
                  <p className="text-sm font-semibold text-white">Live photo and video evidence</p>
                  <p className="mt-1 text-[11px] text-slate-300/90">
                    Instant updates for dispatch and escalation.
                  </p>
                </div>

                <div className="absolute -left-6 -bottom-6 w-44 md:w-56 rounded-3xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.9)]">
                  <div className="flex items-center justify-between text-[11px] text-slate-200/90">
                    <span className="uppercase tracking-[0.16em]">Flight Path</span>
                    <span className="flex items-center gap-1 text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      Live
                    </span>
                  </div>
                  <div className="mt-3 h-10 rounded-full bg-slate-900/80 overflow-hidden flex items-center px-1 gap-1">
                    <div className="h-7 flex-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
                    <div className="h-7 flex-1 rounded-full bg-slate-700/80" />
                    <div className="h-7 flex-1 rounded-full bg-slate-800/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* New section: Drone service detail deck */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easing }}
          className="max-w-6xl mx-auto px-6 md:px-10 mb-20 md:mb-28 mt-2 md:mt-4"
        >
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-sm p-6 md:p-8 lg:p-10 shadow-[0_32px_90px_rgba(2,8,23,0.55)]">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/90">
                  What is drone surveillance?
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  Faster aerial monitoring for high-risk environments
                </h2>
                <p className="mt-3 text-sm md:text-base text-slate-100/90 leading-relaxed">
                  Drone surveillance uses licensed operators flying camera-equipped drones to provide
                  aerial monitoring, real-time situational awareness, rapid response visuals, and broad
                  area coverage that supports your on-site team.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-200/90">
                  Equipment & compliance
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-100/90">
                  <li>Transport Canada-licensed operators</li>
                  <li>Commercial-grade drones (HD / thermal optional)</li>
                  <li>Flight planning and risk assessment</li>
                  <li>Insurance and privacy-compliant operations</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-200/90">
                  How the service works
                </p>
                <ol className="mt-3 space-y-2 text-sm md:text-base text-slate-100/90">
                  {droneWorkflow.map((step) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-200/90">
                  Ideal use cases
                </p>
                <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-1 gap-2 text-sm text-slate-100/90">
                  {droneUseCases.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 text-center">
              <p className="text-lg md:text-2xl font-semibold text-white tracking-tight">
                Drone surveillance helps protect more ground, faster and safer, while delivering clear
                visual evidence and rapid response.
              </p>
              <p className="mt-2 text-sm md:text-base text-slate-200/90">
                Combined packages are available with on-site guards, weekly patrol flights, and unified
                incident reporting.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Strategic: field operations — security1 (image left) */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easing }}
          className="max-w-6xl mx-auto px-6 md:px-10 mb-20 md:mb-28"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <img
                src={security1}
                alt="EIG security professional on site"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-transparent" />
            </div>
            <div className="space-y-5">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-cyan-300/90">
                Field-first response
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                Teams where your risk is highest
              </h2>
              <p className="text-slate-300/90 text-sm md:text-base leading-relaxed">
                Uniformed and undercover coverage scales with your footprint—so investigations, patrols, and
                loss prevention stay aligned with real activity on the floor and at the perimeter.
              </p>
              <ul className="space-y-3 text-sm text-slate-200/85">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Rapid coordination between LP, guards, and site leadership.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Clear reporting that supports audits and partner expectations.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Undercover Asset Protection — security2 (full-width visual) */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easing }}
          className="max-w-6xl mx-auto mb-20 md:mb-28 px-6 md:px-10"
        >
          <div className="relative mb-10 md:mb-12 overflow-hidden rounded-3xl border border-white/10 aspect-[21/9] min-h-[200px] md:min-h-[280px]">
            <img
              src={security2}
              alt="Undercover loss prevention in a retail environment"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
                Undercover &amp; surveillance
              </p>
              <p className="mt-2 text-lg md:text-xl font-semibold text-white">
                Discrete coverage that blends with your operations
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-start">
            {/* Left: intro card */}
            <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-sm p-6 md:p-8 lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Undercover Asset Protection
                </h2>
              </div>
              <p className="text-slate-300/90 text-sm md:text-base leading-relaxed">
                {undercoverIntro}
              </p>
            </div>

            {/* Right: benefits grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {undercoverBenefits.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.03, ease: easing }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 p-4 transition-colors"
                >
                  <IconCheck />
                  <p className="text-slate-200/95 text-sm leading-snug pt-0.5">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Strategic: coverage & presence — security4 (copy left, image right) */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easing }}
          className="max-w-6xl mx-auto px-6 md:px-10 mb-20 md:mb-28"
        >
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
            <div className="space-y-5 order-2 lg:order-1">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-300/90">
                Visible deterrence
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                Presence that reinforces policy and safety
              </h2>
              <p className="text-slate-300/90 text-sm md:text-base leading-relaxed">
                Professional guards and patrols extend your culture of accountability—supporting staff,
                customers, and contractors with consistent, documented visibility across shifts.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] order-1 lg:order-2">
              <img
                src={security4}
                alt="Uniformed security presence at a partner site"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-slate-950/40" />
            </div>
          </div>
        </motion.section>

        {/* Section 3: Uniformed Guard Protection — security5 (hero strip above cards) */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easing }}
          className="max-w-6xl mx-auto px-6 md:px-10"
        >
          <div className="relative mb-10 md:mb-14 overflow-hidden rounded-3xl border border-white/10 h-52 md:h-72">
            <img
              src={security5}
              alt="Uniformed guard services and on-site protection"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/25 text-amber-300 border border-amber-400/30">
                  <IconShield />
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Uniformed Guard Protection
                </h2>
              </div>
              <p className="text-sm text-slate-200/85 max-w-md sm:text-right">
                Tailored programs from static posts to patrol routes—built around your hours, hazards, and compliance needs.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {guardServices.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: easing }}
                className="group relative rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 md:p-8 hover:border-white/20 hover:from-white/[0.08] hover:to-white/[0.04] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-slate-200 group-hover:bg-white/15 group-hover:text-white transition-colors">
                    <GuardIcon name={item.icon} />
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-slate-50">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
