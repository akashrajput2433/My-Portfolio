import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import AnimatedSection, { staggerContainer, staggerItem } from '../components/AnimatedSection'
import SectionSideNetwork from '../components/SectionSideNetwork'

function ContactSection({ contact }) {
  return (
    <AnimatedSection id="contact" className="section-shell section-divider section-tone-cool">
      <SectionSideNetwork variant="cool" />
      <div className="section-panel">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something"
          description="Reach out for roles, collaborations, or AI product discussions."
        />
        <motion.div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]" {...staggerContainer(0.12)}>
        <motion.article className="glass-card space-y-5 p-6 md:p-8" {...staggerItem()}>
          <h3 className="text-2xl font-semibold text-white">Contact Details</h3>
          <p className="leading-7 text-slate-300">
            Clear contact points help recruiters convert interest into interviews.
          </p>
          <div className="rounded-[24px] border border-brand-300/15 bg-brand-400/10 px-4 py-4">
            <p className="text-sm leading-7 text-brand-50">{contact.availability}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-brand-100/80">
              {contact.responseTime}
            </p>
          </div>
          <a
            className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-brand-300/40 hover:bg-brand-400/10"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <a
            className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-brand-300/40 hover:bg-brand-400/10"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-brand-300/40 hover:bg-brand-400/10"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </motion.article>
        <motion.form className="glass-card space-y-5 p-6 md:p-8" {...staggerItem(36)}>
          <label>
            <span className="mb-2 block text-sm text-slate-300">Name</span>
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-300/50"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </label>
          <label>
            <span className="mb-2 block text-sm text-slate-300">Email</span>
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-300/50"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </label>
          <label>
            <span className="mb-2 block text-sm text-slate-300">Message</span>
            <textarea
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-300/50"
              name="message"
              rows="5"
              placeholder="Write your message"
            />
          </label>
          <motion.button
            className="primary-button w-full sm:w-fit"
            type="button"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default ContactSection
