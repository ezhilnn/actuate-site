import Reveal from "./Reveal";
import { site } from "@/lib/site-config";
import { GithubIcon } from "./Nav";

const links: { label: string; href?: string; icon: "github" | "link" | "mail" | "linkedin" }[] = [
  { label: "GitHub", href: site.author.github, icon: "github" },
  // Uncomment in lib/site-config.ts + here once you have these:
  // { label: "LinkedIn", href: site.author.linkedin, icon: "linkedin" },
  // { label: "Portfolio", href: site.author.portfolio, icon: "link" },
  // { label: "Email", href: `mailto:${site.author.email}`, icon: "mail" },
];

export default function About() {
  return (
    <section className="section" id="author">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Maintainer</div>
            <h2>Built and maintained by one engineer, in the open.</h2>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="panel hud-corners" id="about-card">
            <div className="about-avatar">
              <span className="mono">{site.author.avatarInitials}</span>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ fontSize: 22 }}>{site.author.name}</h3>
              <p className="mono" style={{ color: "var(--signal)", fontSize: 13.5, marginTop: 6 }}>
                {site.author.role}
              </p>
              <p style={{ marginTop: 14, fontSize: 14.5, maxWidth: 560 }}>{site.author.bio}</p>

              <div className="badge-row" style={{ marginTop: 18 }}>
                <span className="badge">
                  <PinIcon /> {site.author.location}
                </span>
                <span className="badge">
                  <CapIcon /> {site.author.education}
                </span>
                <span className="badge">
                  <PackageIcon /> maintainer of {site.package.name}
                </span>
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                {links.map((l) =>
                  l.href ? (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="btn">
                      {l.icon === "github" && <GithubIcon />}
                      {l.label}
                    </a>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        #about-card {
          padding: 32px;
          display: flex;
          gap: 28px;
          align-items: flex-start;
          flex-direction: column;
        }
        .about-avatar {
          width: 76px; height: 76px; border-radius: 50%;
          background: linear-gradient(135deg, var(--signal-soft), transparent);
          border: 1.5px solid var(--signal-line);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; color: var(--signal); font-weight: 600; flex-shrink: 0;
        }
        @media (min-width: 640px) {
          #about-card { flex-direction: row; align-items: center; }
        }
      `}</style>
    </section>
  );
}

function PinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s7-7.58 7-12.5A7 7 0 105 9.5C5 14.42 12 22 12 22z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function CapIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <path d="M22 9L12 4 2 9l10 5 10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function PackageIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <path d="M21 8l-9-5-9 5 9 5 9-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
