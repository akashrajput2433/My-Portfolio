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
  role: 'AI/ML & Software Engineer',
    tagline:
      'I design and engineer intelligent, production-ready digital solutions with a strong focus on performance, usability, and real-world impact.',
    summary:
      'Blending AI/ML, backend engineering, and clean product thinking to build scalable systems that solve meaningful problems and create measurable value.',
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
    'An AI/ML & Software Engineer with 2+ years of experience building secure, scalable, and high-impact software solutions.',
    background:
      'My work spans enterprise application development, backend architecture, APIs, and AI-powered systems, with hands-on experience in Java, C#, Python, ASP.NET Core, SQL Server, and modern cloud-based workflows.',
    objective:
      'I aim to contribute to impactful teams where I can build intelligent, data-driven products and grow at the intersection of AI, software engineering, and real-world problem solving.',
    highlights: [
      'Experienced in building production-ready systems with strong attention to performance, security, and clean architecture.',
      'Comfortable working across backend engineering, AI workflows, APIs, databases, and modern product-focused development.',
      'Driven by continuous learning, practical problem solving, and delivering technology that creates measurable impact.',
    ],
    quickFacts: [
      { label: 'Location', value: 'India' },
    { label: 'Preferred Role', value: 'AI/ML & Software Engineer / Data Scientist' },
      { label: 'Experience', value: '2+ Years' },
      { label: 'Specialization', value: 'AI, ML & Data-Driven Systems' },
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
      name: '3D Solar System',
      category: '3D Experience',
      description:
        'An immersive 3D solar system experience that visualizes planetary orbits, relative motion, and space-inspired interactions through pure frontend engineering.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Responsive Design', '3D Transforms'],
      features: [
        'Interactive 2D and 3D viewing modes with smooth transitions.',
        'Planet-wise focus navigation with animated orbital motion.',
        'User controls for speed, size, distance, and zoom-based exploration.',
        'Responsive scaling that adapts the solar system layout across screen sizes.',
        'Rich visual styling using CSS animations, shadows, rings, and orbit effects.',
      ],
      impact:
        'Built a visually engaging space simulation that combines animation, interaction design, and frontend creativity into an educational and immersive user experience. Showcases strong command over CSS motion, layout control, and interactive UI behavior without relying on heavy frameworks.',
      githubUrl: 'https://github.com/akashrajput2433/3D-Solar-System/',
      liveUrl: 'https://akashrajput2433.github.io/3D-Solar-System/',
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
      role: 'Associate Software Engineer',
      company: 'Mphasis',
      companyUrl: 'https://www.mphasis.com/home.html',
      duration: 'Mar 2025 - Jul 2025',
      summary:
        'Contributed to the ITest Online quiz platform in a fast-paced Agile team, focusing on delivery quality, stable releases, and measurable engineering improvement.',
      highlights: [
        'Worked in a 5-member Agile team on the ITest Online quiz platform at a leading IT services company.',
        'Contributed to the project ranking among the top 3 company projects through reliable feature delivery.',
        'Improved release stability and code quality through Git-based workflows and systematic debugging.',
      ],
      responsibilities: [
        'Developed and supported the ITest Online quiz platform in collaboration with a 5-member Agile team.',
        'Used Git version control and debugging workflows to improve code quality by 25%.',
        'Helped stabilize releases by 30% through disciplined testing, issue resolution, and timely delivery.',
      ],
      achievements: [
        'Achieved 91% project evaluation score for delivery quality and execution.',
        'Earned Performance Excellence recognition for on-time delivery.',
        'Contributed to placing the project among the top 3 internal company projects.',
        'Built strong hands-on experience in Agile collaboration, debugging, and release discipline.',
      ],
    },
    {
      role: 'Java Intern / Junior Java Developer',
      company: 'Aicons Engineering Pvt. Ltd.',
      companyUrl: 'https://aicons.in/',
      duration: 'Jan 2024 - Feb 2025',
      summary:
        'Built a strong foundation in Core Java development while contributing to backend logic, data structure implementation, SQL integration, and team-based software delivery.',
      highlights: [
        'Strengthened Core Java proficiency through hands-on work with OOP, exception handling, and multithreading.',
        'Improved problem-solving speed by implementing arrays, stacks, queues, and linked lists in programming tasks.',
        'Worked on backend logic, Java-MySQL integration, and reliable solution delivery within team workflows.',
      ],
      responsibilities: [
        'Developed backend logic using Core Java with OOP, exception handling, and multithreading concepts.',
        'Integrated MySQL databases with Java applications and wrote efficient SQL queries for data management.',
        'Assisted in debugging, testing, and SDLC processes while collaborating with team members to deliver reliable solutions.',
      ],
      achievements: [
        'Enhanced coding efficiency by 30% through hands-on Core Java implementation.',
        'Improved problem-solving speed by 25% using practical data structure applications.',
        'Supported optimized backend performance through structured Java logic and data handling.',
        'Gained strong early-career exposure to debugging, testing, databases, and real-world development practices.',
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Computer Applications',
      institution: 'Chitkara University, Rajpura, Punjab',
      year: 'Jun 2022 - Aug 2024',
      details: ['CGPA: 9.73/10'],
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Arcade Business College, Patliputra University, Patna',
      year: 'Apr 2019 - May 2022',
      details: ['Percentage: 74.4%'],
    },
  ],
  certifications: [
    {
      title: 'Become Experts in Python | Exercises | Projects | Quiz',
      issuer: 'Udemy',
      note: 'Completed a 10.5-hour Python certification focused on practical exercises, hands-on projects, and quiz-based learning to strengthen problem-solving and applied programming skills.',
      link: 'https://www.udemy.com/certificate/UC-d0b951ad-461b-429e-b765-73eb111fac3b/',
    },
    {
      title: 'Claude Code in Action',
      issuer: 'Anthropic',
      note: 'Completed the Claude Code in Action certification, strengthening hands-on understanding of AI-assisted development workflows, modern coding productivity, and practical usage of Claude for real engineering tasks.',
      link: 'https://verify.skilljar.com/c/hf4vd6h82yio',
    },
  ],
  achievements: [
    {
      title: 'Performance Excellence Recognition',
      issuer: 'Mphasis',
      note: 'Achieved 91% project evaluation score and earned Performance Excellence recognition for on-time delivery.',
    },
  ],
  contact: {
    email: 'akashdos161099@gmail.com',
    linkedin: 'https://www.linkedin.com/in/akashrajput2433/',
    github: 'https://github.com/akashrajput2433',
    availability: 'Available for AI / Data Scientist opportunities',
    responseTime: 'Usually responds within 24 hours.',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/akashrajput2433' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akashrajput2433/' },
      { label: 'Email', href: 'mailto:akashdos161099@gmail.com' },
      { label: 'LeetCode', href: 'https://leetcode.com/u/akashrajput2433/' },
    ],
  },
}
