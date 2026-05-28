import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Blood Support', to: '/blood' },
  { name: 'Missing Alerts', to: '/missing' },
  { name: 'Waste Management', to: '/waste' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 transition backdrop-blur-xl ${scrolled ? 'bg-slate-950/90 shadow-lg shadow-slate-950/20' : 'bg-slate-950/70'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 via-orange-400 to-amber-400 text-lg font-extrabold text-white shadow-xl shadow-red-500/20">
            N
          </div>
          <div className="hidden sm:block">
            <p className="text-base font-semibold text-white">NSS Smart Community</p>
            <p className="text-xs text-slate-400">Community Support Platform</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex md:flex-1 md:justify-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `relative rounded-2xl px-4 py-2 text-sm font-medium transition duration-200 ${
                  isActive ? 'text-white shadow-lg shadow-indigo-500/15' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 hover:opacity-100 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 blur-sm" aria-hidden="true" />
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link
            to="/contact"
            className="hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex"
          >
            Contact
          </Link>
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-800/60 bg-slate-950/95 px-4 pb-4 shadow-2xl shadow-slate-950/30 backdrop-blur-xl md:hidden"
          >
            <div className="mt-3 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-3xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-slate-900 text-white' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  onToggleTheme()
                  setOpen(false)
                }}
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
