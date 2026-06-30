import { motion } from 'framer-motion'
import { useId } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

/** 2-year performance outline — loss from theft declining over program life (slide narrative). */
const LOSS_FROM_THEFT = [
  { time: 'Start', loss: 100 },
  { time: 'Mo 3', loss: 78 },
  { time: 'Mo 6', loss: 55 },
  { time: 'Mo 9', loss: 38 },
  { time: 'Y1', loss: 28 },
  { time: 'Mo 15', loss: 22 },
  { time: 'Mo 18', loss: 17 },
  { time: 'Y2', loss: 12 },
]

const SUSPECT_DWELL_TIME = [
  { month: 'M1', mins: 24 },
  { month: 'M3', mins: 19 },
  { month: 'M6', mins: 14 },
  { month: 'M9', mins: 10 },
  { month: 'M12', mins: 7 },
]

const WEEKLY_APPREHENSIONS = [
  { month: 'Jan', avg: 6 },
  { month: 'Mar', avg: 8 },
  { month: 'May', avg: 10 },
  { month: 'Jul', avg: 12 },
  { month: 'Sep', avg: 13 },
  { month: 'Nov', avg: 14 },
  { month: 'Dec', avg: 14 },
]

type ChainSegment = { text: string; trend?: 'down' | 'up' }

const ROI_CHAINS: ChainSegment[][] = [
  [
    { text: 'Insurance rates', trend: 'down' },
    { text: 'profits', trend: 'up' },
  ],
  [
    { text: 'Inventory shrinkage', trend: 'down' },
    { text: 'profits', trend: 'up' },
  ],
  [
    { text: 'Theft', trend: 'down' },
    { text: 'LPO hours', trend: 'down' },
    { text: 'profits', trend: 'up' },
  ],
  [
    { text: 'Competitive prices', trend: 'down' },
    { text: 'higher traffic', trend: 'up' },
    { text: 'revenue', trend: 'up' },
  ],
  [
    { text: 'Employee focus', trend: 'up' },
    { text: 'productive labour force', trend: 'up' },
    { text: 'happy team', trend: 'up' },
  ],
]

const ROI_QUALITATIVE = [
  'Security of employees → quality employee retention',
  'Deterrence of employee theft → honest employees',
  'Presence and knowledge of LPO → real value, priceless',
  'An investment into dependability and trustworthiness',
]

function TrendArrow({ trend }: { trend: 'down' | 'up' }) {
  return (
    <span
      className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
        trend === 'down'
          ? 'bg-sky-500/20 text-sky-300'
          : 'bg-emerald-500/20 text-emerald-300'
      }`}
      aria-hidden
    >
      {trend === 'down' ? '↓' : '↑'}
    </span>
  )
}

function RoiChainRow({ segments }: { segments: ChainSegment[] }) {
  return (
    <li className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-slate-100/95">
      {segments.map((seg, i) => (
        <span key={`${seg.text}-${i}`} className="inline-flex items-center gap-1.5">
          {i > 0 && <span className="text-slate-500 font-medium">=</span>}
          {seg.trend ? <TrendArrow trend={seg.trend} /> : null}
          <span className={seg.trend === 'up' && i === segments.length - 1 ? 'font-medium text-emerald-200/95' : ''}>
            {seg.text}
          </span>
        </span>
      ))}
    </li>
  )
}

function ChartTooltip({
  active,
  payload,
  label,
  unit,
  formatter,
}: {
  active?: boolean
  payload?: { value?: number }[]
  label?: string
  unit?: string
  formatter?: (v: number) => string
}) {
  if (!active || !payload?.length) return null
  const value = payload[0]?.value
  if (value === undefined) return null
  return (
    <div className="rounded-lg border border-white/15 bg-slate-950/95 px-3 py-2 text-xs shadow-xl backdrop-blur-md">
      <p className="font-medium text-cyan-200/90">{label}</p>
      <p className="mt-0.5 tabular-nums text-white">
        {formatter ? formatter(value) : `${value}${unit ?? ''}`}
      </p>
    </div>
  )
}

export default function LpRoiStatsCharts() {
  const uid = useId().replace(/:/g, '')
  const lossGrad = `lossFill-${uid}`
  const apprehendGrad = `apprehendFill-${uid}`

  return (
    <div className="space-y-6">
      {/* Client ROI slide — causal chains + 2-year loss outline */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: easing }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-5 text-white shadow-[0_28px_90px_rgba(2,8,23,0.55)] ring-1 ring-cyan-500/15 md:px-6 md:py-6"
      >
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-10">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
              Return on investment
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              How protection pays back
            </h3>
            <ul className="mt-5 space-y-3 md:mt-6">
              {ROI_CHAINS.map((chain) => (
                <RoiChainRow key={chain.map((s) => s.text).join('-')} segments={chain} />
              ))}
            </ul>
            <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm text-slate-300/95">
              {ROI_QUALITATIVE.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
            <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-300">
              2 year performance outline
            </p>
            <div className="h-[200px] w-full min-w-0 md:h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={LOSS_FROM_THEFT} margin={{ top: 12, right: 12, left: 8, bottom: 20 }}>
                  <defs>
                    <linearGradient id={lossGrad} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.45} />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="4 6" stroke="rgba(148,163,184,0.1)" vertical={false} />
                  <XAxis
                    dataKey="time"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    axisLine={{ stroke: 'rgba(148,163,184,0.25)' }}
                    tickLine={false}
                    label={{ value: 'Time', position: 'insideBottom', offset: -2, fill: '#64748b', fontSize: 10 }}
                  />
                  <YAxis
                    domain={[0, 110]}
                    tick={{ fill: '#64748b', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    width={28}
                    label={{
                      value: 'Loss from theft',
                      angle: -90,
                      position: 'insideLeft',
                      fill: '#64748b',
                      fontSize: 10,
                      offset: 10,
                    }}
                  />
                  <Tooltip
                    content={
                      <ChartTooltip formatter={(v) => `${v} index (baseline = 100)`} />
                    }
                    cursor={{ stroke: 'rgba(59,130,246,0.35)', strokeWidth: 1 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="loss"
                    stroke="#3b82f6"
                    strokeWidth={2.5}
                    fill={`url(#${lossGrad})`}
                    dot={{ r: 3, fill: '#2563eb', stroke: '#93c5fd', strokeWidth: 1.5 }}
                    activeDot={{ r: 5, fill: '#dbeafe', stroke: '#2563eb', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-center text-[0.65rem] leading-relaxed text-slate-500">
              Theft-related loss drops sharply in year one and stabilizes at a lower baseline through year two.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Operational metrics — suspect dwell + weekly apprehensions */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, delay: 0.05, ease: easing }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-5 text-white shadow-[0_28px_90px_rgba(2,8,23,0.55)] ring-1 ring-cyan-500/15 md:px-6 md:py-6"
      >
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mb-6 max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
            Field intelligence
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
            Program metrics partners review weekly
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300/95">
            Suspect dwell time and apprehension activity show how quickly teams respond and how consistently
            programs perform across the calendar year.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Suspect time in store
                </p>
                <p className="mt-1 text-lg font-semibold text-white tabular-nums">
                  7 min <span className="text-sm font-normal text-emerald-300/95">avg at month 12</span>
                </p>
              </div>
              <span className="text-[0.65rem] font-medium uppercase tracking-wide text-cyan-200/75">
                12‑month view
              </span>
            </div>
            <div className="h-[150px] w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={SUSPECT_DWELL_TIME} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="4 6" stroke="rgba(148,163,184,0.12)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} dy={6} />
                  <YAxis domain={[0, 28]} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} width={32} tickFormatter={(v) => `${v}m`} />
                  <Tooltip content={<ChartTooltip unit=" min avg" />} cursor={{ stroke: 'rgba(34,211,238,0.35)', strokeWidth: 1 }} />
                  <Line type="monotone" dataKey="mins" stroke="#22d3ee" strokeWidth={2.5} dot={{ r: 3, fill: '#0891b2', stroke: '#cffafe', strokeWidth: 1.5 }} activeDot={{ r: 5, fill: '#cffafe', stroke: '#0891b2', strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Weekly apprehension trend
                </p>
                <p className="mt-1 text-lg font-semibold text-white tabular-nums">
                  14 <span className="text-sm font-normal text-cyan-200/90">avg per week (Dec)</span>
                </p>
              </div>
              <span className="text-[0.65rem] font-medium uppercase tracking-wide text-cyan-200/75">
                Calendar year
              </span>
            </div>
            <div className="h-[150px] w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={WEEKLY_APPREHENSIONS} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
                  <defs>
                    <linearGradient id={apprehendGrad} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="4 6" stroke="rgba(148,163,184,0.12)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} dy={6} />
                  <YAxis domain={[0, 18]} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} width={28} />
                  <Tooltip content={<ChartTooltip unit=" / week avg" />} cursor={{ stroke: 'rgba(56,189,248,0.35)', strokeWidth: 1 }} />
                  <Area type="monotone" dataKey="avg" stroke="#38bdf8" strokeWidth={2} fill={`url(#${apprehendGrad})`} dot={false} activeDot={{ r: 4, fill: '#bae6fd', stroke: '#0284c7', strokeWidth: 2 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <p className="relative mt-5 border-t border-white/10 pt-4 text-[0.65rem] leading-relaxed text-slate-500">
          Illustrative partner metrics for narrative context. Live dashboards and reporting cadence are configured
          per program.
        </p>
      </motion.div>
    </div>
  )
}
