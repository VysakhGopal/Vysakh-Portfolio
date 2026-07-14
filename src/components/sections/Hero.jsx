import { motion } from 'framer-motion';
import { ArrowRight, Github, MapPin, Briefcase } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const item    = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25,0.1,0.25,1] } } };

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">

      {/* ── Background elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Big blue glow behind photo */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] h-[90vh] opacity-60"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(37,99,235,0.18) 0%, transparent 65%)' }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-64px)]">

          {/* ── Left: Text ── */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col justify-center py-16 lg:py-0">

            {/* Status badge */}
            <motion.div variants={item} className="mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)', color: '#93c5fd' }}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" />
                </span>
                Open to opportunities
              </span>
            </motion.div>

            {/* Big heading */}
            <motion.div variants={item} className="mb-2">
              <h1 className="font-black uppercase tracking-tighter text-white leading-none"
                style={{ fontSize: 'clamp(3.2rem,8vw,7rem)' }}>
                SOFTWARE
              </h1>
            </motion.div>
            <motion.div variants={item} className="mb-8">
              <h1 className="font-black uppercase tracking-tighter leading-none"
                style={{ fontSize: 'clamp(3.2rem,8vw,7rem)', color: 'rgba(255,255,255,0.1)' }}>
                ENGINEER
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.p variants={item} className="text-white/50 text-base leading-relaxed max-w-lg mb-8">
              {personalInfo.bio}
            </motion.p>

            {/* Meta */}
            <motion.div variants={item} className="flex flex-wrap gap-4 text-sm text-white/35 mb-9">
              <span className="flex items-center gap-1.5"><Briefcase size={13} className="text-blue-400" />Virtuosoft Technologies</span>
              <span className="flex items-center gap-1.5"><MapPin size={13} className="text-blue-400" />Malappuram, Kerala</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <motion.button onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 4px 24px rgba(37,99,235,0.35)' }}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(37,99,235,0.5)' }}
                whileTap={{ scale: 0.98 }}>
                View Projects <ArrowRight size={15} />
              </motion.button>
              <motion.a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white/70 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.98 }}>
                <Github size={15} /> GitHub Profile
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="flex gap-10 mt-12">
              {[
                { v: '1+',  l: 'Years Experience' },
                { v: '3+',  l: 'Projects Built'   },
                { v: '∞',   l: 'Lines of Code'    },
              ].map(({ v, l }) => (
                <div key={l}>
                  <p className="text-3xl font-black text-white tracking-tight">{v}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">{l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            className="relative flex items-end justify-center lg:justify-end h-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Geometric background shapes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Large circle */}
              <div className="w-[420px] h-[420px] rounded-full opacity-50"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.05) 60%, transparent 80%)' }} />
              {/* Arc line top */}
              <svg className="absolute top-10 right-10 w-32 h-32 opacity-30" viewBox="0 0 128 128" fill="none">
                <path d="M 10 64 A 54 54 0 0 1 118 64" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
              </svg>
              {/* Dot grid */}
              <svg className="absolute bottom-24 right-4 w-24 h-24 opacity-20" viewBox="0 0 96 96" fill="none">
                {[0,1,2,3].map(row => [0,1,2,3].map(col => (
                  <circle key={`${row}-${col}`} cx={col*24+12} cy={row*24+12} r="2.5" fill="white"/>
                )))}
              </svg>
              {/* Diagonal line bottom-left */}
              <svg className="absolute bottom-16 left-12 w-20 h-4 opacity-25" viewBox="0 0 80 16">
                <line x1="0" y1="8" x2="80" y2="8" stroke="white" strokeWidth="1.5"/>
                <line x1="0" y1="14" x2="60" y2="14" stroke="white" strokeWidth="1"/>
              </svg>
            </div>

            {/* Photo container */}
            <div className="relative w-[300px] sm:w-[360px] lg:w-[400px] aspect-[3/4]">
              {/* Photo with CSS duotone treatment */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                style={{ boxShadow: '0 0 80px rgba(37,99,235,0.25), 0 40px 80px rgba(0,0,0,0.6)' }}>

                {/* The actual photo */}
                <img
                  src="/vysakh-photo.png"
                  alt="Vysakh P"
                  className="w-full h-full object-cover object-top"
                  style={{
                    filter: 'contrast(1.15) brightness(0.9) saturate(0.2)',
                  }}
                />

                {/* Blue duotone color wash */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(37,99,235,0.35) 0%, rgba(15,23,42,0.2) 50%, rgba(8,8,16,0.7) 100%)', mixBlendMode: 'color' }} />

                {/* Bottom dark fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32"
                  style={{ background: 'linear-gradient(to top, #080810 0%, transparent 100%)' }} />
              </div>

              {/* Floating badge — tech stack */}
              <motion.div
                className="absolute -left-6 top-1/3 px-3 py-2 rounded-xl text-xs font-bold"
                style={{ background: 'rgba(37,99,235,0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                ASP.NET Core
              </motion.div>

              <motion.div
                className="absolute -right-6 top-1/2 px-3 py-2 rounded-xl text-xs font-bold"
                style={{ background: 'rgba(124,58,237,0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                FastAPI
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-1/4 px-3 py-2 rounded-xl text-xs font-bold"
                style={{ background: 'rgba(16,185,129,0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                SQL Server
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
