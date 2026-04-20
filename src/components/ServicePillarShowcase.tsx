import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'

export type PillarContentPosition = 'l' | 'r'

export type ServicePillar = {
  id: number
  hashId: string
  callout: string
  title: string
  description: string
  bullets?: readonly string[]
  contentPosition: PillarContentPosition
  image: string
  imageAlt: string
  accentBadgeClass: string
  eyebrowDotClass: string
  listBulletClass: string
  spotlightTintClass: string
  /** Large check beside the title (Tailwind text-* on SVG currentColor) */
  titleMarkClass?: string
  /**
   * `serviceDisplay` , same headline pattern as the drone hero (font-display eyebrow + bold title).
   * Requires `serviceEyebrowAccentClass` (Tailwind classes for the callout span).
   */
  headingVariant?: 'pillar' | 'serviceDisplay'
  /** First word(s) in the display eyebrow; e.g. `text-fuchsia-300 drop-shadow-[...]` */
  serviceEyebrowAccentClass?: string
  /** Muted tail after the middle dot (default `services`) */
  serviceEyebrowSuffix?: string
  /** Optional overlay text used only in sticky/mobile image panel. */
  spotlightTitle?: string
  spotlightDescription?: string
}

type SlidingPanelProps = {
  featureInView: ServicePillar
}

type ContentProps = ServicePillar & {
  pillarIndex: number
  registerRef: (index: number, el: HTMLDivElement | null) => void
}

const MD_MIN = '(min-width: 768px)'

const IO_THRESHOLDS = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.85, 1]

function PillarVisual({ featureInView }: SlidingPanelProps) {
  return (
    <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-[0_28px_90px_rgba(0,0,0,0.65)] md:h-[22rem]">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={featureInView.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={featureInView.image}
            alt={featureInView.imageAlt}
            className="h-full w-full object-cover opacity-[0.42] md:opacity-[0.48]"
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/82 to-slate-950/35" />
      <div className={`pointer-events-none absolute inset-0 ${featureInView.spotlightTintClass}`} />

      <div className="relative flex h-full flex-col justify-end p-5 pb-6 md:p-7 md:pb-8">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={featureInView.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            {featureInView.headingVariant === 'serviceDisplay' &&
            featureInView.serviceEyebrowAccentClass ? (
              <>
                <p className="font-display text-[0.65rem] font-extrabold uppercase leading-none tracking-[0.24em] text-white/95 sm:text-xs md:text-sm">
                  <span className={featureInView.serviceEyebrowAccentClass}>{featureInView.callout}</span>
                  <span className="text-amber-300/90"> · </span>
                  <span className="text-slate-200/90">
                    {featureInView.serviceEyebrowSuffix ?? 'services'}
                  </span>
                </p>
                <p className="font-display text-2xl font-bold leading-[1.08] tracking-tight text-white md:text-3xl lg:text-[2.15rem] lg:leading-snug">
                  {featureInView.spotlightTitle ?? featureInView.title}
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-200/85 md:text-xs">
                  <span className={`h-1.5 w-1.5 rounded-full ${featureInView.eyebrowDotClass}`} />
                  <span>{featureInView.callout}</span>
                </div>
                <p className="text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl lg:text-[1.75rem] lg:leading-snug">
                  {featureInView.spotlightTitle ?? featureInView.title}
                </p>
              </>
            )}
            <p className="max-w-md text-sm leading-relaxed text-slate-200/90 line-clamp-4 md:text-[0.95rem] md:leading-relaxed">
              {featureInView.spotlightDescription ?? featureInView.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function SlidingPillarDisplay({ featureInView }: SlidingPanelProps) {
  return (
    <div
      style={{
        justifyContent: featureInView.contentPosition === 'l' ? 'flex-end' : 'flex-start',
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout="position"
        transition={{
          type: 'spring',
          stiffness: 380,
          damping: 30,
        }}
        className="h-fit w-[min(100%,42rem)] px-3 md:w-3/5 md:px-4 lg:px-5"
      >
        <PillarVisual featureInView={featureInView} />
      </motion.div>
    </div>
  )
}

function PillarContent({ registerRef, pillarIndex, ...featureInView }: ContentProps) {
  return (
    <div
      ref={(el) => registerRef(pillarIndex, el)}
      data-pillar-index={pillarIndex}
      id={featureInView.hashId}
      className="relative z-0 flex min-h-0 h-auto scroll-mt-28 md:h-svh md:min-h-svh md:scroll-mt-32"
      style={{
        justifyContent: featureInView.contentPosition === 'l' ? 'flex-start' : 'flex-end',
      }}
    >
      <div className="grid h-full min-h-0 w-full place-content-center px-4 py-10 sm:px-5 md:w-2/5 md:px-5 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {featureInView.headingVariant === 'serviceDisplay' &&
          featureInView.serviceEyebrowAccentClass ? (
            <>
              <p className="font-display text-sm font-extrabold uppercase leading-none tracking-[0.28em] md:text-base">
                <span className={featureInView.serviceEyebrowAccentClass}>{featureInView.callout}</span>
                <span className="text-amber-300/95"> · </span>
                <span className="text-slate-100/90">
                  {featureInView.serviceEyebrowSuffix ?? 'services'}
                </span>
              </p>
              <div className="mt-3 flex items-start gap-3 md:mt-4 md:gap-4">
                {featureInView.titleMarkClass ? (
                  <svg
                    className={`mt-1 h-8 w-8 shrink-0 md:mt-1.5 md:h-9 md:w-9 ${featureInView.titleMarkClass}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.65}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                ) : null}
                <h2 className="min-w-0 flex-1 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.35rem]">
                  {featureInView.title}
                </h2>
              </div>
            </>
          ) : (
            <>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/15 ${featureInView.accentBadgeClass}`}
              >
                {featureInView.callout}
              </span>
              <div className="my-3 flex items-start gap-3 md:gap-4">
                {featureInView.titleMarkClass ? (
                  <svg
                    className={`mt-0.5 h-8 w-8 shrink-0 md:mt-1 md:h-9 md:w-9 ${featureInView.titleMarkClass}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.65}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                ) : null}
                <h2 className="min-w-0 flex-1 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                  {featureInView.title}
                </h2>
              </div>
            </>
          )}
          <p className="text-sm leading-relaxed text-slate-300/95 md:text-base">{featureInView.description}</p>
          {featureInView.bullets && featureInView.bullets.length > 0 ? (
            <ul className="mt-5 space-y-2.5 text-sm text-slate-200/90 md:text-[0.95rem]">
              {featureInView.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${featureInView.listBulletClass}`} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 block md:hidden"
        >
          <PillarVisual featureInView={featureInView} />
        </motion.div>
      </div>
    </div>
  )
}

export default function ServicePillarShowcase({ pillars }: { pillars: readonly ServicePillar[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const blockRefs = useRef<(HTMLDivElement | null)[]>([])
  const ratios = useRef(new Float32Array(pillars.length))

  const registerRef = useCallback((index: number, el: HTMLDivElement | null) => {
    blockRefs.current[index] = el
  }, [])

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia(MD_MIN)
    if (!mq.matches) return

    let observer: IntersectionObserver | null = null
    let raf = 0
    let cancelled = false

    const pickBest = () => {
      let best = 0
      let bestR = -1
      for (let i = 0; i < pillars.length; i++) {
        const r = ratios.current[i] ?? 0
        if (r > bestR) {
          bestR = r
          best = i
        }
      }
      if (bestR >= 0.02) setActiveIndex(best)
    }

    const connect = () => {
      const els = pillars.map((_, i) => blockRefs.current[i])
      if (els.some((e) => !e)) return false
      ratios.current = new Float32Array(pillars.length)

      observer?.disconnect()
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const raw = (entry.target as HTMLElement).dataset.pillarIndex
            const idx = raw === undefined ? -1 : parseInt(raw, 10)
            if (idx >= 0 && idx < pillars.length) {
              ratios.current[idx] = entry.intersectionRatio
            }
          }
          pickBest()
        },
        {
          root: null,
          rootMargin: '-42% 0px -42% 0px',
          threshold: IO_THRESHOLDS,
        }
      )
      els.forEach((el) => {
        if (el) observer!.observe(el)
      })
      pickBest()
      return true
    }

    const tryConnect = () => {
      if (cancelled) return
      if (connect()) return
      raf = requestAnimationFrame(tryConnect)
    }

    tryConnect()

    const onMq = () => {
      if (!window.matchMedia(MD_MIN).matches) return
      tryConnect()
    }
    mq.addEventListener('change', onMq)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      mq.removeEventListener('change', onMq)
      observer?.disconnect()
    }
  }, [pillars])

  const featureInView = pillars[activeIndex] ?? pillars[0]

  return (
    <section className="relative mx-auto max-w-6xl" aria-label="Service pillars">
      <div className="px-4 pb-4 pt-3 sm:px-5 md:pb-5 md:pt-4">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
          How we partner with you
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Scroll through each service area and the preview updates as you go.
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400 md:text-base">
          On larger screens, the spotlight panel stays pinned while copy highlights one program at a time.
        </p>
      </div>

      <SlidingPillarDisplay featureInView={featureInView} />

      <div className="-mt-[100vh] hidden md:block" aria-hidden />

      {pillars.map((p, i) => (
        <PillarContent key={p.id} pillarIndex={i} registerRef={registerRef} {...p} />
      ))}
    </section>
  )
}
