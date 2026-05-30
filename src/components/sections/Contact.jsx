import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Send, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { personalInfo } from '../../data/portfolio';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: 'Best way to reach me',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    description: 'Available on weekdays',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vysakhp',
    href: personalInfo.linkedin,
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/vysakhp',
    href: personalInfo.github,
    description: 'See my code',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire this to a form service like Formspree or EmailJS
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-950">
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Let's work together"
          subtitle="I'm open to backend engineering roles, internships, and interesting projects. Reach out and let's talk."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          {/* Left: Contact links */}
          <div>
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <div className="space-y-4">
                {contactLinks.map(({ icon: Icon, label, value, href, description }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 group transition-all duration-200"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60 transition-colors duration-200">
                      <Icon size={17} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate mt-0.5">
                        {value}
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="flex-shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200"
                    />
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>

            {/* Location */}
            <AnimatedSection variant="fadeUp" delay={0.3} className="mt-6">
              <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
                <MapPin size={14} />
                <span>Based in Kerala, India · Open to remote</span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Contact form */}
          <AnimatedSection variant="fadeLeft" delay={0.2}>
            <div className="card border border-slate-100 dark:border-slate-800 p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-5">
                Send a message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mb-4">
                    <Send size={20} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white">Message sent!</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about the opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-500 transition-colors duration-200 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full btn-primary justify-center"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Send size={15} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
