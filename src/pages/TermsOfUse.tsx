import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import SiteHeader from '../components/SiteHeader'

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function TermsOfUse() {
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
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Terms of Use</h1>
          <p className="mt-2 text-sm text-slate-300">Last updated: April 20, 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-200/90 md:text-base">
            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">1. Acceptance of terms</h2>
              <p className="mt-2">
                By using this website, you agree to these Terms of Use and applicable laws. If you do not agree,
                please do not use this site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">2. Website content</h2>
              <p className="mt-2">
                Content is provided for general information about EIG services. While we aim to keep information
                accurate and current, content may change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">3. Service inquiries</h2>
              <p className="mt-2">
                Submitting a form or contacting us does not create a service contract. Services are only confirmed
                through a separate written agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">4. Acceptable use</h2>
              <p className="mt-2">
                You agree not to misuse this website, attempt unauthorized access, or interfere with site operation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">5. Intellectual property</h2>
              <p className="mt-2">
                All text, design, branding, and media on this website are owned by EIG or used with permission and
                are protected by applicable intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">6. Third-party links</h2>
              <p className="mt-2">
                This site may include links to third-party websites. EIG is not responsible for the content or
                privacy practices of those websites.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">7. Limitation of liability</h2>
              <p className="mt-2">
                To the maximum extent permitted by law, EIG is not liable for indirect or consequential losses
                arising from your use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">8. Governing law</h2>
              <p className="mt-2">
                These terms are governed by the laws of Ontario and applicable Canadian federal laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white md:text-xl">9. Contact</h2>
              <p className="mt-2">
                Questions about these terms can be sent to <a className="text-cyan-300 hover:text-cyan-200" href="mailto:info@exodusgroup.ca">info@exodusgroup.ca</a>.
              </p>
            </section>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
