import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoWhite from '../assets/logo-white.png'

export default function Footer() {
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
                <img src={logoWhite} alt="EIG Security" className="h-14 w-auto" />
              </div>
              <p className="text-sm text-slate-100/85">
                EIG backs retailers, construction partners, and organizations that take loss
                prevention and safety seriously — with guard programs built for the real world.
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
                <Link to="/" className="block text-left text-slate-100/85 hover:text-white">
                  Guard programs
                </Link>
                <Link to="/" className="block text-left text-slate-100/85 hover:text-white">
                  Loss prevention
                </Link>
                <Link to="/" className="block text-left text-slate-100/85 hover:text-white">
                  Private investigations
                </Link>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Contact
                </p>
                <p className="text-slate-100/85 text-sm">
                  info@eigsecurity.com
                  <br />
                  Ontario, Canada
                </p>
                <div className="flex items-center gap-3 pt-2">
                  {['in', 'x', 'ig'].map((abbr) => (
                    <button
                      key={abbr}
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-white/5 text-[11px] font-semibold uppercase tracking-wide text-slate-100/90 hover:bg-white/15 transition-colors"
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
            <p>© {new Date().getFullYear()} EIG Security. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <button type="button" className="text-slate-300 hover:text-white">
                Terms of use
              </button>
              <button type="button" className="text-slate-300 hover:text-white">
                Privacy policy
              </button>
              <a href="#top" className="text-slate-300 hover:text-white">
                Back to top ↑
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
