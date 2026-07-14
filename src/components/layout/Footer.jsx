import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="section-divider py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-black text-sm">V</span>
          </div>
          <span className="text-white/40 text-sm font-medium">Vysakh P · Backend Engineer</span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: Github,   href: personalInfo.github   },
            { icon: Linkedin, href: personalInfo.linkedin },
            { icon: Mail,     href: `mailto:${personalInfo.email}` },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white hover:bg-white/8 transition-all">
              <Icon size={14} />
            </a>
          ))}
        </div>
        <p className="text-white/20 text-xs">© {new Date().getFullYear()} Vysakh P</p>
      </div>
    </footer>
  );
}
