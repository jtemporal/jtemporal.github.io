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
  }

  if (toggle && menu) {
    // Keep HTML hidden attribute in sync with the Tailwind "hidden" class.
    setMenuOpen(false);

    toggle.addEventListener('click', function () {
      setMenuOpen(menu.hasAttribute('hidden'));
    });
  }

  if (langToggle && langMenu) {
    function setLangOpen(open) {
      langMenu.classList.toggle('hidden', !open);
      langToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    setLangOpen(false);

    langToggle.addEventListener('click', function () {
      setLangOpen(langMenu.classList.contains('hidden'));
    });

    document.addEventListener('click', function (event) {
      if (!langToggle.contains(event.target) && !langMenu.contains(event.target)) {
        setLangOpen(false);
      }
    });
  }
})();