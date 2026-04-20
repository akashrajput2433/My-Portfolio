import SectionHeading from '../components/SectionHeading'
import AnimatedSection, { staggerContainer, staggerItem } from '../components/AnimatedSection'
import { motion } from 'framer-motion'
import SectionSideNetwork from '../components/SectionSideNetwork'

function AboutSection({ about }) {
  return (
    <AnimatedSection id="about" className="section-shell section-divider section-tone-cool">
      <SectionSideNetwork variant="cool" />
      <div className="section-panel">
        <SectionHeading
          eyebrow="About Me"
          title="Building intelligent, Useful products"
          description="A quick snapshot of my background, goals, and engineering mindset."
        />
        <motion.div
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
          {...staggerContainer()}
        >
          <motion.div className="glass-card min-w-0 space-y-5 p-5 md:p-8" {...staggerItem()}>
          <p className="text-lg leading-8 text-slate-200">{about.intro}</p>
          <p className="text-left leading-8 text-slate-300">{about.background}</p>
          <p className="text-left leading-8 text-slate-400">{about.objective}</p>
          <div className="grid gap-3 pt-3">
            {about.highlights.map((highlight) => (
              <motion.div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-200"
                whileHover={{ x: 6, borderColor: 'rgba(115,216,255,0.35)' }}
              >
                {highlight}
              </motion.div>
            ))}
          </div>
          </motion.div>
          <motion.div className="glass-card grid min-w-0 gap-4 p-5 md:p-8" {...staggerItem(40)}>
          {about.quickFacts.map((fact) => (
            <motion.div
              key={fact.label}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5"
              whileHover={{ y: -4, borderColor: 'rgba(115,216,255,0.35)' }}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{fact.label}</p>
              <p className="mt-3 text-base leading-7 text-slate-200">{fact.value}</p>
            </motion.div>
          ))}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default AboutSection
