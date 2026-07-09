function TerminalLine({ number, children }) {
  return (
    <div className="flex min-w-max">
      <span className="text-outline select-none w-8 text-right mr-4">{number}</span>
      <span>{children}</span>
    </div>
  );
}

function Home({ exp }) {
  return (
    <main className="relative z-10 pt-32 pb-8 px-6 md:px-8 lg:px-10 max-w-7xl mx-auto w-full">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-10rem)]">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="status-pulse status-completed" />
            <span className="font-mono text-xs text-secondary uppercase tracking-widest">System Architect</span>
          </div>
          <h1 className="font-bold md:font-bold text-3xl md:text-4xl text-on-surface leading-tight tracking-normal">
            Architecting
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Resilient</span> Systems.
          </h1>
          <p className="font-normal text-base text-on-surface-variant max-w-lg">
            Specialized in high-availability infrastructure and refined digital experiences. Building robust solutions that
            scale gracefully under pressure with {exp}.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="/projects"
              className="bg-primary text-on-primary px-6 py-3 rounded font-mono text-xs hover:bg-primary-fixed active:scale-95 transition-all"
            >
              Explore Work
            </a>
            <a
              href="https://github.com/muneeb-tariq3"
              className="bg-transparent border border-outline-variant text-on-surface px-6 py-3 rounded font-mono text-xs hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-95 transition-all flex items-center gap-2"
            >
              View GitHub <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 mt-6 lg:mt-0 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
          <div className="relative bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[400px]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-outline-variant/20 bg-surface-container/50">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-error-container border border-error/50" />
                <span className="w-3 h-3 rounded-full bg-tertiary-container border border-tertiary/50" />
                <span className="w-3 h-3 rounded-full bg-secondary-container border border-secondary/50" />
              </div>
              <div className="font-mono text-[11px] text-outline">muneeb@system-arch: ~</div>
              <div className="w-4" />
            </div>
            <div className="p-4 font-mono text-sm text-on-surface-variant overflow-auto terminal-scroll flex-grow">
              <TerminalLine number="1">
                <span className="text-secondary">const</span> <span className="text-primary-fixed">infrastructure</span>{' '}
                <span className="text-on-surface">=</span> <span className="text-secondary">new</span>{' '}
                <span className="text-tertiary">CloudArchitecture</span>({'{'}
              </TerminalLine>
              <TerminalLine number="2">
                <span className="ml-4 text-on-background">provider:</span> <span className="text-error">'aws'</span>,
              </TerminalLine>
              <TerminalLine number="3">
                <span className="ml-4 text-on-background">region:</span> <span className="text-error">'global-edge'</span>,
              </TerminalLine>
              <TerminalLine number="4">
                <span className="ml-4 text-on-background">resiliency:</span>{' '}
                <span className="text-primary-fixed">Level.MAXIMUM</span>,
              </TerminalLine>
              <TerminalLine number="5">
                <span className="ml-4 text-on-background">observability:</span>{' '}
                <span className="text-secondary">true</span>,
              </TerminalLine>
              <TerminalLine number="6">
                <span className="ml-4 text-on-background">clusters:</span> [
                <span className="text-error">'api'</span>, <span className="text-error">'worker'</span>,{' '}
                <span className="text-error">'edge'</span>],
              </TerminalLine>
              <TerminalLine number="7">{'});'}</TerminalLine>
              <TerminalLine number="8">
                <span className="text-outline">// health check</span>
              </TerminalLine>
              <TerminalLine number="9">
                infrastructure.<span className="text-primary">deploy</span>().<span className="text-secondary">status</span>();
              </TerminalLine>
              <div className="mt-6 border border-outline-variant/20 bg-surface-container/40 rounded-lg p-4">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest">
                  <span className="text-secondary">System Health</span>
                  <span className="text-on-surface">99.98%</span>
                </div>
                <div className="mt-3 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-gradient-to-r from-primary to-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;