import SectionHeading from '../components/SectionHeading'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Award, ChevronLeft, ChevronRight, Medal } from 'lucide-react'
import { useState } from 'react'
import AnimatedSection, { staggerContainer, staggerItem } from '../components/AnimatedSection'
import SectionSideNetwork from '../components/SectionSideNetwork'

function AchievementsSection({ certifications, achievements }) {
  const [activeCertificationIndex, setActiveCertificationIndex] = useState(0)
  const activeCertification = certifications[activeCertificationIndex] ?? certifications[0]
  const hasMultipleCertifications = certifications.length > 1

  const goToPreviousCertification = () => {
    setActiveCertificationIndex((currentIndex) => (
      currentIndex === 0 ? certifications.length - 1 : currentIndex - 1
    ))
  }

  const goToNextCertification = () => {
    setActiveCertificationIndex((currentIndex) => (
      currentIndex === certifications.length - 1 ? 0 : currentIndex + 1
    ))
  }

  return (
    <AnimatedSection id="achievements" className="section-shell section-divider section-tone-warm">
      <SectionSideNetwork variant="warm" />
      <div className="section-panel">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications & Milestones"
          description="Proof of learning, consistency, and growth."
        />
        <motion.div className="grid gap-6 lg:grid-cols-2" {...staggerContainer(0.1)}>
          <motion.article className="glass-card flex h-full flex-col p-6 md:p-8" {...staggerItem()}>
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-300/20 bg-brand-400/10 text-brand-50">
                  <Award size={19} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-brand-100/80">Certifications</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {String(activeCertificationIndex + 1).padStart(2, '0')} / {String(certifications.length).padStart(2, '0')}
                  </p>
                </div>
              </div>
              {hasMultipleCertifications ? (
                <div className="flex items-center gap-2">
                  <motion.button
                    className="theme-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-100"
                    type="button"
                    aria-label="Previous certification"
                    onClick={goToPreviousCertification}
                    whileHover={{ y: -2, scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft size={18} />
                  </motion.button>
                  <motion.button
                    className="theme-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-100"
                    type="button"
                    aria-label="Next certification"
                    onClick={goToNextCertification}
                    whileHover={{ y: -2, scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight size={18} />
                  </motion.button>
                </div>
              ) : null}
            </div>

            <div className="flex-1 rounded-[26px] border border-white/10 bg-white/5 p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCertification.title}
                  className="flex h-full min-h-[18rem] flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 px-5 py-5"
                  initial={{ opacity: 0, x: 34, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -34, filter: 'blur(8px)' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-brand-100/80">
                      {activeCertification.issuer}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{activeCertification.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-200">{activeCertification.note}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <a
                      className="theme-glass inline-flex items-center gap-2 rounded-full border border-brand-300/20 bg-brand-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-50 transition hover:-translate-y-0.5 hover:border-brand-200/35 hover:bg-brand-400/14"
                      href={activeCertification.link || '#'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${activeCertification.title} certificate`}
                    >
                      Visit
                      <ArrowUpRight size={14} />
                    </a>
                    <div className="flex flex-wrap items-center gap-2">
                      {certifications.map((item, index) => (
                        <motion.button
                          key={item.title}
                          className={`selector-pill rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                            index === activeCertificationIndex
                              ? 'is-active border-brand-300/40 bg-brand-400/12'
                              : 'border-white/10 bg-white/5 hover:border-brand-300/25'
                          }`}
                          type="button"
                          onClick={() => setActiveCertificationIndex(index)}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.article>

          <motion.article className="glass-card flex h-full flex-col p-6 md:p-8" {...staggerItem(30)}>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-300/20 bg-brand-400/10 text-brand-50">
                <Medal size={19} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-brand-100/80">Achievements</p>
                <p className="mt-1 text-sm text-slate-400">Current highlights and recognitions</p>
              </div>
            </div>

            <div className="flex-1 rounded-[26px] border border-white/10 bg-white/5 p-5">
              <div className="grid h-full gap-4">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.title}
                    className="flex h-full min-h-[18rem] flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 px-5 py-5"
                    whileHover={{ y: -6, borderColor: 'rgba(115,216,255,0.3)' }}
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-brand-100/80">
                        {achievement.issuer}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-white">{achievement.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-200">{achievement.note}</p>
                    </div>
                    <div className="mt-5 inline-flex w-fit rounded-full border border-brand-300/20 bg-brand-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-50">
                      Achievement
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default AchievementsSection
