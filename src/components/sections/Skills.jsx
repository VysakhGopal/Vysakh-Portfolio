import { motion } from 'framer-motion';
import { Code2, Server, Database, Layout, Wrench, BarChart2, Shield, Brain, Layers } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { skills } from '../../data/portfolio';

const iconMap = { Code2, Server, Database, Layout, Wrench, BarChart2, Shield, Brain, Layers };

const colors = {
  blue:    { icon: 'text-blue-400',    bg: 'rgba(37,99,235,0.12)',   border: 'rgba(37,99,235,0.25)',   tag: 'bg-blue-500/10 text-blue-300 border-blue-500/20'       },
  indigo:  { icon: 'text-indigo-400',  bg: 'rgba(99,102,241,0.12)',  border: 'rgba(99,102,241,0.25)',  tag: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' },
  violet:  { icon: 'text-violet-400',  bg: 'rgba(124,58,237,0.12)',  border: 'rgba(124,58,237,0.25)',  tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20' },
  sky:     { icon: 'text-cyan-400',    bg: 'rgba(6,182,212,0.12)',   border: 'rgba(6,182,212,0.25)',   tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'       },
  emerald: { icon: 'text-emerald-400', bg: 'rgba(16,185,129,0.12)',  border: 'rgba(16,185,129,0.25)',  tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
  pink:    { icon: 'text-pink-400',    bg: 'rgba(236,72,153,0.12)',  border: 'rgba(236,72,153,0.25)',  tag: 'bg-pink-500/10 text-pink-300 border-pink-500/20'       },
  orange:  { icon: 'text-amber-400',   bg: 'rgba(245,158,11,0.12)',  border: 'rgba(245,158,11,0.25)',  tag: 'bg-amber-500/10 text-amber-300 border-amber-500/20'    },
  slate:   { icon: 'text-slate-400',   bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.10)', tag: 'bg-white/5 text-white/55 border-white/10'             },
};

export default function Skills() {
  return (
    <section id="skills" className="section-divider py-24 lg:py-32">
      <div className="section-container">
        <AnimatedSection variant="fadeUp">
          <div className="mb-14">
            <h2 className="section-heading">TECHNICAL</h2>
            <h2 className="section-heading-ghost -mt-3">SKILLS</h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            const c    = colors[skill.color];
            return (
              <AnimatedSection key={skill.category} variant="fadeUp" delay={0.04 * i}>
                <motion.div
                  className="p-5 rounded-2xl h-full"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <Icon size={16} className={c.icon} />
                  </div>
                  <h3 className="text-white/80 font-bold text-xs mb-3 uppercase tracking-wider">{skill.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map(item => (
                      <span key={item} className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${c.tag}`}>{item}</span>
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
