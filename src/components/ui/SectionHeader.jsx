import AnimatedSection from './AnimatedSection';

export default function SectionHeader({ label, title, subtitle, centered = false }) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <AnimatedSection variant="fadeUp" delay={0}>
        <p className="section-label">{label}</p>
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <h2 className="section-title">{title}</h2>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection variant="fadeUp" delay={0.2}>
          <p className={`section-subtitle ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
        </AnimatedSection>
      )}
    </div>
  );
}
