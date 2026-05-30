import { motion } from 'framer-motion';
import { Code2, Server, Database, Layout, Wrench, BarChart2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { skills } from '../../data/portfolio';

const iconMap = {
  Code2,
  Server,
  Database,
  Layout,
  Wrench,
  BarChart2,
};

const colorMap = {
  blue: {
    card: 'hover:border-blue-200 dark:hover:border-blue-800',
    icon: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400',
    tag: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-900/60',
  },
  indigo: {
    card: 'hover:border-indigo-200 dark:hover:border-indigo-800',
    icon: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400',
    tag: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-900/60',
  },
  violet: {
    card: 'hover:border-violet-200 dark:hover:border-violet-800',
    icon: 'bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400',
    tag: 'bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border-violet-100 dark:border-violet-900/60',
  },
  sky: {
    card: 'hover:border-sky-200 dark:hover:border-sky-800',
    icon: 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400',
    tag: 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-100 dark:border-sky-900/60',
  },
  slate: {
    card: 'hover:border-slate-300 dark:hover:border-slate-600',
    icon: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
    tag: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700',
  },
  emerald: {
    card: 'hover:border-emerald-200 dark:hover:border-emerald-800',
    icon: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400',
    tag: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-900/60',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-950">
      <div className="section-container">
        <SectionHeader
          label="Skills"
          title="Technologies I work with"
          subtitle="A focused stack built around backend engineering, data systems, and modern web development."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            const colors = colorMap[skill.color];

            return (
              <AnimatedSection
                key={skill.category}
                variant="fadeUp"
                delay={0.05 * index}
              >
                <motion.div
                  className={`card p-6 group cursor-default border border-slate-100 dark:border-slate-800 ${colors.card} transition-all duration-300`}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.icon}`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {skill.category}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${colors.tag} transition-colors duration-200`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
