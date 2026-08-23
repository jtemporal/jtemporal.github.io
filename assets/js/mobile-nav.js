(function () {
  const toggle = document.getElementById('mobile-nav-toggle');
  const menu = document.getElementById('mobile-nav-menu');
  const langToggle = document.getElementById('lang-menu-toggle');
  const langMenu = document.getElementById('lang-menu');

  function setMenuOpen(open) {
    if (!toggle || !menu) return;

    menu.classList.toggle('hidden', !open);
    if (open) {
      menu.removeAttribute('hidden');
    } else {
      menu.setAttribute('hidden', '');
    }

    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Toggle navigation');

    const iconMenu = toggle.querySelector('[data-nav-icon="menu"]');
    const iconClose = toggle.querySelector('[data-nav-icon="close"]');
    if (iconMenu && iconClose) {
      iconMenu.classList.toggle('hidden', open);
      iconClose.classList.toggle('hidden', !open);
    }
  }

  if (toggle && menu) {
    setMenuOpen(false);

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      setMenuOpen(menu.classList.contains('hidden'));
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenuOpen(false);
    });
  }

  if (langToggle && langMenu) {
    function setLangOpen(open) {
      langMenu.classList.toggle('hidden', !open);
      langToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    setLangOpen(false);

    langToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setLangOpen(langMenu.classList.contains('hidden'));
    });

    document.addEventListener('click', function (event) {
      if (!langToggle.contains(event.target) && !langMenu.contains(event.target)) {
        setLangOpen(false);
      }
    });
  }
})();
