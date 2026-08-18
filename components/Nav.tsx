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
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the mobile menu when resizing into desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 980) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Prevent the page from scrolling underneath the mobile menu.
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const barAlpha = open ? 0.98 : scrolled ? 0.92 : 0.72;

  return (
    <header
      className={`site-nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
    >
      <div className="nav-inner">
        {/* ----------------------------------------------------------------
            BRAND
        ----------------------------------------------------------------- */}
        <a
          href="#top"
          className="nav-logo mono"
          aria-label="Actuate home"
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`}
            alt=""
            width={26}
            height={26}
            className="nav-logo-image"
          />

          <span className="nav-logo-name">actuate</span>
        </a>

        {/* ----------------------------------------------------------------
            DESKTOP NAVIGATION
        ----------------------------------------------------------------- */}
        <nav
          className="desktop-nav mono"
          aria-label="Primary navigation"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ----------------------------------------------------------------
            DESKTOP ACTIONS
        ----------------------------------------------------------------- */}
        <div className="desktop-actions">
          <div className="install-command mono">
            <span className="install-command-text">
              $ {site.package.installCommand}
            </span>

            <CopyButton text={site.package.installCommand} />
          </div>

          <a
            href={site.package.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn nav-github"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
        </div>

        {/* ----------------------------------------------------------------
            MOBILE TOGGLE
        ----------------------------------------------------------------- */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="mobile-toggle mono"
        >
          <span aria-hidden="true">
            {open ? "×" : "≡"}
          </span>
        </button>
      </div>

      {/* ------------------------------------------------------------------
          MOBILE MENU
      ------------------------------------------------------------------- */}
      {open && (
        <div className="mobile-menu">
          <nav
            className="mobile-menu-links mono"
            aria-label="Mobile navigation"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                <span>{link.label}</span>
                <span className="mobile-nav-arrow">↗</span>
              </a>
            ))}
          </nav>

          <div className="mobile-menu-divider" />

          <div className="mobile-install mono">
            <div className="mobile-install-label">
              INSTALL
            </div>

            <div className="mobile-install-command">
              <span>
                $ {site.package.installCommand}
              </span>

              <CopyButton text={site.package.installCommand} />
            </div>
          </div>

          <a
            href={site.package.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn mobile-github"
          >
            <GithubIcon />
            <span>View on GitHub</span>
          </a>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* ============================================================
               HEADER
               ============================================================ */

            .site-nav {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 1000;

              width: 100%;
              height: var(--nav-h);

              background: rgba(10, 13, 19, ${barAlpha});

              backdrop-filter: blur(16px);
              -webkit-backdrop-filter: blur(16px);

              border-bottom: 1px solid transparent;

              transition:
                background 0.25s ease,
                border-color 0.25s ease,
                box-shadow 0.25s ease;
            }

            .site-nav.is-scrolled,
            .site-nav.is-open {
              border-bottom-color: var(--border);

              box-shadow:
                0 8px 30px rgba(0, 0, 0, 0.16);
            }

            /* ============================================================
               INNER HEADER

               Important:
               Use GRID instead of space-between flex.

               This gives us three stable zones:

               [ logo ] [ navigation ] [ actions ]

               This prevents the nav and action controls from fighting
               for horizontal space and producing the overlap seen in
               the screenshot.
               ============================================================ */

            .nav-inner {
              width: min(100%, var(--container));
              height: 100%;

              margin: 0 auto;
              padding: 0 24px;

              display: grid;
              grid-template-columns: auto minmax(0, 1fr) auto;
              align-items: center;

              column-gap: 28px;

              position: relative;
            }

            /* ============================================================
               LOGO
               ============================================================ */

            .nav-logo {
              display: inline-flex;
              align-items: center;
              gap: 9px;

              min-width: 0;

              color: var(--text);

              font-size: 15px;
              font-weight: 600;
              letter-spacing: 0.02em;

              white-space: nowrap;

              flex-shrink: 0;
            }

            .nav-logo:hover {
              color: var(--signal);
            }

            .nav-logo-image {
              display: block;

              width: 26px;
              height: 26px;

              flex: 0 0 26px;

              border-radius: 6px;
            }

            .nav-logo-name {
              display: block;
            }

            /* ============================================================
               DESKTOP NAV
               ============================================================ */

            .desktop-nav {
              min-width: 0;

              display: flex;
              align-items: center;
              justify-content: center;

              gap: clamp(16px, 2vw, 28px);

              overflow: hidden;
            }

            .nav-link {
              position: relative;

              display: inline-block;

              flex: 0 0 auto;

              color: var(--text-dim);

              font-size: 13px;
              line-height: 1.2;

              white-space: nowrap;

              transition:
                color 0.2s ease,
                opacity 0.2s ease;
            }

            .nav-link:hover {
              color: var(--signal);
            }

            .nav-link::after {
              content: "";

              position: absolute;
              left: 0;
              right: 100%;
              bottom: -6px;

              height: 1px;

              background: var(--signal);

              transition: right 0.22s ease;
            }

            .nav-link:hover::after {
              right: 0;
            }

            /* ============================================================
               DESKTOP ACTIONS
               ============================================================ */

            .desktop-actions {
              display: flex;
              align-items: center;
              justify-content: flex-end;

              gap: 10px;

              min-width: max-content;

              white-space: nowrap;
            }

            .install-command {
              display: flex;
              align-items: center;

              min-width: 0;

              height: 38px;

              gap: 7px;

              padding: 5px 5px 5px 11px;

              border: 1px solid var(--border-bright);
              border-radius: var(--radius);

              background: rgba(14, 18, 26, 0.75);

              color: var(--signal);

              font-size: 12px;
              line-height: 1;

              white-space: nowrap;
            }

            .install-command-text {
              display: block;

              max-width: 170px;

              overflow: hidden;
              text-overflow: ellipsis;

              white-space: nowrap;
            }

            .nav-github {
              height: 38px;

              padding: 8px 13px;

              flex: 0 0 auto;
            }

            /* ============================================================
               MOBILE TOGGLE
               ============================================================ */

            .mobile-toggle {
              display: none;

              align-items: center;
              justify-content: center;

              width: 38px;
              height: 38px;

              padding: 0;

              border: 1px solid var(--border-bright);
              border-radius: var(--radius);

              background: transparent;

              color: var(--text);

              font-size: 22px;
              line-height: 1;

              transition:
                border-color 0.2s ease,
                color 0.2s ease,
                background 0.2s ease;
            }

            .mobile-toggle:hover {
              color: var(--signal);
              border-color: var(--signal);
              background: var(--signal-soft);
            }

            /* ============================================================
               MOBILE MENU
               ============================================================ */

            .mobile-menu {
              position: absolute;

              top: var(--nav-h);
              left: 0;
              right: 0;

              width: 100%;

              padding: 18px 24px 24px;

              background: rgba(10, 13, 19, 0.98);

              border-bottom: 1px solid var(--border);

              box-shadow:
                0 24px 50px rgba(0, 0, 0, 0.5);

              backdrop-filter: blur(18px);
              -webkit-backdrop-filter: blur(18px);
            }

            .mobile-menu-links {
              display: flex;
              flex-direction: column;

              gap: 0;
            }

            .mobile-nav-link {
              display: flex;
              align-items: center;
              justify-content: space-between;

              min-height: 48px;

              color: var(--text-dim);

              border-bottom: 1px solid var(--border);

              font-size: 14px;

              transition:
                color 0.2s ease,
                padding-left 0.2s ease;
            }

            .mobile-nav-link:hover {
              color: var(--signal);
              padding-left: 5px;
            }

            .mobile-nav-arrow {
              color: var(--text-faint);
              font-size: 15px;

              transition:
                color 0.2s ease,
                transform 0.2s ease;
            }

            .mobile-nav-link:hover .mobile-nav-arrow {
              color: var(--signal);
              transform: translate(2px, -2px);
            }

            .mobile-menu-divider {
              height: 18px;
            }

            .mobile-install {
              margin-bottom: 12px;
            }

            .mobile-install-label {
              margin-bottom: 7px;

              color: var(--text-faint);

              font-size: 10px;
              letter-spacing: 0.12em;
            }

            .mobile-install-command {
              display: flex;
              align-items: center;
              justify-content: space-between;

              min-height: 42px;

              gap: 8px;

              padding: 6px 6px 6px 12px;

              border: 1px solid var(--border-bright);
              border-radius: var(--radius);

              background: var(--panel);

              color: var(--signal);

              font-size: 12px;
            }

            .mobile-install-command > span {
              min-width: 0;

              overflow: hidden;
              text-overflow: ellipsis;

              white-space: nowrap;
            }

            .mobile-github {
              width: 100%;

              justify-content: center;

              min-height: 42px;
            }

            /* ============================================================
               DESKTOP
               ============================================================ */

            @media (min-width: 980px) {
              .desktop-nav {
                display: flex;
              }

              .desktop-actions {
                display: flex;
              }

              .mobile-toggle {
                display: none;
              }
            }

            /* ============================================================
               TABLET / SMALL DESKTOP

               Hide the desktop navigation before it becomes cramped.
               ============================================================ */

            @media (min-width: 641px) and (max-width: 979px) {
              .desktop-nav,
              .desktop-actions {
                display: none;
              }

              .nav-inner {
                display: flex;
                justify-content: space-between;

                padding-left: 24px;
                padding-right: 24px;
              }

              .mobile-toggle {
                display: flex;
              }
            }

            /* ============================================================
               MOBILE
               ============================================================ */

            @media (max-width: 640px) {
              .site-nav {
                height: var(--nav-h);
              }

              .nav-inner {
                display: flex;
                align-items: center;
                justify-content: space-between;

                padding-left: 18px;
                padding-right: 18px;

                column-gap: 0;
              }

              .desktop-nav,
              .desktop-actions {
                display: none;
              }

              .mobile-toggle {
                display: flex;
              }

              .mobile-menu {
                padding-left: 18px;
                padding-right: 18px;
              }
            }

            /* ============================================================
               VERY SMALL SCREENS
               ============================================================ */

            @media (max-width: 380px) {
              .nav-logo-name {
                display: none;
              }

              .nav-logo {
                gap: 0;
              }
            }

            /* ============================================================
               REDUCED MOTION
               ============================================================ */

            @media (prefers-reduced-motion: reduce) {
              .site-nav,
              .nav-link,
              .mobile-nav-link,
              .mobile-nav-arrow,
              .mobile-toggle,
              .nav-logo {
                transition: none;
              }
            }
          `,
        }}
      />
    </header>
  );
}

export function GithubIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A10.51 10.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}