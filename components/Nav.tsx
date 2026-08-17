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
        background: scrolled ? "rgba(10,13,19,0.88)" : "rgba(10,13,19,0.72)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          minWidth: 0,
        }}
      >
        {/* BRAND */}
        <a
          href="#top"
          className="mono"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: "0.02em",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {/* <LogoMark /> */}
          <img
            src="/logo.png"
            alt="Actuate"
            style={{
              width: 28,
              height: 28,
              objectFit: "contain",
              display: "block",
            }}
          />
          actuate
          <span
            style={{
              color: "var(--text-faint)",
              fontWeight: 400,
            }}
          >
            · ai
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav
          className="mono"
          id="desktop-nav"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
            flex: 1,
            minWidth: 0,
            margin: "0 24px",
            fontSize: 13,
            color: "var(--text-dim)",
            whiteSpace: "nowrap",
          }}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div
          id="desktop-actions"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <div
            className="mono"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: 12,
              color: "var(--signal)",
              border: "1px solid var(--border-bright)",
              borderRadius: "var(--radius)",
              padding: "5px 5px 5px 10px",
              whiteSpace: "nowrap",
            }}
          >
            <span>$ {site.package.installCommand}</span>
            <CopyButton text={site.package.installCommand} />
          </div>

          <a
            href={site.package.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{
              padding: "8px 13px",
              whiteSpace: "nowrap",
            }}
          >
            <GithubIcon />
            GitHub
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="mono"
          id="mobile-toggle"
          style={{
            marginLeft: "auto",
            background: "transparent",
            border: "1px solid var(--border-bright)",
            borderRadius: "var(--radius)",
            color: "var(--text)",
            width: 38,
            height: 38,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            lineHeight: 1,
          }}
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="mono"
          style={{
            position: "absolute",
            top: "var(--nav-h)",
            left: 0,
            right: 0,
            background: "rgba(10,13,19,0.98)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border)",
            padding: "18px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 15,
                color: "var(--text-dim)",
              }}
            >
              {l.label}
            </a>
          ))}

          <a
            href={site.package.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{
              justifyContent: "center",
              marginTop: 4,
            }}
          >
            <GithubIcon />
            View on GitHub
          </a>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .nav-link {
              position: relative;
              color: var(--text-dim);
              transition: color .2s ease;
              flex-shrink: 0;
            }

            .nav-link:hover {
              color: var(--signal);
            }

            .nav-link::after {
              content: "";
              position: absolute;
              left: 0;
              right: 100%;
              bottom: -5px;
              height: 1px;
              background: var(--signal);
              transition: right .25s ease;
            }

            .nav-link:hover::after {
              right: 0;
            }

            @media (min-width: 860px) {
              #desktop-nav {
                display: flex !important;
              }

              #desktop-actions {
                display: flex !important;
              }

              #mobile-toggle {
                display: none !important;
              }
            }

            @media (max-width: 1120px) and (min-width: 860px) {
              #desktop-nav {
                gap: 14px !important;
                margin-left: 14px !important;
                margin-right: 14px !important;
                font-size: 12px !important;
              }

              #desktop-actions {
                gap: 7px !important;
              }
            }

            @media (max-width: 980px) and (min-width: 860px) {
              #desktop-nav {
                gap: 11px !important;
                margin-left: 10px !important;
                margin-right: 10px !important;
                font-size: 11.5px !important;
              }

              #desktop-actions > div {
                max-width: 175px;
                overflow: hidden;
              }

              #desktop-actions > div > span {
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          `,
        }}
      />
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
      <circle
        cx="20"
        cy="20"
        r="17"
        stroke="var(--signal)"
        strokeWidth="2.4"
        strokeDasharray="4 6"
      />
      <circle cx="20" cy="20" r="6" fill="var(--signal)" />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A10.51 10.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}