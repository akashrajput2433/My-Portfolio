import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, Mail } from 'lucide-react'
import AnimatedSection, { staggerContainer, staggerItem } from '../components/AnimatedSection'
import SectionSideNetwork from '../components/SectionSideNetwork'

function ContactSection({ contact }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Website Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name || 'Not provided'}\nEmail: ${email || 'Not provided'}\n\nMessage:\n${message || 'Hello Akash,'}`
    )

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

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
        <motion.article className="glass-card min-w-0 space-y-5 p-5 md:p-8" {...staggerItem()}>
          <h3 className="text-2xl font-semibold text-white">Contact Details</h3>
          <p className="text-left leading-7 text-slate-300">
            Always open to meaningful conversations around AI, products, and high-impact opportunities.
          </p>
          <div className="rounded-[24px] border border-brand-300/15 bg-brand-400/10 px-4 py-4">
            <p className="text-left text-sm leading-7 text-brand-50">{contact.availability}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-brand-100/80 sm:tracking-[0.24em]">
              {contact.responseTime}
            </p>
          </div>
          <a
            className="group flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-brand-300/40 hover:bg-brand-400/10 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
            href={`mailto:${contact.email}`}
          >
            <span className="inline-flex min-w-0 items-center gap-3">
              <Mail size={16} className="text-brand-200" />
              <span className="break-all text-left">{contact.email}</span>
            </span>
            <span className="inline-flex items-center gap-1 pl-7 text-[0.72rem] uppercase tracking-[0.18em] text-brand-100/80 transition group-hover:text-brand-50 sm:pl-0">
              Email
              <ArrowUpRight size={14} />
            </span>
          </a>
          <a
            className="group flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-brand-300/40 hover:bg-brand-400/10 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="inline-flex min-w-0 items-center gap-3">
              <Globe size={16} className="text-brand-200" />
              <span>LinkedIn</span>
            </span>
            <span className="inline-flex items-center gap-1 pl-7 text-[0.72rem] uppercase tracking-[0.18em] text-brand-100/80 transition group-hover:text-brand-50 sm:pl-0">
              Visit
              <ArrowUpRight size={14} />
            </span>
          </a>
          <a
            className="group flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-brand-300/40 hover:bg-brand-400/10 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="inline-flex min-w-0 items-center gap-3">
              <Globe size={16} className="text-brand-200" />
              <span>GitHub</span>
            </span>
            <span className="inline-flex items-center gap-1 pl-7 text-[0.72rem] uppercase tracking-[0.18em] text-brand-100/80 transition group-hover:text-brand-50 sm:pl-0">
              Visit
              <ArrowUpRight size={14} />
            </span>
          </a>
        </motion.article>
        <motion.form className="glass-card min-w-0 space-y-5 p-5 md:p-8" onSubmit={handleSubmit} {...staggerItem(36)}>
          <label>
            <span className="mb-2 block text-sm text-slate-300">Name</span>
            <input
              className="theme-input w-full rounded-2xl px-4 py-3 outline-none transition focus:border-brand-300/50"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </label>
          <label>
            <span className="mb-2 block text-sm text-slate-300">Email</span>
            <input
              className="theme-input w-full rounded-2xl px-4 py-3 outline-none transition focus:border-brand-300/50"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </label>
          <label>
            <span className="mb-2 block text-sm text-slate-300">Message</span>
            <textarea
              className="theme-input w-full rounded-2xl px-4 py-3 outline-none transition focus:border-brand-300/50"
              name="message"
              rows="5"
              placeholder="Write your message"
            />
          </label>
          <motion.button
            className="primary-button w-full sm:w-fit"
            type="submit"
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
