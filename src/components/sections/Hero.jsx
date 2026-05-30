import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, MapPin, Briefcase } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-hero-pattern opacity-100 dark:opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-100 dark:bg-blue-950/40 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-slate-100 dark:bg-slate-800/30 rounded-full blur-3xl opacity-60" />

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-4"
            >
              Vysakh P
            </motion.h1>

            {/* Title */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 tracking-tight">
                Software Developer
                <span className="text-slate-300 dark:text-slate-600 mx-3">·</span>
                .NET Backend Engineer
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mb-8"
            >
              I build scalable healthcare systems and robust backend APIs at{' '}
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                Virtuosoft Technologies
              </span>
              . Focused on clean architecture, SQL optimization, and systems that perform under pressure.
            </motion.p>

            {/* Meta info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 text-sm text-slate-500 dark:text-slate-400"
            >
              <span className="flex items-center gap-1.5">
                <Briefcase size={14} className="text-blue-500" />
                Virtuosoft Technologies
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-blue-500" />
                Kerala, India
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-slate-600 dark:text-slate-400">
                .NET Core · SQL Server · React
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                onClick={() => handleScroll('projects')}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ArrowRight size={16} />
              </motion.button>

              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                Download Resume
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={16} />
                GitHub Profile
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="text-xs text-slate-400 dark:text-slate-600 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-600"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
