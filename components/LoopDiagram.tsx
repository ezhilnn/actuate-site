const NODES = [
  { key: "plant", label: "Plant", sub: "generator", x: 260, y: 85, delay: "0s" },
  { key: "sensor", label: "Sensor", sub: "evaluator", x: 426.4, y: 205.9, delay: "-1.6s" },
  { key: "error", label: "Error", sub: "setpoint − measured", x: 362.9, y: 401.6, delay: "-3.2s" },
  { key: "controller", label: "Controller", sub: "rule / PID", x: 157.1, y: 401.6, delay: "-4.8s" },
  { key: "actuator", label: "Actuator", sub: "corrector", x: 93.6, y: 205.9, delay: "-6.4s" },
];

const LOOP_PATH = "M260,85 L426.4,205.9 L362.9,401.6 L157.1,401.6 L93.6,205.9 Z";

export default function LoopDiagram() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 480, margin: "0 auto" }}>
      <svg viewBox="0 0 520 520" width="100%" role="img" aria-label="Animated diagram of the Actuate closed feedback loop: plant, sensor, error, controller, actuator.">
        <defs>
          <radialGradient id="fieldGlow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(94,234,212,0.10)" />
            <stop offset="100%" stopColor="rgba(94,234,212,0)" />
          </radialGradient>
        </defs>

        <circle cx="260" cy="260" r="230" fill="url(#fieldGlow)" />

        {/* faint concentric rings, like a scope */}
        <circle cx="260" cy="260" r="230" fill="none" stroke="var(--border)" strokeWidth="1" />
        <circle cx="260" cy="260" r="175" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 6" />

        {/* setpoint, external reference feeding the comparator */}
        <g opacity="0.85">
          <line x1="470" y1="470" x2="378" y2="415" stroke="var(--error)" strokeWidth="1.4" strokeDasharray="3 4" markerEnd="url(#arrow)" />
          <circle cx="490" cy="486" r="26" fill="var(--bg)" stroke="var(--error)" strokeWidth="1.6" />
          <text x="490" y="483" textAnchor="middle" className="mono" fontSize="9.5" fill="var(--error)" fontWeight={600}>SET</text>
          <text x="490" y="493" textAnchor="middle" className="mono" fontSize="7.5" fill="var(--text-faint)">point</text>
        </g>

        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--error)" />
          </marker>
          <marker id="arrowSignal" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--signal)" />
          </marker>
        </defs>

        {/* the loop itself */}
        <path d={LOOP_PATH} fill="none" stroke="var(--border-bright)" strokeWidth="1.6" />

        {/* directional arrowheads at loop midpoints */}
        {NODES.map((n, i) => {
          const next = NODES[(i + 1) % NODES.length];
          const mx = (n.x + next.x) / 2;
          const my = (n.y + next.y) / 2;
          return (
            <circle key={n.key + "-mid"} cx={mx} cy={my} r="2.4" fill="var(--text-faint)" />
          );
        })}

        {/* traveling signal dot */}
        <circle r="6.5" fill="var(--signal)">
          <animateMotion dur="8s" repeatCount="indefinite" path={LOOP_PATH} rotate="auto" />
        </circle>
        <circle r="13" fill="none" stroke="var(--signal)" strokeWidth="1" opacity="0.5">
          <animateMotion dur="8s" repeatCount="indefinite" path={LOOP_PATH} rotate="auto" />
        </circle>

        {/* nodes */}
        {NODES.map((n) => (
          <g key={n.key} className="loop-node" style={{ animationDelay: n.delay }}>
            <circle cx={n.x} cy={n.y} r="30" fill="var(--panel)" stroke="var(--signal)" strokeWidth="1.4" />
            <circle className="loop-node-ring" cx={n.x} cy={n.y} r="30" fill="none" stroke="var(--signal)" strokeWidth="1.4" style={{ animationDelay: n.delay }} />
            <text x={n.x} y={n.y + 3} textAnchor="middle" className="mono" fontSize="10.5" fontWeight={600} fill="var(--text)">
              {n.label}
            </text>
            <text x={n.x} y={n.y + 46} textAnchor="middle" className="mono" fontSize="8.5" fill="var(--text-faint)">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>

      <style>{`
        @keyframes loopPulse {
          0%, 92%, 100% { filter: none; }
          4% { filter: drop-shadow(0 0 10px var(--signal)); }
        }
        @keyframes loopRing {
          0%, 90%, 100% { r: 30; opacity: 0; }
          4% { r: 30; opacity: 0.9; }
          20% { r: 46; opacity: 0; }
        }
        .loop-node { animation: loopPulse 8s linear infinite; animation-delay: inherit; }
        .loop-node-ring { animation: loopRing 8s linear infinite; }
      `}</style>
    </div>
  );
}
