import Reveal from "./Reveal";

const TREE = `actuate/
  domain/          ControlSystem, Specification, Topology, Signals, Events, ExecutionSession
  engine/          ExecutionEngine, controllers, fusion, scheduler, NetworkX helper
  plants/          StubGenerator, LiteLLMAdapter (OpenAI, Anthropic, Gemini, Groq,
                    OpenRouter, NVIDIA NIM, Ollama, custom OpenAI-compatible)
  sensors/         RuleEvaluator, LLMJudgeEvaluator, SimilarityEvaluator
  actuators/       PromptCorrector, OutputCorrector, ContextCorrector, StrategyCorrector
  retry/           Exponential, diversity, temperature sweep, model switch, perturbation
  memory/          Vector store + cosine retriever + learning graph
  persistence/     InMemoryRunStore, SqlRunStore (Postgres), bootstrap seed
  telemetry/       Tracing / persistence / MLflow event sinks
  dsl/             YAML → Specification
  plugins/         Built-in capability registration
  graphs/          Specialist catalog, long prompts, DAG runner, agent tools
  api/             FastAPI + WebSocket control plane + console auth
ui/frontend/       React control console (Vite)
docs/architecture/ architecture.md
tests/             Engine, graphs, tools, API, bootstrap
docker-compose.yml Postgres 16`;

const RULES = [
  "Keep ControlSystem as the aggregate root — never promote Graph or Loop to product identity.",
  "Controllers stay topology-blind.",
  "Events remain append-only; signals remain immutable.",
  "New behavior ships as a capability, not a special case in ExecutionEngine.",
  "Postgres is the production RunStore — no SQLite as a product backend.",
];

export default function RepoAndContributing() {
  return (
    <section className="section" id="repo">
      <div className="container">
        <div id="rc-grid" style={{ display: "grid", gap: 48 }}>
          <div>
            <Reveal>
              <div className="eyebrow">Repository layout</div>
              <h2 style={{ marginTop: 14, fontSize: 24 }}>One tree, clearly separated concerns.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="code-block" style={{ marginTop: 24 }}>
                <div className="code-block-head">
                  <div className="code-block-dots"><span /><span /><span /></div>
                  <span className="code-block-label">tree</span>
                </div>
                <pre style={{ fontSize: 12.5 }}>{TREE}</pre>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="eyebrow">Contributing</div>
              <h2 style={{ marginTop: 14, fontSize: 24 }}>Five rules the architecture won&apos;t bend on.</h2>
              <p style={{ marginTop: 10 }}>
                Defects are welcome as issues. The architecture document itself is frozen — implementation and
                capabilities are where change belongs.
              </p>
            </Reveal>

            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              {RULES.map((r, i) => (
                <Reveal key={r} delay={0.05 + i * 0.04}>
                  <div className="rule-row">
                    <span className="rule-dot" />
                    <span style={{ fontSize: 14.5, color: "var(--text-dim)" }}>{r}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="panel hud-corners" style={{ padding: 24, marginTop: 48 }}>
            <div className="mono" style={{ fontSize: 12.5, color: "var(--signal)", marginBottom: 8 }}>
              on tokens
            </div>
            <p style={{ fontSize: 14 }}>
              Live calls take prompt and completion tokens from the provider via LiteLLM. If an endpoint returns
              zeros, Actuate falls back to a length-based heuristic so budgets still move. Graph totals sum every
              specialist and judge call, including tool rounds. This is not a billing-grade tokenizer.
            </p>
          </div>
        </Reveal>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        #rc-grid { grid-template-columns: 1fr; }
        .rule-row { display: flex; align-items: flex-start; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border); }
        .rule-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--signal); margin-top: 8px; flex-shrink: 0; box-shadow: 0 0 0 3px var(--signal-soft); }
        @media (min-width: 980px) {
          #rc-grid { grid-template-columns: 1.1fr 0.9fr; }
        }
      ` }} />
    </section>
  );
}