import Reveal from "./Reveal";

const PROVIDERS: [string, string][] = [
  ["Stub", "Tests only (allow_stub). Not a console default"],
  ["OpenAI, Anthropic, Gemini, Groq, OpenRouter", "LiteLLM + env / Settings keys"],
  ["NVIDIA NIM", "https://integrate.api.nvidia.com/v1 + NVIDIA_API_KEY"],
  ["Ollama", "Local http://localhost:11434"],
  ["Custom", "Your URL + key + model, OpenAI chat-completions compatible"],
];

const TOOLS: [string, string][] = [
  ["web_search", "DuckDuckGo instant-answer search"],
  ["http_get", "GET a public https URL — private / loopback / metadata blocked, ~80KB cap"],
  ["recall_memory", "Similar past converged trajectories"],
  ["calculator", "Arithmetic"],
  ["utc_now", "UTC timestamp"],
  ["list_connections", "This node's parents/children"],
  ["handoff", "Structured packet for downstream nodes"],
];

export default function ModelsAndTools() {
  return (
    <section className="section" id="models">
      <div className="container">
        <div id="mt-grid" style={{ display: "grid", gap: 48 }}>
          <div>
            <Reveal>
              <div className="eyebrow">Models &amp; plants</div>
              <h2 style={{ marginTop: 14, fontSize: 24 }}>Bring any provider.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="panel" style={{ overflow: "hidden", marginTop: 24 }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Provider</th>
                      <th>How</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROVIDERS.map((r) => (
                      <tr key={r[0]}>
                        <td>{r[0]}</td>
                        <td>{r[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="eyebrow">Agent tools</div>
              <h2 style={{ marginTop: 14, fontSize: 24 }}>What a graph specialist can reach for.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="panel" style={{ overflow: "hidden", marginTop: 24 }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Tool</th>
                      <th>What it does</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TOOLS.map((r) => (
                      <tr key={r[0]}>
                        <td>{r[0]}</td>
                        <td>{r[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 980px) {
          #mt-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  );
}
