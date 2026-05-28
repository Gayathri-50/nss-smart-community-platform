import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock3, Phone } from 'lucide-react'

export default function MissingPersonCard({ person, onAction }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -4, scale: 1.01 }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="glass card-glass overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
    >
      <img src={person.image} alt={person.name} className="h-56 w-full object-cover" />

      <div className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">{person.status}</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{person.name}, {person.age}</h3>
            <p className="mt-2 text-sm text-slate-500">Last seen: {person.lastSeen}</p>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${person.status === 'Missing' ? 'bg-rose-500/15 text-rose-300' : person.status === 'Investigating' ? 'bg-amber-500/15 text-amber-300' : 'bg-emerald-500/15 text-emerald-300'}`}>
            {person.status}
          </span>
        </div>

        <div className="grid gap-3 rounded-3xl bg-slate-950/70 p-4 text-slate-300 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200">
              <MapPin className="h-4 w-4" /> Location
            </div>
            <p className="text-sm text-slate-300">{person.lastSeen}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200">
              <Clock3 className="h-4 w-4" /> Reported
            </div>
            <p className="text-sm text-slate-300">{person.reportedDate}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => onAction?.(person)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-amber-500 to-rose-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 sm:w-auto"
          >
            <Phone className="h-4 w-4" /> Contact Family
          </button>
          <p className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm font-semibold text-slate-100">Distance: {person.distance}</p>
        </div>
      </div>
    </motion.article>
  )
}
