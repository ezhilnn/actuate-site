import Reveal from "./Reveal";
import CodeBlock from "./CodeBlock";

const LIB_CODE = `import asyncio
from actuate.domain.policy import LoopPolicy, SetPoint, StabilityGuard
from actuate.domain.specification import create_specification
from actuate.domain.templates import standard_closed_loop
from actuate.engine import ExecutionEngine
from actuate.plugins import register_builtins

async def main() -> None:
    spec = create_specification(
        control_system_id="demo",
        version_number=1,
        topology=standard_closed_loop(
            plant_name="stub",
            sensor_name="rule",
            sensor_params={"required_phrases": ["MUST-INCLUDE"]},
        ),
        policies=LoopPolicy(
            set_point=SetPoint(target=0.95),
            stability=StabilityGuard(max_iterations=6),
        ),
    )
    run = await ExecutionEngine().run(
        spec,
        registry=register_builtins(),
        initial_prompt="Write a short answer.",
    )
    print(run.id, run)

asyncio.run(main())`;

export default function LibraryConsole() {
  return (
    <section className="section" id="library-console">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Two ways in</div>
            <h2>A Python package to embed, and an operator console to run.</h2>
          </Reveal>
        </div>

        <div id="lc-grid" style={{ display: "grid", gap: 24 }}>
          <Reveal>
            <div className="panel hud-corners" style={{ padding: 28, height: "100%" }}>
              <div className="mono" style={{ fontSize: 13, color: "var(--signal)", marginBottom: 6 }}>
                actuate — python package
              </div>
              <p style={{ fontSize: 14.5 }}>
                Install with the extras you need. Import <code style={{ color: "var(--text)" }}>ExecutionEngine</code>,{" "}
                <code style={{ color: "var(--text)" }}>GraphRunner</code>, plants, sensors, and stores directly —
                this is how you embed Actuate inside another service or script.
              </p>
              <div style={{ marginTop: 16 }}>
                <CodeBlock label="pip" code={`pip install -e ".[plants,persistence,ui]"`} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="panel hud-corners" style={{ padding: 28, height: "100%" }}>
              <div className="mono" style={{ fontSize: 13, color: "var(--signal)", marginBottom: 6 }}>
                control console
              </div>
              <p style={{ fontSize: 14.5 }}>
                FastAPI + React. The operator UI for the same package, run with{" "}
                <code style={{ color: "var(--text)" }}>python -m actuate.api</code> and{" "}
                <code style={{ color: "var(--text)" }}>ui/frontend</code>. Same capabilities, optional extras.
              </p>
              <div style={{ marginTop: 16 }}>
                <CodeBlock label="entry points" code={`actuate            # API server\nactuate-bootstrap  # seed Postgres`} />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div style={{ marginTop: 32 }}>
            <div className="mono" style={{ fontSize: 12, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
              Library example — closed loop
            </div>
            <CodeBlock label="python" code={LIB_CODE} />
            <p style={{ marginTop: 14, fontSize: 13.5 }} className="mono">
              you do not run chat-completions yourself — pass <span style={{ color: "var(--signal)" }}>model</span>,{" "}
              <span style={{ color: "var(--signal)" }}>api_key</span>, and an optional{" "}
              <span style={{ color: "var(--signal)" }}>api_base</span> into the plant. Actuate calls the provider.
            </p>
          </div>
        </Reveal>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 860px) {
          #lc-grid { grid-template-columns: 1fr 1fr; }
        }
      ` }} />
    </section>
  );
}