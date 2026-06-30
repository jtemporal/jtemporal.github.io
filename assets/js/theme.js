(function () {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  function applyTheme(mode, persist) {
    const isDark = mode === 'dark';
    html.classList.toggle('dark', isDark);
    if (themeIcon) {
      themeIcon.textContent = isDark ? 'dark_mode' : 'light_mode';
    }
    if (persist) {
      localStorage.setItem('theme', mode);
    }
  }

  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') {
    applyTheme(stored, false);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark', false);
  } else {
    applyTheme('light', false);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const next = html.classList.contains('dark') ? 'light' : 'dark';
      applyTheme(next, true);
    });
  }
})();