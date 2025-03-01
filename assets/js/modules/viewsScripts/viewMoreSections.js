import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
import {initializeGalleries} from "../functions/loadGallery.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del viewMoreSections...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");

await loadHTMLAndExecuteScripts("#gallery1", "../partials/gamesCardGallery.html");
initializeGalleries();

await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");