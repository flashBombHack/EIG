import { motion } from 'framer-motion'
import security1 from '../assets/security1.jpeg'
import Footer from '../components/Footer'
import JotFormEmbed from '../components/JotFormEmbed'
import SiteHeader from '../components/SiteHeader'

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

const lookForItems = [
  'Licensed, professional, and accountable in the field',
  'Comfortable across uniformed, undercover, drone, and investigation roles',
  'Strong communication with site leadership and local authorities',
  'Reliable reporting and documentation habits',
]

export default function Careers() {
  return (
    <div className="min-h-screen bg-eig-bg text-white">
      <SiteHeader />

      <main className="pb-20 pt-36 md:pt-44">
        <section className="relative px-6 md:px-10">
          <div className="absolute inset-0 -z-10">
            <div
              className="h-full w-full bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${security1})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/92 via-slate-950/90 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_45%)]" />
          </div>

          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easing }}
              className="mb-8 text-center md:mb-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">Careers</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Join the EIG team
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200/85 md:text-base">
                We hire across drone surveillance, undercover security, uniformed security, and investigations.
                Complete the application below and our team will follow up when a role matches your experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: easing }}
              className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-lg md:mb-10 md:p-6"
            >
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
                    What we look for
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-200/90 md:text-[0.95rem]">
                    {lookForItems.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
                    Questions before you apply?
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-cyan-100/95">
                    Email{' '}
                    <a href="mailto:info@exodusgroup.ca" className="font-medium text-white hover:text-cyan-200">
                      info@exodusgroup.ca
                    </a>
                    <br />
                    Call{' '}
                    <a href="tel:+16136899491" className="font-medium text-white hover:text-cyan-200">
                      (613) 689-9491
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easing }}
              className="rounded-3xl border border-white/10 bg-slate-900/50 shadow-[0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            >
              <div className="border-b border-white/10 px-5 py-5 text-center md:px-8 md:py-6">
                <h2 className="text-2xl font-semibold text-white md:text-3xl">Job application</h2>
                <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300/90">
                  Fill out all required fields and attach your resume. The form expands as you complete each
                  section.
                </p>
              </div>
              <div className="rounded-b-3xl bg-white">
                <JotFormEmbed />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
