function Footer() {
  return (
    <footer className="relative z-10 border-t border-outline/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-on-surface-variant md:flex-row md:px-8 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em]">
          MUNEEB / Obsidian Engineering
        </p>

        <p className="text-xs font-medium">
          Built with React + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;