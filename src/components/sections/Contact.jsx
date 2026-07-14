import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin, Github, MapPin, Send, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { personalInfo } from '../../data/portfolio';
import { EMAILJS_CONFIG } from '../../config/emailjs';

const contactLinks = [
  { icon: Mail,     label: 'Email',    value: personalInfo.email,                   href: `mailto:${personalInfo.email}` },
  { icon: Phone,    label: 'Phone',    value: personalInfo.phone,                   href: `tel:${personalInfo.phone}`    },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/vysakh-p-355944330', href: personalInfo.linkedin          },
  { icon: Github,   label: 'GitHub',   value: 'github.com/VysakhGopal',             href: personalInfo.github            },
];

// Status types
const STATUS = { IDLE: 'idle', SENDING: 'sending', SUCCESS: 'success', ERROR: 'error' };

export default function Contact() {
  const formRef                 = useRef(null);
  const [form, setForm]         = useState({ name: '', email: '', title: '', message: '' });
  const [status, setStatus]     = useState(STATUS.IDLE);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
      setStatus(STATUS.SUCCESS);
      setForm({ name: '', email: '', title: '', message: '' });
      // Reset to idle after 6 seconds
      setTimeout(() => setStatus(STATUS.IDLE), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg('Something went wrong. Please email me directly at ' + personalInfo.email);
      setStatus(STATUS.ERROR);
      setTimeout(() => setStatus(STATUS.IDLE), 8000);
    }
  };

  return (
    <section id="contact" className="section-divider py-24 lg:py-32">
      <div className="section-container">

        {/* Heading */}
        <AnimatedSection variant="fadeUp">
          <div className="mb-14">
            <h2 className="section-heading">LET'S WORK</h2>
            <h2 className="section-heading-ghost -mt-3">TOGETHER</h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* ── Left: Contact links ── */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-sm">
              I'm open to backend engineering roles, internships, and interesting projects.
              Fill out the form or reach me directly — I respond within 24 hours.
            </p>

            <div className="space-y-3 mb-8">
              {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  whileHover={{ x: 4, borderColor: 'rgba(37,99,235,0.35)' }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-400 transition-colors duration-200"
                    style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-white/25">{label}</p>
                    <p className="text-sm font-medium text-white/60 group-hover:text-white truncate mt-0.5 transition-colors duration-200">{value}</p>
                  </div>
                  <ArrowRight size={13} className="flex-shrink-0 text-white/15 group-hover:text-blue-400 transition-colors duration-200" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-white/20">
              <MapPin size={12} />
              <span>Malappuram, Kerala · Open to remote opportunities</span>
            </div>
          </AnimatedSection>

          {/* ── Right: EmailJS form ── */}
          <AnimatedSection variant="fadeLeft" delay={0.15}>
            <div
              className="p-7 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="text-white font-bold text-xl mb-1">Send a message</h3>
              <p className="text-white/30 text-xs mb-7">
                Directly to my Gmail — no backend, no delays.
              </p>

              <AnimatePresence mode="wait">

                {/* ── Success state ── */}
                {status === STATUS.SUCCESS && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                      style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
                    >
                      <CheckCircle2 size={28} className="text-emerald-400" />
                    </motion.div>
                    <p className="font-bold text-white text-xl">Message sent!</p>
                    <p className="text-white/40 text-sm mt-2 max-w-xs leading-relaxed">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                {/* ── Error state ── */}
                {status === STATUS.ERROR && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                      style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)' }}
                    >
                      <AlertCircle size={28} className="text-red-400" />
                    </div>
                    <p className="font-bold text-white text-lg">Couldn't send</p>
                    <p className="text-white/40 text-xs mt-2 max-w-xs leading-relaxed">{errorMsg}</p>
                  </motion.div>
                )}

                {/* ── Form (idle + sending) ── */}
                {(status === STATUS.IDLE || status === STATUS.SENDING) && (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-white/25 mb-1.5 uppercase tracking-wider">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"               // {{name}} in template
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          disabled={status === STATUS.SENDING}
                          className="contact-input disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-white/25 mb-1.5 uppercase tracking-wider">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"              // {{email}} in template
                          required
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          disabled={status === STATUS.SENDING}
                          className="contact-input disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-white/25 mb-1.5 uppercase tracking-wider">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="title"                // {{title}} in template subject line
                        required
                        value={form.title}
                        onChange={e => setForm({ ...form, title: e.target.value })}
                        placeholder="e.g. Job opportunity / Collaboration"
                        disabled={status === STATUS.SENDING}
                        className="contact-input disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-white/25 mb-1.5 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        name="message"              // {{message}} in template
                        required
                        rows={4}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell me about the opportunity..."
                        disabled={status === STATUS.SENDING}
                        className="contact-input resize-none disabled:opacity-50"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === STATUS.SENDING}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 4px 20px rgba(37,99,235,0.3)' }}
                      whileHover={status !== STATUS.SENDING ? { scale: 1.01, boxShadow: '0 8px 30px rgba(37,99,235,0.45)' } : {}}
                      whileTap={status !== STATUS.SENDING ? { scale: 0.99 } : {}}
                    >
                      {status === STATUS.SENDING ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}

              </AnimatePresence>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
