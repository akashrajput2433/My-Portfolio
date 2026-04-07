import { motion } from 'framer-motion'

const clusterPresets = {
  cool: {
    left: [
      { className: 'top-[6%] left-[-8%] w-[15rem] opacity-88', path: 'M42 74 L118 126 L176 88 L210 166 L146 236 L62 204', nodes: [{ x: 42, y: 74, delay: 0.1 }, { x: 118, y: 126, delay: 0.24 }, { x: 176, y: 88, delay: 0.38 }, { x: 210, y: 166, delay: 0.52 }, { x: 146, y: 236, delay: 0.66 }, { x: 62, y: 204, delay: 0.8 }], duration: 13, drift: [0, -10, 6] },
      { className: 'bottom-[24%] left-[-6%] w-[17rem] opacity-74', path: 'M48 224 L110 148 L184 188 L252 120 L302 180', nodes: [{ x: 48, y: 224, delay: 0.12 }, { x: 110, y: 148, delay: 0.26 }, { x: 184, y: 188, delay: 0.4 }, { x: 252, y: 120, delay: 0.54 }, { x: 302, y: 180, delay: 0.68 }], duration: 15, drift: [0, 10, -6] },
    ],
    right: [
      { className: 'top-[8%] right-[-8%] w-[16rem] opacity-88', path: 'M58 92 L148 68 L216 130 L198 222 L100 248 L58 92', nodes: [{ x: 58, y: 92, delay: 0.12 }, { x: 148, y: 68, delay: 0.26 }, { x: 216, y: 130, delay: 0.4 }, { x: 198, y: 222, delay: 0.54 }, { x: 100, y: 248, delay: 0.68 }], duration: 14, drift: [0, -8, 5] },
      { className: 'bottom-[22%] right-[-6%] w-[17rem] opacity-74', path: 'M46 104 L126 148 L208 104 L276 176 L228 256 L114 244 L46 104', nodes: [{ x: 46, y: 104, delay: 0.12 }, { x: 126, y: 148, delay: 0.26 }, { x: 208, y: 104, delay: 0.4 }, { x: 276, y: 176, delay: 0.54 }, { x: 228, y: 256, delay: 0.68 }, { x: 114, y: 244, delay: 0.82 }], duration: 16, drift: [0, 10, -6] },
    ],
  },
  warm: {
    left: [
      { className: 'top-[7%] left-[-8%] w-[15rem] opacity-84', path: 'M40 94 L116 72 L180 134 L156 214 L72 236 L40 94', nodes: [{ x: 40, y: 94, delay: 0.1 }, { x: 116, y: 72, delay: 0.24 }, { x: 180, y: 134, delay: 0.38 }, { x: 156, y: 214, delay: 0.52 }, { x: 72, y: 236, delay: 0.66 }], duration: 13, drift: [0, -9, 5] },
      { className: 'bottom-[23%] left-[-6%] w-[17rem] opacity-72', path: 'M44 214 L108 154 L184 194 L250 138 L304 194', nodes: [{ x: 44, y: 214, delay: 0.12 }, { x: 108, y: 154, delay: 0.26 }, { x: 184, y: 194, delay: 0.4 }, { x: 250, y: 138, delay: 0.54 }, { x: 304, y: 194, delay: 0.68 }], duration: 15, drift: [0, 9, -5] },
    ],
    right: [
      { className: 'top-[8%] right-[-8%] w-[15rem] opacity-84', path: 'M54 96 L140 76 L210 136 L184 218 L96 246 L54 96', nodes: [{ x: 54, y: 96, delay: 0.1 }, { x: 140, y: 76, delay: 0.24 }, { x: 210, y: 136, delay: 0.38 }, { x: 184, y: 218, delay: 0.52 }, { x: 96, y: 246, delay: 0.66 }], duration: 14, drift: [0, -8, 5] },
      { className: 'bottom-[22%] right-[-6%] w-[17rem] opacity-72', path: 'M44 106 L122 148 L206 108 L274 178 L230 254 L118 240 L44 106', nodes: [{ x: 44, y: 106, delay: 0.12 }, { x: 122, y: 148, delay: 0.26 }, { x: 206, y: 108, delay: 0.4 }, { x: 274, y: 178, delay: 0.54 }, { x: 230, y: 254, delay: 0.68 }, { x: 118, y: 240, delay: 0.82 }], duration: 16, drift: [0, 9, -5] },
    ],
  },
}

function SideCluster({ cluster, index, side, variant }) {
  const gradientId = `section-side-line-${variant}-${side}-${index}`
  const glowId = `section-side-glow-${variant}-${side}-${index}`

  return (
    <motion.div className={`section-side-cluster absolute ${cluster.className}`} animate={{ y: cluster.drift }} transition={{ duration: cluster.duration, repeat: Infinity, ease: 'easeInOut' }}>
      <svg viewBox="0 0 360 300" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(29, 78, 216, 0.18)" />
            <stop offset="50%" stopColor="rgba(37, 99, 235, 0.92)" />
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0.16)" />
          </linearGradient>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <motion.path d={cluster.path} fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" filter={`url(#${glowId})`} initial={{ pathLength: 0.15, opacity: 0.4 }} animate={{ pathLength: [0.15, 1, 0.82], opacity: [0.4, 1, 0.6] }} transition={{ duration: cluster.duration * 0.7, repeat: Infinity, ease: 'easeInOut' }} />
        {cluster.nodes.map((node) => (
          <motion.circle key={`${variant}-${side}-${node.x}-${node.y}`} cx={node.x} cy={node.y} r="3.6" fill="#60a5fa" filter={`url(#${glowId})`} animate={{ scale: [0.85, 1.4, 0.95], opacity: [0.45, 1, 0.6] }} transition={{ duration: 2.6, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }} />
        ))}
      </svg>
    </motion.div>
  )
}

function SectionSideNetwork({ variant = 'cool' }) {
  const clusters = clusterPresets[variant] || clusterPresets.cool

  return (
    <div className="section-side-network pointer-events-none absolute inset-0 hidden lg:block">
      <div className="section-side-mask section-side-mask-left" />
      <div className="section-side-mask section-side-mask-right" />
      {clusters.left.map((cluster, index) => (
        <SideCluster key={`${variant}-left-${index}`} cluster={cluster} index={index} side="left" variant={variant} />
      ))}
      {clusters.right.map((cluster, index) => (
        <SideCluster key={`${variant}-right-${index}`} cluster={cluster} index={index} side="right" variant={variant} />
      ))}
    </div>
  )
}

export default SectionSideNetwork
