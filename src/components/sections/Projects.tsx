import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Eye, FileText } from 'lucide-react';
import neuroNestImg from '@/assets/projects/neuronest.jpg';
import objectRecImg from '@/assets/projects/object-recognition.jpg';
import legalDocsImg from '@/assets/projects/legal-docs.jpg';
import portfolioImg from '@/assets/projects/portfolio.jpg';

const projectsData = [
  {
    id: 1,
    title: "NeuroNest - AI Second Brain",
    description: "An intelligent knowledge management system that uses AI to organize, connect, and retrieve information. Built with React, Node.js, and OpenAI APIs.",
    image: neuroNestImg,
    technologies: ["React", "Node.js", "OpenAI API", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    demoUrl: "#",
    icon: Brain
  },
  {
    id: 2,
    title: "Object Recognition System",
    description: "Real-time object detection and classification system using computer vision. Supports multiple object types with high accuracy and performance optimization.",
    image: objectRecImg,
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker", "AWS"],
    githubUrl: "#",
    demoUrl: "#",
    icon: Eye
  },
  {
    id: 3,
    title: "Legal Document Generator",
    description: "AI-powered legal document automation tool that generates contracts, agreements, and legal forms with intelligent clause suggestions.",
    image: legalDocsImg,
    technologies: ["Next.js", "Python", "LangChain", "Supabase", "Stripe", "Vercel"],
    githubUrl: "#",
    demoUrl: "#",
    icon: FileText
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with interactive animations and WebGL effects. Features dynamic content and smooth user experience.",
    image: portfolioImg,
    technologies: ["React", "TypeScript", "Framer Motion", "Three.js", "Tailwind CSS", "Vite"],
    githubUrl: "#",
    demoUrl: "#",
    icon: Brain
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 story-link">Built</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in AI, web development, and user experience design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                {/* Fixed height image container */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <project.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  {/* Fixed height title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 min-h-[3rem] flex items-center">
                    {project.title}
                  </h3>
                  
                  {/* Fixed height description */}
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm min-h-[6rem] overflow-hidden">
                    {project.description}
                  </p>
                  
                  {/* Fixed height technology section */}
                  <div className="mb-6 min-h-[5rem] flex flex-col">
                    <h4 className="text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-md border border-blue-500/20 hover:border-blue-400/40 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-500/20 text-gray-400 rounded-md border border-gray-500/20">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Buttons at bottom */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      <FileText className="w-4 h-4" />
                      Docs
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/Navaneethadapa"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          >
            <Github className="w-5 h-5" />
            See All My Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};