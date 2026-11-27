import type { IconType } from "react-icons";
import {
  SiApachemaven,
  SiC,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiOpencv,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
  SiTypescript,
  SiYolo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
  LuBrain,
  LuCodeXml,
  LuDatabase,
  LuGlobe,
  LuLayers,
  LuScanFace,
  LuServer,
  LuTerminal,
  LuWrench,
  LuCode,
  LuPlug,
  LuSearch,
} from "react-icons/lu";

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

const RESUME_FILE_ID = "19SacW4rFZqv4DXHH6esEZ4bXoWJr5Q_l";

export const profile = {
  name: "Ganesh C",
  role: "Java Full-Stack Developer",
  location: "Bengaluru, India",
  email: "ganeshac2006@gmail.com",
  github: "https://github.com/GANESH-0-0-7",
  linkedin: "https://www.linkedin.com/in/ganesh-c-2402ba447",
  leetcode: "https://leetcode.com/u/SAITMAN/",
  resumeView: `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`,
  resumeDownload: `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`,
  college: "JSS Academy of Technical Education (JSSATEB), Bengaluru",
  degree: "B.E. — Computer Science & Engineering",
  years: "2023 — 2027",
  cgpa: 8.43,
};

export const typedPhrases = [
  "Spring Boot REST APIs",
  "React interfaces",
  "full-stack web apps",
  "AI-powered systems",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export interface Skill {
  name: string;
  icon: IconType;
  /** brand colour used on hover */
  color: string;
}

export interface SkillGroup {
  title: string;
  blurb: string;
  icon: IconType;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    blurb: "Secure, well-structured services and APIs.",
    icon: LuServer,
    skills: [
      { name: "Java", icon: FaJava, color: "#e76f00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "Spring MVC", icon: SiSpring, color: "#6db33f" },
      { name: "Spring Data JPA", icon: SiSpring, color: "#6db33f" },
      { name: "REST APIs", icon: LuPlug, color: "#c2410c" },
      { name: "Spring Security", icon: SiSpringsecurity, color: "#6db33f" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#d63aff" },
    ],
  },
  {
    title: "Frontend",
    blurb: "Responsive, accessible user interfaces.",
    icon: LuCodeXml,
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss, color: "#1572b6" },
      { name: "JavaScript", icon: SiJavascript, color: "#c9a800" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "React", icon: SiReact, color: "#0ea5c6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    ],
  },
  {
    title: "Database",
    blurb: "Relational and document data modelling.",
    icon: LuDatabase,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#00758f" },
      { name: "SQL", icon: LuDatabase, color: "#c2410c" },
    ],
  },
  {
    title: "AI & Computer Vision",
    blurb: "Retrieval-augmented generation and real-time vision.",
    icon: LuBrain,
    skills: [
      { name: "Spring AI", icon: SiSpring, color: "#6db33f" },
      { name: "RAG", icon: LuSearch, color: "#c2410c" },
      { name: "YOLOv8", icon: SiYolo, color: "#b8a000" },
      { name: "InsightFace", icon: LuScanFace, color: "#c2410c" },
      { name: "OpenCV", icon: SiOpencv, color: "#5c3ee8" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
    ],
  },
  {
    title: "Languages",
    blurb: "Foundations in problem solving and DSA.",
    icon: LuTerminal,
    skills: [
      { name: "Java", icon: FaJava, color: "#e76f00" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "JavaScript", icon: SiJavascript, color: "#c9a800" },
      { name: "C", icon: SiC, color: "#5c6bc0" },
    ],
  },
  {
    title: "Tools",
    blurb: "Everyday developer workflow.",
    icon: LuWrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#17140f" },
      { name: "Maven", icon: SiApachemaven, color: "#c71a36" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "VS Code", icon: LuCode, color: "#0078d4" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "Full Stack" | "AI & Vision" | "Frontend";

export interface Project {
  id: string;
  n: string;
  title: string;
  type: string;
  categories: ProjectCategory[];
  desc: string;
  features: string[];
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  icon: IconType;
  /** hue used for the generated preview artwork */
  hue: number;
}

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Full Stack",
  "AI & Vision",
  "Frontend",
];

export const projects: Project[] = [
  {
    id: "memento",
    n: "01",
    title: "Memento",
    type: "AI · RAG · Full Stack",
    categories: ["Full Stack", "AI & Vision"],
    desc: "An AI-powered document knowledge workspace. Upload documents, retrieve relevant source chunks, and ask questions through a conversational assistant.",
    features: [
      "Upload documents into a personal knowledge workspace",
      "Retrieves the most relevant source chunks for each question",
      "Conversational assistant for asking questions about your documents",
      "Vector search backed by PostgreSQL with pgvector",
    ],
    stack: ["Java 21", "Spring Boot 3", "Spring AI", "React", "PostgreSQL + pgvector"],
    github: "https://github.com/GANESH-0-0-7/Memento",
    featured: true,
    icon: LuBrain,
    hue: 24,
  },
  {
    id: "visionmate",
    n: "02",
    title: "VisionMate",
    type: "Major Project · Assistive AI",
    categories: ["AI & Vision"],
    desc: "AI-powered assistive smart glasses designed to support visually impaired users with real-time object detection, face recognition, object memory, obstacle guidance, GPS navigation and audio feedback.",
    features: [
      "Real-time object detection",
      "Face recognition and object memory",
      "Obstacle guidance for safer movement",
      "GPS navigation with audio feedback",
    ],
    stack: ["Python", "YOLOv8", "InsightFace", "Raspberry Pi", "Flask", "WebSocket", "OpenStreetMap"],
    github: "https://github.com/GANESH-0-0-7/Major_project_model",
    featured: true,
    icon: LuScanFace,
    hue: 200,
  },
  {
    id: "jobnova",
    n: "03",
    title: "JobNova",
    type: "Recruitment · Full Stack",
    categories: ["Full Stack"],
    desc: "A recruitment platform with candidate and recruiter workflows for job posting, job discovery, applications and application tracking.",
    features: [
      "Separate candidate and recruiter workflows",
      "Job posting and job discovery",
      "Job applications with application tracking",
      "JWT-based authentication",
    ],
    stack: ["React", "Spring Boot", "MongoDB Atlas", "JWT", "Serper API"],
    live: "https://job-nova-liard.vercel.app/",
    github: "https://github.com/GANESH-0-0-7/JobNova_0.1",
    icon: LuLayers,
    hue: 262,
  },
  {
    id: "jeevantax",
    n: "04",
    title: "JeevantaX",
    type: "Healthcare · AI",
    categories: ["Full Stack", "AI & Vision"],
    desc: "A healthcare platform supporting appointment scheduling and electronic health records, with AI-assisted features and location-based hospital discovery.",
    features: [
      "Appointment scheduling",
      "Electronic health records",
      "AI-assisted features powered by the Gemini API",
      "Location-based hospital discovery",
    ],
    stack: ["React", "Spring Boot", "MongoDB Atlas", "Gemini API", "OpenStreetMap"],
    live: "https://jeevanta-x-git-main-asura8.vercel.app/",
    icon: LuGlobe,
    hue: 160,
  },
  {
    id: "expense-tracker",
    n: "05",
    title: "Smart Expense Tracker",
    type: "FinTech · MERN",
    categories: ["Full Stack"],
    desc: "A personal finance and expense-tracking application built using the MERN stack.",
    features: [
      "Personal finance and expense tracking",
      "Full MERN architecture: MongoDB, Express, React, Node.js",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/GANESH-0-0-7/Smart-Expense-Tracker-System",
    icon: LuDatabase,
    hue: 142,
  },
  {
    id: "face-recognition",
    n: "06",
    title: "Real-Time Face Recognition",
    type: "Computer Vision",
    categories: ["AI & Vision"],
    desc: "A Python computer-vision project focused on real-time face recognition using OpenCV.",
    features: ["Real-time face recognition from a live video feed", "Built in Python with OpenCV"],
    stack: ["Python", "OpenCV"],
    github: "https://github.com/GANESH-0-0-7/Real-Time-Face-Recognition-",
    icon: LuScanFace,
    hue: 330,
  },
  {
    id: "mealrush",
    n: "07",
    title: "MealRush",
    type: "Frontend Development",
    categories: ["Frontend"],
    desc: "A food-related web application built using core web technologies.",
    features: ["Food-related web application", "Built with core HTML5, CSS3 and JavaScript — no framework"],
    stack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/GANESH-0-0-7/MealRush",
    icon: LuCodeXml,
    hue: 36,
  },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const aboutCards: { title: string; body: string; icon: IconType }[] = [
  {
    title: "Specialization",
    body: "Java and Spring Boot back ends — REST APIs, Spring Security with JWT, JPA — paired with React front ends.",
    icon: LuServer,
  },
  {
    title: "Interests",
    body: "Retrieval-augmented generation, computer vision and assistive technology: software that is useful to real people.",
    icon: LuBrain,
  },
  {
    title: "Problem-solving",
    body: "Understand the problem, model the data first, ship a thin working slice, then iterate. I practise regularly on LeetCode.",
    icon: LuSearch,
  },
  {
    title: "Career objective",
    body: "To grow as a Java Full-Stack Developer in a team that values clean architecture, learning and shipping reliable products.",
    icon: LuLayers,
  },
];
