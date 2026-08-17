#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Run this ONCE from inside the actuate-site/ folder, on your own machine,
# to turn this folder into a private GitHub repo and push it.
#
# Requires: git, and either the GitHub CLI (`gh`, recommended) or a manually
# created empty repo on github.com.
#
# Usage:
#   chmod +x scripts/setup-repo.sh
#   ./scripts/setup-repo.sh
# ---------------------------------------------------------------------------
set -euo pipefail

GH_USER="ezhilnn"
REPO_NAME="actuate-site"

echo "==> Initializing git repo"
if [ ! -d .git ]; then
  git init
  git branch -M main
fi

git add -A
git commit -m "Initial commit: Actuate marketing site" || echo "(nothing to commit)"

if command -v gh >/dev/null 2>&1; then
  echo "==> GitHub CLI found — creating private repo ${GH_USER}/${REPO_NAME}"
  if ! gh repo view "${GH_USER}/${REPO_NAME}" >/dev/null 2>&1; then
    gh repo create "${GH_USER}/${REPO_NAME}" --private --source=. --remote=origin --push
  else
    echo "Repo ${GH_USER}/${REPO_NAME} already exists on GitHub — just pushing."
    git remote add origin "https://github.com/${GH_USER}/${REPO_NAME}.git" 2>/dev/null || true
    git push -u origin main
  fi
else
  echo "==> GitHub CLI (gh) not found."
  echo "    1. Create an empty PRIVATE repo named '${REPO_NAME}' at:"
  echo "       https://github.com/new"
  echo "    2. Then run:"
  echo "       git remote add origin https://github.com/${GH_USER}/${REPO_NAME}.git"
  echo "       git push -u origin main"
  exit 0
fi

cat <<'EOF'

==> Done pushing. Last step (one-time, in the GitHub UI):
    1. Go to Settings -> Pages on the repo.
    2. Under "Build and deployment", set Source to "GitHub Actions".
    3. Push (already done) triggers .github/workflows/deploy.yml automatically.
    4. Your site will be live at: https://<user>.github.io/actuate/

    NOTE: GitHub Pages on a PRIVATE repo requires GitHub Pro/Team/Enterprise.
    On the Free plan, either make the repo public before enabling Pages,
    or upgrade your plan.
EOF
