import {loadHTMLAndExecuteScripts} from "../functions/handlers/includeHTMLRecursive.js";
import { loadViewMoreContent } from "../functions/loaders/viewMoreContentLoader.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del viewMoreSections...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");

await loadHTMLAndExecuteScripts("#gallery1", "../partials/gamesCardGallery.html");

await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");

loadViewMoreContent();
