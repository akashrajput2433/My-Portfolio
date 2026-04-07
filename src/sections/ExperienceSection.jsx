import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import AnimatedSection, { staggerContainer, staggerItem } from '../components/AnimatedSection'
import SectionSideNetwork from '../components/SectionSideNetwork'

function ExperienceSection({ experience }) {
  return (
    <AnimatedSection id="experience" className="section-shell section-divider section-tone-warm">
      <SectionSideNetwork variant="warm" />
      <div className="section-panel">
        <SectionHeading
          eyebrow="Experience"
          title="Professional journey"
          description="Roles, responsibilities, and practical impact from real work."
        />
        <motion.div className="space-y-6" {...staggerContainer(0.14)}>
        {experience.map((item) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            className="glass-card grid gap-5 p-6 md:grid-cols-[0.4fr_1fr] md:p-8"
            whileHover={{ y: -8, borderColor: 'rgba(115,216,255,0.3)' }}
            {...staggerItem()}
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-100/80">Role</p>
              <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
              <p className="text-base text-slate-300">{item.company}</p>
              <p className="text-sm text-slate-400">{item.duration}</p>
            </div>
            <div className="space-y-5">
              <p className="rounded-2xl border border-brand-300/15 bg-brand-400/10 px-4 py-4 text-sm leading-7 text-brand-50">
                {item.summary}
              </p>
              <ul className="grid gap-3">
                {item.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-200"
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
              <div className="grid gap-3 md:grid-cols-2">
                {item.achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="dark-surface-soft rounded-2xl px-4 py-3 text-sm text-slate-200"
                  >
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default ExperienceSection
