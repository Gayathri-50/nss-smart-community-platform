import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, HeartPulse, MessageCircle } from 'lucide-react'

export default function DonorCard({ donor, onContact }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -4, scale: 1.01 }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="glass card-glass overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/15 backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">{donor.bloodGroup}</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{donor.name}</h3>
          <p className="mt-2 text-sm text-slate-500">{donor.location}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${donor.availability === 'Available' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-slate-700/70 text-slate-200'}`}>
          {donor.availability}
        </span>
      </div>

      <div className="mt-6 grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-950/70 p-4">
          <div className="flex items-center gap-2 text-slate-200">
            <HeartPulse className="h-4 w-4" />
            Blood group
          </div>
          <p className="mt-2 text-slate-300">{donor.bloodGroup}</p>
        </div>
        <div className="rounded-3xl bg-slate-950/70 p-4">
          <div className="flex items-center gap-2 text-slate-200">
            <MapPin className="h-4 w-4" />
            Location
          </div>
          <p className="mt-2 text-slate-300">{donor.location}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => onContact?.(donor)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-red-500 to-rose-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/25 transition hover:-translate-y-0.5 sm:w-auto"
        >
          <MessageCircle className="h-4 w-4" /> Contact donor
        </button>
        <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm font-semibold text-slate-100">
          Status: <span className={donor.availability === 'Available' ? 'text-emerald-300' : 'text-slate-200'}>{donor.availability}</span>
        </div>
      </div>
    </motion.article>
  )
}
