import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { lossPreventionOfficerJob, type JobListing } from '../data/careersJobs'

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

type JobListingSectionProps = {
  job?: JobListing
}

function JobDetailSection({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <section>
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300/90">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200/90">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function JobListingModal({
  job,
  open,
  onClose,
  onApply,
}: {
  job: JobListing
  open: boolean
  onClose: () => void
  onApply: () => void
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/80 p-0 backdrop-blur-sm sm:items-center sm:p-4 md:p-6"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: easing }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="job-modal-title"
            className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_40px_120px_rgba(0,0,0,0.65)] sm:rounded-3xl"
          >
            <div className="shrink-0 border-b border-white/10 bg-slate-900/95 px-5 py-4 backdrop-blur-md md:px-6 md:py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
                    Open position
                  </p>
                  <h2 id="job-modal-title" className="mt-1 text-xl font-semibold text-white md:text-2xl">
                    {job.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-300/90">{job.company}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:bg-white/10"
                  aria-label="Close job details"
                >
                  ✕
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  {job.pay}
                </span>
                {job.jobTypes.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-slate-200/90"
                  >
                    {type}
                  </span>
                ))}
                <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-slate-200/90">
                  {job.location}
                </span>
              </div>
            </div>

            <div className="overflow-y-auto px-5 py-5 md:px-6 md:py-6">
              <div className="space-y-8">
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300/90">
                    Job description
                  </h3>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-200/90">{job.intro}</p>
                </section>

                <JobDetailSection title="Responsibilities" items={job.responsibilities} />
                <JobDetailSection title="Qualifications" items={job.qualifications} />
                <JobDetailSection title="Requirements" items={job.requirements} />
                <JobDetailSection title="Benefits to you" items={job.benefits} />

                <section className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Schedule</h3>
                    <ul className="mt-2 space-y-1 text-sm text-slate-200/90">
                      {job.schedule.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Additional pay & benefits
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-slate-200/90">
                      {[...job.additionalPay, ...job.benefitsList].map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-slate-400">Language: {job.languageNote}</p>
                  </div>
                </section>

                <section className="rounded-2xl border border-cyan-400/15 bg-cyan-500/5 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/90">
                    Before you apply
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
                    {job.applicationQuestions.map((q) => (
                      <li key={q}>
                        <span className="text-slate-400">Application question:</span> {q}
                      </li>
                    ))}
                    {job.experience.map((e) => (
                      <li key={e.label}>
                        <span className="text-slate-400">Experience:</span> {e.label} — {e.detail}
                      </li>
                    ))}
                    {job.language.map((l) => (
                      <li key={l.label}>
                        <span className="text-slate-400">Language:</span> {l.label} ({l.detail})
                      </li>
                    ))}
                    {job.licenses.map((l) => (
                      <li key={l.label}>
                        <span className="text-slate-400">Licence:</span> {l.label} ({l.detail})
                      </li>
                    ))}
                    <li>
                      <span className="text-slate-400">Work location:</span> In person
                    </li>
                  </ul>
                </section>
              </div>
            </div>

            <div className="shrink-0 border-t border-white/10 bg-slate-900/95 px-5 py-4 backdrop-blur-md md:px-6">
              <button
                type="button"
                onClick={onApply}
                className="w-full rounded-xl bg-cyan-600 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
              >
                Apply below
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function JobListingSection({ job = lossPreventionOfficerJob }: JobListingSectionProps) {
  const [open, setOpen] = useState(false)

  const scrollToApplication = () => {
    setOpen(false)
    window.setTimeout(() => {
      document.getElementById('job-application')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 200)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: easing }}
        className="mb-8 md:mb-10"
      >
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
          Open positions
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group w-full rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/90 p-5 text-left shadow-[0_24px_70px_rgba(0,0,0,0.4)] backdrop-blur-xl transition hover:border-cyan-400/25 hover:shadow-[0_28px_80px_rgba(8,145,178,0.15)] md:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-emerald-200">
                  Hiring now
                </span>
                {job.jobTypes.slice(0, 2).map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[0.65rem] text-slate-300"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <h2 className="mt-3 text-xl font-semibold text-white transition group-hover:text-cyan-50 md:text-2xl">
                {job.title}
              </h2>
              <p className="mt-1 text-sm text-slate-300/90">{job.company} · {job.location}</p>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400/95">
                Action-filled LP role in SDG County. Paid training, performance bonuses, and a path toward law
                enforcement — no prior security experience required.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm font-semibold text-emerald-300/95">{job.pay}</span>
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs text-slate-300/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2 self-start sm:self-center">
              <span className="inline-flex items-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20">
                View full details
                <span className="ml-2 text-base transition group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </span>
            </div>
          </div>
        </button>
      </motion.div>

      <JobListingModal job={job} open={open} onClose={() => setOpen(false)} onApply={scrollToApplication} />
    </>
  )
}
