/**
 * Copy code functionality for code blocks
 */
(function() {
    'use strict';

    if (window.__copyCodeInitialized) {
        return;
    }
    window.__copyCodeInitialized = true;

    function addCopyButtons() {
        // Rouge outputs div.highlight > pre.highlight — only target the outer wrapper
        document.querySelectorAll('div.highlight:not([data-copy-added])').forEach(function(container) {
            container.setAttribute('data-copy-added', 'true');

            // Create and add copy button
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'copy-button not-prose';
            button.textContent = 'Copy';
            button.setAttribute('aria-label', 'Copy code to clipboard');
            
            button.addEventListener('click', function() {
                const code = container.querySelector('pre code') || container.querySelector('pre');
                if (code) {
                    copyToClipboard(code.textContent.trim(), button);
                }
            });
            
            container.appendChild(button);
        });
    }

    function copyToClipboard(text, button) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => showSuccess(button));
        } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
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
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addCopyButtons);
    } else {
        addCopyButtons();
    }
})();
