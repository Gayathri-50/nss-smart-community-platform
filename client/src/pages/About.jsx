import React from 'react'
import { motion } from 'framer-motion'
import { HeartPulse, Users, ShieldCheck, Sparkles, MapPin, Flag, Activity } from 'lucide-react'

const missionPoints = [
  {
    title: 'Empower Volunteers',
    description: 'Give every NSS volunteer a unified command center for rapid community response.',
    icon: Users,
  },
  {
    title: 'Protect Citizens',
    description: 'Connect missing person alerts, blood donors, and civic cleanup through one trusted platform.',
    icon: ShieldCheck,
  },
  {
    title: 'Accelerate Action',
    description: 'Deliver faster decisions with real-time reporting, maps, and volunteer coordination.',
    icon: Sparkles,
  },
]

const goals = [
  'Reduce emergency response time for blood and rescue requests.',
  'Activate local communities with clear mission intelligence.',
  'Scale volunteer engagement using simple digital workflows.',
]

const stats = [
  { value: '18K+', label: 'Volunteer hours logged', icon: Activity },
  { value: '3.4K', label: 'Waste complaints resolved', icon: MapPin },
  { value: '1.2K', label: 'Verified blood donors', icon: HeartPulse },
]

export default function About() {
  return (
    <main className="space-y-20 pb-16">
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-16 text-slate-100 shadow-2xl shadow-slate-950/30 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
                <Sparkles className="h-4 w-4 text-amber-300" /> NSS Mission
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Building community resilience with modern civic technology.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                NSS Smart Community Platform is designed to bring volunteers, citizens, and emergency resources together in one premium, mobile-first experience. The goal is to make help faster, smarter, and more reliable across every neighborhood.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {missionPoints.map((point) => {
                  const Icon = point.icon
                  return (
                    <div key={point.title} className="glass card-glass rounded-[1.75rem] border border-white/10 p-5 shadow-xl shadow-slate-950/10">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{point.title}</h2>
                      <p className="mt-3 text-slate-500 dark:text-slate-300">{point.description}</p>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
            >
              <div className="space-y-6">
                <div className="rounded-3xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 p-4 text-white shadow-lg shadow-fuchsia-500/20">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/80">Our dedication</p>
                  <h2 className="mt-3 text-3xl font-semibold">Community impact that matters.</h2>
                </div>
                <p className="text-slate-200">
                  The platform brings structure to volunteer efforts, makes emergency support more accessible, and provides data-driven tools for NSS leaders to manage campaigns with confidence.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Mission reach</p>
                    <p className="mt-3 text-2xl font-semibold text-white">12+ districts</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Community trust</p>
                    <p className="mt-3 text-2xl font-semibold text-white">4.9/5 partner rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6 rounded-[2rem] border border-slate-200/5 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
              <Flag className="h-4 w-4 text-indigo-300" /> Vision & Goals
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">A vision for safer, cleaner, and stronger communities.</h2>
            <p className="max-w-2xl text-slate-500 dark:text-slate-300">
              NSS Smart Community Platform is created to unify civic safety, health support, and environmental action. Our goal is to make volunteer work easier, more visible, and more impactful through data, collaboration, and modern design.
            </p>
            <div className="space-y-4">
              {goals.map((goal) => (
                <div key={goal} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
                  <p className="text-slate-400">{goal}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6 rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 text-white shadow-2xl shadow-slate-950/30"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Volunteer contributions</p>
                  <p className="mt-3 text-3xl font-semibold">People power in action</p>
                </div>
                <div className="rounded-3xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Users className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass card-glass rounded-[1.75rem] border border-white/10 p-6 bg-slate-950/70">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Support network</p>
                <p className="mt-3 text-2xl font-semibold text-white">5K+ volunteers</p>
                <p className="mt-3 text-slate-300">Building local teams that respond quickly to urgent needs.</p>
              </div>
              <div className="glass card-glass rounded-[1.75rem] border border-white/10 p-6 bg-slate-950/70">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Impact stories</p>
                <p className="mt-3 text-2xl font-semibold text-white">95% mission success</p>
                <p className="mt-3 text-slate-300">Every alert and cleanup reported through the platform translates to better community outcomes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="glass card-glass rounded-[2rem] border border-white/10 p-6 shadow-2xl shadow-slate-950/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                    <p className="text-4xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                  <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 p-4 text-white shadow-lg shadow-cyan-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-300">Strengthens platform trust and motivates more volunteers to join each day.</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 shadow-2xl shadow-slate-950/30">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-300" /> Why this platform matters
              </span>
              <h2 className="text-4xl font-bold text-white sm:text-5xl">A trusted bridge between urgency and action.</h2>
              <p className="max-w-3xl text-slate-300">
                The platform makes vital support visible, accountable, and easy to navigate. It reduces friction for blood donors, volunteers, and citizens, while giving NSS leaders the clarity they need to coordinate across emergencies and civic programs.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.75rem] bg-white/5 p-6 text-white shadow-xl shadow-slate-950/15">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Trusted coordination</p>
                <p className="mt-3 text-xl font-semibold">Real-time emergency workflows</p>
              </div>
              <div className="rounded-[1.75rem] bg-white/5 p-6 text-white shadow-xl shadow-slate-950/15">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Community care</p>
                <p className="mt-3 text-xl font-semibold">Better outcomes for people in need</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
