import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { projects } from '../../data/portfolio';

const colorMap = {
  blue: {
    accent: 'from-blue-500 to-blue-600',
    badge: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-900/60',
    category: 'text-blue-600 dark:text-blue-400',
    placeholder: 'from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20',
    icon: 'text-blue-300 dark:text-blue-700',
  },
  violet: {
    accent: 'from-violet-500 to-violet-600',
    badge: 'bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border-violet-100 dark:border-violet-900/60',
    category: 'text-violet-600 dark:text-violet-400',
    placeholder: 'from-violet-50 to-violet-100 dark:from-violet-950/40 dark:to-violet-900/20',
    icon: 'text-violet-300 dark:text-violet-700',
  },
};

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const colors = colorMap[project.color];

  return (
    <AnimatedSection variant="fadeUp" delay={0.1 * index}>
      <motion.div
        className="card border border-slate-100 dark:border-slate-800 overflow-hidden group"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      >
        {/* Top accent */}
        <div className={`h-1 bg-gradient-to-r ${colors.accent}`} />

        {/* Project image placeholder */}
        <div className={`relative h-48 bg-gradient-to-br ${colors.placeholder} flex items-center justify-center overflow-hidden`}>
          {/* Abstract code pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`grid-${project.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className={colors.icon} />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
            </svg>
          </div>

          {/* Project number */}
          <div className="relative z-10 text-center">
            <div className={`text-7xl font-black opacity-10 ${colors.category}`}>
              {String(project.id).padStart(2, '0')}
            </div>
            <p className={`text-sm font-semibold ${colors.category} mt-1 opacity-60`}>
              {project.category}
            </p>
          </div>

          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-xs font-medium text-slate-600 dark:text-slate-400 border border-white/60 dark:border-slate-700/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {project.status}
            </span>
          </div>
        </div>

        <div className="p-6">
          {/* Title & category */}
          <div className="mb-3">
            <span className={`text-xs font-semibold uppercase tracking-wider ${colors.category}`}>
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${colors.badge}`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expandable features */}
          <div className="mb-5">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-200"
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? 'Hide' : 'Show'} features
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 space-y-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5 text-emerald-500" />
                        <span className="text-xs text-slate-500 dark:text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={13} />
              GitHub
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-semibold hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={13} />
              Live Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-950">
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Things I've built"
          subtitle="A selection of projects that showcase my backend engineering and machine learning skills."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
