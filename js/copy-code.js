/**
 * Copy code functionality for code blocks
 */
(function() {
    'use strict';

    function addCopyButtons() {
        // Find all highlighted code blocks that don't already have a copy button
        document.querySelectorAll('.highlight:not([data-copy-added])').forEach(function(container) {
            // Mark as processed
            container.setAttribute('data-copy-added', 'true');
            
            // Ensure container can hold absolutely positioned button
            container.style.position = 'relative';
            container.style.overflow = 'visible';
            
            // Create and add copy button
            const button = document.createElement('button');
            button.className = 'copy-button';
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
