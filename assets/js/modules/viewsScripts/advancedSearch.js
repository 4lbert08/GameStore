import {loadHTMLAndExecuteScripts} from "../functions/handlers/includeHTMLRecursive.js";
import {initializeGalleries} from "../functions/loaders/galleryLoader.js";
console.log("Funciones cargadas correctamente.")

console.log("Ejecutando script del advancedSearch...");
await loadHTMLAndExecuteScripts("#second-header", "../partials/secondHeader.html");

await loadHTMLAndExecuteScripts("#search-results", "../partials/gamesCardGallery.html");
initializeGalleries();

await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");