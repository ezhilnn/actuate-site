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
    location: "Chennai, India",
    education: "Chennai Institute of Technology",
    bio: "Software engineer building an automated loan-review pipeline for correspondent business loans at Rocket India, and maintainer of actuate-ai in his own time. Focused on full-stack, cloud-native, event-driven, and AI-powered systems.",
    avatarInitials: "EN",
    github: "https://github.com/ezhilnn",
    linkedin: "https://www.linkedin.com/in/ezhilan-nagarajan",
    portfolio: "https://ezhilan-portfolio.netlify.app/",
    email: "ezhilan.dev.4@gmail.com",
    resume: "https://ezhilan-portfolio.netlify.app/Resume-June-2026.pdf",
  },
} as const;

export type Site = typeof site;