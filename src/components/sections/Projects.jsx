import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronDown, ChevronUp, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { projects } from '../../data/portfolio';

const colorMap = {
  blue:    { grad: 'from-blue-500 to-blue-700',    tag: 'bg-blue-500/10 text-blue-300 border-blue-500/20',     cat: 'text-blue-400',    border: 'rgba(37,99,235,0.2)'   },
  violet:  { grad: 'from-violet-500 to-violet-700',tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',cat: 'text-violet-400',  border: 'rgba(124,58,237,0.2)'  },
  emerald: { grad: 'from-emerald-500 to-cyan-500', tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',cat: 'text-emerald-400',border: 'rgba(16,185,129,0.2)' },
};

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const c = colorMap[project.color];
  return (
    <AnimatedSection variant="fadeUp" delay={0.07 * index}>
      <motion.div
        className="rounded-2xl overflow-hidden group"
        style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${c.border}` }}
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Accent top bar */}
        <div className={`h-0.5 bg-gradient-to-r ${c.grad}`} />

        {/* Project header bg */}
        <div className="relative h-36 flex items-center justify-center overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${c.border} 0%, transparent 60%)` }}>
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)', backgroundSize: '30px 30px' }} />
          <span className={`text-8xl font-black opacity-10 bg-gradient-to-br ${c.grad} bg-clip-text text-transparent`}>
            {String(project.id).padStart(2,'0')}
          </span>
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
              style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)', color: '#fcd34d' }}>
              <Clock size={9} />{project.status}
            </span>
          </div>
          <div className="absolute bottom-3 left-4">
            <span className={`text-[10px] font-bold uppercase tracking-widest ${c.cat}`}>{project.category}</span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-white font-bold text-base leading-tight mb-2">{project.title}</h3>
          <p className="text-white/40 text-xs leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map(t => (
              <span key={t} className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${c.tag}`}>{t}</span>
            ))}
          </div>

          <button onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors mb-3">
            {expanded ? <ChevronUp size={13}/> : <ChevronDown size={13}/>}
            {expanded ? 'Hide' : 'Key'} features
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.2 }} className="overflow-hidden mb-4">
                <div className="space-y-1.5">
                  {project.features.map((f,i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={11} className="flex-shrink-0 mt-0.5 text-emerald-500"/>
                      <span className="text-xs text-white/35">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="border-t border-white/[0.06] pt-4">
            <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white/60 hover:text-white transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Github size={13}/> View on GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-divider py-24 lg:py-32">
      <div className="section-container">
        <AnimatedSection variant="fadeUp">
          <div className="mb-14">
            <h2 className="section-heading">RECENT</h2>
            <h2 className="section-heading-ghost -mt-3">PROJECTS</h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
