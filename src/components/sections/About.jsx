import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Lightbulb } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { timeline } from '../../data/portfolio';

const typeConfig = {
  education: {
    icon: GraduationCap,
    color: 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-500',
  },
  work: {
    icon: Briefcase,
    color: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400',
    dot: 'bg-emerald-500',
  },
  milestone: {
    icon: Lightbulb,
    color: 'bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400',
    dot: 'bg-violet-500',
  },
};

const stats = [
  { value: '1+', label: 'Year Experience' },
  { value: '2+', label: 'Projects Shipped' },
  { value: '40%', label: 'Query Optimization' },
  { value: '∞', label: 'Lines of Code' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text content */}
          <div>
            <SectionHeader
              label="About Me"
              title="Backend engineer with a passion for systems that scale"
              subtitle="I'm driven by the challenge of building software that works reliably at scale — from optimized database queries to clean API architecture."
            />

            <AnimatedSection variant="fadeUp" delay={0.3} className="mt-8 space-y-4">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Currently interning at <span className="font-semibold text-slate-800 dark:text-slate-200">Virtuosoft Technologies</span>, where I work on production healthcare applications. My day-to-day involves designing REST APIs with .NET Core, writing optimized stored procedures, and building systems that handle real-time healthcare data.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm pursuing Electrical and Computer Engineering at <span className="font-semibold text-slate-800 dark:text-slate-200">TKM College of Engineering</span>, which gives me a unique perspective on both hardware and software systems. Outside of backend work, I explore machine learning and data analytics.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I care deeply about code quality, clean architecture, and building things that last. I'm actively looking for backend engineering roles at product companies and startups where I can contribute meaningfully.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection variant="fadeUp" delay={0.4} className="mt-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 text-center"
                  >
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Timeline */}
          <div>
            <AnimatedSection variant="fadeLeft" delay={0.2}>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-8">
                Journey
              </h3>
            </AnimatedSection>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

              <div className="space-y-8">
                {timeline.map((item, index) => {
                  const config = typeConfig[item.type];
                  const Icon = config.icon;

                  return (
                    <AnimatedSection
                      key={index}
                      variant="fadeLeft"
                      delay={0.1 + index * 0.1}
                    >
                      <div className="relative flex gap-6">
                        {/* Icon */}
                        <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${config.color}`}>
                          <Icon size={16} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-2">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                              {item.year}
                            </span>
                          </div>
                          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
