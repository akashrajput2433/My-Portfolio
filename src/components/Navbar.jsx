import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MoonStar, SunMedium, X } from 'lucide-react'

function Navbar({ navigation, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <motion.header
      className="sticky top-0 z-30"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] items-center justify-between gap-3 py-4 md:gap-4 md:py-6">
        <motion.a
          className="theme-chip rounded-full px-4 py-2 text-sm font-semibold tracking-[0.2em] backdrop-blur"
          href="#home"
          onClick={closeMenu}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          PORTFOLIO
        </motion.a>

        <nav
          aria-label="Primary navigation"
          className="theme-glass hidden rounded-full px-3 py-2 shadow-card backdrop-blur lg:block"
        >
          <ul className="flex flex-wrap items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <motion.a
                  className="nav-link inline-flex rounded-full px-4 py-2 text-sm transition hover:bg-white/5"
                  href={item.href}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
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

        <motion.a
          className="secondary-button hidden text-xs sm:text-sm lg:inline-flex"
          href="#contact"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Hire Me
        </motion.a>
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
                    <a
                      className="primary-button mt-2 w-full"
                      href="#contact"
                      onClick={closeMenu}
                    >
                      Hire Me
                    </a>
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
