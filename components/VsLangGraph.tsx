import Reveal from "./Reveal";

const ROWS: [string, string, string][] = [
  ["Product identity", "The graph / state machine", "ControlSystem → Specification → event-sourced Run"],
  ["LLM role", "A node among nodes", "A plant — and, on graphs, a specialist that may call tools"],
  ["Stopping", "Graph reaches an end node", "Convergence, exhaustion, oscillation, timeout, or token budget"],
  ["Quality", "Whatever you code", "Measured sensor / judge scores vs a setpoint"],
  ["Memory", "Checkpoint / thread state", "Retrieval of successful trajectories, Postgres-backed"],
  ["Parallelism", "Fan-out if you model it", "Ready nodes with no unfinished parents run together"],
  ["Audit", "Traces if you add them", "Append-only events + exportable run pack"],
];

export default function VsLangGraph() {
  return (
    <section className="section" id="compare">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Actuate vs LangGraph</div>
            <h2>LangGraph is a workflow runtime. Actuate is a control system with an optional graph inside it.</h2>
            <p>
              Use LangGraph for LangChain&apos;s graph SDK. Use Actuate for measure → correct → converge around
              generation, with a console that treats named runs as operations.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="panel" style={{ overflow: "hidden" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: "22%" }}></th>
                  <th style={{ width: "34%" }}>LangGraph</th>
                  <th>Actuate</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td>
                    <td style={{ color: "var(--text-faint)" }}>{r[1]}</td>
                    <td style={{ color: "var(--text)" }}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
