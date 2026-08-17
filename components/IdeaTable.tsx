import Reveal from "./Reveal";

const ROWS: [string, string][] = [
  ["Plant", "Generator — LLM, NVIDIA NIM, custom OpenAI-compatible endpoint, or stub"],
  ["Sensor", "Evaluator — RuleEvaluator, LLMJudgeEvaluator, SimilarityEvaluator"],
  ["Error", "ErrorSignal — setpoint minus measured"],
  ["Controller", "Topology-blind Controller — rule-based or PID"],
  ["Actuator", "Corrector — PromptCorrector, strategy / context / output"],
  ["Setpoint", "SetPoint.target"],
  ["Stability / saturation", "StabilityGuard — max iterations, timeout"],
  ["Oscillation", "ConvergencePolicy"],
  ["Feedback path", "Plant output structurally reaches an actuator, policy on by default"],
];

export default function IdeaTable() {
  return (
    <section className="section" id="idea">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">The idea</div>
            <h2>Classical control theory maps onto Actuate one-to-one.</h2>
            <p>
              Signals are values on the wire and are never mutated. Events are facts in the log and are never
              rewritten. Iterations, status, and convergence progress are projections of the event stream — not a
              second mutable database.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="panel" style={{ overflow: "hidden" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: "34%" }}>Control theory</th>
                  <th>Actuate</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([a, b]) => (
                  <tr key={a}>
                    <td>{a}</td>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div style={{ marginTop: 20, fontSize: 14, color: "var(--text-faint)" }} className="mono">
            runtime vs history — an{" "}
            <span style={{ color: "var(--signal)" }}>ExecutionSession</span> is the live in-memory cursor; a{" "}
            <span style={{ color: "var(--signal)" }}>Run</span> is the persisted historical record.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
