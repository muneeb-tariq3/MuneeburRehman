import SectionHeader from './SectionHeader';
import pic from '../assets/pic.png';

const services = [
  ['layers', 'Full-Stack Delivery', 'Production applications with thoughtful UX, robust APIs, and maintainable front-to-back architecture.'],
  ['cloud', 'Infrastructure Design', 'Deployment pipelines, cloud environments, and observability patterns built for reliability under pressure.'],
  ['schema', 'Systems Thinking', 'Clear domain models, resilient data flows, and sharp documentation for teams that need durable decisions.'],
];

function About({ exp }) {
  return (
    <main className="relative z-10 pt-32 pb-8 max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-10 flex flex-col gap-y-28">
      <section className="pt-16 pb-8 border-l border-white/5 pl-8 md:pl-12 ml-4">
        <div className="flex items-center gap-6 mb-6">
         <img
            src={pic}
            alt="Profile"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-primary"
          />
          <h1 className="font-bold md:font-bold text-3xl md:text-4xl text-on-surface tracking-normal">
            About Me<span className="text-primary">.</span>
          </h1>
        </div>
        <p className="font-mono text-sm text-on-surface-variant max-w-2xl border-l-2 border-primary/50 pl-4 py-1">
          &gt; Get to know who I am...
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-surface-container-low border border-white/10 rounded-xl p-8 backdrop-blur-sm relative group overflow-hidden hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined absolute top-4 right-4 text-[64px] opacity-10 group-hover:opacity-20 transition-opacity">
            fingerprint
          </span>
          <h2 className="font-bold text-2xl text-on-surface mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-xl">person</span>
            Who I Am
          </h2>
          <div className="space-y-4 text-on-surface-variant leading-relaxed">
            <p>
              Hi, I'm Muneeb-ur-Rehman, a 16-year-old Computer Science student and Frontend Developer from Pakistan. I enjoy creating modern, responsive websites and turning ideas into clean, user-friendly digital experiences.
            </p>
            <p>
             Beyond web development, I'm always learning about DevOps, Linux, AI, and Cybersecurity to grow my skills. I believe every project is a chance to learn something new and build solutions that make a difference.
            </p>
          </div>
        </article>

        <article className="bg-surface-container-low border border-white/10 rounded-xl p-8 backdrop-blur-sm relative group overflow-hidden hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined absolute top-4 right-4 text-[64px] opacity-10 group-hover:opacity-20 transition-opacity">
            rocket_launch
          </span>
          <h2 className="font-bold text-2xl text-on-surface mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-xl">flag</span>
            My Mission
          </h2>
          <div className="space-y-4 text-on-surface-variant leading-relaxed">
            <p>
             My goal is to grow into a skilled software engineer by learning, building, and improving every day. I want to create technology that helps people, solves real problems, and inspires me to keep pushing my limits.
            </p>
            <p>
              I aim to prove complex enterprise systems can be aesthetically and highly performant. I'm committed to learning new technologies, solving real-world problems, and creating digital experiences that are both useful and impactful.
            </p>
          </div>
        </article>
      </section>

      <section>
        <SectionHeader eyebrow="What I Do" title="Engineering" highlight="Scope">
          Practical senior engineering across interfaces, services, and deployment systems.
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(([icon, title, text]) => (
            <article key={title} className="bg-surface-container-lowest border border-white/5 rounded-lg p-6 group hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors overflow-hidden">
                <span className="material-symbols-outlined text-primary">{icon}</span>
              </div>
              <h3 className="font-bold text-xl text-on-surface mb-3">{title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;