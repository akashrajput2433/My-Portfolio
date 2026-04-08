import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

function HeroSection({ hero }) {
  const [typedRole, setTypedRole] = useState('')

  useEffect(() => {
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setTypedRole(hero.role.slice(0, index))

      if (index >= hero.role.length) {
        window.clearInterval(timer)
      }
    }, 80)

    return () => window.clearInterval(timer)
  }, [hero.role])

  return (
    <section id="home" className="section-shell pb-8 pt-10 md:pt-14">
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div
          className="space-y-6 md:space-y-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
            }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400 shadow-[0_0_20px_rgba(46,196,255,0.8)]" />
            <span className="truncate">Available for Artificial Intelligence / Data Scientist opportunities</span>
          </motion.div>

          <motion.div
            className="space-y-5"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
            }}
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.34em] text-brand-100/90">
              <Sparkles size={16} className="text-brand-300" />
              AI/ML Engineer Portfolio
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-none tracking-[-0.05em] text-white min-[480px]:text-5xl sm:text-6xl lg:text-7xl">
              {hero.name}
            </h1>
            <h2 className="typing-cursor min-h-[2.25rem] text-xl font-medium tracking-tight text-slate-200 min-[480px]:text-2xl md:min-h-[3rem] md:text-3xl">
              {typedRole}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300 min-[480px]:text-lg md:text-xl">
              {hero.tagline}
            </p>
            <p className="max-w-2xl text-sm leading-7 text-slate-400 min-[480px]:text-base min-[480px]:leading-8">
              {hero.summary}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap md:gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
            }}
          >
            <motion.a
              className="primary-button w-full gap-2 min-[480px]:w-auto"
              href={hero.primaryCta.href}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {hero.primaryCta.label}
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              className="secondary-button w-full min-[480px]:w-auto"
              href={hero.secondaryCta.href}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {hero.secondaryCta.label}
            </motion.a>
          </motion.div>

          <motion.div
            className="grid gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
            }}
          >
            {hero.stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur sm:px-5"
                whileHover={{ y: -6, borderColor: 'rgba(115,216,255,0.35)' }}
              >
                <p className="text-xl font-semibold text-white min-[480px]:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-slate-400 min-[480px]:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="glass-card relative overflow-hidden p-5 sm:p-8"
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 via-transparent to-accent-400/20" />
          <motion.div
            className="relative space-y-6"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex flex-col gap-4 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-100/80">
                  Premium Portfolio
                </p>
                <p className="mt-2 text-xl font-semibold text-white min-[480px]:text-2xl">
                  AI systems aesthetic
                </p>
              </div>
              <div className="dark-surface w-full rounded-2xl px-4 py-3 text-left backdrop-blur min-[480px]:w-auto min-[480px]:text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Focus</p>
                <p className="mt-1 text-sm font-medium text-white">AI/ML + Product Thinking</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="dark-surface-soft rounded-[24px] p-5">
                <p className="text-sm text-slate-400">Design language</p>
                <p className="mt-3 text-lg font-semibold text-white">Neural glass + depth layers</p>
              </div>
              <div className="dark-surface-soft rounded-[24px] p-5">
                <p className="text-sm text-slate-400">Role direction</p>
                <p className="mt-3 text-lg font-semibold text-white">Machine learning engineer vibe</p>
              </div>
            </div>

            <div className="dark-surface rounded-[28px] p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Model pipeline
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-brand-100/80">
                  inference stack
                </p>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
                  <span className="text-sm text-slate-200">Data preprocessing</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
                  <span className="text-sm text-slate-200">Representation learning</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-300" />
                  <span className="text-sm text-slate-200">Inference + product delivery</span>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Activation map
                </p>
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 18 }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-8 rounded-xl ${
                        index % 5 === 0
                          ? 'bg-brand-400/70'
                          : index % 4 === 0
                            ? 'bg-accent-300/60'
                            : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Confidence curve
                </p>
                <div className="space-y-3">
                  <motion.div
                    className="h-3 w-3/4 rounded-full bg-gradient-to-r from-brand-200 to-brand-500"
                    initial={{ scaleX: 0.4, transformOrigin: 'left' }}
                    animate={{ scaleX: [0.4, 1, 0.72] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="h-3 w-full rounded-full bg-white/10" />
                  <div className="h-3 w-2/3 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
