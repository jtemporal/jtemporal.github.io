/**
 * Resolves OG card styling from post frontmatter.
 * Mirrors _includes/post-tags-logic.html and post-tag-banner.html.
 */

const SKIP_TAGS = new Set([
  'english',
  'português',
  'portugues',
  'short',
  'en',
  'pt_br',
  'ptbr',
]);

const CATEGORY_TAGS = new Set([
  'pro_tip',
  'tutorial',
  'hacktoberfest',
  'preptember',
  'colinha',
  'miscellaneous',
  'opensource',
  'personal',
  'pessoal',
  'variados',
  'career',
  'carreira',
]);

const IMAGE_CATEGORY_HINTS = [
  ['pro_tip', ['pro_tip', 'pro-tip']],
  ['miscellaneous', ['miscellaneous', 'variados']],
  ['tutorial', ['tutorial']],
  ['colinha', ['colinha']],
  ['hacktoberfest', ['hacktoberfest']],
  ['preptember', ['preptember']],
  ['opensource', ['opensource']],
  ['podcast', ['podcast']],
  ['personal', ['personal', 'pessoal']],
];

const THEMES = {
  hacktoberfest: {
    icon: 'code',
    line: '#0d9488',
    text: '#0d9488',
    bg: '#f0fdfa',
    bgDark: '#042f2e',
  },
  preptember: {
    icon: 'calendar_month',
    line: '#6366f1',
    text: '#4f46e5',
    bg: '#eef2ff',
    bgDark: '#1e1b4b',
  },
  pro_tip: {
    icon: 'school',
    line: '#b80049',
    text: '#b80049',
    bg: '#fff5f7',
    bgDark: '#400014',
  },
  tutorial: {
    icon: 'school',
    line: '#b80049',
    text: '#b80049',
    bg: '#fff5f7',
    bgDark: '#400014',
  },
  colinha: {
    icon: 'school',
    line: '#b80049',
    text: '#b80049',
    bg: '#fff5f7',
    bgDark: '#400014',
  },
  git: {
    icon: 'school',
    line: '#b80049',
    text: '#b80049',
    bg: '#fff5f7',
    bgDark: '#400014',
  },
  miscellaneous: {
    icon: 'tips_and_updates',
    line: '#5f5e5e',
    text: '#5f5e5e',
    bg: '#f0fdfa',
    bgDark: '#134e4a',
  },
  opensource: {
    icon: 'public',
    line: '#4a4a4a',
    text: '#4a4a4a',
    bg: '#efeded',
    bgDark: '#303031',
  },
  ai: {
    icon: 'tips_and_updates',
    line: '#5f5e5e',
    text: '#5f5e5e',
    bg: '#e9e8e7',
    bgDark: '#303031',
  },
  career: {
    icon: 'work',
    line: '#006769',
    text: '#006769',
    bg: '#ecfeff',
    bgDark: '#002021',
  },
  default: {
    icon: 'menu_book',
    line: '#8f6f73',
    text: '#5b3f43',
    bg: '#f5f3f3',
    bgDark: '#303031',
  },
};

const TALK_THEMES = {
  live: { label: 'Live stream', icon: 'live_tv', ...THEMES.hacktoberfest },
  interview: { label: 'Interview', icon: 'forum', ...THEMES.career },
  podcast: { label: 'Podcast', icon: 'music_note', ...THEMES.opensource },
  tutorial: { label: 'Tutorial', icon: 'school', ...THEMES.pro_tip },
  workshop: { label: 'Workshop', icon: 'work', ...THEMES.career },
  talk: { label: 'Talk', icon: 'mic', ...THEMES.career },
};

const VIDEO_THEME = {
  label: 'Video',
  icon: 'play_arrow',
  line: '#b80049',
  text: '#b80049',
  bg: '#fff5f7',
  bgDark: '#400014',
};

function normalizeTag(tag) {
  return String(tag || '')
    .toLowerCase()
    .replace(/\s+/g, '_');
}

function categoryFromImage(image = '') {
  const key = image.toLowerCase();
  for (const [category, hints] of IMAGE_CATEGORY_HINTS) {
    if (hints.some((hint) => key.includes(hint))) return category;
  }
  return '';
}

function resolveBannerTag({ tags = [], image = '' }) {
  const fromImage = categoryFromImage(image);
  if (fromImage) {
    return {
      bannerTag: fromImage,
      topicTag: '',
      tagKey: fromImage,
      tagLabel: fromImage.replace(/_/g, ' '),
    };
  }

  let bannerTag = '';
  let topicTag = '';

  for (const rawTag of tags) {
    const tagKey = normalizeTag(rawTag);
    if (SKIP_TAGS.has(tagKey)) continue;

    const isCategory = CATEGORY_TAGS.has(tagKey);
    if (isCategory && !bannerTag) {
      bannerTag = rawTag;
    } else if (!isCategory && !topicTag) {
      topicTag = rawTag;
    }
  }

  if (!bannerTag) {
    bannerTag = topicTag || 'Article';
    topicTag = '';
  }

  return {
    bannerTag,
    topicTag,
    tagKey: normalizeTag(bannerTag),
    tagLabel: String(bannerTag).replace(/_/g, ' '),
  };
}

function resolveTalkLabel({ title = '', description = '', image = '' }) {
  const titleDown = title.toLowerCase();
  const descriptionDown = description.toLowerCase();
  const imageDown = image.toLowerCase();

  if (
    titleDown.includes('live stream') ||
    titleDown.includes('[live stream]') ||
    titleDown.includes(' live ') ||
    descriptionDown.includes('live stream') ||
    descriptionDown.includes('live no')
  ) {
    return 'live';
  }
  if (descriptionDown.includes('interview') || titleDown.includes('interview')) {
    return 'interview';
  }
  if (
    imageDown.includes('podcast') ||
    titleDown.includes('podcast') ||
    titleDown.includes('braincast') ||
    titleDown.includes('fechatag') ||
    titleDown.includes('esquenta') ||
    titleDown.includes('universo python')
  ) {
    return 'podcast';
  }
  if (imageDown.includes('tutorial') || titleDown.includes('tutorial')) {
    return 'tutorial';
  }
  if (titleDown.includes('workshop') || descriptionDown.includes('workshop')) {
    return 'workshop';
  }
  return 'talk';
}

function themeForTagKey(tagKey) {
  if (tagKey.includes('hacktoberfest')) return THEMES.hacktoberfest;
  if (tagKey.includes('preptember')) return THEMES.preptember;
  if (
    tagKey === 'pro_tip' ||
    tagKey.includes('colinha') ||
    tagKey.includes('tutorial') ||
    tagKey.includes('git')
  ) {
    return THEMES.pro_tip;
  }
  if (tagKey.includes('miscellaneous') || tagKey.includes('variados')) {
    return THEMES.miscellaneous;
  }
  if (tagKey.includes('open') || tagKey.includes('source')) {
    return THEMES.opensource;
  }
  if (tagKey.includes('mcp') || tagKey === 'ai' || tagKey === 'ia' || tagKey.includes('agents')) {
    return THEMES.ai;
  }
  if (tagKey.includes('career') || tagKey.includes('carreira')) {
    return THEMES.career;
  }
  return THEMES.default;
}

export function resolveOgCard(meta = {}) {
  const type = meta.type || 'post';
  const tags = meta.tags || [];
  const { tagKey, tagLabel, topicTag } = resolveBannerTag({
    tags,
    image: meta.image || '',
  });

  if (type === 'talk') {
    const talkKey = resolveTalkLabel(meta);
    const talkTheme = TALK_THEMES[talkKey] || TALK_THEMES.talk;
    return {
      type,
      title: meta.title || 'Untitled',
      subtitle: meta.subtitle || '',
      tagLabel: talkTheme.label,
      topicTag,
      icon: talkTheme.icon,
      ...talkTheme,
    };
  }

  if (type === 'video') {
    const base = themeForTagKey(tagKey);
    return {
      type,
      title: meta.title || 'Untitled',
      subtitle: meta.subtitle || '',
      tagLabel: tagLabel.toUpperCase() === 'ARTICLE' ? 'Video' : tagLabel,
      topicTag,
      icon: 'play_arrow',
      ...base,
    };
  }

  const theme = themeForTagKey(tagKey);
  return {
    type: 'post',
    title: meta.title || 'Untitled',
    subtitle: meta.subtitle || '',
    tagLabel,
    topicTag,
    icon: theme.icon,
    ...theme,
  };
}

export function postSlugFromPath(filePath) {
  const base = filePath.split('/').pop().replace(/\.md$/, '');
  return base.replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

export const OG_EXAMPLES = [
  {
    name: 'Video short (git pro tip)',
    meta: {
      type: 'video',
      title: 'git switch -c: create a branch and switch in one command',
      tags: ['english', 'git', 'pro_tip', 'short'],
      image: '/images/covers/pro_tip.webp',
    },
  },
  {
    name: 'Blog post (hacktoberfest)',
    meta: {
      type: 'post',
      title: 'Hacktoberfest 2025 — week 1',
      tags: ['hacktoberfest', 'opensource', 'english'],
      image: '/images/covers/hacktoberfest.webp',
    },
  },
  {
    name: 'Talk (podcast)',
    meta: {
      type: 'talk',
      title: 'Braincast #423 — Open source and community',
      description: 'Podcast episode about open source',
      tags: ['opensource', 'english'],
      image: '/images/covers/podcast.webp',
    },
  },
  {
    name: 'Tutorial post',
    meta: {
      type: 'post',
      title: 'Giving Netlify access to a new GitHub repo',
      tags: ['tutorial', 'english', 'netlify'],
      image: '/images/covers/tutorial.webp',
    },
  },
  {
    name: 'Open source post',
    meta: {
      type: 'post',
      title: 'GitFichas is now open source',
      subtitle: 'A new chapter for the project',
      tags: ['opensource', 'git', 'english'],
      image: '/images/covers/opensource.webp',
    },
  },
];