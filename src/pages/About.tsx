import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import SiteHeader from '../components/SiteHeader'
import slider1 from '../assets/slider1.png'
import slider2 from '../assets/slider2.png'
import slider3 from '../assets/slider3.png'

const SLIDER_INTERVAL_MS = 6000
const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

const eigDoItems = [
  'Deploy uniformed security guards and mobile patrols based on your risk profile and hours of operation',
  'Run undercover loss prevention programs to identify repeat patterns, recover assets, and reduce shrink',
  'Provide licensed drone surveillance for large sites, after-hours monitoring, and rapid incident visibility',
  'Support private investigations for internal concerns, integrity issues, and evidence-based reporting',
  'Coordinate with site leadership and local authorities for escalation, documentation, and follow-through',
  'Deliver clear analytics and recurring reports so your team can track outcomes across all service areas',
]

const slides = [
  {
    id: 0,
    title: 'Who Are We',
    content: `EIG is a fully licensed provider of uniformed security, undercover security, drone surveillance, and private investigations headquartered near Ottawa, serving small cities and towns across Ontario. We use a top-to-bottom, metrics-driven approach and align our team with yours to achieve your goals.

Our team is highly qualified, licensed and trained. We treat your business like our own and deliver a cutting-edge, community-centric operation. With over 200 apprehensions and 1000 preventions per officer per year, our recovery rate is 7x above the industry average.`,
    image: slider1,
    cardClass: 'about-card-who',
  },
  {
    id: 1,
    title: 'Our Mission',
    content: `EIG delivers innovative, reliable, and ethical protection programs across uniformed security, undercover security, drone surveillance, and private investigations. We guarantee excellence through dependable people and systems, and we remain committed to social responsibility while addressing the needs of all individuals involved in the incidents we handle.`,
    image: slider2,
    cardClass: 'about-card-mission',
  },
  {
    id: 2,
    title: 'Quality Policy',
    content: `EIG is committed to the highest degree of quality across uniformed security, undercover security, drone surveillance, and private investigations. We meet client expectations of performance, integrity, and delivery; provide practical service guidance; promote innovation and technology; invest in staff development; and maintain strong internal and external communication.`,
    image: slider3,
    cardClass: 'about-card-quality',
  },
]

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1)
      setCurrentIndex((i) => (i + 1) % slides.length)
    }, SLIDER_INTERVAL_MS)
    return () => clearInterval(t)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  const next = () => {
    setDirection(1)
    setCurrentIndex((i) => (i + 1) % slides.length)
  }

  const slide = slides[currentIndex]

  return (
    <div className="min-h-screen about-page-bg text-white">
      <SiteHeader />

      <main className="pt-40 md:pt-48 pb-16 md:pb-24 px-6 md:px-10">
        {/* Top section: derived from About content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: easing }}
          className="max-w-6xl mx-auto flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between mb-14 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.05, ease: easing }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Full-service protection across every site and risk profile
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.12, ease: easing }}
            className="max-w-md flex flex-col gap-4"
          >
            <p className="text-slate-200/90 text-sm md:text-base">
              We provide uniformed security, undercover security, drone surveillance, and private investigations across Ontario. Our team delivers metrics-driven results with a community-centric approach, including a recovery rate 7x above the industry average.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white text-slate-900 text-sm font-semibold px-5 py-2.5 w-fit hover:bg-slate-100 transition-colors"
            >
              Get In Touch →
            </Link>
          </motion.div>
        </motion.div>

        {/* Slider: 40% content, 60% image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easing }}
          className="max-w-6xl mx-auto relative"
        >
          <div className="relative overflow-hidden rounded-3xl min-h-[420px] md:min-h-[480px]">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction * 120,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.7,
                    ease: easing,
                  },
                }}
                exit={{
                  opacity: 0,
                  x: direction * -120,
                  transition: {
                    duration: 0.5,
                    ease: easing,
                  },
                }}
                className="absolute inset-0 grid md:grid-cols-[2fr_3fr] gap-6 md:gap-8 items-stretch"
              >
                {/* Left: content card (40%) */}
                <div
                  className={`about-slider-card rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-center relative z-10 overflow-hidden ${slide.cardClass}`}
                >
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative z-10">
                    {slide.title}
                  </h2>
                  <div className="text-white/90 text-sm md:text-base leading-relaxed space-y-2 relative z-10">
                    {slide.content.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>

                {/* Right: image (60%) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, delay: 0.15, ease: easing },
                  }}
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-800/50"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full min-h-[240px] md:min-h-[320px] object-cover"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom: progress bar + arrows */}
          <div className="flex flex-wrap items-center justify-between mt-8 gap-4">
            <div className="flex-1 min-w-0 h-1 rounded-full bg-white/15 overflow-hidden max-w-xs">
              <motion.div
                className="h-full rounded-full bg-white/90"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                  duration: SLIDER_INTERVAL_MS / 1000,
                  ease: 'linear',
                }}
                key={currentIndex}
              />
            </div>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="h-11 w-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="h-11 w-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* What Can EIG Do For Me – gradient section + glass cards */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easing }}
          className="about-eig-do-section relative mt-20 md:mt-28 py-16 md:py-24 px-6 md:px-10"
        >
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.08, ease: easing }}
              className="text-center mb-12 md:mb-16"
            >
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-slate-400 mb-3">
                Why Partner with Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                What Can EIG Do For Me?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {eigDoItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="about-eig-do-card rounded-2xl p-5 md:p-6 relative overflow-hidden"
                >
                  <span className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  <p className="text-slate-200/95 text-sm md:text-base leading-relaxed pl-5">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
