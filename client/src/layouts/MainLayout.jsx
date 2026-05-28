import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const STORAGE_KEY = 'nss-theme'

export default function MainLayout() {
  const [theme, setTheme] = useState('light')
  const location = useLocation()

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY)
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : preferredTheme)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen scroll-smooth text-slate-900 dark:text-slate-100">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: theme === 'dark' ? '#0f172a' : '#f8fafc',
            color: theme === 'dark' ? '#f8fafc' : '#0f172a',
            border: theme === 'dark' ? '1px solid rgba(56,189,248,0.2)' : '1px solid rgba(15,23,42,0.08)',
            boxShadow: '0 20px 50px rgba(15,23,42,0.15)',
          },
        }}
      />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="section-surface transition-all duration-300 sm:p-8"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}
