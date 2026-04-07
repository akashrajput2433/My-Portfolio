import { motion } from 'framer-motion'

const clusters = [
  {
    className: 'left-[-2%] top-[5%] w-[30rem] opacity-82',
    path: 'M40 60 L120 120 L210 90 L290 150 L380 110 L450 170',
    nodes: [
      { x: 40, y: 60, delay: 0.1 },
      { x: 120, y: 120, delay: 0.2 },
      { x: 210, y: 90, delay: 0.4 },
      { x: 290, y: 150, delay: 0.3 },
      { x: 380, y: 110, delay: 0.45 },
      { x: 450, y: 170, delay: 0.6 },
    ],
    duration: 16,
    drift: [-16, 12, -10],
  },
  {
    className: 'right-[-3%] top-[10%] w-[26rem] opacity-78',
    path: 'M50 180 L150 100 L230 150 L210 250 L110 270 L50 180',
    nodes: [
      { x: 50, y: 180, delay: 0.15 },
      { x: 150, y: 100, delay: 0.3 },
      { x: 230, y: 150, delay: 0.45 },
      { x: 210, y: 250, delay: 0.6 },
      { x: 110, y: 270, delay: 0.75 },
    ],
    duration: 18,
    drift: [12, -18, 10],
  },
  {
    className: 'left-[8%] top-[29%] w-[20rem] opacity-80',
    path: 'M40 170 L120 90 L170 120 L150 210 L40 170',
    nodes: [
      { x: 40, y: 170, delay: 0.1 },
      { x: 120, y: 90, delay: 0.25 },
      { x: 170, y: 120, delay: 0.4 },
      { x: 150, y: 210, delay: 0.6 },
    ],
    duration: 13,
    drift: [10, 16, 6],
  },
  {
    className: 'right-[2%] top-[33%] w-[27rem] opacity-75',
    path: 'M60 70 L150 130 L240 80 L300 160 L260 250 L140 280 L60 210',
    nodes: [
      { x: 60, y: 70, delay: 0.2 },
      { x: 150, y: 130, delay: 0.35 },
      { x: 240, y: 80, delay: 0.5 },
      { x: 300, y: 160, delay: 0.65 },
      { x: 260, y: 250, delay: 0.8 },
      { x: 140, y: 280, delay: 0.95 },
      { x: 60, y: 210, delay: 1.05 },
    ],
    duration: 19,
    drift: [-12, 14, -8],
  },
  {
    className: 'left-[-2%] bottom-[14%] w-[25rem] opacity-74',
    path: 'M30 210 L110 180 L170 220 L250 150 L320 200',
    nodes: [
      { x: 30, y: 210, delay: 0.1 },
      { x: 110, y: 180, delay: 0.3 },
      { x: 170, y: 220, delay: 0.5 },
      { x: 250, y: 150, delay: 0.7 },
      { x: 320, y: 200, delay: 0.9 },
    ],
    duration: 17,
    drift: [14, -10, 12],
  },
  {
    className: 'right-[-2%] bottom-[8%] w-[22rem] opacity-80',
    path: 'M70 60 L160 110 L140 210 L230 260 L320 220',
    nodes: [
      { x: 70, y: 60, delay: 0.2 },
      { x: 160, y: 110, delay: 0.35 },
      { x: 140, y: 210, delay: 0.55 },
      { x: 230, y: 260, delay: 0.75 },
      { x: 320, y: 220, delay: 0.95 },
    ],
    duration: 15,
    drift: [-10, 12, -14],
  },
  {
    className: 'left-[5%] top-[48%] w-[19rem] opacity-72',
    path: 'M40 120 L120 60 L210 100 L180 210 L80 240 L40 120',
    nodes: [
      { x: 40, y: 120, delay: 0.1 },
      { x: 120, y: 60, delay: 0.28 },
      { x: 210, y: 100, delay: 0.42 },
      { x: 180, y: 210, delay: 0.6 },
      { x: 80, y: 240, delay: 0.8 },
    ],
    duration: 14,
    drift: [8, -12, 10],
  },
  {
    className: 'left-[18%] top-[59%] w-[18rem] opacity-64',
    path: 'M40 170 L120 120 L200 190 L290 120 L360 180 L290 250 L170 250',
    nodes: [
      { x: 40, y: 170, delay: 0.12 },
      { x: 120, y: 120, delay: 0.24 },
      { x: 200, y: 190, delay: 0.36 },
      { x: 290, y: 120, delay: 0.48 },
      { x: 360, y: 180, delay: 0.62 },
      { x: 290, y: 250, delay: 0.76 },
      { x: 170, y: 250, delay: 0.9 },
    ],
    duration: 20,
    drift: [-8, 14, -6],
  },
  {
    className: 'right-[14%] top-[60%] w-[18rem] opacity-70',
    path: 'M50 80 L150 70 L220 130 L170 210 L80 190 L50 80',
    nodes: [
      { x: 50, y: 80, delay: 0.15 },
      { x: 150, y: 70, delay: 0.32 },
      { x: 220, y: 130, delay: 0.48 },
      { x: 170, y: 210, delay: 0.66 },
      { x: 80, y: 190, delay: 0.84 },
    ],
    duration: 13,
    drift: [10, -10, 8],
  },
  {
    className: 'left-[2%] bottom-[27%] w-[26rem] opacity-68',
    path: 'M40 230 L120 140 L180 200 L250 110 L330 170 L390 120',
    nodes: [
      { x: 40, y: 230, delay: 0.1 },
      { x: 120, y: 140, delay: 0.26 },
      { x: 180, y: 200, delay: 0.42 },
      { x: 250, y: 110, delay: 0.58 },
      { x: 330, y: 170, delay: 0.74 },
      { x: 390, y: 120, delay: 0.9 },
    ],
    duration: 18,
    drift: [12, -16, 10],
  },
  {
    className: 'right-[1%] bottom-[31%] w-[24rem] opacity-72',
    path: 'M50 100 L130 150 L210 110 L280 180 L230 260 L120 250 L50 100',
    nodes: [
      { x: 50, y: 100, delay: 0.14 },
      { x: 130, y: 150, delay: 0.28 },
      { x: 210, y: 110, delay: 0.44 },
      { x: 280, y: 180, delay: 0.58 },
      { x: 230, y: 260, delay: 0.72 },
      { x: 120, y: 250, delay: 0.88 },
    ],
    duration: 17,
    drift: [-14, 10, -12],
  },
  {
    className: 'left-[12%] bottom-[8%] w-[20rem] opacity-62',
    path: 'M40 140 L120 90 L170 150 L130 230 L60 210 L40 140',
    nodes: [
      { x: 40, y: 140, delay: 0.1 },
      { x: 120, y: 90, delay: 0.3 },
      { x: 170, y: 150, delay: 0.48 },
      { x: 130, y: 230, delay: 0.66 },
      { x: 60, y: 210, delay: 0.84 },
    ],
    duration: 12,
    drift: [6, -10, 8],
  },
  {
    className: 'right-[12%] bottom-[5%] w-[22rem] opacity-66',
    path: 'M60 210 L140 120 L210 160 L300 90 L360 140',
    nodes: [
      { x: 60, y: 210, delay: 0.1 },
      { x: 140, y: 120, delay: 0.26 },
      { x: 210, y: 160, delay: 0.42 },
      { x: 300, y: 90, delay: 0.58 },
      { x: 360, y: 140, delay: 0.74 },
    ],
    duration: 16,
    drift: [-10, 12, -8],
  },
  {
    className: 'left-[40%] top-[10%] w-[14rem] opacity-55',
    path: 'M40 180 L100 90 L180 110 L220 180 L160 250 L70 240 L40 180',
    nodes: [
      { x: 40, y: 180, delay: 0.1 },
      { x: 100, y: 90, delay: 0.22 },
      { x: 180, y: 110, delay: 0.34 },
      { x: 220, y: 180, delay: 0.46 },
      { x: 160, y: 250, delay: 0.58 },
      { x: 70, y: 240, delay: 0.7 },
    ],
    duration: 14,
    drift: [6, -8, 6],
  },
  {
    className: 'right-[38%] top-[22%] w-[16rem] opacity-58',
    path: 'M50 90 L120 60 L170 120 L130 180 L60 160 L50 90',
    nodes: [
      { x: 50, y: 90, delay: 0.15 },
      { x: 120, y: 60, delay: 0.27 },
      { x: 170, y: 120, delay: 0.39 },
      { x: 130, y: 180, delay: 0.51 },
      { x: 60, y: 160, delay: 0.63 },
    ],
    duration: 13,
    drift: [-5, 8, -4],
  },
  {
    className: 'left-[42%] bottom-[22%] w-[15rem] opacity-54',
    path: 'M40 110 L110 150 L180 95 L220 165 L170 230 L90 220',
    nodes: [
      { x: 40, y: 110, delay: 0.12 },
      { x: 110, y: 150, delay: 0.24 },
      { x: 180, y: 95, delay: 0.36 },
      { x: 220, y: 165, delay: 0.48 },
      { x: 170, y: 230, delay: 0.6 },
      { x: 90, y: 220, delay: 0.72 },
    ],
    duration: 15,
    drift: [7, -7, 5],
  },
  {
    className: 'right-[44%] bottom-[14%] w-[13rem] opacity-52',
    path: 'M50 170 L110 100 L170 145 L145 220 L80 230 L50 170',
    nodes: [
      { x: 50, y: 170, delay: 0.12 },
      { x: 110, y: 100, delay: 0.24 },
      { x: 170, y: 145, delay: 0.36 },
      { x: 145, y: 220, delay: 0.48 },
      { x: 80, y: 230, delay: 0.6 },
    ],
    duration: 12,
    drift: [-6, 6, -4],
  },
]

function NetworkCluster({ cluster, index }) {
  const gradientId = `network-line-${index}`
  const glowId = `network-glow-${index}`

  return (
    <motion.div
      className={`network-cluster absolute ${cluster.className}`}
      animate={{
        x: cluster.drift,
        y: [0, -10, 0],
      }}
      transition={{
        duration: cluster.duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 480 320" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(29, 78, 216, 0.16)" />
            <stop offset="50%" stopColor="rgba(37, 99, 235, 0.88)" />
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0.18)" />
          </linearGradient>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
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
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${glowId})`}
          initial={{ pathLength: 0.2, opacity: 0.35 }}
          animate={{ pathLength: [0.2, 1, 0.88], opacity: [0.35, 0.95, 0.5] }}
          transition={{ duration: cluster.duration * 0.75, repeat: Infinity, ease: 'easeInOut' }}
        />

        {cluster.nodes.map((node) => (
          <motion.circle
            key={`${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r="3.5"
            fill="#60a5fa"
            filter={`url(#${glowId})`}
            animate={{
              scale: [0.9, 1.35, 0.95],
              opacity: [0.45, 1, 0.55],
            }}
            transition={{
              duration: 2.8,
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

function NetworkBackground() {
  return (
    <div className="network-background absolute inset-0 overflow-hidden">
      <div className="network-visibility-zone network-visibility-zone-left" />
      <div className="network-visibility-zone network-visibility-zone-right" />
      <div className="network-visibility-zone network-visibility-zone-center-top" />
      <div className="network-visibility-zone network-visibility-zone-center-bottom" />
      {clusters.map((cluster, index) => (
        <NetworkCluster key={cluster.className} cluster={cluster} index={index} />
      ))}
    </div>
  )
}

export default NetworkBackground
