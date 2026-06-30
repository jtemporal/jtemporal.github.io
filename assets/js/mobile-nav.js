(function () {
  const toggle = document.getElementById('mobile-nav-toggle');
  const menu = document.getElementById('mobile-nav-menu');
  const langToggle = document.getElementById('lang-menu-toggle');
  const langMenu = document.getElementById('lang-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  }

  if (langToggle && langMenu) {
    langToggle.addEventListener('click', function () {
      langMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event) {
      if (!langToggle.contains(event.target) && !langMenu.contains(event.target)) {
        langMenu.classList.add('hidden');
      }
    });
  }
})();