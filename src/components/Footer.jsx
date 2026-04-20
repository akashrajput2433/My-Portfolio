import { ArrowUpRight, Mail } from 'lucide-react'

function Footer({ socialLinks }) {
  return (
    <footer className="section-shell section-divider section-tone-warm pt-6">
      <div className="footer-shell glass-card relative overflow-hidden px-5 py-6 md:px-8 md:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.12),transparent_28%)]" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-3">
          <p className="text-[0.72rem] uppercase tracking-[0.34em] text-brand-100/80 sm:text-sm">
            Let&apos;s Build Something Meaningful
          </p>
          <p className="text-xl font-semibold leading-tight text-white sm:text-2xl">
            A premium digital presence built to leave a strong first impression.
          </p>
          <p className="max-w-xl text-sm leading-7 text-slate-300 md:text-base">
            Crafted to feel premium, credible, and instantly recruiter-friendly.
          </p>
          </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:max-w-md md:flex-1">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="group footer-link inline-flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-brand-300/40 hover:bg-brand-400/10 hover:text-brand-50"
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
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
                  <span>{link.label}</span>
                  <span className="inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-[0.18em] text-brand-100/80 transition group-hover:text-brand-50">
                    Visit
                    <ArrowUpRight size={13} />
                  </span>
                </>
              )}
            </a>
          ))}
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
