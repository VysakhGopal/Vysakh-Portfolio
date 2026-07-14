import { motion } from 'framer-motion';
import { Award, GraduationCap, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { certifications } from '../../data/portfolio';

const iconMap = { Award, GraduationCap };
const colorMap = {
  orange: { icon: 'text-amber-400',  bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.2)',  issuer: 'text-amber-400'  },
  blue:   { icon: 'text-blue-400',   bg: 'rgba(37,99,235,0.1)',   border: 'rgba(37,99,235,0.2)',   issuer: 'text-blue-400'   },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-divider py-24 lg:py-32">
      <div className="section-container">
        <AnimatedSection variant="fadeUp">
          <div className="mb-14">
            <h2 className="section-heading">CERTIFI</h2>
            <h2 className="section-heading-ghost -mt-3">CATIONS</h2>
          </div>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon];
            const c    = colorMap[cert.color];
            return (
              <AnimatedSection key={i} variant="fadeUp" delay={0.1 * i}>
                <motion.div
                  className="group flex items-start gap-4 p-6 rounded-2xl"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}
                  whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <Icon size={20} className={c.icon} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-sm leading-snug">{cert.title}</h3>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className={`text-xs font-bold ${c.issuer}`}>{cert.issuer}</span>
                      <span className="text-white/25 text-xs font-mono">{cert.year}</span>
                    </div>
                    <p className="text-white/35 text-xs mt-2 leading-relaxed">{cert.description}</p>
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
