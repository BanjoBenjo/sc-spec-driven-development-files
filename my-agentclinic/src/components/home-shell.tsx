export function HomeShell() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">AgentClinic</p>
          <a className="brand" href="#top">
            Clinical operations for AI agents
          </a>
        </div>
        <nav className="topnav" aria-label="Primary">
          <a href="/">Home</a>
          <span aria-disabled="true">Clinic</span>
          <span aria-disabled="true">Dashboard</span>
        </nav>
      </header>

      <main id="top" className="shell-main">
        <section className="panel shell-frame" aria-label="Application content" />
      </main>
    </div>
  )
}
