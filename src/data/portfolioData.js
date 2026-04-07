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
      category: 'Programming Languages',
      level: 'Advanced',
      summary: 'Strong foundation across object-oriented programming, scripting, web fundamentals, and database querying.',
      items: ['Java', 'C#', 'C', 'C++', 'Python', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL'],
    },
    {
      category: 'Frameworks, Backend & Databases',
      level: 'Intermediate',
      summary: 'Building structured backend services, APIs, authentication flows, and data-driven application layers.',
      items: [
        'ASP.NET Core',
        'ASP.NET MVC',
        'Web API',
        'Entity Framework Core',
        'AngularJS',
        'REST APIs',
        'JWT Authentication',
        'MS SQL Server',
        'MySQL',
        'Oracle',
      ],
    },
    {
      category: 'Tools & AI Platforms',
      level: 'Intermediate',
      summary: 'Using modern developer tools, deployment platforms, and AI assistants to speed up production workflows.',
      items: [
        'Git',
        'GitHub',
        'CI/CD Pipelines',
        'Vercel',
        'Render',
        'Postman',
        'Docker (Basic)',
        'OpenAI ChatGPT',
        'Anthropic Claude',
        'GitHub Copilot',
        'Cursor AI',
      ],
    },
    {
      category: 'Core Strengths',
      level: 'Daily Workflow',
      summary: 'Engineering habits focused on maintainability, scalability, optimization, and team collaboration.',
      items: [
        'Scalable Application Development',
        'Performance Optimization',
        'Reusable Component Architecture',
        'Clean Code Practices',
        'Debugging & Troubleshooting',
        'Agile/Scrum Collaboration',
      ],
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
      degree: 'Master of Computer Applications',
      institution: 'Chitkara University, Rajpura, Punjab',
      year: '08/2022 - 06/2024',
      details: ['CGPA: 9.73/10'],
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Arcade Business College, Patliputra University, Patna, Bihar',
      year: '08/2019 - 06/2022',
      details: ['Percentage: 74.4%'],
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
