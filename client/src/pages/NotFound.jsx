import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.24),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_20%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-10 shadow-[0_28px_80px_rgba(15,23,42,0.35)] backdrop-blur-2xl"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.75fr] lg:items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.36em] text-white shadow-lg shadow-indigo-500/20"
              >
                Page not found
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                className="text-[clamp(4rem,6vw,8rem)] font-extrabold leading-[0.8] text-white"
              >
                404
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
                className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl"
              >
                The page you are looking for does not exist or has been moved. Return home to continue browsing the NSS Smart Community Platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r from-indigo-600 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-fuchsia-500/20 transition hover:-translate-y-0.5"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.14),_transparent_26%)]" />
              <div className="relative flex h-full flex-col items-center justify-center gap-6 text-center text-slate-100">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-white shadow-xl shadow-cyan-500/20">
                  <Compass className="h-10 w-10" />
                </div>
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Oops, wrong direction</p>
                  <h2 className="text-3xl font-semibold text-white">Let’s get you back on track.</h2>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 px-5 py-4 text-slate-300">
                  <p className="text-sm">Explore the platform dashboard, community alerts, and support resources from the home page.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
