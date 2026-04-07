import { motion } from 'framer-motion'

const sideClusters = {
  left: [
    {
      className: 'top-[10%] left-[-3%] w-[16rem] opacity-90',
      path: 'M40 70 L120 130 L170 90 L210 170 L140 240 L60 210',
      nodes: [
        { x: 40, y: 70, delay: 0.1 },
        { x: 120, y: 130, delay: 0.25 },
        { x: 170, y: 90, delay: 0.4 },
        { x: 210, y: 170, delay: 0.55 },
        { x: 140, y: 240, delay: 0.7 },
        { x: 60, y: 210, delay: 0.85 },
      ],
      duration: 13,
      drift: [0, -10, 6],
    },
    {
      className: 'bottom-[8%] left-[2%] w-[18rem] opacity-80',
      path: 'M50 220 L110 150 L180 190 L250 120 L300 180',
      nodes: [
        { x: 50, y: 220, delay: 0.12 },
        { x: 110, y: 150, delay: 0.27 },
        { x: 180, y: 190, delay: 0.42 },
        { x: 250, y: 120, delay: 0.58 },
        { x: 300, y: 180, delay: 0.74 },
      ],
      duration: 15,
      drift: [0, 12, -6],
    },
  ],
  right: [
    {
      className: 'top-[14%] right-[-2%] w-[17rem] opacity-88',
      path: 'M60 90 L150 70 L220 130 L200 220 L100 250 L60 90',
      nodes: [
        { x: 60, y: 90, delay: 0.12 },
        { x: 150, y: 70, delay: 0.28 },
        { x: 220, y: 130, delay: 0.44 },
        { x: 200, y: 220, delay: 0.6 },
        { x: 100, y: 250, delay: 0.76 },
      ],
      duration: 14,
      drift: [0, -8, 5],
    },
    {
      className: 'bottom-[12%] right-[1%] w-[18rem] opacity-78',
      path: 'M40 130 L110 180 L180 120 L250 200 L320 160',
      nodes: [
        { x: 40, y: 130, delay: 0.15 },
        { x: 110, y: 180, delay: 0.3 },
        { x: 180, y: 120, delay: 0.45 },
        { x: 250, y: 200, delay: 0.6 },
        { x: 320, y: 160, delay: 0.75 },
      ],
      duration: 16,
      drift: [0, 10, -5],
    },
  ],
}

function SideCluster({ cluster, index, side }) {
  const gradientId = `about-side-line-${side}-${index}`
  const glowId = `about-side-glow-${side}-${index}`

  return (
    <motion.div
      className={`about-side-cluster absolute ${cluster.className}`}
      animate={{ y: cluster.drift }}
      transition={{ duration: cluster.duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 360 300" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(29, 78, 216, 0.18)" />
            <stop offset="50%" stopColor="rgba(37, 99, 235, 0.92)" />
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0.16)" />
          </linearGradient>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d={cluster.path}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${glowId})`}
          initial={{ pathLength: 0.15, opacity: 0.4 }}
          animate={{ pathLength: [0.15, 1, 0.82], opacity: [0.4, 1, 0.6] }}
          transition={{ duration: cluster.duration * 0.7, repeat: Infinity, ease: 'easeInOut' }}
        />

        {cluster.nodes.map((node) => (
          <motion.circle
            key={`${side}-${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r="3.6"
            fill="#60a5fa"
            filter={`url(#${glowId})`}
            animate={{ scale: [0.85, 1.4, 0.95], opacity: [0.45, 1, 0.6] }}
            transition={{
              duration: 2.6,
              delay: node.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </motion.div>
  )
}

function AboutSideNetwork() {
  return (
    <div className="about-side-network pointer-events-none absolute inset-0 hidden lg:block">
      <div className="about-side-mask about-side-mask-left" />
      <div className="about-side-mask about-side-mask-right" />
      {sideClusters.left.map((cluster, index) => (
        <SideCluster key={`left-${index}`} cluster={cluster} index={index} side="left" />
      ))}
      {sideClusters.right.map((cluster, index) => (
        <SideCluster key={`right-${index}`} cluster={cluster} index={index} side="right" />
      ))}
    </div>
  )
}

export default AboutSideNetwork
