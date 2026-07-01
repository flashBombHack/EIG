import { motion } from 'framer-motion'
import security2 from '../assets/security2.jpeg'
import Footer from '../components/Footer'
import JotFormEmbed, { JOTFORM_CONTACT_FORM_ID } from '../components/JotFormEmbed'
import SiteHeader from '../components/SiteHeader'

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Contact() {
  return (
    <div className="min-h-screen bg-eig-bg text-white">
      <SiteHeader />

      <main className="pb-20 pt-36 md:pt-44">
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">Contact Us</p>
              <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Get a free estimate for drone surveillance, undercover security, uniformed security, or
                investigations.
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-slate-200/85 md:text-base">
                Tell us what you need and our team will build a tailored plan for your site, schedule, and risk
                profile.
              </p>
            </motion.div>

            <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease: easing }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/65 shadow-[0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              >
                <div className="border-b border-white/10 px-6 py-5 md:px-8 md:py-6">
                  <h2 className="text-2xl font-semibold text-white md:text-3xl">Get free estimation</h2>
                  <p className="mt-2 text-sm text-slate-300/90">
                    Complete the form below and our team will follow up with a tailored quote. Submissions are
                    handled securely through our contact form.
                  </p>
                </div>
                <div className="bg-white px-3 py-4 md:px-5 md:py-6">
                  <JotFormEmbed
                    formId={JOTFORM_CONTACT_FORM_ID}
                    title="Contact and estimate request form"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easing }}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-lg md:p-8 lg:sticky lg:top-32"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">Address</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Contact details</h2>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="flex gap-3 text-slate-200/90">
                    <span className="mt-1 text-cyan-300">•</span>
                    <p className="text-base md:text-lg">
                      2855 Marleau Ave, Unit B, Cornwall, ON, K6H 7B6, Canada
                    </p>
                  </div>
                  <div className="flex gap-3 text-slate-200/90">
                    <span className="mt-1 text-cyan-300">✉</span>
                    <a
                      href="mailto:info@exodusgroup.ca"
                      className="text-base md:text-lg hover:text-cyan-200 transition-colors"
                    >
                      info@exodusgroup.ca
                    </a>
                  </div>
                  <div className="flex gap-3 text-slate-200/90">
                    <span className="mt-1 text-cyan-300">☎</span>
                    <a
                      href="tel:+16136899491"
                      className="text-base md:text-lg hover:text-cyan-200 transition-colors"
                    >
                      (613) 689-9491
                    </a>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-5 py-4">
                  <p className="text-sm text-cyan-100/95">
                    Fast response for new clients. Ask us about combined drone surveillance, undercover security,
                    and uniformed security packages.
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
