/**
 * Static export config for GitHub Pages.
 *
 * This site is deployed as a PROJECT page (https://ezhilnn.github.io/actuate-site/),
 * not a user/org page — so every internal asset needs the /actuate prefix.
 * If you ever rename the repo, update REPO_NAME below to match.
 */
const REPO_NAME = "actuate-site";

// GitHub Actions sets CI=true automatically. Locally (npm run dev) we skip
// the basePath so http://localhost:3000 keeps working without a prefix.
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true" || process.env.CI === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubPagesBuild ? `/${REPO_NAME}` : "",
  assetPrefix: isGithubPagesBuild ? `/${REPO_NAME}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPagesBuild ? `/${REPO_NAME}` : "",
  },
};

export default nextConfig;
