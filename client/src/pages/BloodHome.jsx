import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import {
  Search,
  HeartPulse,
  Droplet,
  MapPin,
  Clock3,
  ShieldCheck,
  ArrowRight,
  Zap,
} from 'lucide-react'

const bloodGroups = [
  'All',
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
]

export default function BloodHome() {
  const [groupFilter, setGroupFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [donors, setDonors] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    phone: '',
    district: '',
    location: '',
    availability: true,
  })

  const fetchDonors = async () => {
    try {
      const res = await axios.get('https://nss-smart-community-platform.onrender.com/api/donors')
      setDonors(res.data.donors)
    } catch (error) {
      console.log(error)
      toast.error('Failed to fetch donors')
    }
  }

  const handleGroupFilter = (group) => {
    setGroupFilter(group)

    toast(`Filter set to ${group}`, {
      icon: '🩸',
    })
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axios.post('https://nss-smart-community-platform.onrender.com/api/donors', formData)
      toast.success('Donor registered successfully')
      setFormData({
        name: '',
        bloodGroup: '',
        phone: '',
        district: '',
        location: '',
        availability: true,
      })
      fetchDonors()
    } catch (error) {
      console.log(error)
      toast.error('Failed to register donor')
    }
  }

  const handleDonorAction = (donorName, action) => {
    toast.success(`${action} for ${donorName} initiated.`)
  }

  useEffect(() => {
    fetchDonors()
  }, [])

  const filteredDonors = useMemo(() => {
    return donors.filter((donor) => {
      const matchesGroup =
        groupFilter === 'All' ||
        donor.bloodGroup === groupFilter

      const query = search.toLowerCase()

      const matchesSearch = [
        donor.name,
        donor.district,
        donor.bloodGroup,
      ].some((value) =>
        value?.toLowerCase().includes(query)
      )

      return matchesGroup && matchesSearch
    })
  }, [groupFilter, search, donors])

  return (
    <main className="space-y-16 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-950 via-slate-900 to-slate-800 px-6 py-16 text-white shadow-2xl shadow-red-950/30 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.16),_transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">
                <Zap className="h-4 w-4 text-amber-300" />
                Blood Donor Network
              </p>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Rapid donor discovery for life-saving
                requests.
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-slate-200">
                Connect with verified blood donors
                nearby and coordinate emergency support.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-orange-500 text-white">
                    <HeartPulse className="h-6 w-6" />
                  </div>

                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-300">
                    Live donor availability
                  </p>

                  <p className="mt-3 text-3xl font-semibold text-white">
                    {donors.length} donors
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-500 to-fuchsia-500 text-white">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-300">
                    Verified donors
                  </p>

                  <p className="mt-3 text-3xl font-semibold text-white">
                    Trusted profiles
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-red-500 via-orange-400 to-rose-500" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
                      Emergency support
                    </p>

                    <h2 className="mt-2 text-3xl font-semibold text-white">
                      Request blood instantly
                    </h2>
                  </div>

                  <div className="rounded-3xl bg-red-500/20 p-3 text-white">
                    <Droplet className="h-5 w-5" />
                  </div>
                </div>

                <p className="text-slate-300">
                  Alert donors nearby with matching
                  blood groups and availability.
                </p>

                <a
                  href="#donors"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View donor list
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section
        id="search"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 xl:grid-cols-[0.85fr_0.55fr]">
          {/* SEARCH BAR */}
          <div className="card-panel rounded-[2rem]">
            <h2 className="text-2xl font-semibold text-white">
              Search donors quickly
            </h2>

            <p className="mt-3 text-slate-400">
              Search donor name, district or blood
              group.
            </p>

            <div className="mt-6">
              <label className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  type="text"
                  placeholder="Search donor..."
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-12 py-4 text-slate-100 outline-none"
                />
              </label>
            </div>
          </div>

          {/* FILTERS */}
          <div className="card-panel rounded-[2rem]">
            <h3 className="text-xl font-semibold text-white">
              Blood group filters
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {bloodGroups.map((group) => (
                <button
                  key={group}
                  onClick={() =>
                    handleGroupFilter(group)
                  }
                  className={`rounded-3xl px-4 py-3 text-sm font-semibold transition ${
                    groupFilter === group
                      ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white'
                      : 'bg-white/5 text-slate-100 hover:bg-white/10'
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DONOR REGISTRATION */}
      <section
        id="register"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-3xl sm:p-10"
        >
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-red-500 via-rose-500 to-fuchsia-500" />
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_0.75fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-red-300">
                Become a Blood Donor
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Join the lifesaving network today.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Register your donor profile now and make it easier for patients to reach you when every moment counts.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    Fast onboarding
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Complete in seconds
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    Verified support
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Reach lives across your district
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
              <div className="mb-6 rounded-[1.75rem] bg-slate-900/70 p-5 text-slate-200 shadow-inner shadow-black/20">
                <p className="text-sm uppercase tracking-[0.3em] text-red-300">
                  Donor profile
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Ready to help? Share your details.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid gap-4"
              >
                <label className="block text-sm text-slate-300">
                  Name
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-red-500"
                    required
                  />
                </label>

                <label className="block text-sm text-slate-300">
                  Blood group
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-red-500"
                    required
                  >
                    <option value="" disabled>
                      Select blood group
                    </option>
                    {bloodGroups.slice(1).map((group) => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm text-slate-300">
                  Phone
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="123-456-7890"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-red-500"
                    required
                  />
                </label>

                <label className="block text-sm text-slate-300">
                  District
                  <input
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    type="text"
                    placeholder="City or district"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-red-500"
                    required
                  />
                </label>

                <label className="block text-sm text-slate-300">
                  Location
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    type="text"
                    placeholder="Neighborhood or landmark"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-red-500"
                    required
                  />
                </label>

                <label className="inline-flex items-center gap-3 text-sm text-slate-300">
                  <input
                    name="availability"
                    checked={formData.availability}
                    onChange={handleChange}
                    type="checkbox"
                    className="h-5 w-5 rounded border border-white/10 bg-slate-950/80 text-red-500 accent-red-500"
                  />
                  Available to donate now
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-red-500 via-rose-500 to-fuchsia-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:brightness-105"
                >
                  Register donor
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* DONOR LIST */}
      <section
        id="donors"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">
              Verified donors
            </p>

            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Donor directory
            </h2>
          </div>

          <div className="card-panel-soft inline-flex rounded-full px-4 py-3 text-sm text-slate-200">
            {filteredDonors.length} results found
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredDonors.length > 0 ? (
            filteredDonors.map((donor) => (
              <div
                key={donor._id}
                className="card-panel overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-red-300">
                      {donor.bloodGroup}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                      {donor.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {donor.district}
                    </p>
                  </div>

                  <div
                    className={`rounded-3xl px-4 py-2 text-sm font-semibold ${
                      donor.availability
                        ? 'bg-emerald-500/15 text-emerald-300'
                        : 'bg-slate-700/70 text-slate-200'
                    }`}
                  >
                    {donor.availability
                      ? 'Available'
                      : 'Unavailable'}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/70 p-4">
                    <div className="flex items-center gap-2 text-slate-200">
                      <Clock3 className="h-4 w-4" />
                      Last donation
                    </div>

                    <p className="mt-2 text-slate-300">
                      {donor.lastDonation ||
                        'Not Available'}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-slate-950/70 p-4">
                    <div className="flex items-center gap-2 text-slate-200">
                      <MapPin className="h-4 w-4" />
                      Distance
                    </div>

                    <p className="mt-2 text-slate-300">
                      {donor.distance || 'Nearby'}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() =>
                      handleDonorAction(
                        donor.name,
                        'Request'
                      )
                    }
                    className="btn-primary"
                  >
                    Request Now
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleDonorAction(
                        donor.name,
                        'Viewing profile'
                      )
                    }
                    className="btn-secondary"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full rounded-[2rem] border border-dashed border-white/20 bg-slate-950/80 p-10 text-center text-slate-400">
              No donors match your search.
            </div>
          )}
        </div>
      </section>
    </main>
  )
}