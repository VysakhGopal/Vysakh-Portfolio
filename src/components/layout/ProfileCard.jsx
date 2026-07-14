import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const navLinks = [
  { id: 'hero',           label: 'Home'          },
  { id: 'about',          label: 'About'         },
  { id: 'skills',         label: 'Skills'        },
  { id: 'experience',     label: 'Experience'    },
  { id: 'projects',       label: 'Projects'      },
  { id: 'certifications', label: 'Certifications'},
  { id: 'contact',        label: 'Contact'       },
];

const socials = [
  { icon: Github,   href: personalInfo.github,            label: 'GitHub'   },
  { icon: Linkedin, href: personalInfo.linkedin,          label: 'LinkedIn' },
  { icon: Mail,     href: `mailto:${personalInfo.email}`, label: 'Email'    },
  { icon: Phone,    href: `tel:${personalInfo.phone}`,    label: 'Phone'    },
];

function scrollTo(id) {
  const panel = document.getElementById('scroll-panel');
  const el    = document.getElementById(id);
  if (panel && el) panel.scrollTo({ top: el.offsetTop - 48, behavior: 'smooth' });
}

export default function ProfileCard({ activeSection }) {
  return (
    <div className="card-column">
      <div style={{ width: '100%' }}>

        {/* ── White profile card ── */}
        <motion.div
          className="profile-card"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          transition={{ duration: 0.55, ease: [0.25,0.1,0.25,1] }}
        >
          {/* Photo with graphic CSS treatment */}
          <div className="photo-area">
            <img src="/vysakh.jpg" alt="Vysakh P" />
            {/* Name tag on photo */}
            <div className="photo-name-tag">Vysakh P</div>
          </div>

          {/* Card body */}
          <div className="card-body">
            <div className="card-name">Vysakh P</div>

            {/* Accent dot */}
            <div className="card-accent-dot">
              <div style={{ width:8, height:8, borderRadius:'50%', background:'#fff' }} />
            </div>

            <p className="card-bio">
              A Backend Software Engineer building scalable systems with .NET Core, FastAPI and AI.
            </p>

            {/* Socials */}
            <div className="card-socials">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="card-social-btn"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={13} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Nav ── */}
        <nav className="card-nav">
          {navLinks.map(({ id, label }, i) => (
            <motion.button
              key={id}
              onClick={() => scrollTo(id)}
              className={`nav-btn ${activeSection === id ? 'active' : ''}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1,  x: 0  }}
              transition={{ delay: 0.06 * i, duration: 0.3 }}
            >
              <span className="nav-dot" />
              {label}
            </motion.button>
          ))}
        </nav>

        {/* Footer note */}
        <p style={{ fontSize:10, color:'rgba(255,255,255,0.18)', textAlign:'center', marginTop:16 }}>
          © {new Date().getFullYear()} Vysakh P
        </p>
      </div>
    </div>
  );
}
