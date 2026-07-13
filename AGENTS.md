# Agent instructions — jtemporal.github.io

Canonical workflow for AI agents working in this repo. **Read this file first** for hidden YouTube short posts, git worktree conventions, and OG social card generation.

Also referenced from:
- `CLAUDE.md` (Claude / Claude Code)
- `.grok/skills/hidden-video-posts/SKILL.md` (Grok)
- `.cursor/rules/hidden-video-posts.mdc` (Cursor)
- `.github/copilot-instructions.md` (GitHub Copilot)

## General repo rules

- Follow `.github/copilot-instructions.md` for writing style, Jekyll dev, and multilingual conventions.
- Run the local server with: `RBENV_VERSION=3.4.1 bundle exec jekyll serve --config _dev_config.yml`
- Use `--future` when previewing posts dated in the future.
- Create PRs with: `gh pr create --repo jtemporal/jtemporal.github.io` (not the default upstream).

## Hidden YouTube short posts

These posts syndicate video transcripts to Medium and/or [dev.to](https://dev.to). They are **not** meant to appear on the public blog index.

### Approval gates (strict)

1. **Build locally first** — create the post, start Jekyll, share the preview URL.
2. **Do not commit** until the author approves the preview.
3. **Do not push or open a PR** until the author explicitly asks.

### Git worktree workflow (always)

One isolated worktree per post or feature. Never stack unrelated post work or feature on the same branch.

```bash
# From the main repo checkout (jtemporal.github.io/)
git fetch origin
git worktree add ../jtemporal.github.io-hidden-post-<slug> -b hidden-post-<slug> origin/main
```

| Item | Pattern | Example |
|------|---------|---------|
| Worktree path | `../jtemporal.github.io-hidden-post-<slug>` | `jtemporal.github.io-hidden-post-gitkeep` |
| Branch | `hidden-post-<slug>` | `hidden-post-gitkeep` |
| Post file | `_posts/YYYY-MM-DD-<slug>-short.md` | `_posts/2026-06-25-gitkeep-track-empty-folders-short.md` |

Before pushing, rebase onto latest `main` if other PRs merged:

```bash
git fetch origin && git rebase origin/main
```

After a PR is merged, clean up the worktree **from the main repo checkout** (`jtemporal.github.io/` on `main`):

```bash
# 1. Confirm the PR landed on main
git fetch origin
git log origin/main --oneline | head -5   # should show the merge commit

# 2. Remove the worktree (add --force if it has uncommitted changes you no longer need)
git worktree remove ../jtemporal.github.io-hidden-post-<slug>

# 3. Delete the local branch
git branch -d hidden-post-<slug>

# 4. Prune stale worktree metadata
git worktree prune

# 5. If the folder still exists on disk, delete it manually
#    (this happens when the worktree was already unlinked but left a _site/ or other junk behind)
rm -rf ../jtemporal.github.io-hidden-post-<slug>
```

Verify cleanup with `git worktree list` — only active worktrees should remain. Do **not** delete worktrees for posts that are still in progress or awaiting publish.

### Parallel batches

Multiple posts can be built in parallel — each in its own worktree/branch. Keep everything local until approved. Only one Jekyll server should bind to port 4000 at a time; use `--port 4001` etc. for simultaneous previews.

### Frontmatter template

```yaml
---
layout: post
type: video
title: "<sentence-case title>"
date: YYYY-MM-DD 00:00:00 -0300
last_modified_at: YYYY-MM-DD
hidden: true
lang: en
image: /images/covers/pro_tip.webp   # use miscellaneous.webp for non-git topics
tags:
- english
- git                            # adjust tags for topic
- pro_tip
- short
description: <one-line summary for SEO>
related: true
posts_list:
- <related-post-slug-1>
- <related-post-slug-2>
- <related-post-slug-3>
---
```

### Post body conventions

- Polish the transcript lightly: fix grammar, keep the author's voice and emoji usage.
- Link to a related full blog post instead of placeholder text.
- YouTube embed (extract ID from `https://youtube.com/shorts/<ID>` or `https://www.youtube.com/shorts/<ID>`):

```html
<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/<VIDEO_ID>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>
```

- End with a short follow CTA (match tone of existing shorts).
- Save a copy of the draft in `/Users/jesstemporal/projects/youtube/shorts-hidden-posts/` when that path is available.

### Preview URL

Hidden posts are still reachable directly:

`http://127.0.0.1:4000/<post-slug>/`

The slug comes from the filename (without date prefix and `.md`).

### When the author approves

Generate the OG social card first (see **OG social cards** below), then commit and open the PR:

```bash
npm run og:generate -- _posts/YYYY-MM-DD-<slug>-short.md
git add _posts/YYYY-MM-DD-<slug>-short.md images/og/<slug>.png
git commit -m "Add hidden <topic> short video transcript post"
git push -u origin hidden-post-<slug>
gh pr create --repo jtemporal/jtemporal.github.io \
  --head hidden-post-<slug> --base main \
  --title "Add hidden <topic> short video transcript post" \
  --body "## Summary\n\nAdds a hidden type: video post for Medium syndication.\n\n- Post: _posts/...\n- YouTube: <shorts URL>"
```

## OG social cards (required for every new post, video, and talk)

Every new `_posts/` entry — blog post, `type: video`, or `type: talk` — must get its own unique OG social card PNG. Do not reuse a generic cover image as the social preview; generate a dedicated card per slug.

### Generate

From the repo root (requires `npm install` once):

```bash
# Single post
npm run og:generate -- _posts/YYYY-MM-DD-<slug>.md

# Multiple posts (e.g. bilingual pair)
npm run og:generate -- _posts/YYYY-MM-DD-<slug-en>.md _posts/YYYY-MM-DD-<slug-pt>.md
```

This writes `images/og/<slug>.png` where `<slug>` is the filename without the date prefix and `.md`.

### Frontmatter drives the card design

Set `type` and `tags` correctly so the card picks the right theme:

| Content | `type` | Tags / `image` hint |
|---------|--------|---------------------|
| Blog post | `post` (or omit) | Category tag (`pro_tip`, `tutorial`, `hacktoberfest`, etc.) |
| YouTube short | `video` | Topic + category tags; `image: /images/covers/pro_tip.webp` for git tips |
| Talk / podcast | `talk` | `image: /images/covers/podcast.webp` etc.; title/description help classify talk type |

The Jekyll plugin (`_plugins/og_image.rb`) automatically uses `images/og/<slug>.png` as the post's social/featured image when the file exists.

### Commit with the post

Always `git add` the generated PNG alongside the markdown file. For bilingual posts, generate and commit one OG image per language file (each has its own slug).

### When to generate

- **Hidden video shorts:** after the author approves the preview, before commit.
- **Regular posts / talks / videos:** before opening the PR.
- **Never skip** for new content — every slug needs its own `images/og/<slug>.png`.

## Input format for new posts

When batching posts, the author will provide per video:

```
slug: <short-kebab-name>
date: YYYY-MM-DD
youtube: https://youtube.com/shorts/<ID>
transcript: <absolute path to .md>
topic: git | ai | other
related: <optional comma-separated post slugs>
```

The agent creates worktrees, drafts posts, starts preview, and waits for approval before commit/push.