// ---------------------------------------------------------------------------
// Single source of truth for every link, badge, and detail on the site.
// Edit this file — nothing else — to update package links or author info.
// ---------------------------------------------------------------------------

export const site = {
  package: {
    name: "actuate-ai",
    importName: "actuate",
    tagline: "Closed-loop feedback control for AI systems",
    subTagline: "Measure. Correct. Converge. Repeat.",
    description:
      "Actuate is an engineering framework for building closed-loop feedback control systems around any generative plant — an LLM today, a VLM, API, or physical actuator tomorrow.",
    version: "0.1.0",
    license: "Apache-2.0",
    pythonRequires: ">=3.10",
    pypiUrl: "https://pypi.org/project/actuate-ai/",
    installCommand: "pip install actuate-ai",
    fullInstallCommand: 'pip install -e ".[ui,persistence,plants,dsl,dev]"',
    githubUrl: "https://github.com/actuate-ai/actuate",
    githubOrgRepo: "actuate-ai/actuate",
    tags: ["agents", "control-loop", "evaluation", "graph", "llm", "reward"],
  },
    author: {
    name: "Ezhilan Nagarajan",
    role: "Software Engineer I @ Rocket India",
    location: "Chennai, India",
    bio: "Backend engineer building distributed systems and AI-powered applications. Interested in LLM integration, prompt engineering, workflow orchestration, and production AI systems.",
    avatarInitials: "EN",
    github: "https://github.com/ezhilnn",
    linkedin: "https://linkedin.com/in/ezhilan-nagarajan",
    portfolio: "https://ezhilan-portfolio.netlify.app",
    email: "ezhilan.dev.4@gmail.com",
    twitter: "https://x.com/ezhilnn",
  },

} as const;

export type Site = typeof site;
