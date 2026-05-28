import React from 'react'
import { Globe2, Phone, Mail, MessageCircle, Send } from 'lucide-react'

const socials = [
  { icon: Globe2, href: 'https://nsscommunity.org', label: 'Website' },
  { icon: Mail, href: 'mailto:support@nsscommunity.org', label: 'Email' },
  { icon: MessageCircle, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Send, href: 'https://instagram.com', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950/90 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="glass card-glass grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr] xl:grid-cols-[1.5fr_0.9fr_0.9fr_0.9fr] border-white/10 bg-slate-950/75 p-10 shadow-2xl shadow-slate-950/30">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 via-orange-500 to-amber-400 text-xl font-extrabold text-white shadow-xl shadow-red-500/20">
                N
              </div>
              <div>
                <p className="text-lg font-semibold text-white">NSS Smart Community</p>
                <p className="text-sm text-slate-400">Designed for safer, cleaner, and more connected neighborhoods.</p>
              </div>
            </div>
            <p className="max-w-sm text-slate-400">
              A premium community platform for volunteers, alerts, blood support, and civic action — crafted with a dark glass aesthetic and responsive layout.
            </p>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 text-slate-300">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Office</p>
              <p className="mt-3 text-sm text-white">NSS Community Center, Bangalore</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Quick links</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <a href="/" className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/blood" className="transition hover:text-white">
                  Blood Support
                </a>
              </li>
              <li>
                <a href="/missing" className="transition hover:text-white">
                  Missing Alerts
                </a>
              </li>
              <li>
                <a href="/waste" className="transition hover:text-white">
                  Waste Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contact</p>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3 rounded-3xl bg-slate-950/80 p-4">
                <Phone className="h-4 w-4 text-emerald-300" />
                <span>+91 1800 123 456</span>
              </div>
              <div className="flex items-center gap-3 rounded-3xl bg-slate-950/80 p-4">
                <Mail className="h-4 w-4 text-cyan-300" />
                <span>support@nsscommunity.org</span>
              </div>
              <div className="rounded-3xl bg-white/5 p-4 text-slate-300">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Hours</p>
                <p className="mt-2 text-sm">24/7 volunteer support & coordination</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Follow us</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-500/15 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NSS Smart Community Platform. All rights reserved.</p>
          <p>Built for volunteer mobilization and local impact.</p>
        </div>
      </div>
    </footer>
  )
}
