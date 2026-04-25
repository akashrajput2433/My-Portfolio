import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Eye, FileText, Menu, MoonStar, SunMedium, X } from 'lucide-react'

function Navbar({ navigation, theme, onToggleTheme, resume }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const resumeMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resumeMenuRef.current && !resumeMenuRef.current.contains(event.target)) {
        setIsResumeOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
    setIsResumeOpen(false)
  }

  return (
    <motion.header
      className="sticky top-0 z-30"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] items-center justify-between gap-3 py-4 md:gap-4 md:py-6">
        <motion.a
          className="theme-chip shrink-0 rounded-full px-4 py-2 text-sm font-semibold tracking-[0.2em] backdrop-blur"
          href="#home"
          onClick={closeMenu}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          PORTFOLIO
        </motion.a>

        <nav
          aria-label="Primary navigation"
          className="theme-glass hidden min-w-0 flex-1 rounded-full px-3 py-2 shadow-card backdrop-blur lg:block"
        >
          <ul className="flex flex-nowrap items-center justify-center gap-1 whitespace-nowrap">
            {navigation.map((item) => (
              <li key={item.href}>
                <motion.a
                  className="nav-link inline-flex whitespace-nowrap rounded-full px-3 py-2 text-sm transition hover:bg-white/5 xl:px-4"
                  href={item.href}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <motion.button
            className="theme-toggle theme-glass inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium backdrop-blur"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={onToggleTheme}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? <SunMedium size={16} /> : <MoonStar size={16} />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </motion.button>

          <motion.button
            className="theme-toggle theme-glass inline-flex h-11 w-11 items-center justify-center rounded-full backdrop-blur lg:hidden"
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>

        <div className="relative hidden shrink-0 lg:block" ref={resumeMenuRef}>
          <motion.button
            className="secondary-button hidden items-center gap-2 text-xs sm:text-sm lg:inline-flex"
            type="button"
            onClick={() => setIsResumeOpen((value) => !value)}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileText size={16} />
            Resume
          </motion.button>

          <AnimatePresence>
            {isResumeOpen ? (
              <motion.div
                className="resume-popover absolute right-0 top-[calc(100%+0.9rem)] w-[22rem] overflow-hidden rounded-[28px] border border-white/10 p-3 shadow-[0_24px_80px_rgba(2,8,20,0.45)]"
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="resume-popover-hero rounded-[22px] border border-brand-300/15 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-brand-100/80">
                    Resume Access
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Access a professionally presented resume snapshot or download the latest version instantly.
                  </p>
                </div>
                <div className="mt-3 grid gap-2">
                  <motion.a
                    className="resume-popover-action inline-flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-100 transition hover:border-brand-300/35 hover:bg-brand-400/10"
                    href={resume.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsResumeOpen(false)}
                    whileHover={{ x: 2 }}
                  >
                    <span className="inline-flex items-center gap-3">
                      <Eye size={16} className="text-brand-200" />
                      View Resume
                    </span>
                    <span className="text-[0.68rem] uppercase tracking-[0.18em] text-brand-100/80">Open</span>
                  </motion.a>
                  <motion.a
                    className="resume-popover-action inline-flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-100 transition hover:border-brand-300/35 hover:bg-brand-400/10"
                    href={resume.href}
                    download={resume.downloadName}
                    onClick={() => setIsResumeOpen(false)}
                    whileHover={{ x: 2 }}
                  >
                    <span className="inline-flex items-center gap-3">
                      <Download size={16} className="text-brand-200" />
                      Download Resume
                    </span>
                    <span className="text-[0.68rem] uppercase tracking-[0.18em] text-brand-100/80">PDF</span>
                  </motion.a>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="mx-auto w-[min(1120px,calc(100%-1.5rem))] lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24 }}
          >
            <div className="glass-card mb-4 overflow-hidden p-3">
              <nav aria-label="Mobile navigation">
                <ul className="grid gap-1">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <a
                        className="nav-link flex rounded-2xl px-4 py-3 text-sm transition hover:bg-white/5"
                        href={item.href}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <div className="mt-3 space-y-2 rounded-[24px] border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center gap-3 px-1">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-300/20 bg-brand-400/10 text-brand-100">
                          <FileText size={17} />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-white">Resume</p>
                          <p className="text-xs text-slate-400">View or download the latest PDF</p>
                        </div>
                      </div>
                      <a
                        className="secondary-button w-full justify-center gap-2"
                        href={resume.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                      >
                        <Eye size={16} />
                        View Resume
                      </a>
                      <a
                        className="primary-button w-full justify-center gap-2"
                        href={resume.href}
                        download={resume.downloadName}
                        onClick={closeMenu}
                      >
                        <Download size={16} />
                        Download Resume
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
