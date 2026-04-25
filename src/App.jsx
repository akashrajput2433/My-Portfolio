import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { portfolioData } from './data/portfolioData'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NetworkBackground from './components/NetworkBackground'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import EducationSection from './sections/EducationSection'
import AchievementsSection from './sections/AchievementsSection'
import ContactSection from './sections/ContactSection'

function App() {
  const [theme, setTheme] = useState('light')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    const preferredTheme = savedTheme || (window.innerWidth < 768 ? 'dark' : 'light')

    setTheme(preferredTheme)
    document.documentElement.dataset.theme = preferredTheme

    const timer = window.setTimeout(() => setIsLoading(false), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-night px-6"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
          >
            <div className="text-center">
              <motion.div
                className="mx-auto h-20 w-20 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur"
                animate={{ rotate: 360, borderRadius: ['28px', '18px', '28px'] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.p
                className="mt-6 text-xs uppercase tracking-[0.45em] text-brand-100/80"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Crafting Portfolio Experience
              </motion.p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="theme-shell relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <NetworkBackground />
          <div className="theme-orb-primary absolute left-1/2 top-0 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full blur-3xl md:h-[32rem] md:w-[32rem]" />
          <div className="theme-orb-secondary absolute right-[-4rem] top-32 h-44 w-44 rounded-full blur-3xl md:right-0 md:top-40 md:h-72 md:w-72" />
          <div className="ai-grid-overlay absolute inset-0 opacity-[0.14]" />
          <div className="absolute inset-0 bg-hero-grid bg-[length:56px_56px] opacity-[0.05]" />
          <div className="absolute left-[8%] top-[14%] hidden h-24 w-24 rounded-full border border-brand-300/15 md:block" />
          <div className="absolute right-[14%] top-[28%] hidden h-16 w-16 rounded-full border border-brand-300/15 md:block" />
        </div>
        <Navbar
          navigation={portfolioData.navigation}
          theme={theme}
          onToggleTheme={toggleTheme}
          resume={portfolioData.contact.resume}
        />
        <main className="relative z-10">
          <HeroSection hero={portfolioData.hero} />
          <AboutSection about={portfolioData.about} />
          <SkillsSection skills={portfolioData.skills} />
          <ProjectsSection projects={portfolioData.projects} />
          <ExperienceSection experience={portfolioData.experience} />
          <EducationSection education={portfolioData.education} />
          <AchievementsSection certifications={portfolioData.certifications} achievements={portfolioData.achievements} />
          <ContactSection contact={portfolioData.contact} />
        </main>
        <Footer socialLinks={portfolioData.contact.socialLinks} />
      </div>
    </>
  )
}

export default App
