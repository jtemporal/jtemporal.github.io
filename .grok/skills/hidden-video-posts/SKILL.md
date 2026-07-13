---
name: hidden-video-posts
description: >
  Create hidden type:video Jekyll posts from YouTube short transcripts on
  jtemporal.github.io. Use git worktrees (one per post), preview locally with
  Jekyll before committing, and never push or open a PR until the author
  approves. Triggers on: hidden post, YouTube short, video transcript, worktree,
  Medium syndication, shorts-hidden-posts, /hidden-video-posts.
---

# Hidden video posts

**Read `AGENTS.md` in the repo root first.** It is the canonical, cross-agent workflow.

## Quick checklist

1. `git worktree add ../jtemporal.github.io-hidden-post-<slug> -b hidden-post-<slug> origin/main`
2. Draft `_posts/YYYY-MM-DD-<slug>-short.md` using the template in `AGENTS.md`
3. `RBENV_VERSION=3.4.1 bundle exec jekyll serve --config _dev_config.yml --future`
4. Share preview URL — **stop here until approved**
5. `npm run og:generate -- _posts/...`, commit post + `images/og/<slug>.png`, push, and `gh pr create --repo jtemporal/jtemporal.github.io` only when asked
6. After merge: `git worktree remove`, `git branch -d`, `git worktree prune`, and `rm -rf` the folder if it lingers (see `AGENTS.md`)

## Reference

See `.grok/skills/hidden-video-posts/references/example-post.md` for a finished example.