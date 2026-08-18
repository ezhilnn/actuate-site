import Reveal from "./Reveal";
import CodeBlock from "./CodeBlock";

const STEPS = [
  {
    n: "01",
    title: "Clone",
    body: "Grab the source. Swap the org for your fork if you haven't published a canonical repo yet.",
    code: `git clone https://github.com/actuate-ai/actuate.git\ncd actuate`,
  },
  {
    n: "02",
    title: "Postgres",
    body: "Actuate's production RunStore is Postgres, and only Postgres. Bring it up with Docker Compose.",
    code: `docker compose up -d postgres\n\n# unix\nexport DATABASE_URL=postgresql+psycopg://actuate:actuate@localhost:5432/actuate`,
  },
  {
    n: "03",
    title: "Install & boot the API",
    body: "Startup bootstraps Postgres idempotently — a default workspace, four control systems, specs, and provider base URLs. Existing API keys are never overwritten.",
    code: `pip install -e ".[ui,persistence,plants,dsl,dev]"\npython -m actuate.api`,
  },
  {
    n: "04",
    title: "Open the console",
    body: "Start the React frontend and open localhost:5173. Ctrl/Cmd + K opens the command palette.",
    code: `cd ui/frontend\nnpm install\nnpm run dev`,
  },
];

export default function QuickStart() {
  return (
    <section className="section" id="quickstart">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Quick start</div>
            <h2>Four steps from clone to a running control console.</h2>
            <p>Console API auth is on by default. Live LLM calls need a saved provider key under Settings.</p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gap: 20 }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="qs-row">
                <div className="qs-num mono">{s.n}</div>
                <div className="qs-line" aria-hidden={i === STEPS.length - 1} />
                <div className="panel hud-corners qs-panel">
                  <h3 style={{ fontSize: 17 }}>{s.title}</h3>
                  <p style={{ marginTop: 8, fontSize: 14.5 }}>{s.body}</p>
                  <div style={{ marginTop: 16 }}>
                    <CodeBlock label="shell" code={s.code} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div style={{ marginTop: 8, fontSize: 13.5 }} className="mono dim-text">
            re-run the seed anytime with <span style={{ color: "var(--signal)" }}>python -m actuate.persistence.bootstrap</span>{" "}
            or <span style={{ color: "var(--signal)" }}>actuate-bootstrap</span>.
          </div>
        </Reveal>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .qs-row { display: grid; grid-template-columns: 44px 1fr; gap: 4px 20px; position: relative; }
        .qs-num {
          font-size: 13px; color: var(--signal); background: var(--panel);
          border: 1px solid var(--signal-line); width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; z-index: 1;
        }
        .qs-line { display: none; }
        .qs-panel { padding: 22px 24px; margin-bottom: 4px; }
        @media (min-width: 640px) {
          .qs-row { grid-template-columns: 40px 1fr; }
        }
      ` }} />
    </section>
  );
}