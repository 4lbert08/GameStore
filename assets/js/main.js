import { loadHTMLAndExecuteScripts } from "./modules/includeHTMLRecursive.js";
import { initializeGalleries } from "./modules/loadGallery.js";

document.addEventListener("DOMContentLoaded", async () => {
    console.log("Página cargada, inicializando scripts...");

    const page = document.body.dataset.page; // Usa `data-page` en el body de cada HTML

    switch (page) {
        case "home":
            await loadHTMLAndExecuteScripts("#main_header", "../partials/header.html");
            await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");

            await loadHTMLAndExecuteScripts("#gallery1", "../partials/galleryOfGames.html");
            await loadHTMLAndExecuteScripts("#gallery2", "../partials/galleryOfGames.html");
            await loadHTMLAndExecuteScripts("#gallery3", "../partials/galleryOfGames.html");
            initializeGalleries();
            break;

        case "aboutUs":
            await loadHTMLAndExecuteScripts("#main_header", "../partials/header.html");
            break;

        case "userConfiguration":
            await loadHTMLAndExecuteScripts("#main_header", "../partials/header.html");
            await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");

            await loadHTMLAndExecuteScripts("#userMenuButton", "../partials/userMenuButton.html");
            break;

        case "contact":
            import("./modules/contactPage.js").then(module => module.initContactForm());
            break;

        default:
            console.warn("No se ha definido una acción para esta página.");
    }
});
