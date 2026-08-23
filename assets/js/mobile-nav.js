(function () {
  const toggle = document.getElementById('mobile-nav-toggle');
  const menu = document.getElementById('mobile-nav-menu');
  const langToggle = document.getElementById('lang-menu-toggle');
  const langMenu = document.getElementById('lang-menu');

  function setMenuOpen(open) {
    if (!toggle || !menu) return;
    // Tailwind class controls visibility
    menu.classList.toggle('hidden', !open);
    // Keep native hidden attribute in sync for a11y / screen readers
    if (open) {
      menu.removeAttribute('hidden');
    } else {
      menu.setAttribute('hidden', '');
    }
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Toggle navigation');

    // Icon: hamburger when closed, plain × when open.
    // Avoid Material Symbols "close" — it was rendering as the word CLOSE.
    const icon = toggle.querySelector('.material-symbols-outlined');
    if (icon) {
      if (open) {
        icon.textContent = '\u00D7'; // ×
        icon.classList.remove('material-symbols-outlined');
        icon.style.fontSize = '1.5rem';
        icon.style.lineHeight = '1';
        icon.style.fontWeight = '300';
      } else {
        icon.textContent = 'menu';
        icon.classList.add('material-symbols-outlined');
        icon.style.fontSize = '';
        icon.style.lineHeight = '';
        icon.style.fontWeight = '';
      }
    }
  }

  if (toggle && menu) {
    // Ensure closed state on load (sync class + attribute)
    setMenuOpen(false);

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      // Prefer classList (what actually drives the visual) over the attribute
      const currentlyHidden = menu.classList.contains('hidden');
      setMenuOpen(currentlyHidden);
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
