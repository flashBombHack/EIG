import { lazy, Suspense, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import droneBg from '../assets/droneBG.png'
import security1 from '../assets/security1.jpeg'
import security3 from '../assets/security3.jpeg'
import security4 from '../assets/security4.jpeg'
import security5 from '../assets/security5.jpeg'
import slider2 from '../assets/slider2.png'
import Footer from '../components/Footer'
import ServicePillarShowcase, { type ServicePillar } from '../components/ServicePillarShowcase'
import SiteHeader from '../components/SiteHeader'

const RepeatOffenderStatChart = lazy(() => import('../components/RepeatOffenderStatChart'))

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

/** Shared horizontal inset , keep all Services bands aligned; intentionally light padding */
const pageGutter = 'px-4 sm:px-5'
const pageShell = `mx-auto max-w-6xl ${pageGutter}`

/** Page scroll order , labels match homepage / footer service naming */
const servicesPageOutline = [
  { id: 'drone-surveillance', label: 'Drone surveillance' },
  { id: 'drone-service-details', label: 'Drone program details' },
  { id: 'uniformed-guard-protection', label: 'Uniformed security' },
  { id: 'field-operations', label: 'Field operations' },
  { id: 'undercover-asset-protection', label: 'Undercover security' },
  { id: 'visible-deterrence', label: 'Visible deterrence' },
  { id: 'lp-performance-intelligence', label: 'LP intelligence metrics' },
  { id: 'undercover-program-outcomes', label: 'Program outcomes' },
  { id: 'uniformed-guard-offerings', label: 'Uniformed offerings' },
] as const

const benefitCheckTones = [
  'text-amber-400',
  'text-cyan-300',
  'text-emerald-400',
  'text-sky-300',
  'text-amber-200',
  'text-orange-300',
  'text-teal-300',
  'text-violet-300',
  'text-lime-300',
  'text-fuchsia-300',
] as const

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

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'h-5 w-5 shrink-0 text-amber-400'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
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

const servicePillars: ServicePillar[] = [
  {
    id: 1,
    hashId: 'uniformed-guard-protection',
    callout: 'Uniformed security',
    title: 'Uniformed Guard Protection',
    description:
      'Tailored programs from static posts to patrol routes, built around your hours, hazards, and compliance needs.',
    contentPosition: 'l',
    image: security3,
    imageAlt: 'Uniformed security field equipment and operational readiness tools',
    accentBadgeClass: 'bg-amber-500/20 text-amber-100 ring-amber-400/35',
    eyebrowDotClass: 'bg-amber-400',
    listBulletClass: 'bg-amber-300',
    spotlightTintClass: 'bg-[radial-gradient(circle_at_28%_24%, rgba(251,191,36,0.12), transparent_50%)]',
    titleMarkClass: 'text-amber-400 drop-shadow-[0_0_14px_rgba(251,191,36,0.35)]',
    headingVariant: 'serviceDisplay',
    serviceEyebrowAccentClass: 'text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.35)]',
    spotlightTitle: 'Core guard coverage',
    spotlightDescription: 'Site-ready teams for entry points, patrol routes, incident response, and shift coverage.',
  },
  {
    id: 2,
    hashId: 'field-operations',
    callout: 'Field-first response',
    title: 'Teams where your risk is highest',
    description:
      'Uniformed and undercover coverage scales with your footprint, so investigations, patrols, and loss prevention stay aligned with real activity on the floor and at the perimeter.',
    bullets: [
      'Rapid coordination between LP, guards, and site leadership.',
      'Clear reporting that supports audits and partner expectations.',
    ],
    contentPosition: 'r',
    image: security1,
    imageAlt: 'EIG security professional on site',
    accentBadgeClass: 'bg-emerald-500/18 text-emerald-100 ring-emerald-400/30',
    eyebrowDotClass: 'bg-emerald-400',
    listBulletClass: 'bg-emerald-300',
    spotlightTintClass: 'bg-[radial-gradient(circle_at_30%_22%, rgba(52,211,153,0.15), transparent_55%)]',
    titleMarkClass: 'text-emerald-400',
    spotlightTitle: 'Coordinated field operations',
    spotlightDescription: 'Guard and LP teams share updates quickly so leadership gets fast, accurate operational visibility.',
  },
  {
    id: 3,
    hashId: 'undercover-asset-protection',
    callout: 'Undercover security',
    title: 'Discrete coverage that blends with your operations',
    description: undercoverIntro,
    contentPosition: 'l',
    image: slider2,
    imageAlt: 'Investigator reviewing surveillance feeds and case data on multiple workstations',
    accentBadgeClass: 'bg-fuchsia-500/15 text-fuchsia-100 ring-fuchsia-400/28',
    eyebrowDotClass: 'bg-fuchsia-400',
    listBulletClass: 'bg-fuchsia-300',
    spotlightTintClass:
      'bg-[radial-gradient(circle_at_65%_28%, rgba(56,189,248,0.14), transparent_50%), radial-gradient(circle_at_18%_72%, rgba(232,121,249,0.12), transparent_46%)]',
    titleMarkClass: 'text-fuchsia-400',
    headingVariant: 'serviceDisplay',
    serviceEyebrowAccentClass: 'text-fuchsia-300 drop-shadow-[0_0_18px_rgba(232,121,249,0.35)]',
    spotlightTitle: 'Discreet intelligence in motion',
    spotlightDescription: 'Plain-clothes investigators monitor patterns, build evidence, and support targeted interventions.',
  },
  {
    id: 4,
    hashId: 'visible-deterrence',
    callout: 'Visible deterrence',
    title: 'Presence that reinforces policy and safety',
    description:
      'Professional guards and patrols extend your culture of accountability, supporting staff, customers, and contractors with consistent, documented visibility across shifts.',
    contentPosition: 'r',
    image: security4,
    imageAlt: 'Uniformed security presence at a partner site',
    accentBadgeClass: 'bg-orange-500/18 text-orange-100 ring-orange-400/32',
    eyebrowDotClass: 'bg-orange-400',
    listBulletClass: 'bg-orange-300',
    spotlightTintClass: 'bg-[radial-gradient(circle_at_72%_20%, rgba(251,146,60,0.14), transparent_52%)]',
    titleMarkClass: 'text-orange-400',
    spotlightTitle: 'Visible deterrence on site',
    spotlightDescription: 'Consistent presence at high-traffic zones helps prevent incidents before they escalate.',
  },
]

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(t)
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen overflow-x-clip overflow-y-visible bg-eig-bg text-white">
      <SiteHeader />

      <main className="px-0 pb-14 pt-0 md:pb-16">
        <nav
          aria-label="Services on this page"
          className={`${pageShell} border-b border-white/[0.08] pb-4 pt-3`}
        >
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
            On this page
          </p>
          <div className="flex flex-wrap gap-2">
            {servicesPageOutline.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.7rem] font-medium text-slate-200 transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white md:text-xs"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Section 1: Drone-style services hub */}
        <motion.section
          id="drone-surveillance"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easing }}
          className="relative mb-16 scroll-mt-28 md:mb-20 md:scroll-mt-32"
        >
          <div className="relative min-h-screen w-full overflow-hidden bg-black/60">
            <div
              className="absolute inset-0 bg-center bg-cover md:scale-105"
              style={{ backgroundImage: `url(${droneBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.28),_transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_55%, rgba(251,191,36,0.14), transparent_50%)]" />

            <div
              className={`relative z-10 mx-auto grid max-w-6xl min-w-0 gap-8 items-center ${pageGutter} pb-16 pt-24 md:pb-20 md:pt-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:pb-24 lg:pt-32`}
            >
              {/* Left: headline + CTAs */}
              <div className="space-y-6 max-w-xl">
                <p className="font-display text-sm font-extrabold uppercase leading-none tracking-[0.28em] md:text-base">
                  <span className="text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">Drone surveillance</span>
                  <span className="text-amber-300/95"> · </span>
                  <span className="text-slate-100/90">services</span>
                </p>
                <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.35rem]">
                  <span className="block text-slate-50">Aerial security coverage,</span>
                  <span className="mt-1 block bg-gradient-to-r from-cyan-200 via-sky-300 to-amber-200 bg-clip-text text-transparent">
                    in real time.
                  </span>
                </h1>
                <p className="max-w-lg text-sm font-medium leading-relaxed text-slate-200/90 md:text-base">
                  Licensed drone operators deliver rapid aerial monitoring, live incident visibility, and
                  cost-efficient coverage across large or complex properties.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(249,115,22,0.55)] hover:bg-orange-400 transition-colors"
                  >
                    Book a Drone Assessment
                  </Link>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs md:text-sm text-slate-200/85">
                    <span className="text-base md:text-lg font-semibold text-white leading-tight">
                      Available 7 days a week
                    </span>
                    <span>
                      Aerial visibility and rapid
                      <br className="hidden sm:block" /> response support
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: futuristic stats pod */}
              <div className="relative min-w-0 overflow-hidden lg:overflow-visible lg:self-end lg:mb-6">
                <div className="relative rounded-3xl border border-white/12 bg-white/8 px-4 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl md:px-5 md:py-5">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-200/80">
                        Drone Mission Pod
                      </p>
                      <p className="mt-1 text-sm font-medium text-white/95">
                        Live surveillance status
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200/80">
                      <span className="inline-flex h-7 items-center rounded-full bg-slate-900/70 px-3 backdrop-blur">
                        Flight Ready
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3 flex flex-col gap-1">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Range</p>
                      <p className="text-lg font-semibold text-white">Wide</p>
                      <p className="text-slate-400">Large properties scanned fast</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3 flex flex-col gap-1">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Feed</p>
                      <p className="text-lg font-semibold text-white">Live</p>
                      <p className="text-slate-400">Real-time situational awareness</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-3 flex flex-col gap-1">
                      <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">Status</p>
                      <p className="text-lg font-semibold text-emerald-200">Compliant</p>
                      <p className="text-emerald-100/80">Transport Canada standards</p>
                    </div>
                  </div>
                </div>

                {/* Floating cards , desktop only; offsets caused horizontal scroll on mobile */}
                <div className="absolute -right-4 -top-4 hidden w-40 rounded-2xl border border-white/15 bg-slate-950/90 px-4 py-3 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.9)] md:block md:w-48">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">
                    Aerial Intel
                  </p>
                  <p className="text-sm font-semibold text-white">Live photo and video evidence</p>
                  <p className="mt-1 text-xs text-slate-300/90">
                    Instant updates for dispatch and escalation.
                  </p>
                </div>

                <div className="absolute -bottom-6 -left-6 hidden w-44 rounded-3xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.9)] md:block md:w-56">
                  <div className="flex items-center justify-between text-xs text-slate-200/90">
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
          id="drone-service-details"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easing }}
          className={`${pageShell} mb-16 mt-2 scroll-mt-28 md:mb-20 md:mt-4 md:scroll-mt-32`}
        >
          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/50 p-4 shadow-[0_32px_90px_rgba(2,8,23,0.55)] ring-1 ring-cyan-500/10 backdrop-blur-sm md:p-5">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-transparent bg-gradient-to-r from-cyan-300 to-amber-200 bg-clip-text">
                  Drone surveillance
                </p>
                <h2 className="font-display mt-3 flex items-start gap-3 text-2xl font-bold tracking-tight text-white md:gap-4 md:text-3xl">
                  <svg
                    className="mt-1 h-7 w-7 shrink-0 text-amber-400 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="min-w-0">Faster aerial monitoring for high-risk environments</span>
                </h2>
                <p className="mt-3 text-sm md:text-base text-slate-100/90 leading-relaxed">
                  Drone surveillance uses licensed operators flying camera-equipped drones to provide
                  aerial monitoring, real-time situational awareness, rapid response visuals, and broad
                  area coverage that supports your on-site team.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
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

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
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

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
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

            <div className="mt-4 rounded-2xl border border-cyan-500/15 bg-gradient-to-br from-cyan-500/10 via-white/[0.04] to-amber-500/10 p-4 text-center">
              <p className="font-display text-lg font-bold tracking-tight text-white md:text-2xl">
                Drone surveillance helps protect more ground, faster and safer, while delivering clear
                visual evidence and rapid response.
              </p>
              <p className="mt-2 text-sm text-slate-200/90 md:text-base">
                Combined packages are available with uniformed security, weekly patrol flights, and unified
                incident reporting.
              </p>
            </div>
          </div>
        </motion.section>

        <section className="mb-16 md:mb-20">
          <ServicePillarShowcase pillars={servicePillars} />
        </section>

        <section
          id="lp-performance-intelligence"
          className={`${pageShell} mb-16 scroll-mt-28 md:mb-20 md:scroll-mt-32`}
          aria-label="Loss prevention performance metrics"
        >
          <Suspense
            fallback={
              <div
                className="h-72 animate-pulse rounded-3xl border border-white/10 bg-white/[0.04] md:h-80"
                aria-hidden
              />
            }
          >
            <RepeatOffenderStatChart />
          </Suspense>
        </section>

        <motion.section
          id="undercover-program-outcomes"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easing }}
          className={`${pageShell} mb-16 scroll-mt-28 md:mb-20 md:scroll-mt-32`}
        >
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-slate-950/40 p-4 shadow-[0_28px_90px_rgba(2,8,23,0.55)] md:p-5">
            <div className="mb-5 max-w-2xl">
              <p className="font-display text-sm font-extrabold uppercase leading-none tracking-[0.28em] md:text-base">
                <span className="text-fuchsia-300 drop-shadow-[0_0_18px_rgba(232,121,249,0.3)]">Undercover security</span>
                <span className="text-amber-300/95"> · </span>
                <span className="text-slate-100/90">program outcomes</span>
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white md:mt-4 md:text-5xl lg:text-[3.35rem]">
                Program outcomes you can measure
              </h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-200/90 md:mt-4 md:text-base">
                Each engagement is built around deterrence, recovery, and intelligence so leadership sees progress
                in incidents, recoveries, and team confidence.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {undercoverBenefits.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.03, ease: easing }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-colors hover:border-cyan-300/25 hover:bg-white/[0.07]"
                >
                  <IconCheck
                    className={`h-5 w-5 shrink-0 ${benefitCheckTones[i % benefitCheckTones.length]}`}
                  />
                  <p className="text-slate-100/95 text-sm leading-snug pt-0.5">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="uniformed-guard-offerings"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, ease: easing }}
          className={`${pageShell} scroll-mt-28 md:scroll-mt-32`}
        >
          <div className="mb-6 rounded-3xl border border-amber-400/20 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-slate-950/40 p-4 shadow-[0_28px_90px_rgba(2,8,23,0.55)] md:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-sm font-extrabold uppercase leading-none tracking-[0.28em] md:text-base">
                  <span className="text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">Uniformed security</span>
                  <span className="text-amber-300/95"> · </span>
                  <span className="text-slate-100/90">offerings</span>
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white md:mt-4 md:text-5xl lg:text-[3.35rem]">
                  Core guard and patrol offerings
                </h2>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-200/90 md:mt-4 md:text-base">
                  Mix and match posts, patrols, and specialty coverage to match your footprint, hours, and risk profile.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex w-fit items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(249,115,22,0.45)] hover:bg-orange-400 transition-colors"
              >
                Build a program
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {guardServices.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: easing }}
                className="group relative rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-amber-300/30 hover:from-white/[0.1] hover:to-white/[0.04] md:rounded-3xl md:p-5"
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-amber-400/10 blur-2xl transition-colors group-hover:bg-amber-400/15" />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-slate-100 group-hover:border-amber-300/25 group-hover:bg-white/15 transition-colors">
                    <GuardIcon name={item.icon} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white md:text-lg group-hover:text-amber-50">
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
