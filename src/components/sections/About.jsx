import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { timeline, education } from '../../data/portfolio';

const typeColor = {
  education: 'bg-blue-500',
  work:      'bg-emerald-500',
  milestone: 'bg-violet-500',
};

export default function About() {
  return (
    <section id="about" className="section-divider py-24 lg:py-32">
      <div className="section-container">
        <AnimatedSection variant="fadeUp">
          <div className="mb-14">
            <h2 className="section-heading">ABOUT</h2>
            <h2 className="section-heading-ghost -mt-3">ME</h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Bio */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <div className="space-y-5">
              <p className="text-white/55 leading-relaxed text-base">
                Currently interning at <span className="text-white font-semibold">Virtuosoft Technologies</span>, contributing to an enterprise Healthcare ERP System. I build RESTful APIs with ASP.NET Core, develop React pages, and implement JWT authentication with role-based authorization.
              </p>
              <p className="text-white/55 leading-relaxed text-base">
                Pursuing Electrical and Computer Engineering at <span className="text-white font-semibold">TKM College of Engineering</span> (CGPA: 7.3). Beyond the internship I've built an AI document management platform using FastAPI, semantic search with FAISS, OCR, Redis and Docker.
              </p>
              <p className="text-white/55 leading-relaxed text-base">
                Passionate about clean architecture, SOLID principles, and building systems that are reliable and maintainable.
              </p>
              <div className="mt-8 space-y-3">
                {education.map((edu, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/8"
                    style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <div>
                      <p className="text-white font-semibold text-sm">{edu.degree}</p>
                      <p className="text-blue-400 text-xs mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-emerald-400 font-mono text-xs font-bold">{edu.score}</p>
                      <p className="text-white/30 text-xs mt-0.5">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection variant="fadeLeft" delay={0.15}>
            <p className="text-[10px] font-bold tracking-widest uppercase text-white/25 mb-6">Journey</p>
            <div className="relative space-y-6">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-white/8" />
              {timeline.map((t, i) => (
                <motion.div key={i} className="relative flex gap-5 pl-1"
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}>
                  <div className={`relative z-10 flex-shrink-0 mt-1 w-6 h-6 rounded-full ${typeColor[t.type]} flex items-center justify-center shadow-lg`}>
                    <span className="w-2 h-2 rounded-full bg-white/80" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">{t.year}</span>
                    <h4 className="text-white font-semibold text-sm mt-1.5">{t.title}</h4>
                    <p className="text-white/35 text-xs leading-relaxed mt-1">{t.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
