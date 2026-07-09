function SectionHeader({ eyebrow, title, highlight, children, centered = false }) {
  return (
    <header className={`mb-16 ${centered ? 'text-center mx-auto' : ''}`}>
      {eyebrow ? (
        <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}>
          <span className="h-px w-12 bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-secondary">{eyebrow}</span>
        </div>
      ) : null}
      <h1 className="font-bold md:font-bold text-3xl md:text-4xl text-on-surface leading-tight tracking-normal">
        {title} {highlight ? <span className="text-primary">{highlight}</span> : null}
      </h1>
      {children ? <p className={`text-on-surface-variant mt-6 leading-relaxed ${centered ? 'mx-auto' : ''} max-w-2xl`}>{children}</p> : null}
    </header>
  );
}

export default SectionHeader;