import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import SiteHeader from '../components/SiteHeader'

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-eig-bg text-white">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 pb-20 pt-36 md:px-10 md:pt-44">
        <motion.section
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easing }}
          className="rounded-3xl border border-white/10 bg-slate-900/55 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90">Legal</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-300">Last updated: April 20, 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-200/90 md:text-base">
            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">1. Information we collect</h2>
              <p className="mt-2">
                We may collect information you provide directly, such as your name, email address, phone number,
                company details, requested services, and messages sent through the contact form.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">2. How we use information</h2>
              <p className="mt-2">
                We use information to respond to inquiries, provide estimates, improve services, and maintain
                communication related to requested security programs.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">3. Legal basis and consent</h2>
              <p className="mt-2">
                By submitting your information, you consent to collection and use as described in this policy,
                subject to applicable privacy laws in Canada.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">4. Sharing and disclosure</h2>
              <p className="mt-2">
                We do not sell personal information. We may share data with service providers that support business
                operations or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">5. Data retention</h2>
              <p className="mt-2">
                We retain personal information only as long as needed for business and legal purposes, then securely
                delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">6. Security safeguards</h2>
              <p className="mt-2">
                We use reasonable administrative and technical safeguards to protect personal information from
                unauthorized access, disclosure, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">7. Your privacy rights</h2>
              <p className="mt-2">
                You may request access, correction, or deletion of your personal information, subject to legal
                limitations. Contact us to submit a request.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">8. Contact</h2>
              <p className="mt-2">
                For privacy questions or requests, email{' '}
                <a className="text-cyan-300 hover:text-cyan-200" href="mailto:info@exodusgroup.ca">
                  info@exodusgroup.ca
                </a>
                .
              </p>
            </section>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
