import Reveal from "./Reveal";
import CodeBlock from "./CodeBlock";
import { site } from "@/lib/site-config";

export default function StarFork() {
  return (
    <section className="section" id="starfork" style={{ borderBottom: "none" }}>
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Get involved</div>
            <h2>Star it if the control-systems framing is useful. Fork it to try a different controller.</h2>
            <p>Open issues for defects. The architecture document is frozen — implementation is where change belongs.</p>
          </Reveal>
        </div>

        <div id="sf-grid" style={{ display: "grid", gap: 20 }}>
          <Reveal>
            <CodeBlock label="clone" code={`git clone ${site.package.githubUrl}.git`} />
          </Reveal>
          <Reveal delay={0.06}>
            <CodeBlock
              label="fork"
              code={`git clone https://github.com/<you>/actuate.git\ngit remote add upstream ${site.package.githubUrl}.git`}
            />
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (min-width: 780px) {
          #sf-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  );
}
