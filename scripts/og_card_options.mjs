/** Default card options from approved layout decisions. */
export function defaultCardOptions(meta = {}, overrides = {}) {
  const type = meta.type || 'post';
  const base = {
    subtitleStyle: 'refined',
    bgStyle: 'gradient-diagonal',
    signal: 'none',
    layout: 'classic',
  };

  if (type === 'post') {
    base.layout = 'footer-category';
  }

  if (type === 'video' || type === 'talk') {
    base.signal = 'corner';
    base.layout = 'footer-category';
  }

  return { ...base, ...overrides };
}