import { skills } from '../data/portfolio';
import SectionHeader from './SectionHeader';

function Skills() {
  return (
    <main className="relative z-10 pt-32 pb-8 max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
      <header className="mb-8 space-y-2 relative overflow-hidden p-6 glass-card rounded-xl">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="status-pulse status-completed" />
            <span className="font-mono text-xs text-secondary tracking-widest uppercase">System Capabilities</span>
          </div>
          <h1 className="font-bold md:font-bold text-3xl md:text-4xl text-primary leading-none tracking-normal">
            Engineering
            <br />
            Expertise
          </h1>
          <p className="max-w-2xl text-on-surface-variant mt-2">
            A comprehensive overview of my technical stack, focusing on distributed systems, high-performance web
            architecture, and cloud infrastructure operations.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {skills.map((category) => (
          <section key={category.title} className={`${category.span} glass-card rounded-xl p-6 flex flex-col gap-6 border-t border-primary/20`}>
            <div className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
              <h2 className="font-mono text-xs text-primary uppercase tracking-widest">{category.title}</h2>
              <span className="material-symbols-outlined text-primary text-xl">{category.icon}</span>
            </div>
            <div className="space-y-2">
              {category.items.map(([name, width, meta]) => (
                <div key={name} className="group">
                  <div className="flex justify-between items-end mb-2 gap-4">
                    <span className="font-mono text-on-surface font-medium">{name}</span>
                    <span className="font-mono text-xs text-secondary/70">{meta}</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary group-hover:bg-secondary transition-colors duration-500" style={{ width }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-24">
        <SectionHeader eyebrow="Operating Principles" title="Built For" highlight="Reliability" centered>
          Tooling, code, and architecture choices are selected for clarity, repeatability, and production safety.
        </SectionHeader>
      </section>
    </main>
  );
}

export default Skills;