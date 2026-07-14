import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { experience, education } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-divider py-24 lg:py-32">
      <div className="section-container">
        <AnimatedSection variant="fadeUp">
          <div className="mb-14">
            <h2 className="section-heading">WORK</h2>
            <h2 className="section-heading-ghost -mt-3">EXPERIENCE</h2>
          </div>
        </AnimatedSection>

        {experience.map((job, i) => (
          <AnimatedSection key={i} variant="fadeUp" delay={0.1}>
            <motion.div
              className="group py-10 border-t border-white/[0.06] flex flex-col lg:flex-row lg:items-start gap-8"
              whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="lg:w-56 flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-blue-600/30">V</div>
                <h3 className="text-white font-bold text-lg">{job.company}</h3>
                <p className="text-blue-400 text-sm font-medium mt-0.5">{job.role}</p>
                <p className="text-white/25 text-xs font-mono mt-2">{job.period}</p>
              </div>
              <div className="flex-1">
                <p className="text-white/45 text-sm leading-relaxed mb-5">{job.description}</p>
                <div className="space-y-2.5 mb-5">
                  {job.highlights.map((h, j) => (
                    <motion.div key={j} className="flex items-start gap-2.5"
                      initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.05 * j }}>
                      <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5 text-blue-500" />
                      <span className="text-xs text-white/45">{h}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map(t => <span key={t} className="tag-dark">{t}</span>)}
                </div>
              </div>
              <ArrowUpRight size={16} className="flex-shrink-0 text-white/15 group-hover:text-blue-400 transition-colors mt-1" />
            </motion.div>
          </AnimatedSection>
        ))}

        <AnimatedSection variant="fadeUp" delay={0.2} className="mt-16">
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/25 mb-5">Education</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <div key={i} className="flex items-center justify-between p-5 rounded-2xl border border-white/[0.07]"
                style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div>
                  <p className="text-white font-semibold text-sm">{edu.degree}</p>
                  <p className="text-blue-400 text-xs mt-0.5">{edu.institution}</p>
                </div>
                <div className="text-right ml-4 flex-shrink-0">
                  <p className="text-emerald-400 font-mono text-sm font-bold">{edu.score}</p>
                  <p className="text-white/25 text-xs mt-0.5">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
