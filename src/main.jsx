
import React from 'react';
import { createRoot } from 'react-dom/client';

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Sparkles,
  MapPin
} from 'lucide-react';

import './styles.css';

// ==========================================
// LOCAL ASSETS
// Files are located in the project root.
// main.jsx is located inside src/.
// ==========================================

import profileImage from '../ganesh.jpeg';
import resumePdf from '../Ganesh_C_Resume.pdf';

const PROFILE_IMAGE = profileImage;
const RESUME_VIEW = resumePdf;
const RESUME_DOWNLOAD = resumePdf;

// ==========================================
// PROJECTS
// ==========================================

const projects = [
  {
    n: '01',
    title: 'Memento',
    type: 'AI · RAG · Full Stack',
    desc: 'An AI-powered document knowledge workspace. Upload documents, retrieve relevant source chunks, and ask questions through a conversational assistant.',
    stack: [
      'Java 21',
      'Spring Boot 3',
      'Spring AI',
      'React',
      'PostgreSQL + pgvector'
    ],
    link: 'https://github.com/GANESH-0-0-7/Memento',
    featured: true
  },
  {
    n: '02',
    title: 'VisionMate',
    type: 'Major Project · Assistive AI',
    desc: 'AI-powered assistive smart glasses designed to support visually impaired users with real-time object detection, face recognition, object memory, obstacle guidance, GPS navigation and audio feedback.',
    stack: [
      'Python',
      'YOLOv8',
      'InsightFace',
      'Raspberry Pi',
      'Flask',
      'WebSocket',
      'OpenStreetMap'
    ],
    link: 'https://github.com/GANESH-0-0-7/Major_project_model',
    featured: true
  },
  {
    n: '03',
    title: 'JobNova',
    type: 'Recruitment · Full Stack',
    desc: 'A recruitment platform with candidate and recruiter workflows for job posting, job discovery, applications and application tracking.',
    stack: [
      'React',
      'Spring Boot',
      'MongoDB Atlas',
      'JWT',
      'Serper API'
    ],
    link: 'https://job-nova-liard.vercel.app/',
    github: 'https://github.com/GANESH-0-0-7/JobNova_0.1'
  },
  {
    n: '04',
    title: 'JeevantaX',
    type: 'Healthcare · AI',
    desc: 'A healthcare platform supporting appointment scheduling and electronic health records, with AI-assisted features and location-based hospital discovery.',
    stack: [
      'React',
      'Spring Boot',
      'MongoDB Atlas',
      'Gemini API',
      'OpenStreetMap'
    ],
    link: 'https://jeevanta-x-git-main-asura8.vercel.app/'
  },
