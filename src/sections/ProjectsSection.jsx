import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import AnimatedSection, { staggerContainer, staggerItem } from '../components/AnimatedSection'
import SectionSideNetwork from '../components/SectionSideNetwork'

function ProjectsSection({ projects }) {
  return (
    <AnimatedSection id="projects" className="section-shell section-divider section-tone-cool">
      <SectionSideNetwork variant="cool" />
      <div className="section-panel">
        <SectionHeading
          eyebrow="Projects"
          title="Case-study style project showcase"
          description="Each project will become a standout card with strong visuals, tech stack, and action buttons."
        />
        <motion.div className="grid gap-5 xl:grid-cols-2" {...staggerContainer(0.12)}>
        {projects.map((project) => (
          <motion.article
            key={project.name}
            className="glass-card group flex h-full flex-col gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-300/30 hover:shadow-glow sm:p-6 md:gap-5"
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            style={{ transformStyle: 'preserve-3d' }}
            {...staggerItem()}
          >
            <div className="space-y-3">
              <div className="flex flex-col gap-2 min-[480px]:flex-row min-[480px]:items-start min-[480px]:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-brand-100/80">
                    Featured project
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-[1.35rem]">{project.name}</h3>
                </div>
                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {project.category}
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-300 sm:text-[0.95rem] sm:leading-7">
                {project.description}
              </p>
              <div className="rounded-[22px] border border-brand-300/15 bg-brand-400/10 px-4 py-3 text-sm leading-6 text-brand-50">
                {project.impact}
              </div>
            </div>
            <div className="space-y-2">
              <strong className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Technologies
              </strong>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 6).map((tech) => (
                  <li key={tech} className="pill-tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <strong className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Key Features
              </strong>
              <ul className="grid gap-2">
                {project.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm leading-6 text-slate-200"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex flex-col gap-3 pt-1 min-[480px]:flex-row min-[480px]:flex-wrap">
              <motion.a
                className="primary-button w-full min-[480px]:w-auto"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                GitHub
              </motion.a>
              {project.liveUrl ? (
                <motion.a
                  className="secondary-button w-full min-[480px]:w-auto"
                  href={project.liveUrl}
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
          </motion.article>
        ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default ProjectsSection
