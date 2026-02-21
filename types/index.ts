export interface Experience {
  company: string;
  role: string;
  duration: string;
  techStack: string[];
  bullets: string[];
}

export interface Project {
  name: string;
  tech: string[];
  bullets: string[];
  demoLink?: string;
  sourceLink?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
