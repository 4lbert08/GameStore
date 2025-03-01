import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
import {initializeGalleries} from "../functions/loadGallery.js";
import {initializeReviews} from "../functions/loadGameReviews.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del gameShowcase...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#gallery1", "../partials/gamesCardRowGallery.html");
initializeGalleries();

initializeReviews();