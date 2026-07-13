/**
 * Lil Jess — a friendly blog sidekick.
 * She hangs out in the corner and reacts to reading, selecting text,
 * copying code, and coming back to the tab. Dismiss her with the ✕;
 * type "jess" (or 5 footer taps) to bring her back.
 */
(function () {
  'use strict';

  if (window.__lilJessInitialized) return;
  window.__lilJessInitialized = true;

  var root = document.getElementById('lil-jess');
  if (!root) return;

  var bubble = root.querySelector('.lj-bubble');
  var charBtn = root.querySelector('.lj-char');
  var img = charBtn.querySelector('img');
  var fallback = charBtn.querySelector('.lj-fallback');
  var closeBtn = root.querySelector('.lj-close');
  var imgBase = root.getAttribute('data-img-base') || '/images/emojis/';

  var STORAGE_KEY = 'lilJess';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isEN = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;

  var EMOTES = {
    happy:     { file: 'jess-happy.png',     emoji: '😊' },
    party:     { file: 'jess-comemora.png',  emoji: '🎉' },
    crying:    { file: 'jess-cry.png',       emoji: '😭' },
    joy:       { file: 'jess-laugh.png',     emoji: '😂' },
    thumbsup:  { file: 'jess-like.png',      emoji: '👍' },
    hearteyes: { file: 'jess-love.png',      emoji: '😍' }
  };

  var LINES = {
    hello:     { en: 'Hi there! 👋', pt: 'Oi oi! 👋' },
    welcome:   { en: 'Hello again!', pt: 'Olá de novo!' },
    endOfPost: { en: 'You read the whole thing! Nice!', pt: 'Você leu até o fim! Boa!' },
    copyCode:  { en: 'Good code, right? 😉', pt: 'Código bom, né? 😉' },
    selection: { en: 'Ooh, I love that part too!', pt: 'Ai, também amo essa parte!' },
    comeback:  { en: "You're back!", pt: 'Você voltou!' },
    bye:       { en: 'Ok, bye… 🥺', pt: 'Tá bom, tchau… 🥺' },
    clicks: {
      en: ['Hehe!', 'That tickles!', 'Keep reading!', 'Best readers ever!', 'Yay!'],
      pt: ['Hehe!', 'Isso faz cócegas!', 'Continua lendo!', 'Melhores leitores!', 'Oba!']
    }
  };

  function t(key) {
    var entry = LINES[key];
    return isEN ? entry.en : entry.pt;
  }

  var bubbleTimer = null;
  var active = false;

  // Warm the cache so mood changes don't flicker.
  Object.keys(EMOTES).forEach(function (name) {
    new Image().src = imgBase + EMOTES[name].file;
  });

  function setEmote(name) {
    var emote = EMOTES[name] || EMOTES.party;
    fallback.textContent = emote.emoji;
    img.onerror = function () {
      // Emote PNG not there yet — fall back to the plain emoji.
      img.hidden = true;
      fallback.hidden = false;
    };
    img.onload = function () {
      img.hidden = false;
      fallback.hidden = true;
    };
    img.src = imgBase + emote.file;
    if (!reducedMotion) {
      charBtn.classList.remove('lj-bounce');
      void charBtn.offsetWidth; // restart the animation
      charBtn.classList.add('lj-bounce');
    }
  }

  function say(text, duration) {
    bubble.textContent = text;
    bubble.hidden = false;
    requestAnimationFrame(function () {
      bubble.classList.add('lj-show');
    });
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(function () {
      bubble.classList.remove('lj-show');
      setTimeout(function () { bubble.hidden = true; }, 250);
    }, duration || 3500);
  }

  function react(emote, text) {
    if (!active) return;
    setEmote(emote);
    if (text) say(text);
  }

  function confetti() {
    if (reducedMotion) return;
    var colors = ['#f472b6', '#5eead4', '#fde047', '#86efac', '#93c5fd'];
    for (var i = 0; i < 18; i++) {
      var piece = document.createElement('span');
      piece.className = 'lj-confetti';
      piece.style.background = colors[i % colors.length];
      charBtn.appendChild(piece);
      var angle = Math.random() * Math.PI - Math.PI; // upward half-circle
      var distance = 50 + Math.random() * 70;
      piece.animate(
        [
          { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
          {
            transform:
              'translate(' + Math.cos(angle) * distance + 'px, ' +
              (Math.sin(angle) * distance - 30) + 'px) rotate(' +
              (Math.random() * 540 - 270) + 'deg)',
            opacity: 0
          }
        ],
        { duration: 700 + Math.random() * 500, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      ).onfinish = function () { this.effect.target.remove(); };
    }
  }

  // withGreeting: true when re-summoned after dismiss (party + hello).
  // false for the quiet default appearance on page load.
  function show(withGreeting) {
    active = true;
    localStorage.setItem(STORAGE_KEY, 'on');
    root.hidden = false;
    setEmote(withGreeting ? 'party' : 'happy');
    requestAnimationFrame(function () {
      root.classList.add('lj-in');
    });
    if (withGreeting) {
      setTimeout(confetti, 350);
      setTimeout(function () { say(t('hello')); }, 450);
    }
  }

  function dismiss() {
    active = false;
    localStorage.setItem(STORAGE_KEY, 'off');
    setEmote('crying');
    say(t('bye'), 900);
    setTimeout(function () {
      root.classList.remove('lj-in');
      setTimeout(function () { root.hidden = true; }, 500);
    }, 900);
  }

  // --- Re-summon after dismiss -------------------------------------------

  // Typing "jess" anywhere on the page (outside form fields).
  var typed = '';
  document.addEventListener('keydown', function (e) {
    var target = e.target;
    if (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable ||
      e.key.length !== 1
    ) {
      return;
    }
    typed = (typed + e.key.toLowerCase()).slice(-4);
    if (typed === 'jess') {
      typed = '';
      if (active) {
        setEmote('party');
        confetti();
        say(t('welcome'));
      } else {
        show(true);
      }
    }
  });

  // 5 quick taps on the footer (mobile-friendly re-summon).
  var footer = document.querySelector('footer');
  if (footer) {
    var taps = 0;
    var tapTimer = null;
    footer.addEventListener('click', function () {
      taps++;
      clearTimeout(tapTimer);
      tapTimer = setTimeout(function () { taps = 0; }, 2500);
      if (taps >= 5) {
        taps = 0;
        if (!active) show(true);
      }
    });
  }

  // --- Reactions ---------------------------------------------------------

  // Clicking her cycles through moods.
  var clickEmotes = ['joy', 'hearteyes', 'thumbsup', 'happy', 'party'];
  var clickIndex = 0;
  charBtn.addEventListener('click', function () {
    var emote = clickEmotes[clickIndex % clickEmotes.length];
    clickIndex++;
    var lines = isEN ? LINES.clicks.en : LINES.clicks.pt;
    setEmote(emote);
    say(lines[Math.floor(Math.random() * lines.length)], 2000);
    if (emote === 'party') confetti();
  });

  closeBtn.addEventListener('click', dismiss);

  // Thumbs up when the reader reaches the end of a post.
  // Gated to the post layout — listing pages also use <article> for cards.
  var article =
    root.getAttribute('data-layout') === 'post' && document.querySelector('article');
  if (article) {
    var cheered = false;
    window.addEventListener(
      'scroll',
      function () {
        if (cheered || !active) return;
        if (article.getBoundingClientRect().bottom < window.innerHeight + 100) {
          cheered = true;
          react('thumbsup', t('endOfPost'));
        }
      },
      { passive: true }
    );
  }

  // Heart eyes when the reader selects a good chunk of text (max once per 30s).
  var lastSelectionReact = 0;
  document.addEventListener('selectionchange', function () {
    var selection = String(document.getSelection() || '');
    var now = Date.now();
    if (selection.length > 30 && now - lastSelectionReact > 30000) {
      lastSelectionReact = now;
      react('hearteyes', t('selection'));
    }
  });

  // Party when code gets copied (hooks the existing copy buttons).
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('.copy-button')) {
      react('party', t('copyCode'));
      if (active) confetti();
    }
  });

  // Joy when the reader comes back after being away for a while.
  var hiddenAt = null;
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      hiddenAt = Date.now();
    } else if (hiddenAt && Date.now() - hiddenAt > 30000) {
      react('joy', t('comeback'));
    }
  });

  // --- Always show (unless the reader dismissed her) ---------------------

  if (localStorage.getItem(STORAGE_KEY) !== 'off') {
    show(false);
  }
})();
