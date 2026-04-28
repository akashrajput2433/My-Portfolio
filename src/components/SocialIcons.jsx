function iconClassName(className = '') {
  return `shrink-0 ${className}`.trim()
}

export function GitHubIcon({ size = 16, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={iconClassName(className)}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.59 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.33 9.33 0 0 1 12 6.83c.85 0 1.7.12 2.5.36 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.24C22 6.59 17.52 2 12 2Z" />
    </svg>
  )
}

export function LinkedInIcon({ size = 16, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={iconClassName(className)}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.03-.78-1.84-1.91-1.84-1.13 0-1.91.81-1.91 1.84 0 1 .75 1.84 1.86 1.84h.02c1.15 0 1.94-.84 1.94-1.84ZM20.44 13.11c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.12-3.37 1.9V8.5H9.37c.04.95 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.91-1.38 1.35 0 1.89 1.04 1.89 2.56V20h3.38v-6.89Z" />
    </svg>
  )
}

export function LeetCodeIcon({ size = 16, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={iconClassName(className)}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
    >
      <path
        d="M15.58 5.17 19.9 9.5a1.75 1.75 0 0 1 0 2.47l-4.32 4.33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.18 18.72 9.6 18.7a1.74 1.74 0 0 1-1.23-.5l-4.3-4.27a1.75 1.75 0 0 1 0-2.48l4.3-4.26a1.73 1.73 0 0 1 1.23-.5h3.58"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.8 12h8.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function LiveDemoIcon({ size = 16, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={iconClassName(className)}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
    >
      <rect x="3" y="4.5" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.9" />
      <path d="M9.75 20h4.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="m11 9 4 2.5-4 2.5V9Z" fill="currentColor" />
    </svg>
  )
}
