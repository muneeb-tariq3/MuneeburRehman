import { certifications, credentials } from '../data/portfolio';
import SectionHeader from './SectionHeader';

function Education() {
  return (
    <main className="relative z-10 pt-32 pb-8 max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
      <SectionHeader eyebrow="Academic & Professional Credentials" title="Education &" highlight="Certifications">
        A solid academic foundation combined with a rigorous journey of self-taught mastery. Specializing in building
        scalable distributed systems as a Full-Stack Developer and DevOps Engineer.
      </SectionHeader>

      <section className="mb-28">
        <div className="flex items-center gap-3 mb-10 border-b border-outline-variant/30 pb-4">
          <span className="material-symbols-outlined text-primary">school</span>
          <h2 className="font-bold text-2xl text-on-surface">Academic Timeline</h2>
        </div>
        <div className="relative pl-12 space-y-12">
          <div className="timeline-line" />
          {credentials.map((item) => (
            <article key={item.title} className={`relative ${item.active ? '' : 'opacity-60 grayscale-[0.4]'}`}>
              <div className={`timeline-dot top-2 ${item.active ? '' : 'border-outline-variant'}`} />
              <div className={item.active ? 'glass-panel p-6 rounded-xl hairline-border' : 'border border-dashed border-outline-variant/50 p-6 rounded-xl bg-surface-container/20'}>
                <span className="font-mono text-xs text-secondary bg-secondary/10 px-2 py-1 rounded uppercase">{item.period}</span>
                <h3 className="text-xl font-bold text-on-surface mt-3">{item.title}</h3>
                <p className="text-on-surface-variant mt-2">{item.place}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono bg-surface-container px-2 py-1 rounded border border-outline-variant/30 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-10 border-b border-outline-variant/30 pb-4">
          <span className="material-symbols-outlined text-primary">workspace_premium</span>
          <h2 className="font-bold text-2xl text-on-surface">Certification Matrix</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map(([title, text]) => (
            <article key={title} className="cert-card glass-panel rounded-xl p-6">
              <span className="material-symbols-outlined text-secondary mb-6">verified</span>
              <h3 className="font-bold text-xl text-on-surface mb-3">{title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Education;