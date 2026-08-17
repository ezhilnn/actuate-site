import { site } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer style={{ padding: "64px 0 40px", position: "relative" }}>
      <div className="container">
        <div id="footer-grid" style={{ display: "grid", gap: 40 }}>
          <div style={{ maxWidth: 280 }}>
            <div className="mono" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600 }}>
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="17" stroke="var(--signal)" strokeWidth="2.4" strokeDasharray="4 6" />
                <circle cx="20" cy="20" r="6" fill="var(--signal)" />
              </svg>
              actuate
            </div>
            <p style={{ marginTop: 12, fontSize: 13.5 }}>{site.package.description}</p>
            <div className="badge-row" style={{ marginTop: 16 }}>
              {site.package.tags.map((t) => (
                <span key={t} className="tag">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          <FooterCol
            title="Package"
            links={[
              { label: "PyPI", href: site.package.pypiUrl },
              { label: "GitHub repository", href: site.package.githubUrl },
              { label: "Issues", href: `${site.package.githubUrl}/issues` },
              { label: "License (Apache-2.0)", href: `${site.package.githubUrl}/blob/main/LICENSE` },
            ]}
          />

          <FooterCol
            title="Docs"
            links={[
              { label: "README", href: `${site.package.githubUrl}#readme` },
              { label: "Architecture", href: `${site.package.githubUrl}/blob/main/docs/architecture/architecture.md` },
              { label: "Quick start", href: "#quickstart" },
              { label: "Contributing", href: "#repo" },
            ]}
          />

          <FooterCol
            title="Maintainer"
            links={[
              { label: site.author.name, href: site.author.github },
              { label: "Contributors", href: `${site.package.githubUrl}/graphs/contributors` },
            ]}
          />
        </div>

        <div className="footer-bottom mono">
          <span>© {new Date().getFullYear()} Actuate Contributors — {site.package.license}</span>
          <span className="dim-text">
            maintained by{" "}
            <a href={site.author.github} target="_blank" rel="noreferrer" style={{ color: "var(--signal)" }}>
              {site.author.name}
            </a>
          </span>
        </div>
      </div>

      <style>{`
        #footer-grid { grid-template-columns: 1fr; }
        .footer-bottom {
          margin-top: 56px; padding-top: 24px; border-top: 1px solid var(--border);
          display: flex; flex-direction: column; gap: 8px; font-size: 12.5px; color: var(--text-faint);
        }
        @media (min-width: 700px) {
          #footer-grid { grid-template-columns: 1.3fr 1fr 1fr 1fr; }
          .footer-bottom { flex-direction: row; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 14 }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} target={l.href.startsWith("#") ? undefined : "_blank"} rel="noreferrer" className="footer-link" style={{ fontSize: 13.5 }}>
            {l.label}
          </a>
        ))}
      </div>
      <style>{`
        .footer-link { color: var(--text-dim); transition: color .15s ease; width: fit-content; }
        .footer-link:hover { color: var(--signal); }
      `}</style>
    </div>
  );
}
