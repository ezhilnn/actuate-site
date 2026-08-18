import Reveal from "./Reveal";

const STEPS_LINEAR = ["prompt", "model", "response"];
const STEPS_LOOP = ["setpoint", "plant", "sensor", "error", "controller", "actuator"];

export default function FlowContrast() {
  return (
    <section className="section" id="flow">
      <div className="container">
        <Reveal>
          <div className="eyebrow">The shift</div>
          <h2 style={{ marginTop: 14, fontSize: "clamp(24px,3vw,32px)", maxWidth: 640 }}>
            Traditional AI stops at a response. Actuate keeps going until quality is measured, not assumed.
          </h2>
        </Reveal>

        <div style={{ display: "grid", gap: 24, marginTop: 48 }} id="flow-grid">
          <Reveal delay={0.05}>
            <div className="panel hud-corners" style={{ padding: 28 }}>
              <div className="mono" style={{ fontSize: 12, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Typical stack
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                {STEPS_LINEAR.map((s, i) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span className="mono flow-chip flow-chip-dead">{s}</span>
                    {i < STEPS_LINEAR.length - 1 && <ArrowRight color="var(--text-faint)" />}
                  </div>
                ))}
                <ArrowRight color="var(--text-faint)" />
                <span className="mono flow-chip flow-chip-end">done — hope it's right</span>
              </div>
              <p style={{ marginTop: 20, fontSize: 14.5 }}>
                Generate once. There is no measured signal telling you whether the output actually met the bar — only
                the model finishing talking.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="panel hud-corners" style={{ padding: 28, borderColor: "var(--signal-line)" }}>
              <div className="mono" style={{ fontSize: 12, color: "var(--signal)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Actuate
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                {STEPS_LOOP.map((s, i) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span className="mono flow-chip flow-chip-live" style={{ animationDelay: `${i * -0.5}s` }}>
                      {s}
                    </span>
                    {i < STEPS_LOOP.length - 1 && <ArrowRight color="var(--signal)" />}
                  </div>
                ))}
                <CurveBack />
              </div>
              <p style={{ marginTop: 20, fontSize: 14.5 }}>
                Iterate until a measurable setpoint is met, or until stability guards call it: converged, exhausted,
                oscillating, or timed out.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .flow-chip {
          font-size: 12.5px;
          padding: 7px 13px;
          border-radius: 999px;
          border: 1px solid var(--border-bright);
          white-space: nowrap;
        }
        .flow-chip-dead { color: var(--text-faint); }
        .flow-chip-end { color: var(--text-faint); border-style: dashed; }
        .flow-chip-live {
          color: var(--signal);
          border-color: var(--signal-line);
          background: var(--signal-soft);
          animation: chipPulse 4s ease-in-out infinite;
        }
        @keyframes chipPulse {
          0%, 88%, 100% { box-shadow: 0 0 0 0 transparent; }
          6% { box-shadow: 0 0 0 4px var(--signal-soft); }
        }
        @media (min-width: 900px) {
          #flow-grid { grid-template-columns: 1fr 1fr; }
        }
      ` }} />
    </section>
  );
}

function ArrowRight({ color }: { color: string }) {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
      <path d="M0 5H15M15 5L10.5 1M15 5L10.5 9" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}

function CurveBack() {
  return (
    <span className="mono" style={{ fontSize: 12.5, color: "var(--signal)", display: "inline-flex", alignItems: "center", gap: 6 }}>
      <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
        <path d="M17 2C17 2 13 2 8 2C3 2 1 5 1 7C1 9 3 12 8 12H14" stroke="var(--signal)" strokeWidth="1.4" />
        <path d="M11 9L14 12L11 15" stroke="var(--signal)" strokeWidth="1.4" transform="translate(0 -3)" />
      </svg>
      ↺ plant
    </span>
  );
}