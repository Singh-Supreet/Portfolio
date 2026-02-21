import type { Experience, Project, Education, SkillCategory } from "@/types";

export const personalInfo = {
  name: "Supreet Singh",
  phone: "+91-9313896215",
  email: "singhsupreet1608@gmail.com",
  github: "https://github.com/Singh-Supreet",
  linkedin: "https://linkedin.com/in/supreet--singh/",
  portfolio: "https://supreet-singh-portfolio.vercel.app/",
  taglines: [
    "Full Stack Developer",
    "React.js & Next.js Expert",
    "UI/UX Enthusiast",
    "Problem Solver",
  ],
  about:
    "A passionate Full Stack Developer specializing in React.js and Next.js, with hands-on experience building scalable, accessible, and performant web applications. Currently working at Formee Holdings, I thrive at the intersection of clean code and great user experience. I graduated from NIT Delhi with a B.Tech in Electronics and Communication Engineering and love solving complex problems through code.",
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "Context API",
      "Responsive Design",
      "Web Accessibility (WCAG)",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "JWT Authentication",
      "API Integration",
      "Cron Jobs",
      "Database Optimization",
    ],
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "C++", "Python", "SQL"],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "VS Code",
      "Webpack",
      "Figma",
      "Chrome DevTools",
      "CI/CD Pipelines",
    ],
  },
  {
    category: "Concepts",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "REST Architecture",
      "SDLC",
      "Design Patterns",
      "Agile/Scrum",
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "Formee Holdings",
    role: "Junior Frontend Web Developer",
    duration: "Jun 2024 – Present",
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "GitLab CI/CD",
      "SCSS",
    ],
    bullets: [
      "Architected and implemented responsive, accessible user interfaces using React.js and Next.js, ensuring WCAG compliance and seamless cross-device compatibility across 5+ screen breakpoints.",
      "Optimized Core Web Vitals and reduced page load times by 25% through code splitting, lazy loading, and image optimization techniques.",
      "Developed a library of 15+ reusable, modular UI components with TypeScript, reducing development time for new features by 20% and improving codebase maintainability.",
      "Built and maintained RESTful APIs using Node.js, Express.js, and MongoDB, implementing cron-based task automation and optimizing database queries for 40% faster response times.",
      "Collaborated with cross-functional teams in an Agile environment, participating in code reviews, sprint planning, and deploying features through GitLab CI/CD pipelines.",
    ],
  },
  {
    company: "Zevi.ai",
    role: "Frontend Web Developer Intern",
    duration: "Jan 2024 – May 2024",
    techStack: [
      "React.js",
      "TypeScript",
      "Shopify Theme Extension",
      "SCSS",
      "REST APIs",
      "GitLab",
    ],
    bullets: [
      "Improved UI rendering efficiency by 30% through component optimization and memoization strategies.",
      "Led migration from Shopify Asset API to Theme Extension, reducing integration complexity by 40%.",
      "Resolved 20+ production bugs in Zevi Search, improving UX and reducing support tickets by 15%.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "AI Resume Analyzer",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "OpenAI API",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    bullets: [
      "Built a full-stack AI-powered resume analysis platform using React.js, Node.js, and OpenAI API that evaluates resumes and generates structured feedback on strengths, weaknesses, and ATS optimization.",
      "Developed secure RESTful APIs with Express.js and MongoDB, implementing JWT authentication, resume storage, and real-time analysis processing with scalable backend architecture.",
      "Designed responsive frontend with React.js and deployed using CI/CD pipeline, enabling users to upload resumes and receive AI-generated insights within seconds.",
    ],
  },
  {
    name: "PeriodPedia",
    tech: ["React.js", "JavaScript", "EmailJS", "CSS3", "Responsive Design"],
    bullets: [
      "Built a fully responsive educational platform using React.js with custom hooks for complex async state management, serving 1,000+ monthly users.",
      "Implemented mobile-first design principles achieving 95+ Lighthouse performance score and ensuring accessibility across all devices.",
      "Integrated EmailJS for contact functionality and deployed on GitHub Pages with automated CI/CD pipeline.",
    ],
    demoLink: "#",
    sourceLink: "#",
  },
];

export const education: Education[] = [
  {
    institution: "National Institute of Technology Delhi",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    duration: "Dec 2020 – Jul 2024",
    grade: "CGPA: 7.13/10",
  },
  {
    institution: "Guru Nanak Public School",
    degree: "Higher Secondary Education (12th), CBSE",
    duration: "Completed 2020",
  },
];

export const achievements = [
  "Solved 500+ Data Structures & Algorithms problems on GeeksforGeeks and LeetCode, strengthening problem-solving and coding skills.",
  "Led PhD Sector as Head of Training and Placement Cell at NIT Delhi, coordinating recruitment activities for 100+ students and liaising with 20+ companies.",
  "Ranked in Top 25 coders at NIT Delhi as recognized by GeeksforGeeks campus ranking.",
  "Achieved 3-star rating on HackerRank for proficiency in C++ and problem-solving.",
];

export const SYSTEM_PROMPT = `You are an AI assistant for Supreet Singh's portfolio website. Your job is to answer questions about Supreet in a friendly, professional, and concise manner. Only answer questions related to Supreet Singh. If asked something unrelated, politely redirect the conversation.

Here is everything you know about Supreet:

NAME: Supreet Singh
EMAIL: singhsupreet1608@gmail.com
PHONE: +91-9313896215
GITHUB: https://github.com/singhsupreet1608
LINKEDIN: https://linkedin.com/in/supreetsingh1608

ABOUT:
A passionate Full Stack Developer specializing in React.js and Next.js. Currently working at Formee Holdings as a Junior Frontend Web Developer. Graduated from NIT Delhi with a B.Tech in Electronics and Communication Engineering (CGPA: 7.13/10).

TECHNICAL SKILLS:
- Frontend: React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, Redux, Context API, Responsive Design, Web Accessibility (WCAG)
- Backend: Node.js, Express.js, MongoDB, RESTful APIs, JWT Authentication, API Integration, Cron Jobs, Database Optimization
- Languages: JavaScript, TypeScript, C++, Python, SQL
- Tools & Platforms: Git, GitHub, GitLab, VS Code, Webpack, Figma, Chrome DevTools, CI/CD Pipelines
- Concepts: DSA, OOP, DBMS, REST Architecture, SDLC, Design Patterns, Agile/Scrum

WORK EXPERIENCE:
1. Formee Holdings — Junior Frontend Web Developer (Jun 2024 – Present)
   Tech: React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, REST APIs, GitLab CI/CD, SCSS
   - Built accessible UIs with React.js/Next.js ensuring WCAG compliance across 5+ screen breakpoints
   - Reduced page load times by 25% through code splitting, lazy loading, and image optimization
   - Created 15+ reusable TypeScript UI components, reducing dev time by 20%
   - Built RESTful APIs with Node.js/Express.js/MongoDB, optimized queries for 40% faster response times
   - Worked in Agile teams, participated in code reviews, sprint planning, GitLab CI/CD deployments

2. Zevi.ai — Frontend Web Developer Intern (Jan 2024 – May 2024)
   Tech: React.js, TypeScript, Shopify Theme Extension, SCSS, REST APIs, GitLab
   - Improved UI rendering efficiency by 30% through memoization strategies
   - Led migration from Shopify Asset API to Theme Extension, reducing complexity by 40%
   - Resolved 20+ production bugs, reducing support tickets by 15%

PROJECTS:
1. AI Resume Analyzer (React.js, Node.js, Express.js, OpenAI API, MongoDB, JWT, REST APIs)
   - Full-stack AI platform that evaluates resumes and gives ATS optimization feedback
   - Secure APIs with JWT auth, resume storage, real-time AI analysis

2. PeriodPedia (React.js, JavaScript, EmailJS, CSS3)
   - Responsive educational platform serving 1,000+ monthly users
   - 95+ Lighthouse performance score, mobile-first design

EDUCATION:
- B.Tech in Electronics and Communication Engineering, NIT Delhi (Dec 2020 – Jul 2024), CGPA: 7.13/10
- Higher Secondary (12th CBSE), Guru Nanak Public School

ACHIEVEMENTS:
- Solved 500+ DSA problems on GeeksforGeeks and LeetCode
- Head of Training & Placement Cell at NIT Delhi — coordinated recruitment for 100+ students with 20+ companies
- Top 25 coder at NIT Delhi (GeeksforGeeks campus ranking)
- 3-star HackerRank rating in C++

Respond warmly and professionally. Keep answers concise (2-4 sentences unless more detail is needed). If asked about contacting Supreet, direct them to use the contact form on the website or email singhsupreet1608@gmail.com.`;
