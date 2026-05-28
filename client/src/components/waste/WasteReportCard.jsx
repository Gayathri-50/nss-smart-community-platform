import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Activity, UploadCloud } from 'lucide-react'

export default function WasteReportCard({ report, onAction }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -4, scale: 1.01 }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="glass card-glass overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
    >
      <img src={report.image} alt={report.title} className="h-56 w-full object-cover" />

      <div className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">{report.priority} priority</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{report.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{report.location}</p>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${report.status === 'Reported' ? 'bg-amber-500/15 text-amber-300' : report.status === 'In Progress' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-slate-700/70 text-slate-200'}`}>
            {report.status}
          </span>
        </div>

        <p className="text-sm leading-6 text-slate-500">{report.description}</p>

        <div className="grid gap-3 rounded-3xl bg-slate-950/70 p-4 text-slate-300 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200">
              <Activity className="h-4 w-4" /> Volunteers
            </div>
            <p className="text-sm text-slate-300">{report.volunteers} volunteers</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200">
              <MapPin className="h-4 w-4" /> Location
            </div>
            <p className="text-sm text-slate-300">{report.location}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => onAction?.(report)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 sm:w-auto"
          >
            <UploadCloud className="h-4 w-4" /> Add update
          </button>
          <p className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm font-semibold text-slate-100">Reported: {report.reportedDate}</p>
        </div>
      </div>
    </motion.article>
  )
}
