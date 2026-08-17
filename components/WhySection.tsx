import Reveal from "./Reveal";

const ROWS = [
  ["Generate once and hope", "Iterate until a measurable setpoint is met"],
  ["Prompt is the product", "The control system is the product"],
  ["Hidden retry wrappers", "Immutable signals and append-only events"],
  ["Graph = the application", "Graph = topology inside a versioned specification"],
  ["Chat UI", "Industrial control console"],
];

export default function WhySection() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Why Actuate</div>
            <h2>If you want stability, gain, and convergence around model output — not just a graph of tools.</h2>
            <p>
              A DAG of tools calls for a workflow engine. A conversation calls for a chat product. Actuate is for
              teams that need oscillation detection and a measured path to “good enough,” every run.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="panel" style={{ overflow: "hidden" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: "50%" }}>Typical stack</th>
                  <th>Actuate</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td>
                    <td style={{ color: "var(--text)" }}>{r[1]}</td>
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
