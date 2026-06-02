import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { Leaf, UploadCloud, PlusCircle } from 'lucide-react'
import WasteReportCard from '../../components/waste/WasteReportCard'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://nss-smart-community-platform.onrender.com'

export default function WasteReports() {
  const [wasteReports, setWasteReports] = useState([])
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ title: '', location: '', description: '', image: '' })

  const fetchReports = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${API_BASE_URL}/api/waste`)
      setWasteReports(res.data.wasteReports || [])
    } catch (err) {
      console.error(err)
      toast.error('Failed to load waste reports')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.title.trim() || !formData.location.trim() || !formData.description.trim()) {
      toast.error('Please complete all required fields')
      return
    }

    try {
      await axios.post(`${API_BASE_URL}/api/waste`, formData)
      toast.success('Waste report submitted')
      setFormData({ title: '', location: '', description: '', image: '' })
      fetchReports()
    } catch (err) {
      console.error(err)
      toast.error('Failed to submit report')
    }
  }

  useEffect(() => {
    fetchReports()
  }, [])

  return (
    <main className="space-y-16 pb-16">
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-16 text-slate-100 shadow-2xl shadow-slate-950/30 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.08),_transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-slate-200">
                <Leaf className="h-4 w-4 text-emerald-300" /> Waste Management
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Smart waste reports for cleaner communities.</h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">Report local waste issues, coordinate cleanups, and keep neighborhoods healthy with real-time reports.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                    <PlusCircle className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">Submit reports</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Community powered</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
                    <UploadCloud className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">Quick updates</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Refreshes instantly</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-emerald-500 via-cyan-400 to-sky-500" />
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Report center</p>
                    <h2 className="mt-2 text-3xl font-semibold text-white">Create a waste report</h2>
                  </div>
                </div>
                <p className="text-slate-300">Share photos and details so volunteers can find and resolve issues quickly.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="card-panel rounded-[2rem]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Submit a waste report</h2>
              <p className="mt-2 text-slate-400">Add a title, location and a short description. Photo URL is optional but helpful.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-slate-300">
              Title
              <input name="title" value={formData.title} onChange={handleChange} type="text" placeholder="Overflowing bin at Main Street" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
            </label>

            <label className="block text-sm text-slate-300">
              Location
              <input name="location" value={formData.location} onChange={handleChange} type="text" placeholder="MG Road, Bangalore" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
            </label>

            <label className="block text-sm text-slate-300 sm:col-span-2">
              Description
              <textarea name="description" value={formData.description} onChange={handleChange} rows="4" placeholder="Large pile of plastic waste near the market entrance." className="mt-3 w-full rounded-[1.75rem] border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
            </label>

            <label className="block text-sm text-slate-300 sm:col-span-2">
              Image URL
              <input name="image" value={formData.image} onChange={handleChange} type="url" placeholder="https://example.com/photo.jpg" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" />
            </label>

            <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:brightness-105">
              Submit Report
            </button>
          </form>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Live reports</p>
            <h2 className="text-3xl font-semibold text-white">Community waste reports</h2>
          </div>
          <div className="rounded-full bg-slate-950/85 px-4 py-3 text-sm text-slate-200">{loading ? 'Refreshing...' : `${wasteReports.length} reports`}</div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {wasteReports.length > 0 ? (
            wasteReports.map((report) => (
              <WasteReportCard key={report._id} report={report} onAction={() => toast('Update triggered', { icon: '♻️' })} />
            ))
          ) : (
            <div className="col-span-full rounded-[2rem] border border-dashed border-white/20 bg-slate-950/85 p-10 text-center text-slate-400">{loading ? 'Loading reports...' : 'No waste reports yet.'}</div>
          )}
        </div>
      </section>
    </main>
  )
}
