import { motion } from 'framer-motion';
import { Award, GraduationCap, ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { certifications } from '../../data/portfolio';

const iconMap = { Award, GraduationCap };

const colorMap = {
  orange: {
    icon: 'bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400',
    border: 'hover:border-orange-200 dark:hover:border-orange-800',
    badge: 'bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300',
    accent: 'from-orange-400 to-orange-500',
  },
  blue: {
    icon: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400',
    border: 'hover:border-blue-200 dark:hover:border-blue-800',
    badge: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300',
    accent: 'from-blue-500 to-blue-600',
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="section-container">
        <SectionHeader
          label="Certifications"
          title="Credentials & learning"
          subtitle="Continuous learning through structured courses and elite academic programs."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-5 max-w-3xl">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon];
            const colors = colorMap[cert.color];

            return (
              <AnimatedSection key={index} variant="fadeUp" delay={0.1 * index}>
                <motion.div
                  className={`card border border-slate-100 dark:border-slate-800 overflow-hidden ${colors.border} transition-all duration-300`}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  {/* Accent bar */}
                  <div className={`h-1 bg-gradient-to-r ${colors.accent}`} />

                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${colors.icon}`}>
                        <Icon size={20} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${colors.badge}`}>
                            {cert.issuer}
                          </span>
                          <span className="text-xs text-slate-400 dark:text-slate-500">
                            {cert.year}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
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
