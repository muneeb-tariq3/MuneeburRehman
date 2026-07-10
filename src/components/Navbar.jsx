import { NavLink } from "react-router-dom";
import { useState } from "react";
import { navItems } from "../data/portfolio";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
      isActive
        ? "text-primary border-b-2 border-primary pb-1"
        : "text-on-surface-variant hover:text-primary"
    }`;

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-outline/10 bg-surface/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-10">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Muneeb Tariq
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Resume + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              className="hidden rounded-lg bg-primary px-6 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-on-primary transition-all duration-300 hover:bg-primary/80 active:scale-95 md:inline-flex"
            >
              Resume
            </a>

            <button
              type="button"
              className="rounded-lg p-2 text-primary transition hover:bg-white/5 md:hidden"
              aria-label="Open navigation"
              onClick={() => setOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 z-[70] w-80 max-w-[86vw] border-l border-outline/10 bg-surface-container/95 p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Navigation
            </h2>

            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-on-surface-variant">
              Senior Systems Engineer
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-on-surface transition hover:bg-white/5"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center rounded-lg px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-primary/20 text-primary"
                    : "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
                }`
              }
            >
              <span className="material-symbols-outlined mr-4">
                {item.icon}
              </span>

              <span className="text-sm font-medium uppercase tracking-[0.15em]">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Navbar;