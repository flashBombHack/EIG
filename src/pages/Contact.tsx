import { motion } from 'framer-motion'
import security2 from '../assets/security2.jpeg'
import Footer from '../components/Footer'
import SiteHeader from '../components/SiteHeader'

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Contact() {
  return (
    <div className="min-h-screen bg-eig-bg text-white">
      <SiteHeader />

      <main className="pt-36 md:pt-44 pb-20">
        <section className="relative px-6 md:px-10">
          <div className="absolute inset-0 -z-10">
            <div
              className="h-full w-full bg-cover bg-center opacity-35"
              style={{ backgroundImage: `url(${security2})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/88 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.2),_transparent_45%)]" />
          </div>

          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easing }}
              className="mb-10 md:mb-12"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
                Contact Us
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl">
                Get a free estimation for security, investigations, or drone coverage.
              </h1>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-200/85">
                Tell us what you need and our team will build a tailored plan for your site, schedule, and risk profile.
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease: easing }}
                className="rounded-3xl border border-white/10 bg-slate-900/65 backdrop-blur-xl p-6 md:p-8 shadow-[0_35px_90px_rgba(0,0,0,0.45)]"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white">Get Free Estimation</h2>
                <form className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="h-12 rounded-xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-400/90 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="h-12 rounded-xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-400/90 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-12 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-400/90 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-12 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-400/90 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-400/90 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
                  <button
                    type="button"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-cyan-600 px-7 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(8,145,178,0.45)] hover:bg-cyan-500 transition-colors"
                  >
                    Get A Quote
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easing }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-lg p-6 md:p-8 flex flex-col justify-between shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">Address</p>
                  <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Contact Details</h2>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="flex gap-3 text-slate-200/90">
                    <span className="mt-1 text-cyan-300">•</span>
                    <p className="text-base md:text-lg">2855 Marleau Ave, Unit B, Cornwall ON, K6H 7B6</p>
                  </div>
                  <div className="flex gap-3 text-slate-200/90">
                    <span className="mt-1 text-cyan-300">✉</span>
                    <p className="text-base md:text-lg">info@exodusgroup.ca</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-5 py-4">
                  <p className="text-sm text-cyan-100/95">
                    Fast response for new clients. Ask us about combined guard + drone service packages.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
