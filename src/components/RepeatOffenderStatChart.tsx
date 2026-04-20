import { motion } from 'framer-motion'
import { useId } from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

/** Illustrative trend , narrative: programs drive repeat-offender share down under 1%. */
const TREND = [
  { t: 'Q1', pct: 3.4 },
  { t: 'Q2', pct: 2.6 },
  { t: 'Q3', pct: 2.1 },
  { t: 'Q4', pct: 1.6 },
  { t: 'Q5', pct: 1.2 },
  { t: 'Q6', pct: 0.95 },
  { t: 'Q7', pct: 0.82 },
  { t: 'Q8', pct: 0.74 },
]

const COMPARE = [
  { label: 'EIG partner programs', value: 0.85, display: '< 1%' },
  { label: 'Typical retail LP avg *', value: 12.5, display: '12.5%' },
]

function DarkTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: { value?: number; payload?: { pct?: number; t?: string } }[]
  label?: string
}) {
  if (!active || !payload?.length) return null
  const p = payload[0]?.payload
  const v = p?.pct ?? payload[0]?.value
  if (v === undefined) return null
  return (
    <div className="rounded-lg border border-white/15 bg-slate-950/95 px-3 py-2 text-xs shadow-xl backdrop-blur-md">
      <p className="font-medium text-cyan-200/90">{label ?? p?.t}</p>
      <p className="mt-0.5 tabular-nums text-white">{typeof v === 'number' ? `${v.toFixed(2)}%` : v}</p>
    </div>
  )
}

function BarTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: { payload?: (typeof COMPARE)[0] }[]
}) {
  if (!active || !payload?.length) return null
  const row = payload[0]?.payload
  if (!row) return null
  return (
    <div className="rounded-lg border border-white/15 bg-slate-950/95 px-3 py-2 text-xs shadow-xl backdrop-blur-md">
      <p className="font-medium text-slate-200">{row.label}</p>
      <p className="mt-0.5 tabular-nums text-cyan-300">{row.display}</p>
    </div>
  )
}

export default function RepeatOffenderStatChart() {
  const uid = useId().replace(/:/g, '')
  const areaGrad = `areaFill-${uid}`
  const barGradEig = `barEig-${uid}`
  const barGradInd = `barInd-${uid}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: easing }}
      className="relative overflow-hidden rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-5 text-white shadow-[0_28px_90px_rgba(2,8,23,0.55)] ring-1 ring-white/10 md:px-5 md:py-5"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-12 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-6">
        <div className="lg:max-w-[13rem] lg:shrink-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">Recidivism signal</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            &lt; 1%
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300/95">
            Repeat offender share held under one percent across active LP programs, tight control without slowing
            legitimate traffic.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-emerald-200/95">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Live benchmark
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-slate-300">
              Rolling cohort view
            </span>
          </div>
        </div>

        <div className="relative min-h-0 flex-1 space-y-5">
          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Program trajectory</p>
              <span className="text-[0.65rem] tabular-nums text-cyan-200/80">Target ≤ 1.0%</span>
            </div>
            <div className="h-[140px] w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={TREND} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                  <defs>
                    <linearGradient id={areaGrad} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.55} />
                      <stop offset="55%" stopColor="#38bdf8" stopOpacity={0.12} />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="4 6" stroke="rgba(148,163,184,0.12)" vertical={false} />
                  <XAxis dataKey="t" tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} dy={6} />
                  <YAxis
                    domain={[0, 4]}
                    tick={{ fill: '#64748b', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    width={36}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip content={<DarkTooltip />} cursor={{ stroke: 'rgba(34,211,238,0.35)', strokeWidth: 1 }} />
                  <Area
                    type="monotone"
                    dataKey="pct"
                    stroke="#22d3ee"
                    strokeWidth={2}
                    fill={`url(#${areaGrad})`}
                    dot={false}
                    activeDot={{ r: 4, fill: '#cffafe', stroke: '#0891b2', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Rate comparison</p>
            <div className="h-[108px] w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={COMPARE} layout="vertical" margin={{ top: 4, right: 12, left: 4, bottom: 4 }} barCategoryGap={16}>
                  <defs>
                    <linearGradient id={barGradEig} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id={barGradInd} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                  </defs>
                  <XAxis type="number" domain={[0, 16]} hide />
                  <YAxis
                    type="category"
                    dataKey="label"
                    width={148}
                    tick={{ fill: '#cbd5e1', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<BarTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={22}>
                    {COMPARE.map((row, i) => (
                      <Cell key={row.label} fill={i === 0 ? `url(#${barGradEig})` : `url(#${barGradInd})`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <p className="text-[0.65rem] leading-relaxed text-slate-500">
            * Illustrative industry average for narrative context; your metrics and reporting cadence are configured
            per program.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
