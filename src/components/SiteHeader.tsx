import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import logoWhite from '../assets/logo-white.png'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

type SiteHeaderProps = {
  /** Home hero: background shifts when user scrolls */
  scrollReactive?: boolean
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex h-5 w-6 flex-col justify-center gap-[5px]" aria-hidden>
      <span
        className={`block h-0.5 w-full rounded-full bg-white transition-transform duration-300 ease-out ${
          open ? 'translate-y-[7px] rotate-45' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-full rounded-full bg-white transition-opacity duration-200 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`block h-0.5 w-full rounded-full bg-white transition-transform duration-300 ease-out ${
          open ? '-translate-y-[7px] -rotate-45' : ''
        }`}
      />
    </span>
  )
}

export default function SiteHeader({ scrollReactive = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!scrollReactive) return
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollReactive])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const headerSurface = scrollReactive
    ? scrolled
      ? 'bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-sm'
      : 'bg-transparent'
    : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-sm'

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 overflow-x-hidden transition-all duration-300 ${headerSurface}`}
      >
        <div className="mx-auto flex w-full max-w-[100%] min-w-0 items-center px-6 md:px-10 pt-5 md:pt-7 pb-2">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img src={logoWhite} alt="EIG Security" className="h-14 md:h-16 w-auto" />
          </Link>

          <nav className="hidden min-w-0 flex-1 justify-center px-4 md:flex">
            <div className="flex items-center gap-2 text-sm font-medium bg-white/10 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-1.5 rounded-full transition-colors ${
                    location.pathname === item.path
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-100/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center rounded-full border border-white/30 bg-white text-slate-900 text-sm font-semibold px-4 py-2 shadow-sm shadow-white/30 hover:bg-slate-100 transition-colors md:inline-flex"
            >
              Get In Touch <span className="ml-1.5 text-base">↗</span>
            </Link>
            <button
              type="button"
              className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition hover:bg-white/15 active:scale-[0.98] md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/65 backdrop-blur-[2px] md:hidden"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.42, ease: easing }}
              className="fixed inset-y-0 right-0 z-[45] flex w-[min(100%,420px)] flex-col border-l border-white/10 bg-slate-950/95 pt-[4.75rem] shadow-[-24px_0_80px_rgba(0,0,0,0.55)] backdrop-blur-xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Menu</p>
                <button
                  type="button"
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-slate-200 hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  Close
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.05, duration: 0.35, ease: easing }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded-2xl px-4 py-3.5 text-base font-medium transition ${
                        location.pathname === item.path
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-100 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="border-t border-white/10 p-5">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-2xl bg-white py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                >
                  Get In Touch <span className="ml-2 text-base">↗</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
