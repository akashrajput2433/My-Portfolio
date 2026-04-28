import { ArrowUpRight, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from './SocialIcons'

function Footer({ socialLinks }) {
  return (
    <footer className="section-shell section-divider section-tone-warm pb-10 pt-6">
      <motion.div
        className="footer-shell glass-card relative overflow-hidden px-5 py-7 md:px-8 md:py-9"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.14),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-200/50 to-transparent" />
        <div className="relative flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="inline-flex rounded-full border border-brand-300/20 bg-brand-400/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.26em] text-brand-100/80 sm:text-xs">
              Let&apos;s Build Something Meaningful
            </p>
            <p className="max-w-xl text-sm leading-7 text-slate-300 md:text-base">
              Designed to reflect clarity, credibility, and a distinctly premium professional identity.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300">
                AI/ML
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300">
                Software
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300">
                Open to Roles
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:max-w-md md:flex-1">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                className="group footer-link inline-flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-brand-300/40 hover:bg-brand-400/10 hover:text-brand-50"
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.href.startsWith('mailto:') ? (
                  <>
                    <span className="inline-flex items-center gap-3">
                      <Mail size={15} className="text-brand-200" />
                      <span>Gmail</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-[0.18em] text-brand-100/80 transition group-hover:text-brand-50">
                      Email
                      <ArrowUpRight size={13} />
                    </span>
                  </>
                ) : (
                  <>
                    <span className="inline-flex items-center gap-3">
                      {link.label === 'GitHub' ? <GitHubIcon size={15} className="text-brand-200" /> : null}
                      {link.label === 'LinkedIn' ? <LinkedInIcon size={15} className="text-brand-200" /> : null}
                      {link.label === 'LeetCode' ? <LeetCodeIcon size={15} className="text-brand-200" /> : null}
                      <span>{link.label}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-[0.18em] text-brand-100/80 transition group-hover:text-brand-50">
                      Visit
                      <ArrowUpRight size={13} />
                    </span>
                  </>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
