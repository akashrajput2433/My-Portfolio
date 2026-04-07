import { motion } from 'framer-motion'

const viewport = { once: true, amount: 0.25 }

export function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }
}

export function staggerContainer(delayChildren = 0.08) {
  return {
    initial: 'hidden',
    whileInView: 'show',
    viewport,
    variants: {
      hidden: {},
      show: {
        transition: {
          staggerChildren: delayChildren,
        },
      },
    },
  }
}

export function staggerItem(y = 24) {
  return {
    variants: {
      hidden: { opacity: 0, y },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      },
    },
  }
}

function AnimatedSection({ as: Component = motion.section, children, ...props }) {
  return <Component {...props}>{children}</Component>
}

export default AnimatedSection
