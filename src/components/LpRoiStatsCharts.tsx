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

/** Illustrative program data — configured per partner in live reporting. */
const SUSPECT_DWELL_TIME = [
  { month: 'M1', mins: 24 },
  { month: 'M2', mins: 21 },
  { month: 'M3', mins: 19 },
  { month: 'M4', mins: 17 },
  { month: 'M5', mins: 15 },
  { month: 'M6', mins: 14 },
  { month: 'M7', mins: 12 },
  { month: 'M8', mins: 11 },
  { month: 'M9', mins: 10 },
  { month: 'M10', mins: 9 },
  { month: 'M11', mins: 8 },
  { month: 'M12', mins: 7 },
]

const WEEKLY_APPREHENSIONS = [
  { month: 'Jan', avg: 6 },
  { month: 'Feb', avg: 7 },
  { month: 'Mar', avg: 8 },
  { month: 'Apr', avg: 9 },
  { month: 'May', avg: 10 },
  { month: 'Jun', avg: 11 },
  { month: 'Jul', avg: 12 },
  { month: 'Aug', avg: 12 },
  { month: 'Sep', avg: 13 },
  { month: 'Oct', avg: 13 },
  { month: 'Nov', avg: 14 },
  { month: 'Dec', avg: 14 },
]

const ROI_POINTS = [
  'Shorter suspect dwell time means faster intervention and less loss exposure.',
  'Weekly apprehension trends show consistent program activity across the year.',
  'Lower shrinkage and theft pressure support margin and pricing flexibility.',
  'Dependable reporting gives leadership a clear return on security investment.',
]

function ChartTooltip({
  active,
  payload,
  label,
  unit,
}: {
  active?: boolean
  payload?: { value?: number }[]
  label?: string
  unit: string
}) {
  if (!active || !payload?.length) return null
  const value = payload[0]?.value
  if (value === undefined) return null
  return (
    <div className="rounded-lg border border-white/15 bg-slate-950/95 px-3 py-2 text-xs shadow-xl backdrop-blur-md">
      <p className="font-medium text-cyan-200/90">{label}</p>
      <p className="mt-0.5 tabular-nums text-white">
        {value}
        {unit}
      </p>
    </div>
  )
}

export default function LpRoiStatsCharts() {
  const uid = useId().replace(/:/g, '')
  const apprehendGrad = `apprehendFill-${uid}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: easing }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-5 text-white shadow-[0_28px_90px_rgba(2,8,23,0.55)] ring-1 ring-cyan-500/15 md:px-6 md:py-6"
    >
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-56 w-56 rounded-full bg-blue-600/15 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
            Return on investment
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Performance you can track
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300/95">
            EIG programs surface the metrics leadership cares about: how long suspects remain on site, how
            consistently incidents are addressed, and how that translates into safer stores and stronger margins.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-slate-200/90">
            {ROI_POINTS.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Suspect time in store
                </p>
                <p className="mt-1 text-lg font-semibold text-white tabular-nums">
                  7 min{' '}
                  <span className="text-sm font-normal text-emerald-300/95">avg at month 12</span>
                </p>
              </div>
              <span className="text-[0.65rem] font-medium uppercase tracking-wide text-cyan-200/75">
                12‑month program view
              </span>
            </div>
            <div className="h-[160px] w-full min-w-0 md:h-[172px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={SUSPECT_DWELL_TIME} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="4 6" stroke="rgba(148,163,184,0.12)" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    dy={6}
                  />
                  <YAxis
                    domain={[0, 28]}
                    tick={{ fill: '#64748b', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    width={32}
                    tickFormatter={(v) => `${v}m`}
                  />
                  <Tooltip
                    content={<ChartTooltip unit=" min avg" />}
                    cursor={{ stroke: 'rgba(34,211,238,0.35)', strokeWidth: 1 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="mins"
                    stroke="#22d3ee"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: '#0891b2', stroke: '#cffafe', strokeWidth: 1.5 }}
                    activeDot={{ r: 5, fill: '#cffafe', stroke: '#0891b2', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-[0.65rem] leading-relaxed text-slate-500">
              Average dwell time trends down as deterrence and response improve across the program.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Weekly apprehension trend
                </p>
                <p className="mt-1 text-lg font-semibold text-white tabular-nums">
                  14{' '}
                  <span className="text-sm font-normal text-cyan-200/90">avg per week (Dec)</span>
                </p>
              </div>
              <span className="text-[0.65rem] font-medium uppercase tracking-wide text-cyan-200/75">
                Calendar year
              </span>
            </div>
            <div className="h-[160px] w-full min-w-0 md:h-[172px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={WEEKLY_APPREHENSIONS} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
                  <defs>
                    <linearGradient id={apprehendGrad} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="4 6" stroke="rgba(148,163,184,0.12)" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    dy={6}
                  />
                  <YAxis
                    domain={[0, 18]}
                    tick={{ fill: '#64748b', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    width={28}
                  />
                  <Tooltip
                    content={<ChartTooltip unit=" / week avg" />}
                    cursor={{ stroke: 'rgba(56,189,248,0.35)', strokeWidth: 1 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="avg"
                    stroke="#38bdf8"
                    strokeWidth={2}
                    fill={`url(#${apprehendGrad})`}
                    dot={false}
                    activeDot={{ r: 4, fill: '#bae6fd', stroke: '#0284c7', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-[0.65rem] leading-relaxed text-slate-500">
              Monthly average apprehensions per week show sustained program activity through the year.
            </p>
          </div>
        </div>
      </div>

      <p className="relative mt-5 border-t border-white/10 pt-4 text-[0.65rem] leading-relaxed text-slate-500">
        Illustrative partner metrics for narrative context. Live dashboards and reporting cadence are configured
        per program.
      </p>
    </motion.div>
  )
}
