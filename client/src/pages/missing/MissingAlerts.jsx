import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  MapPin,
  Phone,
  Sparkles,
  User,
  Globe,
  Heart,
} from 'lucide-react'

const genders = ['Male', 'Female', 'Other']

export default function MissingAlerts() {
  const [missingPersons, setMissingPersons] = useState([])
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    location: '',
    description: '',
    contact: '',
    image: '',
  })

  const fetchMissingPersons = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:5000/api/missing')
      setMissingPersons(response.data.missingPersons || [])
    } catch (error) {
      console.error(error)
      toast.error('Unable to fetch missing reports.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (
      !formData.name.trim() ||
      !formData.age ||
      !formData.location.trim() ||
      !formData.description.trim() ||
      !formData.contact.trim() ||
      !formData.image.trim()
    ) {
      toast.error('Please complete all fields before submitting.')
      return
    }

    try {
      await axios.post('http://localhost:5000/api/missing', formData)
      toast.success('Missing person report submitted successfully.')
      setFormData({
        name: '',
        age: '',
        gender: 'Male',
        location: '',
        description: '',
        contact: '',
        image: '',
      })
      fetchMissingPersons()
    } catch (error) {
      console.error(error)
      toast.error('Failed to submit the missing person report.')
    }
  }

  useEffect(() => {
    fetchMissingPersons()
  }, [])

  return (
    <main className="space-y-16 pb-16">
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-16 text-slate-100 shadow-2xl shadow-slate-950/30 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.16),_transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-slate-200">
                <AlertTriangle className="h-4 w-4 text-rose-300" />
                Missing Alerts
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Find missing people faster with premium response tools.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Browse current missing person reports, share urgent alerts, and add new cases with a sleek glassmorphism dashboard designed for the NSS community.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-rose-500 text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">Live reports</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{missingPersons.length}</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">Community alerts</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Ready to respond</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-red-500 via-orange-400 to-rose-500" />
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Alert center</p>
                    <h2 className="mt-2 text-3xl font-semibold text-white">Urgent case tracking.</h2>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-3 text-slate-200">
                    <Globe className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-slate-300">Submit reports quickly and keep the volunteer network updated with last-known locations and contact details.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-200">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Verified cases</p>
                    <p className="mt-3 text-2xl font-semibold text-white">Trusted data</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-200">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Rapid sharing</p>
                    <p className="mt-3 text-2xl font-semibold text-white">Community alerts</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[0.95fr_0.75fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="card-panel rounded-[2rem]"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Report a missing person</h2>
                <p className="mt-2 text-slate-400">Submit a new case with full details so volunteers can respond fast.</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Arun Kumar"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  required
                />
              </label>

              <label className="block text-sm text-slate-300">
                Age
                <input
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  type="number"
                  min="1"
                  placeholder="28"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  required
                />
              </label>

              <label className="block text-sm text-slate-300">
                Gender
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  required
                >
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm text-slate-300">
                Location
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  type="text"
                  placeholder="Bangalore"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  required
                />
              </label>

              <label className="block text-sm text-slate-300 sm:col-span-2">
                Description
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Last seen wearing a blue shirt near MG Road."
                  className="mt-3 w-full rounded-[1.75rem] border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  required
                />
              </label>

              <label className="block text-sm text-slate-300">
                Contact
                <input
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  type="text"
                  placeholder="+91 98765 43210"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  required
                />
              </label>

              <label className="block text-sm text-slate-300 sm:col-span-2">
                Image URL
                <input
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  required
                />
              </label>

              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-red-500 via-rose-500 to-fuchsia-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:brightness-105"
              >
                Report Missing Person
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-3xl"
          >
            <div className="flex items-center gap-4 text-slate-100">
              <div className="rounded-3xl bg-gradient-to-br from-rose-500 to-orange-500 p-4 text-white shadow-lg shadow-rose-500/20">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Alert summary</p>
                <p className="mt-2 text-2xl font-semibold text-white">Live missing reports</p>
              </div>
            </div>
            <div className="mt-8 space-y-5">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-slate-300">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">How it works</p>
                <p className="mt-3 text-slate-300">Submit the missing person details and the NSS network will receive the alert immediately. Keep the contact number active for follow-ups.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 text-slate-300">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Report format</p>
                  <p className="mt-3 text-white">Name, age, gender, location, description, contact and photo link.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 text-slate-300">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Fast review</p>
                  <p className="mt-3 text-white">Reports are refreshed automatically after submission.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-rose-300">Live cards</p>
            <h2 className="text-3xl font-semibold text-white">Reported missing persons</h2>
          </div>
          <div className="rounded-full bg-slate-950/85 px-4 py-3 text-sm text-slate-200">
            {loading ? 'Refreshing...' : `${missingPersons.length} reports`}
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          {missingPersons.length > 0 ? (
            missingPersons.map((person) => (
              <motion.article
                key={person._id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="glass card-glass overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
              >
                <img src={person.image} alt={person.name} className="h-60 w-full object-cover" />
                <div className="space-y-5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-300">{person.status || 'Missing'}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{person.name}, {person.age}</h3>
                      <p className="mt-2 text-sm text-slate-500">Gender: {person.gender}</p>
                    </div>
                    <span className="rounded-full bg-rose-500/15 px-3 py-1 text-xs font-semibold text-rose-300">{person.status || 'Missing'}</span>
                  </div>

                  <div className="grid gap-3 rounded-3xl bg-slate-950/70 p-4 text-slate-300 sm:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-200">
                        <MapPin className="h-4 w-4" /> Location
                      </div>
                      <p className="text-sm text-slate-300">{person.location}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-200">
                        <Phone className="h-4 w-4" /> Contact
                      </div>
                      <p className="text-sm text-slate-300">{person.contact}</p>
                    </div>
                  </div>

                  <p className="text-slate-400 line-clamp-3">{person.description}</p>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={() => toast.success('Family contact initiated.')}
                      className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-red-500 via-rose-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:brightness-105"
                    >
                      Contact Family
                    </button>
                    <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm font-semibold text-slate-100">Reported</div>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full rounded-[2rem] border border-dashed border-white/20 bg-slate-950/85 p-10 text-center text-slate-400">
              {loading ? 'Loading reports...' : 'No missing person reports available.'}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
