import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimate, useDragControls, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'
import logoWhite from '../assets/logo-white.png'

type LegalDocType = 'terms' | 'privacy'

const legalContent: Record<LegalDocType, { title: string; updated: string; sections: { heading: string; body: string }[] }> = {
  terms: {
    title: 'Terms of Use',
    updated: 'April 20, 2026',
    sections: [
      {
        heading: 'Acceptance of terms',
        body:
          'By using this website, you agree to these terms and applicable laws. If you do not agree, please discontinue use.',
      },
      {
        heading: 'Website information',
        body:
          'Content is provided for general information about EIG services and may be updated at any time without notice.',
      },
      {
        heading: 'Service inquiries',
        body:
          'Submitting a form or contacting EIG does not create a service contract. Services are confirmed only by written agreement.',
      },
      {
        heading: 'Acceptable use',
        body:
          'Users may not misuse the website, attempt unauthorized access, or interfere with website operation.',
      },
      {
        heading: 'Intellectual property',
        body:
          'All branding, design, text, and media on this site are owned by EIG or used with permission and are protected by law.',
      },
      {
        heading: 'Liability limits',
        body:
          'To the extent permitted by law, EIG is not liable for indirect or consequential losses arising from website use.',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    updated: 'April 20, 2026',
    sections: [
      {
        heading: 'Information collected',
        body:
          'We may collect information you provide directly, including name, email, phone number, requested service type, and message details.',
      },
      {
        heading: 'How we use information',
        body:
          'Information is used to respond to inquiries, prepare service estimates, coordinate follow-up, and improve service delivery.',
      },
      {
        heading: 'Information sharing',
        body:
          'EIG does not sell personal data. Information may be shared with trusted service providers or when required by law.',
      },
      {
        heading: 'Security and retention',
        body:
          'We apply reasonable safeguards and retain personal data only as long as necessary for business and legal purposes.',
      },
      {
        heading: 'Your rights',
        body:
          'You may request access to or correction of your personal data, subject to applicable legal and operational limits.',
      },
      {
        heading: 'Contact',
        body:
          'Privacy questions can be sent to info@exodusgroup.ca.',
      },
    ],
  },
}

export default function Footer() {
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType | null>(null)

  return (
    <footer className="bg-eig-accent text-white pb-10 pt-10 md:pt-12">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="px-0 py-0 md:px-0 md:py-0"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-5 max-w-sm">
              <div className="flex items-center gap-3">
                <img
                  src={logoWhite}
                  alt="Exodus Investigators Group"
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-sm text-slate-100/85">
                Exodus Investigators Group backs retailers, construction partners, and organizations that
                take loss prevention and safety seriously, with guard programs built for the real world.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 text-sm font-medium px-5 py-2.5 text-slate-100/90 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-colors w-fit"
              >
                Get in touch
                <span className="ml-1.5 text-base">↗</span>
              </Link>
            </div>

            <div className="flex-1 grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-sm">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Company
                </p>
                <Link to="/" className="block text-left text-slate-100/85 hover:text-white">
                  Home
                </Link>
                <Link to="/about" className="block text-left text-slate-100/85 hover:text-white">
                  About
                </Link>
                <Link to="/services" className="block text-left text-slate-100/85 hover:text-white">
                  Services
                </Link>
                <Link to="/contact" className="block text-left text-slate-100/85 hover:text-white">
                  Contact
                </Link>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Resources
                </p>
                <Link
                  to="/services#drone-surveillance"
                  className="block text-left text-slate-100/85 hover:text-white"
                >
                  Drone surveillance
                </Link>
                <Link
                  to="/services#uniformed-guard-protection"
                  className="block text-left text-slate-100/85 hover:text-white"
                >
                  Uniformed security
                </Link>
                <Link
                  to="/services#undercover-asset-protection"
                  className="block text-left text-slate-100/85 hover:text-white"
                >
                  Undercover security
                </Link>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Contact
                </p>
                <p className="text-slate-100/85 text-sm">
                  <a href="mailto:info@exodusgroup.ca" className="hover:text-white transition-colors">
                    info@exodusgroup.ca
                  </a>
                  <br />
                  <a href="tel:+16135550199" className="hover:text-white transition-colors">
                    (613) 555-0199
                  </a>
                  <br />
                  Cornwall, Ontario, Canada
                </p>
                <div className="flex items-center gap-3 pt-2">
                  {['in', 'x', 'ig'].map((abbr) => (
                    <button
                      key={abbr}
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-white/5 text-xs font-semibold uppercase tracking-wide text-slate-100/90 hover:bg-white/15 transition-colors"
                    >
                      {abbr}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-slate-300 md:flex-row md:items-center md:justify-between"
          >
            <p>
              © {new Date().getFullYear()} Exodus Investigators Group. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setActiveLegalDoc('terms')}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Terms of use
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalDoc('privacy')}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Privacy policy
              </button>
              <a href="#top" className="text-slate-300 hover:text-white">
                Back to top ↑
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <LegalDrawer
        open={activeLegalDoc !== null}
        setOpen={(open) => {
          if (!open) setActiveLegalDoc(null)
        }}
      >
        {activeLegalDoc ? (
          <div className="mx-auto max-w-3xl space-y-5 text-slate-300">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">Legal</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {legalContent[activeLegalDoc].title}
              </h2>
              <p className="mt-1 text-xs text-slate-400">Last updated: {legalContent[activeLegalDoc].updated}</p>
            </div>
            <div className="space-y-4 pb-8">
              {legalContent[activeLegalDoc].sections.map((section) => (
                <section key={section.heading} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <h3 className="text-base font-semibold text-white md:text-lg">{section.heading}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/90">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        ) : null}
      </LegalDrawer>
    </footer>
  )
}

function LegalDrawer({
  open,
  setOpen,
  children,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  children: ReactNode
}) {
  const [scope, animate] = useAnimate()
  const [drawerRef, { height }] = useMeasure()

  const y = useMotionValue(0)
  const controls = useDragControls()

  const handleClose = async () => {
    await animate(scope.current, { opacity: [1, 0] }, { duration: 0.2 })
    const yStart = typeof y.get() === 'number' ? y.get() : 0
    await animate('#legal-drawer', { y: [yStart, height] }, { duration: 0.28, ease: 'easeInOut' })
    y.set(0)
    setOpen(false)
  }

  if (!open) return null

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClose}
      className="fixed inset-0 z-[70] bg-slate-950/80 backdrop-blur-[2px]"
    >
      <motion.div
        id="legal-drawer"
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
        className="absolute bottom-0 h-[80vh] w-full overflow-hidden rounded-t-3xl border-t border-cyan-400/25 bg-gradient-to-b from-slate-900 to-slate-950"
        style={{ y }}
        drag="y"
        dragControls={controls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.45 }}
        onDragEnd={() => {
          if (y.get() >= 100) handleClose()
        }}
      >
        <div className="absolute left-0 right-0 top-0 z-10 flex justify-center border-b border-white/10 bg-slate-900/95 p-4 backdrop-blur">
          <button
            onPointerDown={(e) => controls.start(e)}
            className="h-2 w-14 cursor-grab touch-none rounded-full bg-cyan-300/50 active:cursor-grabbing"
            aria-label="Drag down to close legal drawer"
            type="button"
          />
        </div>
        <div className="relative z-0 h-full overflow-y-auto p-4 pt-14 md:p-6 md:pt-16">{children}</div>
      </motion.div>
    </motion.div>
  )
}
