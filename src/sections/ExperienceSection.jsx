import SectionHeading from '../components/SectionHeading'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, Building2, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import AnimatedSection, { staggerContainer, staggerItem } from '../components/AnimatedSection'
import SectionSideNetwork from '../components/SectionSideNetwork'

function ExperienceSection({ experience }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeExperience = experience[activeIndex] ?? experience[0]
  const hasMultipleItems = experience.length > 1

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? experience.length - 1 : currentIndex - 1))
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex === experience.length - 1 ? 0 : currentIndex + 1))
  }

  return (
    <AnimatedSection id="experience" className="section-shell section-divider section-tone-warm">
      <SectionSideNetwork variant="warm" />
      <div className="section-panel">
        <SectionHeading
          eyebrow="Experience"
          title="Professional journey"
          description="Roles, responsibilities, and practical impact from real work."
        />
        <motion.div className="space-y-4" {...staggerContainer(0.14)}>
          <motion.div className="glass-card overflow-hidden p-4 sm:p-5 md:p-6" {...staggerItem()}>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-300/20 bg-brand-400/10 text-brand-50">
                  <BriefcaseBusiness size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.28em] text-brand-100/80">Latest experience first</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(experience.length).padStart(2, '0')}
                  </p>
                </div>
              </div>
              {hasMultipleItems ? (
                <div className="flex items-center gap-2">
                  <motion.button
                    className="theme-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-100"
                    type="button"
                    aria-label="Previous experience"
                    onClick={goToPrevious}
                    whileHover={{ y: -2, scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft size={18} />
                  </motion.button>
                  <motion.button
                    className="theme-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-100"
                    type="button"
                    aria-label="Next experience"
                    onClick={goToNext}
                    whileHover={{ y: -2, scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight size={18} />
                  </motion.button>
                </div>
              ) : null}
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="pointer-events-none absolute inset-y-8 left-[2.35rem] hidden w-px bg-gradient-to-b from-brand-300/0 via-brand-300/50 to-brand-300/0 lg:block" />
              <AnimatePresence mode="wait">
                <motion.article
                  key={`${activeExperience.role}-${activeExperience.company}`}
                  className="grid min-w-0 gap-5 lg:grid-cols-[0.44fr_0.56fr]"
                  initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -26, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative min-w-0 space-y-4 lg:pl-10">
                    <div className="hidden lg:absolute lg:left-0 lg:top-1 flex h-8 w-8 items-center justify-center rounded-full border border-brand-300/30 bg-brand-400/15 text-brand-50">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
                    </div>
                    <div className="rounded-[26px] border border-brand-300/20 bg-gradient-to-br from-brand-400/12 to-transparent p-5">
                      <p className="text-xs uppercase tracking-[0.26em] text-brand-100/80">Current role focus</p>
                      <h3 className="mt-3 break-words text-xl font-semibold text-white sm:text-2xl">{activeExperience.role}</h3>
                      <div className="mt-4 grid gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                          {activeExperience.companyUrl ? (
                            <a
                              className="group grid w-full min-w-0 grid-cols-1 gap-2 overflow-hidden rounded-xl border border-brand-300/15 bg-brand-400/10 px-3 py-2 text-sm text-slate-100 transition hover:border-brand-300/35 hover:bg-brand-400/15 hover:text-brand-50 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                              href={activeExperience.companyUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                                <Building2 size={16} className="shrink-0 text-brand-200" />
                                <span className="min-w-0 break-words leading-6">{activeExperience.company}</span>
                              </span>
                              <span className="inline-flex w-fit items-center gap-1 justify-self-start pl-7 text-[0.72rem] uppercase tracking-[0.18em] text-brand-100/80 transition group-hover:text-brand-50 sm:justify-self-end sm:pl-0">
                                Visit
                                <ArrowUpRight size={14} />
                              </span>
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-3 text-sm text-slate-200">
                              <Building2 size={16} className="text-brand-200" />
                              <span>{activeExperience.company}</span>
                            </span>
                          )}
                        </div>
                        <div className="flex min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:items-center">
                          <CalendarDays size={16} className="text-brand-200" />
                          <span className="break-words text-sm leading-6 text-slate-200">{activeExperience.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-2.5">
                      {(activeExperience.highlights ?? [activeExperience.summary]).slice(0, 3).map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-[22px] border border-brand-300/20 bg-gradient-to-r from-brand-400/12 to-transparent px-4 py-3 text-sm leading-7 text-brand-50 shadow-[0_12px_34px_rgba(56,189,248,0.08)]"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid min-w-0 gap-4">
                    <div className="space-y-2">
                      <strong className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        Responsibilities
                      </strong>
                      <ul className="grid gap-2.5">
                        {activeExperience.responsibilities.map((responsibility) => (
                          <li
                            key={responsibility}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-200"
                          >
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <strong className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        Achievements
                      </strong>
                      <div className="grid gap-2.5 md:grid-cols-2">
                        {activeExperience.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="dark-surface-soft rounded-2xl px-4 py-3 text-justify text-sm leading-7 text-slate-200"
                          >
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </motion.div>

          {hasMultipleItems ? (
            <motion.div className="section-switcher flex flex-wrap items-center justify-center gap-3" {...staggerItem(40)}>
              {experience.map((item, index) => (
                <motion.button
                  key={`${item.role}-${item.company}`}
                  className={`selector-pill rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                    index === activeIndex
                      ? 'is-active border-brand-300/40 bg-brand-400/12'
                      : 'border-white/10 bg-white/5 hover:border-brand-300/25'
                  }`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {item.role}
                </motion.button>
              ))}
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default ExperienceSection
