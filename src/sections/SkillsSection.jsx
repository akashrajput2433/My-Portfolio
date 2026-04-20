import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import AnimatedSection, { staggerContainer, staggerItem } from '../components/AnimatedSection'
import SectionSideNetwork from '../components/SectionSideNetwork'

function SkillsSection({ skills }) {
  return (
    <AnimatedSection id="skills" className="section-shell section-divider section-tone-warm">
      <SectionSideNetwork variant="warm" />
      <div className="section-panel">
        <SectionHeading
          eyebrow="Skills"
          title="Core technical strengths"
          description="A focused mix of AI, backend, frontend, data, and developer tools."
        />
        <motion.div className="grid gap-6 md:grid-cols-2" {...staggerContainer(0.1)}>
        {skills.map((skillGroup) => (
          <motion.article
            key={skillGroup.category}
            className="glass-card min-w-0 p-5 md:p-8"
            whileHover={{ y: -8, borderColor: 'rgba(115,216,255,0.3)' }}
            {...staggerItem()}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
              <span className="rounded-full bg-brand-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-100">
                {skillGroup.level}
              </span>
            </div>
            <p className="mb-6 text-sm leading-7 text-slate-300">{skillGroup.summary}</p>
            <ul className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="pill-tag">
                  {skill}
                </li>
              ))}
            </ul>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r from-brand-300 to-brand-500 ${
                  skillGroup.level === 'Advanced'
                    ? 'w-[88%]'
                    : skillGroup.level === 'Intermediate'
                      ? 'w-[72%]'
                      : 'w-[80%]'
                }`}
                initial={{ scaleX: 0, transformOrigin: 'left' }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.article>
        ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default SkillsSection
