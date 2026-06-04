import { motion } from 'framer-motion'
import security1 from '../assets/security1.jpeg'
import Footer from '../components/Footer'
import SiteHeader from '../components/SiteHeader'

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

const inputClass =
  'h-12 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-400/90 focus:outline-none focus:ring-2 focus:ring-cyan-400/50'

const roleOptions = [
  'Uniformed security guard',
  'Mobile patrol officer',
  'Undercover loss prevention',
  'Licensed drone operator',
  'Private investigator',
  'Operations or administration',
  'Other',
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

          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easing }}
              className="mb-10 md:mb-12"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">Careers</p>
              <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Join the EIG team
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-slate-200/85 md:text-base">
                We hire across drone surveillance, undercover security, uniformed security, and investigations.
                Submit your application below and our team will follow up when a role matches your experience.
              </p>
            </motion.div>

            <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease: easing }}
                className="rounded-3xl border border-white/10 bg-slate-900/65 p-6 shadow-[0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-8"
              >
                <h2 className="text-2xl font-semibold text-white md:text-3xl">Job application</h2>
                <p className="mt-2 text-sm text-slate-300/90">
                  Fields marked with context below help us route your application to the right hiring lead.
                </p>

                <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input type="text" name="firstName" required placeholder="First name" className={inputClass} />
                    <input type="text" name="lastName" required placeholder="Last name" className={inputClass} />
                  </div>
                  <input type="email" name="email" required placeholder="Email address" className={inputClass} />
                  <input type="tel" name="phone" required placeholder="Phone number" className={inputClass} />
                  <select name="role" required defaultValue="" className={inputClass}>
                    <option value="" disabled className="text-slate-400">
                      Position you are applying for
                    </option>
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <input type="text" name="city" placeholder="City / region" className={inputClass} />
                  <input
                    type="text"
                    name="availability"
                    placeholder="Earliest start date or availability"
                    className={inputClass}
                  />
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                      Resume (PDF or Word)
                    </label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="w-full rounded-xl border border-dashed border-white/20 bg-slate-900/50 px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-600 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-cyan-500"
                    />
                  </div>
                  <textarea
                    name="coverLetter"
                    placeholder="Tell us about your experience, licenses, and why you want to join EIG"
                    rows={5}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-400/90 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-cyan-600 px-7 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(8,145,178,0.45)] transition-colors hover:bg-cyan-500"
                  >
                    Submit application
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easing }}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-lg md:p-8"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">What we look for</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Grow with EIG</h2>
                  <ul className="mt-6 space-y-3 text-sm text-slate-200/90 md:text-base">
                    {[
                      'Licensed, professional, and accountable in the field',
                      'Comfortable working across uniformed, undercover, drone, and investigation roles',
                      'Strong communication with site leadership and local authorities',
                      'Reliable reporting and documentation habits',
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-5 py-4">
                  <p className="text-sm text-cyan-100/95">
                    Questions before you apply? Email{' '}
                    <a href="mailto:info@exodusgroup.ca" className="font-medium text-white hover:text-cyan-200">
                      info@exodusgroup.ca
                    </a>{' '}
                    or call{' '}
                    <a href="tel:+16136899491" className="font-medium text-white hover:text-cyan-200">
                      (613) 689-9491
                    </a>
                    .
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
