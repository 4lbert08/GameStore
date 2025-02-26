import { loadHTMLAndExecuteScripts } from "./modules/includeHTMLRecursive.js";
import { initializeGalleries } from "./modules/loadGallery.js"; // Solo un lugar maneja la carga de galerías

document.addEventListener("DOMContentLoaded", async () => {
    console.log("Página cargada, inicializando scripts...");

    await loadHTMLAndExecuteScripts("#main_header", "../partials/header.html");
    await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");

    // Cargar galerías
    await loadHTMLAndExecuteScripts("#gallery1", "../partials/galleryOfGames.html");
    await loadHTMLAndExecuteScripts("#gallery2", "../partials/galleryOfGames.html");
    await loadHTMLAndExecuteScripts("#gallery3", "../partials/galleryOfGames.html");

    // Llamamos a initializeGalleries() solo después de que todas las galerías se carguen.
    setTimeout(() => {
        initializeGalleries();
    }, 0);
});
