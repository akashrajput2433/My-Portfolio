import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import AnimatedSection, { staggerContainer, staggerItem } from '../components/AnimatedSection'
import SectionSideNetwork from '../components/SectionSideNetwork'

function EducationSection({ education }) {
  return (
    <AnimatedSection id="education" className="section-shell section-divider section-tone-cool">
      <SectionSideNetwork variant="cool" />
      <div className="section-panel">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="A clean degree and institution section with room for highlights."
        />
        <motion.div className="grid gap-6 md:grid-cols-2" {...staggerContainer(0.1)}>
        {education.map((item) => (
          <motion.article
            key={`${item.degree}-${item.institution}`}
            className="glass-card space-y-4 p-6 md:p-8"
            whileHover={{ y: -8, borderColor: 'rgba(115,216,255,0.3)' }}
            {...staggerItem()}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-brand-100/80">Degree</p>
            <h3 className="text-2xl font-semibold text-white">{item.degree}</h3>
            <p className="text-base text-slate-300">{item.institution}</p>
            <p className="text-sm text-slate-400">{item.year}</p>
            <div className="grid gap-3 pt-2">
              {item.details.map((detail) => (
                <div
                  key={detail}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-200"
                >
                  {detail}
                </div>
              ))}
            </div>
          </motion.article>
        ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default EducationSection
