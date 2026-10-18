export type ProjectCategory = 'all' | 'branding' | 'social' | 'print' | 'uiux' | 'packaging';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  image: string;
  summary: string;
  objectives: string[];
  challenge: string;
  solution: string;
  process: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  tools: string[];
  palette: { name: string; hex: string }[];
  typography: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  tools: string[];
  iconName: string;
}

export interface SkillTool {
  name: string;
  category: 'Software Tools' | 'Design Disciplines';
  proficiency: number;
  experience: string;
  description: string;
  iconName?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  summary: string;
  steps: string[];
  deliverable: string;
}

export interface ExperienceItem {
  role: string;
  type: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  focus: string;
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  organization: string;
  country: string;
  feedback: string;
  rating: number;
  projectType: string;
}
