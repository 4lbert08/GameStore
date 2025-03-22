import {loadHTMLAndExecuteScripts} from "../functions/handlers/includeHTMLRecursive.js";
import {initializeGalleries} from "../functions/loaders/loadGallery.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del viewMoreSections...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");

await loadHTMLAndExecuteScripts("#gallery1", "../partials/gamesCardGallery.html");
initializeGalleries();

await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");