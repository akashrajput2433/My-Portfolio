import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import { Building2, CalendarDays } from 'lucide-react'
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
          description="My degree, institution, and learning foundation."
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
            <div className="space-y-3">
              <div className="inline-flex w-full items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-brand-300/20 bg-brand-400/10 text-brand-100">
                  <Building2 size={17} />
                </span>
                <span className="min-w-0 text-base leading-7 text-slate-300">{item.institution}</span>
              </div>
              <div className="inline-flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-brand-300/20 bg-brand-400/10 text-brand-100">
                  <CalendarDays size={17} />
                </span>
                <span className="text-sm text-slate-300">{item.year}</span>
              </div>
            </div>
            <div className="grid gap-3 pt-2">
              {item.details.map((detail) => (
                <div
                  key={detail}
                  className={
                    detail.startsWith('CGPA')
                      ? 'rounded-2xl border border-brand-300/35 bg-brand-400/15 px-5 py-4 text-lg font-semibold leading-7 text-brand-50 shadow-glow'
                      : 'rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-200'
                  }
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
