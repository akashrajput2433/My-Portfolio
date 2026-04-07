function Footer({ socialLinks }) {
  return (
    <footer className="section-shell section-divider section-tone-warm pt-6">
      <div className="glass-card flex flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.28em] text-brand-100/80">
            Portfolio Footer
          </p>
          <p className="max-w-xl text-sm text-slate-300 md:text-base">
            Crafted to feel premium, credible, and instantly recruiter-friendly.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="pill-tag transition hover:border-brand-300/40 hover:bg-brand-400/10"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
