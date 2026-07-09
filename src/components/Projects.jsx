import { projects } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import StatusDot from './StatusDot';

function Projects() {
  return (
    <main className="relative z-10 pt-32 pb-8 px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
      <SectionHeader eyebrow="Portfolio Repository v2.0.4" title="Technical Deep Dives &" highlight="Case Studies">
        A curated selection of architecture-first projects focusing on full-stack development, AI integration, and systems
        engineering.
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.title} className="glass-card hover-glow p-6 flex flex-col h-full rounded-xl">
            <div className="flex justify-between items-start mb-6 gap-4">
              <div>
                <span className="font-mono text-[10px] text-outline uppercase mb-1 block">{project.category}</span>
                <h3 className="font-bold text-xl text-on-surface">{project.title}</h3>
              </div>
              <span className="material-symbols-outlined text-primary text-xl">{project.icon}</span>
            </div>
            <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-surface-container-highest text-on-surface-variant font-mono text-[11px] rounded uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/10 gap-3">
              <div className="flex items-center gap-2">
                <StatusDot tone={project.statusTone} />
                <span className="font-mono text-[11px] text-secondary">{project.status}</span>
              </div>
              <a className="text-primary hover:underline font-mono text-[11px] uppercase tracking-normal" href="#">
                Read Case Study -&gt;
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;