import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative z-10 border-t border-outline-variant/20 bg-surface-container-lowest py-16 text-on-surface-variant font-sans">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:grid-cols-2 md:grid-cols-3 md:px-8 lg:px-10">
        
        {/* Left Column: Bio & Socials */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-wide text-on-surface drop-shadow-[0_0_8px_rgba(192,193,255,0.2)]">
             Muneeb ur Rehman
          </h2>
          <p className="text-sm leading-relaxed text-on-surface-variant max-w-sm">
            Software Engineer with 2+ years building production-grade Landing Pages, CLI Tools, and scalable Web Experiences in Python, React.JS, Typescript, and Vue.JS.
          </p>
          
          {/* Social Icons mapped to Theme */}
          <div className="mt-2 flex gap-3">
            {/* Briefcase Icon */}
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H9a2 2 0 0 0-2 2v2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2z"/><path d="M7 6h10"/><path d="M3 11h18"/></svg>
            </a>
            {/* Mail Icon */}
            <a href="mailto:muneebtariq841@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            {/* Code/Bracket Icon */}
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </a>
          </div>
        </div>

        {/* Middle Column: Navigation */}
        <div className="flex flex-col gap-4 md:pl-12">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-outline">
            Navigate
          </h3>
          <ul className="flex flex-col gap-3 text-sm font-medium text-on-surface/90">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/skills" className="hover:text-primary transition-colors">Skills</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/education" className="hover:text-primary transition-colors">Education</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Right Column: Contact & CTA */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-outline">
            Contact
          </h3>
          <div className="flex flex-col gap-1 text-sm font-medium text-on-surface/90">
            <a href="mailto:muneebtariq841@gmail.com" className="hover:text-primary transition-colors">
              muneebtariq841@gmail.com
            </a>
            <p className="text-on-surface-variant">Islamabad Capital Territory, Pakistan</p>
          </div>

          {/* Action Buttons with Theme System Colors */}
          <div className="mt-2 flex flex-col gap-3 max-w-xs">
            <Link to="/contact" className="flex items-center justify-center gap-2 rounded-lg border border-secondary/30 bg-secondary-container/10 px-4 py-2.5 text-sm font-medium text-secondary hover:bg-secondary-container/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 3.42-2 3.42s2.16-.5 3.42-2c1.24-1.46 1.45-3.37 1.45-3.37s-1.91.21-3.37 1.45z"/><path d="M12 12s-5.6 4.6-7.5 6c0 0 1.5-3.5 3-5.5l-3-3 4.5-1L11 4l1 4.5 3.5 3-3.5 1z"/><path d="m19 5-3 3M14 3l-1 1M21 10l-1-1M17 2l4 4"/></svg>
               Book a Free Consultation
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;