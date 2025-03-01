import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
import {initializeGalleries} from "../functions/loadGallery.js";
console.log("Funciones cargadas correctamente.")

console.log("Ejecutando script del advancedSearch...");
await loadHTMLAndExecuteScripts("#second-header", "../partials/second_header.html");

await loadHTMLAndExecuteScripts("#search-results", "../partials/gamesCardGallery.html");
initializeGalleries();

await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");