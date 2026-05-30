import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { experience } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="section-container">
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          subtitle="Real-world engineering experience building production systems."
        />

        <div className="mt-12 space-y-6">
          {experience.map((job, index) => (
            <AnimatedSection key={index} variant="fadeUp" delay={0.1}>
              <motion.div
                className="card border border-slate-100 dark:border-slate-800 overflow-hidden group"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-400" />

                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    {/* Company info */}
                    <div className="flex items-start gap-4">
                      {/* Company logo placeholder */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-lg">V</span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">
                            {job.company}
                          </span>
                          <span className="tag text-xs">{job.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {job.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {job.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.07 }}
                      >
                        <CheckCircle2
                          size={15}
                          className="flex-shrink-0 mt-0.5 text-blue-500 dark:text-blue-400"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {job.tech.map((tech) => (
                      <span key={tech} className="tag-gray text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Education card */}
        <AnimatedSection variant="fadeUp" delay={0.2} className="mt-6">
          <div className="card border border-slate-100 dark:border-slate-800 p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="text-slate-600 dark:text-slate-400 font-bold text-lg">T</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    B.Tech — Electrical and Computer Engineering
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-0.5">
                    TKM College of Engineering
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    Kollam, Kerala · 2022 — 2026
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-center tag">
                Pursuing
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
