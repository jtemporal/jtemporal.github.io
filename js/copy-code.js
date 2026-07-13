/**
 * Code block chrome: language label + copy button in a top toolbar
 * (GitHub-style, without covering the code).
 *
 * Rouge outputs:
 *   div.language-python.highlighter-rouge > div.highlight > pre > code
 */
(function () {
  'use strict';

  if (window.__copyCodeInitialized) {
    return;
  }
  window.__copyCodeInitialized = true;

  var LANG_LABELS = {
    plaintext: 'Text',
    text: 'Text',
    shell: 'Shell',
    bash: 'Bash',
    sh: 'Shell',
    zsh: 'Zsh',
    console: 'Console',
    terminal: 'Terminal',
    python: 'Python',
    py: 'Python',
    ruby: 'Ruby',
    rb: 'Ruby',
    javascript: 'JavaScript',
    js: 'JavaScript',
    typescript: 'TypeScript',
    ts: 'TypeScript',
    html: 'HTML',
    css: 'CSS',
    scss: 'SCSS',
    json: 'JSON',
    yaml: 'YAML',
    yml: 'YAML',
    toml: 'TOML',
    md: 'Markdown',
    markdown: 'Markdown',
    liquid: 'Liquid',
    diff: 'Diff',
    sql: 'SQL',
    go: 'Go',
    rust: 'Rust',
    java: 'Java',
    c: 'C',
    cpp: 'C++',
    csharp: 'C#',
    php: 'PHP',
    swift: 'Swift',
    kotlin: 'Kotlin',
    r: 'R',
    xml: 'XML',
    dockerfile: 'Dockerfile',
    make: 'Makefile',
    makefile: 'Makefile',
    ini: 'INI',
    conf: 'Config',
    gemfile: 'Ruby',
    erb: 'ERB'
  };

  function detectLanguage(container) {
    var node = container.parentElement;
    while (node && node !== document.body) {
      var classes = node.className || '';
      var match = classes.match(/(?:^|\s)language-([a-z0-9+#]+)/i);
      if (match) {
        return match[1].toLowerCase();
      }
      node = node.parentElement;
    }
    return null;
  }

  function labelFor(lang) {
    if (!lang) return 'Code';
    return LANG_LABELS[lang] || lang.charAt(0).toUpperCase() + lang.slice(1);
  }

  function codeText(container) {
    // Prefer the code cell so line-number gutter text is not copied.
    var node =
      container.querySelector('.rouge-code pre') ||
      container.querySelector('.rouge-code') ||
      container.querySelector('pre code') ||
      container.querySelector('pre');
    if (!node) return '';
    return node.textContent.replace(/\n$/, '');
  }

  function addToolbars() {
    document.querySelectorAll('div.highlight:not([data-copy-added])').forEach(function (container) {
      // Only outer Rouge wrappers (skip nested .highlight on <pre>)
      if (container.tagName !== 'DIV') return;
      // Normal blocks have <pre>; linenos blocks have a rewritten table.
      if (!container.querySelector('pre') && !container.querySelector('table.rouge-table')) return;

      container.setAttribute('data-copy-added', 'true');
      container.classList.add('has-code-toolbar');

      var lang = detectLanguage(container);
      var toolbar = document.createElement('div');
      toolbar.className = 'code-toolbar not-prose';

      var label = document.createElement('span');
      label.className = 'code-lang';
      label.textContent = labelFor(lang);

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'copy-button';
      button.textContent = 'Copy';
      button.setAttribute('aria-label', 'Copy code to clipboard');

      button.addEventListener('click', function () {
        var text = codeText(container);
        if (text) {
          copyToClipboard(text, button);
        }
      });

      toolbar.appendChild(label);
      toolbar.appendChild(button);
      container.insertBefore(toolbar, container.firstChild);
    });
  }

  function copyToClipboard(text, button) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () {
        showSuccess(button);
      });
    } else {
      var textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        showSuccess(button);
      } catch (err) {
        console.error('Copy failed:', err);
      }
      document.body.removeChild(textarea);
    }
  }

  function showSuccess(button) {
    var originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('copied');
    setTimeout(function () {
      button.textContent = originalText;
      button.classList.remove('copied');
    }, 2000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addToolbars);
  } else {
    addToolbars();
  }
})();
