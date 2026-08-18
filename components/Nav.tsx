"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site-config";
import CopyButton from "./CopyButton";

const LINKS = [
  { href: "#why", label: "Why" },
  { href: "#architecture", label: "Architecture" },
  { href: "#quickstart", label: "Quick start" },
  { href: "#console", label: "Console" },
  { href: "#compare", label: "Compare" },
  { href: "#author", label: "Author" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barAlpha = open ? 0.97 : scrolled ? 0.85 : 0.5;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "var(--nav-h)",
        display: "flex",
        alignItems: "center",
        background: `rgba(10,13,19,${barAlpha})`,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled || open ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" className="mono nav-logo" style={{ display: "flex", alignItems: "center", gap: 9, fontWeight: 600, fontSize: 15, letterSpacing: "0.02em", flexShrink: 0 }}>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`} alt="Actuate" width={26} height={26} style={{ display: "block", borderRadius: 6 }} />
          <span>actuate</span>
        </a>

        <nav
          className="mono"
          style={{
            display: "none",
            gap: 28,
            fontSize: 13.5,
            color: "var(--text-dim)",
          }}
          id="desktop-nav"
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "none", alignItems: "center", gap: 12 }} id="desktop-actions">
          <div
            className="mono"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12.5,
              color: "var(--signal)",
              border: "1px solid var(--border-bright)",
              borderRadius: "var(--radius)",
              padding: "6px 6px 6px 12px",
            }}
          >
            $ {site.package.installCommand}
            <CopyButton text={site.package.installCommand} />
          </div>
          <a href={site.package.githubUrl} target="_blank" rel="noreferrer" className="btn" style={{ padding: "8px 14px" }}>
            <GithubIcon /> GitHub
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="mono"
          style={{
            background: "transparent",
            border: "1px solid var(--border-bright)",
            borderRadius: "var(--radius)",
            color: "var(--text)",
            width: 38,
            height: 38,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="mobile-toggle"
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open && (
        <div
          className="mono"
          style={{
            position: "absolute",
            top: "var(--nav-h)",
            left: 0,
            right: 0,
            background: "var(--bg)",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)",
            borderBottom: "1px solid var(--border)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: 15, color: "var(--text-dim)" }}>
              {l.label}
            </a>
          ))}
          <a href={site.package.githubUrl} target="_blank" rel="noreferrer" className="btn" style={{ justifyContent: "center" }}>
            <GithubIcon /> View on GitHub
          </a>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .nav-logo svg { flex-shrink: 0; display: block; }
        @media (max-width: 380px) {
          .nav-logo-suffix { display: none; }
        }
        .nav-link { position: relative; color: var(--text-dim); transition: color .2s ease; }
        .nav-link:hover { color: var(--signal); }
        .nav-link::after {
          content: ""; position: absolute; left: 0; right: 100%; bottom: -4px; height: 1px;
          background: var(--signal); transition: right .25s ease;
        }
        .nav-link:hover::after { right: 0; }
        @media (min-width: 860px) {
          #desktop-nav { display: flex !important; }
          #desktop-actions { display: flex !important; }
          #mobile-toggle { display: none !important; }
        }
      ` }} />
    </header>
  );
}

export function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A10.51 10.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}