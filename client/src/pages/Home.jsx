import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HeartPulse,
  ShieldCheck,
  MapPin,
  Award,
  Users,
  Sparkles,
  Flag,
  Mail,
  ArrowRight,
} from 'lucide-react'

const stats = [
  { label: 'Active Donors', value: '1.2K', icon: HeartPulse, accent: 'from-red-500 to-orange-400' },
  { label: 'Missing Alerts', value: '248', icon: Flag, accent: 'from-indigo-500 to-violet-500' },
  { label: 'Waste Reports', value: '3.4K', icon: ShieldCheck, accent: 'from-emerald-500 to-teal-400' },
]

const services = [
  {
    title: 'Emergency Response',
    description: 'Coordinate rescue teams, blood donors and alert networks instantly with real-time status updates.',
    icon: Users,
  },
  {
    title: 'Location Intelligence',
    description: 'Powerful map feeds help volunteers identify priority areas and dispatch help faster.',
    icon: MapPin,
  },
  {
    title: 'Impact Analytics',
    description: 'Dashboard summaries help NSS leaders track campaign progress and community engagement.',
    icon: Award,
  },
]

const features = [
  {
    title: 'Blood Donation Network',
    description: 'Find donors by blood group and location, manage availability and make urgent requests with confidence.',
    icon: HeartPulse,
    badge: 'Life-saving support',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    title: 'Missing Person Alerts',
    description: 'Broadcast verified missing reports across volunteers and nearby communities with secure tracking.',
    icon: Flag,
    badge: 'Search & rescue',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Smart Waste Management',
    description: 'Report civic waste, monitor cleanups and empower volunteers to restore safer neighborhoods.',
    icon: ShieldCheck,
    badge: 'Clean community',
    gradient: 'from-emerald-500 to-cyan-500',
  },
]

export default function Home() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-16 text-slate-100 shadow-2xl shadow-slate-950/30 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div className="max-w-xl space-y-4">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100">
                  <Sparkles className="mr-2 h-4 w-4 text-amber-300" />
                  Built for NSS volunteers and communities
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  Community care, emergency response, and civic action — all in one modern control center.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  NSS Smart Community Platform empowers blood donation, missing person alerts, and waste management with a premium dashboard experience designed for fast decisions and compassionate action.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#services" className="btn-primary">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#mission" className="btn-secondary">
                  Join the Movement
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
                className="card-panel"
            >
              <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-red-500 via-pink-500 to-violet-500 opacity-80" />
              <div className="space-y-6">
                <div className="flex items-center justify-between text-slate-200">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">NSS Live Overview</p>
                    <h2 className="text-2xl font-semibold text-white">Impact in motion</h2>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 p-3 text-slate-200">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="card-panel-soft">
                        <div className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} p-3 text-white shadow-md`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="mt-4 text-sm uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                        <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Platform Services</span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">Everything your NSS team needs to move faster.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">Designed to make community support easier through advanced coordination, live reporting, and intuitive volunteer engagement.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="card-panel"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-3 text-slate-500 dark:text-slate-300">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="card-panel relative overflow-hidden"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.gradient}`} />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="rounded-3xl bg-white/10 p-4 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">{feature.badge}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-fuchsia-300">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section id="mission" className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_30%)]" />
        <div className="section-surface relative mx-auto max-w-6xl p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
                <MapPin className="h-4 w-4 text-cyan-300" /> Our mission
              </span>
              <h2 className="text-4xl font-bold text-white sm:text-5xl">Connecting communities with fast, caring support.</h2>
              <p className="max-w-2xl text-slate-300">
                NSS Smart Community Platform turns urgency into action by combining lifesaving volunteer coordination, responsive public alerts and clean city campaigns in one premium dashboard.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-200">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Focus</p>
                  <p className="mt-3 text-lg font-semibold">Empower volunteers with the right tools.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-200">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Impact</p>
                  <p className="mt-3 text-lg font-semibold">Bring faster support directly to citizens in need.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="grid gap-5"
            >
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Volunteer Reach</p>
                    <p className="mt-3 text-3xl font-semibold text-white">18K+</p>
                  </div>
                  <div className="rounded-3xl bg-fuchsia-500/15 p-3 text-fuchsia-300">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Safety Score</p>
                    <p className="mt-3 text-3xl font-semibold text-white">97%</p>
                  </div>
                  <div className="rounded-3xl bg-cyan-500/15 p-3 text-cyan-300">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-10 text-white shadow-2xl shadow-slate-950/30">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.24em] text-slate-200">
                <Mail className="h-4 w-4 text-cyan-300" /> Volunteer call-to-action
              </span>
              <h2 className="text-4xl font-bold sm:text-5xl">Become a volunteer and transform your neighborhood.</h2>
              <p className="max-w-2xl text-slate-300">
                Join thousands of NSS volunteers using smart workflows to respond faster, support more people, and make every mission count.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
                  Join as Volunteer
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Contact the Team
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white/5 p-6 text-slate-100 shadow-xl shadow-slate-950/15">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Happier communities</p>
                <p className="mt-3 text-2xl font-semibold">Increase outreach by 62%</p>
              </div>
              <div className="rounded-[2rem] bg-white/5 p-6 text-slate-100 shadow-xl shadow-slate-950/15">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Faster response</p>
                <p className="mt-3 text-2xl font-semibold">Reduce alert time by 45%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/5 bg-slate-950/80 px-4 py-10 text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">NSS Smart Community Platform</p>
            <p className="mt-2 max-w-xl text-sm text-slate-400">A modern platform built for NSS volunteers, citizens, and community impact leaders to collaborate in real time.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <a href="/about" className="transition hover:text-white">About</a>
            <a href="/contact" className="transition hover:text-white">Contact</a>
            <a href="/privacy" className="transition hover:text-white">Privacy</a>
            <a href="/terms" className="transition hover:text-white">Terms</a>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-slate-500">© 2026 NSS Smart Community Platform. All rights reserved.</div>
      </footer>
    </div>
  )
}
