import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import {
  Activity,
  HeartPulse,
  Flag,
  ShieldCheck,
  Briefcase,
  Bell,
  ChartBar,
  Users,
  ClipboardList,
  Sparkles,
} from 'lucide-react'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://nss-smart-community-platform.onrender.com'

const lineData = [
  { name: 'Mon', blood: 32, missing: 14, waste: 45 },
  { name: 'Tue', blood: 45, missing: 11, waste: 52 },
  { name: 'Wed', blood: 38, missing: 16, waste: 48 },
  { name: 'Thu', blood: 50, missing: 20, waste: 55 },
  { name: 'Fri', blood: 61, missing: 22, waste: 62 },
  { name: 'Sat', blood: 72, missing: 18, waste: 57 },
  { name: 'Sun', blood: 58, missing: 14, waste: 64 },
]

const barData = [
  { name: 'Blood', count: 324 },
  { name: 'Missing', count: 88 },
  { name: 'Waste', count: 176 },
  { name: 'Volunteers', count: 1900 },
]

const pieData = [
  { name: 'Resolved', value: 72 },
  { name: 'In Progress', value: 18 },
  { name: 'Pending', value: 10 },
]

const campaignData = [
  {
    title: 'River Cleanup Drive',
    description: 'Ongoing shoreline cleanup with 45 volunteers engaged.',
    progress: 78,
  },
  {
    title: 'Blood Donation Camp',
    description: '24 donors registered in the last 48 hours.',
    progress: 63,
  },
]

const COLORS = ['#34d399', '#fbbf24', '#f43f5e']

export default function AdminDashboard() {
  const [stats, setStats] = useState([
    {
      title: 'Blood Requests',
      value: '0',
      change: '+0%',
      icon: HeartPulse,
      accent: 'from-red-500 to-rose-500',
    },
    {
      title: 'Missing Alerts',
      value: '0',
      change: '+0%',
      icon: Flag,
      accent: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Waste Reports',
      value: '0',
      change: '+0%',
      icon: ShieldCheck,
      accent: 'from-emerald-500 to-cyan-500',
    },
    {
      title: 'Active Volunteers',
      value: '0',
      change: '+0%',
      icon: Users,
      accent: 'from-indigo-500 to-violet-500',
    },
  ])

  const [activities, setActivities] = useState([
    {
      time: 'Loading...',
      description: 'Fetching latest updates',
      icon: HeartPulse,
    },
  ])

  // Fetch all dashboard data on component mount
  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      // Fetch donors (blood requests)
      const donorsRes = await axios.get(`${API_BASE_URL}/api/donors`)
      const donorCount = donorsRes.data.length || 0

      // Fetch missing persons (missing alerts)
      const missingRes = await axios.get(`${API_BASE_URL}/api/missing`)
      const missingCount = missingRes.data.length || 0

      // Fetch waste reports
      const wasteRes = await axios.get(`${API_BASE_URL}/api/waste`)
      const wasteCount = wasteRes.data.length || 0

      // Fetch users (active volunteers)
      const usersRes = await axios.get(`${API_BASE_URL}/api/users`)
      const userCount = usersRes.data.length || 0

      // Update stats with real data
      setStats((prevStats) => [
        { ...prevStats[0], value: donorCount.toString() },
        { ...prevStats[1], value: missingCount.toString() },
        { ...prevStats[2], value: wasteCount.toString() },
        { ...prevStats[3], value: userCount.toString() },
      ])

      // Update activities with recent data
      const recentActivities = []

      if (donorsRes.data[0]) {
        recentActivities.push({
          time: 'Just now',
          description: `New blood donation request from ${donorsRes.data[0].bloodGroup || 'donor'}`,
          icon: HeartPulse,
        })
      }

      if (missingRes.data[0]) {
        recentActivities.push({
          time: '30 mins ago',
          description: `Missing alert submitted for ${missingRes.data[0].location || 'local area'}`,
          icon: Flag,
        })
      }

      if (wasteRes.data[0]) {
        recentActivities.push({
          time: '1 hr ago',
          description: `Waste report filed from ${wasteRes.data[0].location || 'community'}`,
          icon: ShieldCheck,
        })
      }

      if (usersRes.data[0]) {
        recentActivities.push({
          time: '2 hrs ago',
          description: `New volunteer registered: ${usersRes.data[0].name || 'Anonymous'}`,
          icon: Users,
        })
      }

      if (recentActivities.length > 0) {
        setActivities(recentActivities)
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      setActivities([
        {
          time: 'Error',
          description: 'Failed to fetch data from backend',
          icon: HeartPulse,
        },
      ])
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-8 xl:grid-cols-[280px_1fr]">
        <aside className="card-panel p-6">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-rose-500 text-white shadow-lg shadow-red-500/25">
              A
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Admin Panel</p>
              <p className="text-sm text-slate-400">NSS Dashboard</p>
            </div>
          </div>
          <nav className="space-y-3 text-sm text-slate-300">
            {[
              { label: 'Overview', icon: ChartBar },
              { label: 'Blood Requests', icon: HeartPulse },
              { label: 'Missing Alerts', icon: Flag },
              { label: 'Waste Reports', icon: ShieldCheck },
              { label: 'Volunteers', icon: Users },
              { label: 'Settings', icon: ClipboardList },
            ].map((item) => {
              const Icon = item.icon
              return (
                <button key={item.label} className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left transition hover:bg-white/10 hover:text-white">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-white/5 text-slate-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  {item.label}
                </button>
              )
            })}
          </nav>
        </aside>

        <section className="space-y-8">
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="card-panel"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Admin Overview</p>
                  <h1 className="mt-3 text-3xl font-semibold text-white">NSS Platform analytics</h1>
                </div>
                <div className="inline-flex items-center gap-2 rounded-3xl bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
                  <Activity className="h-4 w-4 text-emerald-300" /> Live updates
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/10 transition hover:-translate-y-1">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-slate-950/20`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-5 text-sm uppercase tracking-[0.28em] text-slate-400">{item.title}</p>
                      <div className="mt-3 flex items-end justify-between gap-4">
                        <p className="text-3xl font-semibold text-white">{item.value}</p>
                        <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-emerald-300">{item.change}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              className="card-panel"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Weekly overview</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Requests and alerts</h2>
                </div>
                <button className="btn-secondary">View report</button>
              </div>
              <div className="mt-8 h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
                    <CartesianGrid stroke="rgba(148,163,184,0.15)" strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)' }} />
                    <Line type="monotone" dataKey="blood" stroke="#f97316" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="missing" stroke="#facc15" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="waste" stroke="#34d399" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
              className="card-panel"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Blood request analytics</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Request volume</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-200">
                  <HeartPulse className="h-4 w-4 text-red-400" /> Live
                </div>
              </div>
              <div className="mt-8 h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid stroke="rgba(148,163,184,0.12)" strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)' }} />
                    <Bar dataKey="count" fill="#34d399" radius={[12, 12, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
                className="card-panel"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Waste report analytics</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">Cleanup status</h2>
                  </div>
                  <ClipboardList className="h-5 w-5 text-emerald-300" />
                </div>
                <div className="mt-8 h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={52} outerRadius={90} paddingAngle={4}>
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)' }} />
                      <Legend verticalAlign="bottom" iconType="circle" wrapperStyle={{ color: '#94a3b8' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
                className="card-panel"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Recent activities</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">Latest updates</h2>
                  </div>
                  <Bell className="h-5 w-5 text-amber-300" />
                </div>
                <div className="mt-6 space-y-4">
                  {activities.map((activity) => {
                    const Icon = activity.icon
                    return (
                      <div key={activity.time} className="card-panel-soft p-4 text-slate-300">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-white/5 text-slate-200">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-sm text-slate-400">{activity.time}</p>
                            <p className="mt-1 text-sm text-slate-100">{activity.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: 'easeOut' }}
            className="card-panel"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Campaign pipeline</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Active cleanup missions</h2>
              </div>
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="mt-8 space-y-4">
              {campaignData.map((campaign) => (
                <div key={campaign.title} className="card-panel-soft p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{campaign.title}</p>
                      <p className="mt-2 text-base text-slate-200">{campaign.description}</p>
                    </div>
                    <div className="text-sm font-semibold text-white">{campaign.progress}%</div>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" style={{ width: `${campaign.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
