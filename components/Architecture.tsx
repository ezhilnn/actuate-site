import Reveal from "./Reveal";

const LAYERS = [
  ["actuate.domain", "Types — signals, events, topology, policy, registry", "I/O"],
  ["actuate.engine", "Walk topology, invoke capabilities, append events", "Control law, SQL, HTTP"],
  ["Controller", "Error + objective + history → control decision", "Graph traversal"],
  ["Scheduler", "Sequential / future parallel dispatch", "What to run"],
  ["RunStore", "Durable workspace / system / spec / event log", "Binary blobs"],
  ["EventSink", "Trace, persist, WebSocket, MLflow", "Orchestration"],
  ["CapabilityRegistry", "Discover and instantiate plugins", "Execution"],
];

const HIERARCHY = [
  { name: "Workspace", desc: "what the user is building in" },
  { name: "ControlSystem", desc: "what the user is building" },
  { name: "Specification", desc: "immutable snapshot: topology + policy + bindings" },
  { name: "Run", desc: "one execution, event-sourced" },
  { name: "Iteration", desc: "projection: one pass around the feedback path" },
];

export default function Architecture() {
  return (
    <section className="section" id="architecture">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Architecture</div>
            <h2>Frozen constraints. A clear boundary between what decides and what executes.</h2>
            <p>
              A graph is how topology is represented — NetworkX plus port-typed edges — and how the console runs
              multi-agent labs. It is not the aggregate root.
            </p>
          </Reveal>
        </div>

        {/* big picture stack */}
        <Reveal delay={0.08}>
          <div className="panel hud-corners" style={{ padding: "32px 28px", overflow: "hidden" }}>
            <BigPictureDiagram />
          </div>
        </Reveal>

        {/* domain hierarchy */}
        <Reveal delay={0.14}>
          <div style={{ marginTop: 40 }}>
            <div className="mono" style={{ fontSize: 12, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              Domain hierarchy
            </div>
            <div className="hierarchy-row">
              {HIERARCHY.map((h, i) => (
                <div key={h.name} style={{ display: "flex", alignItems: "center" }}>
                  <div className="hierarchy-node">
                    <div className="mono" style={{ fontSize: 13.5, color: "var(--signal)", fontWeight: 600 }}>
                      {h.name}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-faint)", marginTop: 4 }}>{h.desc}</div>
                  </div>
                  {i < HIERARCHY.length - 1 && (
                    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" className="hierarchy-arrow">
                      <path d="M0 7H26M26 7L20 1M26 7L20 13" stroke="var(--border-bright)" strokeWidth="1.4" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* layer responsibilities */}
        <Reveal delay={0.2}>
          <div style={{ marginTop: 48 }}>
            <div className="mono" style={{ fontSize: 12, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              Layer responsibilities
            </div>
            <div className="panel" style={{ overflow: "hidden" }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Responsibility</th>
                    <th>Not responsible for</th>
                  </tr>
                </thead>
                <tbody>
                  {LAYERS.map((l) => (
                    <tr key={l[0]}>
                      <td>{l[0]}</td>
                      <td>{l[1]}</td>
                      <td style={{ color: "var(--text-faint)" }}>{l[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .hierarchy-row { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; }
        .hierarchy-node {
          border: 1px solid var(--border-bright);
          border-radius: var(--radius);
          padding: 12px 16px;
          background: var(--panel);
          min-width: 150px;
          transition: border-color .2s ease, transform .2s ease;
        }
        .hierarchy-node:hover { border-color: var(--signal); transform: translateY(-2px); }
        .hierarchy-arrow { flex-shrink: 0; margin: 0 2px; }
      `}</style>
    </section>
  );
}

function BigPictureDiagram() {
  const boxes = [
    { label: "Presentation", sub: "React console · FastAPI · WebSocket" },
    { label: "ControlSystem", sub: "Specification (immutable, versioned) → Topology" },
    { label: "ExecutionEngine", sub: "walks topology · fans events to sinks · Controller + Scheduler" },
  ];
  const signals = ["Plant", "Sensor", "Merge", "Actuator"];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
      {boxes.map((b, i) => (
        <div key={b.label} style={{ width: "100%", maxWidth: 560 }}>
          <div className="bp-box">
            <div className="mono" style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>
              {b.label}
            </div>
            <div style={{ fontSize: 12.5, color: "var(--text-faint)", marginTop: 4 }}>{b.sub}</div>
          </div>
          <DownArrow />
        </div>
      ))}

      <div className="mono" style={{ fontSize: 11.5, color: "var(--text-faint)", marginBottom: 8 }}>
        signals on ports
      </div>
      <DownArrow />

      <div className="bp-signals">
        {signals.map((s) => (
          <div key={s} className="bp-signal-box">
            {s}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, color: "var(--signal)" }}>
        <span className="mono" style={{ fontSize: 12 }}>↺ feedback</span>
      </div>

      <DownArrow color="var(--signal)" />

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginTop: 4 }}>
        <span className="tag">EventLog → Postgres</span>
        <span className="tag">OpenTelemetry</span>
        <span className="tag">live UI</span>
      </div>

      <style>{`
        .bp-box {
          border: 1px solid var(--border-bright);
          border-radius: var(--radius);
          padding: 16px 20px;
          background: var(--panel-2);
          text-align: center;
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .bp-box:hover { border-color: var(--signal); box-shadow: 0 0 24px -8px var(--signal-line); }
        .bp-signals { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 4px; }
        .bp-signal-box {
          font-family: var(--mono);
          font-size: 12.5px;
          padding: 10px 18px;
          border: 1px solid var(--signal-line);
          background: var(--signal-soft);
          color: var(--signal);
          border-radius: var(--radius);
          transition: transform .2s ease;
        }
        .bp-signal-box:hover { transform: translateY(-3px); }
      `}</style>
    </div>
  );
}

function DownArrow({ color = "var(--border-bright)" }: { color?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "6px 0" }}>
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
        <path d="M7 0V20M7 20L1 14M7 20L13 14" stroke={color} strokeWidth="1.4" />
      </svg>
    </div>
  );
}
