import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defaultCardOptions } from './og_card_options.mjs';
import { resolveOgCard } from './og_theme.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.join(__dirname, '..');
export const TEMPLATE_PATH = path.join(ROOT, 'og-templates', 'card.html');
export const LOGO_PATH = path.join(ROOT, 'images', 'logo.webp');

export function cardQueryFromMeta(meta, options = {}) {
  const card = resolveOgCard(meta);
  const resolved = defaultCardOptions(meta, options);
  const params = new URLSearchParams({
    title: card.title,
    label: card.tagLabel,
    icon: card.icon,
    line: card.line,
    text: card.text,
    bg: card.bg,
    type: card.type,
    layout: resolved.layout,
    bgStyle: resolved.bgStyle,
    signal: resolved.signal,
    subtitleStyle: resolved.subtitleStyle,
    logo: resolved.logo === false ? '' : `file://${LOGO_PATH}`,
  });

  if (card.subtitle) params.set('subtitle', card.subtitle);

  return { card, params };
}

export function cardFileUrl(meta, options = {}) {
  const { params } = cardQueryFromMeta(meta, options);
  return `file://${TEMPLATE_PATH}?${params.toString()}`;
}