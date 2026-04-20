import { ArrowUpRight, Mail } from 'lucide-react'

function Footer({ socialLinks }) {
  return (
    <footer className="section-shell section-divider section-tone-warm pt-6">
      <div className="glass-card flex flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.28em] text-brand-100/80">
            Let&apos;s Build Something Meaningful
          </p>
          <p className="max-w-xl text-sm text-slate-300 md:text-base">
            Crafted to feel premium, credible, and instantly recruiter-friendly.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-brand-300/40 hover:bg-brand-400/10 hover:text-brand-50"
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            >
              {link.href.startsWith('mailto:') ? (
                <>
                  <Mail size={15} className="text-brand-200" />
                  <span>Gmail</span>
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
    </footer>
  )
}

export default Footer
