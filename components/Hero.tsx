"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site-config";
import CodeBlock from "./CodeBlock";
import LoopDiagram from "./LoopDiagram";
import { GithubIcon } from "./Nav";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        paddingTop: "calc(var(--nav-h) + 64px)",
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 56, alignItems: "center" }}>
        <div id="hero-grid-inner" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 56, alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow">
              PYTHON PACKAGE · v{site.package.version} · {site.package.license}
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 5.2vw, 58px)",
                lineHeight: 1.08,
                marginTop: 20,
                maxWidth: 620,
              }}
            >
              {site.package.tagline}
            </h1>

            <p
              className="mono"
              style={{
                marginTop: 18,
                fontSize: 17,
                color: "var(--signal)",
                letterSpacing: "0.01em",
              }}
            >
              {site.package.subTagline}
            </p>

            <p style={{ marginTop: 20, fontSize: 16.5, maxWidth: 520 }}>
              {site.package.description} Not a workflow engine. Not a chatbot. A control system for AI output.
            </p>

            <div style={{ marginTop: 32, maxWidth: 420 }}>
              <CodeBlock label="install" code={`$ ${site.package.installCommand}`} copyText={site.package.installCommand} />
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <a href={site.package.pypiUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                View on PyPI ↗
              </a>
              <a href={site.package.githubUrl} target="_blank" rel="noreferrer" className="btn">
                <GithubIcon /> Source on GitHub
              </a>
              <a href="#quickstart" className="btn">
                Quick start →
              </a>
            </div>

            <div className="badge-row" style={{ marginTop: 32 }}>
              <span className="badge">python {site.package.pythonRequires}</span>
              <span className="badge">license: {site.package.license}</span>
              <span className="badge">postgres-backed</span>
              <span className="badge">FastAPI + React console</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <LoopDiagram />
            <p className="mono" style={{ textAlign: "center", fontSize: 11.5, color: "var(--text-faint)", marginTop: 8, letterSpacing: "0.04em" }}>
              setpoint → plant → sensor → error → controller → actuator ↺ plant
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 980px) {
          #hero-grid-inner { grid-template-columns: 1.05fr 0.95fr !important; }
        }
      `}</style>
    </section>
  );
}
