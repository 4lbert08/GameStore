function loadHTMLAndExecuteScripts(selector, sourceFile) {
    fetch(sourceFile)
        .then(response => response.text())
        .then(html => {
            const container = document.querySelector(selector);
            if (container) {
                container.innerHTML = html;
                executeScripts(container);
            } else {
                console.error('Error: No se encontró el selector', selector);
            }
        })
        .catch(error => console.error('Error loading ' + sourceFile + ':', error));
}

function executeScripts(container) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach(script => {
        const scriptTag = document.createElement('script');

        if (script.src) {
            scriptTag.src = script.src;
            scriptTag.async = true;
        } else {
            scriptTag.textContent = script.textContent;
        }

        document.head.appendChild(scriptTag).parentNode.removeChild(scriptTag);
    });
}
