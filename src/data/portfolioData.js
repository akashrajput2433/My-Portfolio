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
    name: 'Akash Singh',
    role: 'AI/ML Engineer',
    tagline:
      'I build polished digital experiences that feel premium, fast, and recruiter-ready.',
    summary:
      'This portfolio will be fully personalized with your projects, achievements, and career story in the next steps.',
    stats: [
      { label: 'Projects Designed', value: '06+' },
      { label: 'Core Tech Stack', value: '10+' },
      { label: 'Focus', value: 'AI/ML Systems' },
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
      { label: 'Preferred Role', value: 'AI/ML Engineer' },
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
        'Built and deployed a real-world RAG system end-to-end, combining retrieval, vector search, LLM inference, and cloud deployment into a usable public product. Designed to deliver trustworthy document intelligence with a fast, user-friendly experience.',
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
      role: 'Associate Software Engineer',
      company: 'Moba Mobile Automation Pvt. Ltd.',
      companyUrl: 'https://moba-automation.co.in/',
      duration: 'Aug 2025 - Mar 2026',
      summary:
        'Built secure, scalable enterprise modules using ASP.NET Core, MVC, and MS SQL Server with a strong focus on performance, access control, and admin efficiency.',
      highlights: [
        'Built secure enterprise modules with ASP.NET Core, MVC, and MS SQL Server.',
        'Focused strongly on performance tuning, access control, and secure workflows.',
        'Delivered admin-efficient architecture for scalable day-to-day operations.',
      ],
      responsibilities: [
        'Architected a production-grade 3-tier web application using ASP.NET Core Web API (.NET 10), MVC frontend, and MS SQL Server.',
        'Implemented 30+ stored procedures for CRUD workflows and improved average query execution time by 35% across 20+ database modules.',
        'Engineered JWT authentication, session handling, dynamic role-permission control, and Google reCAPTCHA v2 for secure access across 10+ modules.',
      ],
      achievements: [
        'Delivered Company, Role, and User management modules with server-side pagination and real-time validation.',
        'Built soft-delete with admin-controlled reactivation and SHA-256 password hashing for safer user lifecycle management.',
        'Reduced manual admin overhead by 40% while supporting 200+ user records in production workflows.',
        'Achieved 100% elimination of unauthorized access incidents through secure authentication and permission design.',
      ],
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Company Name',
      duration: '2025 - Present',
      summary: 'Worked on responsive interface implementation and collaboration across development tasks.',
      highlights: [
        'Built modern responsive UI screens for web applications.',
        'Worked closely with designers and developers on delivery.',
        'Improved page-level usability and visual consistency.',
      ],
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
    availability: 'Available for Artificial Intelligence / Data Scientist opportunities.',
    responseTime: 'Usually responds within 24 hours.',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/your-username' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile' },
      { label: 'Email', href: 'mailto:your.email@example.com' },
    ],
  },
}
