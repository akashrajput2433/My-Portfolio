import SectionHeading from '../components/SectionHeading'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import AnimatedSection, { staggerContainer, staggerItem } from '../components/AnimatedSection'
import SectionSideNetwork from '../components/SectionSideNetwork'

function ProjectsSection({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex] ?? projects[0]
  const hasMultipleProjects = projects.length > 1

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? projects.length - 1 : currentIndex - 1))
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex === projects.length - 1 ? 0 : currentIndex + 1))
  }

  return (
    <AnimatedSection id="projects" className="section-shell section-divider section-tone-cool">
      <SectionSideNetwork variant="cool" />
      <div className="section-panel">
        <SectionHeading
          eyebrow="Projects"
          title="AI Project Case Studies"
          description="Real AI products built with RAG, vector search, cloud deployment, and clean UX."
        />
        <motion.div className="space-y-4" {...staggerContainer(0.12)}>
          <motion.div className="glass-card overflow-hidden p-4 sm:p-5 md:p-6" {...staggerItem()}>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-brand-100/80">
                  Featured project
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </p>
              </div>
              {hasMultipleProjects ? (
                <div className="flex items-center gap-2">
                  <motion.button
                    className="theme-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-100"
                    type="button"
                    aria-label="Previous project"
                    onClick={goToPrevious}
                    whileHover={{ y: -2, scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft size={18} />
                  </motion.button>
                  <motion.button
                    className="theme-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-100"
                    type="button"
                    aria-label="Next project"
                    onClick={goToNext}
                    whileHover={{ y: -2, scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight size={18} />
                  </motion.button>
                </div>
              ) : null}
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeProject.name}
                  className="grid gap-5 p-5 lg:grid-cols-2 lg:p-6"
                  initial={{ opacity: 0, x: 42, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -42, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="space-y-3">
                    <div className="flex flex-col gap-2 min-[520px]:flex-row min-[520px]:items-start min-[520px]:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-white md:text-3xl">{activeProject.name}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {activeProject.description}
                        </p>
                      </div>
                      <span className="w-fit rounded-full border border-brand-300/20 bg-brand-400/10 px-3 py-1 text-xs text-brand-50">
                        {activeProject.category}
                      </span>
                    </div>
                    <div className="flex min-h-[8.5rem] items-center rounded-[24px] border border-brand-300/20 bg-brand-400/10 px-5 py-5 text-justify text-base leading-7 text-brand-50">
                      {activeProject.impact}
                    </div>
                    <div className="flex flex-col gap-3 pt-1 min-[480px]:flex-row min-[480px]:flex-wrap">
                      <motion.a
                        className="primary-button w-full min-[480px]:w-auto"
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        GitHub
                      </motion.a>
                      {activeProject.liveUrl ? (
                        <motion.a
                          className="secondary-button w-full min-[480px]:w-auto"
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ y: -3, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Live Demo
                        </motion.a>
                      ) : (
                        <span className="pill-tag">Live demo coming soon</span>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <strong className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        Technologies
                      </strong>
                      <ul className="flex flex-wrap gap-2">
                        {activeProject.techStack.slice(0, 7).map((tech) => (
                          <li key={tech} className="pill-tag">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <strong className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        Key Features
                      </strong>
                      <ul className="grid gap-2">
                        {activeProject.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm leading-6 text-slate-200"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </motion.div>

          {hasMultipleProjects ? (
            <motion.div className="section-switcher flex flex-wrap items-center justify-center gap-3" {...staggerItem(40)}>
              {projects.map((project, index) => (
                <motion.button
                  key={project.name}
                  className={`selector-pill rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                    index === activeIndex
                      ? 'is-active border-brand-300/45 bg-brand-400/14 shadow-[0_10px_30px_rgba(56,189,248,0.14)]'
                      : 'border-white/10 bg-white/5 hover:border-brand-300/28 hover:bg-brand-400/8'
                  }`}
                  type="button"
                  aria-label={`Show ${project.name}`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {project.name}
                </motion.button>
              ))}
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default ProjectsSection
