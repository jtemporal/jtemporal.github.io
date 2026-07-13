# Lil Jess — the blog's sidekick

A tiny animated Jess, drawn from the emoji art in `images/emojis/`, that
hangs out in the bottom-right corner of every page and reacts to what the
reader does. She is always visible by default and never affects layout
(fixed position, out of document flow).

## Visibility

| State | What happens |
|---|---|
| Default / first visit | She slides in quietly on every page load |
| Dismissed (✕ button) | She hides and stays hidden across pages |
| Re-summoned | She comes back with a party greeting |

Dismiss preference is stored in `localStorage` under the key `lilJess`
(`"on"` / `"off"`). Absent or any value other than `"off"` means she shows.

### Bringing her back after dismiss

Typing `jess` is **not** how you first discover her — she is always on.
It is the intentional bring-back shortcut after someone hits ✕:

| Device | How to re-summon |
|---|---|
| Desktop / keyboard | Type `jess` anywhere on the page (outside form fields) |
| Touch / any | Tap or click the footer **5 times** within 2.5 seconds |

If she is already visible and you type `jess`, she does a party reaction
and says "Hello again!" instead of replaying the entrance.

## What she reacts to

| Event | Face | Says |
|---|---|---|
| Page load (default) | 😊 `jess-happy` | — (quiet entrance, no speech) |
| Re-summon after dismiss | 🎉 `jess-comemora` | "Hi there! 👋" + confetti |
| Typing `jess` while visible | 🎉 `jess-comemora` | "Hello again!" + confetti |
| Click/tap on her | cycles 😂 😍 👍 😊 🎉 | a random quip |
| Scrolling to the end of a post | 👍 `jess-like` | "You read the whole thing! Nice!" |
| Selecting 30+ characters of text | 😍 `jess-love` | "Ooh, I love that part too!" (max once per 30s) |
| Copying a code block | 🎉 `jess-comemora` | "Good code, right? 😉" + confetti |
| Returning to the tab after 30+ seconds away | 😂 `jess-laugh` | "You're back!" |
| Being dismissed | 😭 `jess-cry` | "Ok, bye… 🥺", then she slides away |

All lines are bilingual: she speaks English when the page `lang`
starts with `en`, Portuguese otherwise (matching the page, not the
browser). The end-of-post cheer only runs on `layout: post` pages —
listing pages also use `<article>` for cards, which would false-trigger.

## Files

| File | Role |
|---|---|
| `_includes/lil-jess.html` | Markup + all CSS (self-contained `<style>`, dark-mode aware) |
| `assets/js/lil-jess.js` | All behavior, vanilla JS, no dependencies |
| `images/emojis/jess-*.png` | The six emote faces (art by a friend of Jess) |
| `_layouts/default.html` | Includes `lil-jess.html` right after the footer |

The CSS is intentionally **not** part of the Tailwind build — the
include is fully self-contained so the feature can be added or removed
by touching only the include line in the layout.

## Emote map

Defined in the `EMOTES` table at the top of `assets/js/lil-jess.js`:

| Key | File | Fallback emoji |
|---|---|---|
| `happy` | `jess-happy.png` | 😊 |
| `party` | `jess-comemora.png` | 🎉 |
| `crying` | `jess-cry.png` | 😭 |
| `joy` | `jess-laugh.png` | 😂 |
| `thumbsup` | `jess-like.png` | 👍 |
| `hearteyes` | `jess-love.png` | 😍 |

If a PNG fails to load she falls back to the plain emoji, so a missing
or renamed image degrades gracefully instead of showing a broken image.
All six images are preloaded on page load so mood changes don't flicker.

## Accessibility

- Respects `prefers-reduced-motion`: no confetti, no bounce, fades only.
- The speech bubble is `role="status"` so screen readers announce her
  lines politely; the character itself is a labeled button.
- On touch devices the dismiss ✕ is always visible (`@media (hover:
  none)`); on desktop it appears on hover/focus.

## Tweaking her

Everything lives in `assets/js/lil-jess.js`:

- **Lines she says** — the `LINES` table (each entry has `en` and `pt`).
- **Click-cycle moods** — the `clickEmotes` array.
- **Reaction cooldowns** — selection (30s) and away-time (30s) constants.
- **Position/size** — `#lil-jess` CSS in `_includes/lil-jess.html`
  (bottom/right offsets, 76px character size).

To add a new emote: drop the PNG in `images/emojis/`, add it to
`EMOTES` with a fallback emoji, and reference it from a reaction or the
`clickEmotes` cycle.

## Testing locally

```bash
RBENV_VERSION=3.4.1 bundle exec jekyll serve --config _dev_config.yml
```

On `http://127.0.0.1:4000`:

1. She should appear immediately (hard-refresh if she doesn't).
2. Click her a few times, scroll to the end of a post, select text, copy a code block.
3. Dismiss with ✕ — she should stay gone after reload.
4. Type `jess` (or 5 footer taps) — she should come back with confetti.
5. Type `jess` again while she is visible — party + "Hello again!"

Reset her memory between tests:

```js
localStorage.removeItem('lilJess')   // show again on reload
localStorage.setItem('lilJess', 'off') // force dismissed
```

To check the always-visible dismiss ✕ on touch, use a real phone via
`http://<your-ip>:4000` — DevTools viewport resizing alone does not flip
`(hover: none)`.
