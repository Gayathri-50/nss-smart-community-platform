import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Globe2,
  Send,
} from 'lucide-react'

const contactCards = [
  {
    title: 'Email Support',
    value: 'support@nsscommunity.org',
    description: 'Reach us for platform questions, volunteer support, and partnership requests.',
    icon: Mail,
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Phone Support',
    value: '+91 98765 43210',
    description: 'Available 24/7 for urgent community or volunteer coordination.',
    icon: Phone,
    accent: 'from-rose-500 to-orange-500',
  },
  {
    title: 'Office Address',
    value: 'NSS Community Center, Bangalore',
    description: 'Visit our regional headquarters for training, events, and community outreach.',
    icon: MapPin,
    accent: 'from-emerald-500 to-teal-500',
  },
]

const socials = [
  { name: 'Website', icon: Globe2, href: 'https://nsscommunity.org' },
  { name: 'Email', icon: Mail, href: 'mailto:support@nsscommunity.org' },
  { name: 'Chat', icon: MessageCircle, href: 'https://twitter.com' },
  { name: 'Updates', icon: Send, href: 'https://instagram.com' },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please complete all fields before sending your request.')
      return
    }

    toast.success('Message sent! The NSS team will respond shortly.')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <main className="space-y-20 pb-16">
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-16 text-slate-100 shadow-2xl shadow-slate-950/30 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.14),_transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid gap-10 lg:grid-cols-[0.9fr_0.95fr] lg:items-center"
          >
            <div className="space-y-6">
              <span className="section-label">
                <MessageCircle className="h-4 w-4 text-cyan-300" /> Contact NSS Community
              </span>
              <h1 className="section-title">Get in touch with the NSS support team anytime.</h1>
              <p className="section-copy">
                Whether it’s an emergency helpline, volunteer onboarding, or platform support, our team is available to help. Use the form or reach out directly via phone, email, or social media.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-white/5 p-6 shadow-2xl shadow-slate-950/10 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Emergency Hotline</p>
                  <p className="mt-3 text-3xl font-semibold text-white">+91 1800 123 456</p>
                  <p className="mt-4 text-slate-400">For urgent volunteer coordination, missing alerts, or medical transport requests.</p>
                </div>
                <div className="rounded-[1.75rem] bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-6 text-white shadow-2xl shadow-fuchsia-500/20">
                  <p className="text-sm uppercase tracking-[0.3em] text-indigo-100/80">Fast response</p>
                  <p className="mt-3 text-3xl font-semibold">24/7 community support</p>
                  <p className="mt-4 text-slate-100/90">Our dedicated team is aligned with NSS volunteers and local networks for rapid action.</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="card-panel"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-slate-200">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-200">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-200">Message</label>
                  <textarea
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                  <Mail className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[0.8fr_0.7fr]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="card-panel"
            >
              <div className="flex items-center gap-4 text-slate-100">
                <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 p-4 text-white shadow-lg shadow-cyan-500/20">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Email</p>
                  <p className="mt-2 text-xl font-semibold text-white">support@nsscommunity.org</p>
                </div>
              </div>
              <p className="mt-6 text-slate-400">Use email for follow-ups, partnership requests, or general platform support inquiries.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
              className="card-panel"
            >
              <div className="flex items-center gap-4 text-slate-100">
                <div className="rounded-3xl bg-gradient-to-br from-rose-500 to-orange-500 p-4 text-white shadow-lg shadow-rose-500/20">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Phone</p>
                  <p className="mt-2 text-xl font-semibold text-white">+91 98765 43210</p>
                </div>
              </div>
              <p className="mt-6 text-slate-400">Call us for urgent volunteer coordination, emergency alerts, and local community assistance.</p>
            </motion.div>
          </div>

          <div className="grid gap-6">
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="glass card-glass rounded-[2rem] border border-white/10 p-6 shadow-2xl shadow-slate-950/20"
                >
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${card.accent} text-white shadow-lg shadow-slate-950/30`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                  <p className="mt-2 text-2xl font-semibold text-white">{card.value}</p>
                  <p className="mt-3 text-slate-400">{card.description}</p>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
              className="glass card-glass rounded-[2rem] border border-white/10 p-6 shadow-2xl shadow-slate-950/20"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Social media</p>
                  <p className="mt-2 text-xl font-semibold text-white">Stay connected</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-3 text-slate-200">
                  <Globe2 className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-900/90"
                    >
                      <Icon className="h-4 w-4 text-cyan-300" />
                      {item.name}
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
