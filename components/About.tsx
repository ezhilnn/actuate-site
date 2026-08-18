import Reveal from "./Reveal";
import { site } from "@/lib/site-config";
import { GithubIcon } from "./Nav";

const links: { label: string; href?: string; icon: "github" | "link" | "mail" | "linkedin" }[] = [
  { label: "Portfolio", href: site.author.portfolio, icon: "link" },
  { label: "GitHub", href: site.author.github, icon: "github" },
  { label: "LinkedIn", href: site.author.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${site.author.email}`, icon: "mail" },
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
              <p style={{ marginTop: 12, fontSize: 14.5, maxWidth: 560 }}>{site.author.bio}</p>

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
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.icon === "mail" ? undefined : "_blank"}
                      rel="noreferrer"
                      className="btn"
                    >
                      {l.icon === "github" && <GithubIcon />}
                      {l.icon === "linkedin" && <LinkedInIcon />}
                      {l.icon === "link" && <LinkIcon />}
                      {l.icon === "mail" && <MailIcon />}
                      {l.label}
                    </a>
                  ) : null
                )}
                <a href={site.author.resume} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Resume ↗
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
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
      ` }} />
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M10 14a5 5 0 007.07 0l2.83-2.83a5 5 0 00-7.07-7.07l-1.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 10a5 5 0 00-7.07 0L4.1 12.83a5 5 0 007.07 7.07l1.5-1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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