import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import AnimatedSection, { staggerContainer, staggerItem } from '../components/AnimatedSection'
import SectionSideNetwork from '../components/SectionSideNetwork'

function AchievementsSection({ achievements }) {
  return (
    <AnimatedSection id="achievements" className="section-shell section-divider section-tone-warm">
      <SectionSideNetwork variant="warm" />
      <div className="section-panel">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications and milestones"
          description="This block helps recruiters notice proof of effort, consistency, and excellence."
        />
        <motion.div className="glass-card p-6 md:p-8" {...staggerContainer(0.1)}>
        <ul className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement) => (
            <motion.li
              key={achievement.title}
              className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-5"
              whileHover={{ y: -6, borderColor: 'rgba(115,216,255,0.3)' }}
              {...staggerItem()}
            >
              <p className="text-xs uppercase tracking-[0.26em] text-brand-100/80">
                {achievement.issuer}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">{achievement.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">{achievement.note}</p>
            </motion.li>
          ))}
        </ul>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default AchievementsSection
