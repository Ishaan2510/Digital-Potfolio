
export interface Link {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  phone: Link;
  email: Link;
  linkedin: Link;
  github: Link;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  details: string;
  period: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface ProjectEntry {
  name: string;
  technologies: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string;
}

export interface CompetitiveProgrammingEntry {
  platform: string;
  details: string;
  url?: string;
}

export interface IntroductionContent {
  summary: string;
  philosophy: {
    title: string;
    points: string[];
  };
}

export interface CollaborationContent {
    title: string;
    hackathon: {
        title: string;
        points: string[];
    };
    internship: {
        title: string;
        points: string[];
    };
    communication: {
        title: string;
        text: string;
    };
}

export interface EthicsContent {
    title: string;
    caseStudies: {
        title: string;
        text: string;
        points: string[];
    }[];
    reflection: string;
}

export interface FutureAspirationsContent {
    title: string;
    shortTerm: {
        title: string;
        points: string[];
    };
    longTerm: {
        title: string;
        points: string[];
    };
    learningStrategy: {
        title: string;
        points: string[];
    };
}

export interface ConclusionContent {
    title: string;
    summary: string;
    reflection: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}


export interface PortfolioData {
  fullName: string;
  tagline: string;
  program: string;
  institution: string;
  submissionDate: string;
  contactEmail: string;
  contact: ContactInfo;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  technicalSkills: SkillCategory[];
  competitiveProgramming: CompetitiveProgrammingEntry[];
  introduction: IntroductionContent;
  collaboration: CollaborationContent;
  ethics: EthicsContent;
  futureAspirations: FutureAspirationsContent;
  conclusion: ConclusionContent;
  testimonials: Testimonial[];
}

export interface Section {
  id: string;
  title: string;
}
