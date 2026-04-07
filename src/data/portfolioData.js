export const portfolioData = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    name: 'Your Name',
    role: 'Software Developer',
    tagline:
      'I build polished digital experiences that feel premium, fast, and recruiter-ready.',
    summary:
      'This portfolio will be fully personalized with your projects, achievements, and career story in the next steps.',
    stats: [
      { label: 'Projects Designed', value: '06+' },
      { label: 'Core Tech Stack', value: '10+' },
      { label: 'Focus', value: 'Frontend UX' },
    ],
    primaryCta: { label: 'View Projects', href: '#projects' },
    secondaryCta: { label: 'Contact Me', href: '#contact' },
  },
  about: {
    intro:
      'I am a developer focused on creating clean, modern, and scalable web applications.',
    background:
      'My background section will highlight your journey, strengths, and technical identity in a concise, high-impact way.',
    objective:
      'My goal is to contribute to impactful products, keep growing as an engineer, and solve real-world problems with thoughtful software.',
    highlights: [
      'Frontend-first mindset with strong attention to visual polish and usability.',
      'Comfortable translating raw ideas into structured, production-ready UI.',
      'Interested in modern web products, developer tooling, and user-centric experiences.',
    ],
    quickFacts: [
      { label: 'Location', value: 'India' },
      { label: 'Preferred Role', value: 'Software Developer' },
      { label: 'Work Style', value: 'Clean, scalable, collaborative' },
    ],
  },
  skills: [
    {
      category: 'Frontend',
      level: 'Advanced',
      summary: 'Creating responsive interfaces with strong visual hierarchy and polished interactions.',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      level: 'Intermediate',
      summary: 'Building APIs and application logic that support smooth frontend experiences.',
      items: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      category: 'Database',
      level: 'Intermediate',
      summary: 'Managing application data with simple, practical, and maintainable data models.',
      items: ['MongoDB', 'MySQL'],
    },
    {
      category: 'Tools',
      level: 'Daily Workflow',
      summary: 'Using tools that improve development speed, collaboration, and debugging quality.',
      items: ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
  ],
  projects: [
    {
      name: 'Whisper Doc',
      category: 'RAG AI Chatbot',
      description:
        'A production-ready, cloud-hosted RAG chatbot that lets users upload documents and ask intelligent questions with source-grounded answers.',
      techStack: [
        'Flask',
        'Groq API',
        'Llama 3.3 70B',
        'Cohere Embeddings',
        'Qdrant Cloud',
        'PyPDF2',
        'python-docx',
        'Render',
      ],
      features: [
        'Upload and chat with PDF, DOCX, TXT, and Markdown documents.',
        'Supports dual chat modes for document Q&A and general AI conversations.',
        'Uses semantic retrieval with chunk overlap for stronger context matching.',
        'Provides source citations and anti-hallucination prompting for trustworthy answers.',
        'Runs on a responsive cloud-hosted interface with live access 24/7.',
      ],
      impact:
        'Built and deployed a real-world RAG system end-to-end, combining retrieval, vector search, LLM inference, and cloud deployment into a usable public product.',
      githubUrl: 'https://github.com/akashrajput2433/WHISPER-DOC',
      liveUrl: 'https://whisper-doc.onrender.com/',
    },
    {
      name: 'Project Two',
      category: 'Frontend',
      description:
        'A second project card to showcase variety, design quality, and engineering depth.',
      techStack: ['JavaScript', 'API Integration', 'CSS'],
      features: ['Interactive UX', 'Reusable components', 'Optimized layout'],
      impact: 'Designed to highlight interface clarity, component thinking, and user-friendly interaction.',
      githubUrl: 'https://github.com/your-username/project-two',
      liveUrl: '',
    },
  ],
  experience: [
    {
      role: 'Frontend Developer Intern',
      company: 'Company Name',
      duration: '2025 - Present',
      summary: 'Worked on responsive interface implementation and collaboration across development tasks.',
      responsibilities: [
        'Built responsive UI screens for modern web applications.',
        'Collaborated with designers and developers on feature delivery.',
        'Improved usability and consistency across pages.',
      ],
      achievements: ['Delivered cleaner UI patterns.', 'Helped improve visual consistency.'],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Your College Name',
      year: '2022 - 2026',
      details: ['Focused on software engineering fundamentals.', 'Built projects alongside academic learning.'],
    },
  ],
  achievements: [
    {
      title: 'Certification Placeholder',
      issuer: 'Platform / Organization',
      note: 'Add your certifications, hackathon wins, coding achievements, or awards here.',
    },
    {
      title: 'Achievement Placeholder',
      issuer: 'Competition / Milestone',
      note: 'This section can also include DSA milestones or competition rankings.',
    },
  ],
  contact: {
    email: 'your.email@example.com',
    linkedin: 'https://linkedin.com/in/your-profile',
    github: 'https://github.com/your-username',
    availability: 'Open to internships, freelance work, and frontend developer roles.',
    responseTime: 'Usually responds within 24 hours.',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/your-username' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile' },
      { label: 'Email', href: 'mailto:your.email@example.com' },
    ],
  },
}
