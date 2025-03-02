export async function loadHTMLAndExecuteScripts(selector, sourceFile) {
    console.log(`Intentando cargar ${sourceFile} en ${selector}`);

    try {
        const response = await fetch(sourceFile);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const html = await response.text();
        const container = document.querySelector(selector);
        if (!container) {
            console.error(`Error: No se encontró el selector ${selector}`);
            return;
        }

        console.log(`Insertando contenido en ${selector}`);
        container.innerHTML = html;

        await loadImages(container);

        await executeScriptsSequentially(container);

    } catch (error) {
        console.error(`Error al cargar ${sourceFile}:`, error);
    }
}

function loadImages(container) {
    const images = container.querySelectorAll("img");
    return Promise.all(Array.from(images).map(img => new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
    })));
}

async function executeScriptsSequentially(container) {
    const scripts = container.querySelectorAll("script");
    for (const script of scripts) {
        await new Promise(resolve => {
            const scriptTag = document.createElement("script");

            if (script.src) {
                scriptTag.src = script.src;
                scriptTag.async = false;
                scriptTag.onload = resolve;
            } else {
                scriptTag.textContent = script.textContent;
                resolve();
            }

            document.body.appendChild(scriptTag);
        });
    }
}
