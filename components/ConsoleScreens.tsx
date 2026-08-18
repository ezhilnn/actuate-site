import Reveal from "./Reveal";

const SCREENS = [
  ["Dashboard", "Dense KPIs, charts, status/provider mix, template sizes, searchable activity"],
  ["New Run", "Multi-agent graph (default) or control loop; named runs"],
  ["Live Session", "Loop I/O; selected iteration opens as the detail panel"],
  ["Graph run", "Tools + I/O logs; rerun a node as a revision; export JSON pack"],
  ["Runs", "Named loop + graph history with in-place search"],
  ["Loop Designer", "Drag-drop specialists, labs, cursor zoom, pan, minimap"],
  ["Benchmarks", "Cohort stats plus compare two named runs"],
  ["Memory", "Trajectories in Postgres when DATABASE_URL is set"],
  ["Models", "Provider catalog + full agent system prompts"],
  ["Plugins", "Capability registry"],
  ["Observability", "Score, tokens, latency, status mix from activity"],
  ["Settings", "Persist keys + custom bases to Postgres"],
];

export default function ConsoleScreens() {
  return (
    <section className="section" id="console">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Control console</div>
            <h2>Twelve screens for treating named runs as operations, not chat history.</h2>
          </Reveal>
        </div>

        <div className="cs-grid">
          {SCREENS.map(([title, desc], i) => (
            <Reveal key={title} delay={(i % 4) * 0.05}>
              <div className="panel cs-card">
                <div className="mono" style={{ fontSize: 13.5, color: "var(--text)", fontWeight: 600 }}>
                  {title}
                </div>
                <p style={{ marginTop: 8, fontSize: 13.5 }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cs-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .cs-card { padding: 20px; transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease; }
        .cs-card:hover { border-color: var(--signal); transform: translateY(-3px); box-shadow: 0 12px 30px -14px var(--signal-line); }
        @media (min-width: 640px) { .cs-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 980px) { .cs-grid { grid-template-columns: 1fr 1fr 1fr; } }
      ` }} />
    </section>
  );
}