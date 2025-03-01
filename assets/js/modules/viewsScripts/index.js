import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
import {initializeGalleries} from "../functions/loadGallery.js";
console.log(loadHTMLAndExecuteScripts());

console.log("Ejecutando script del index...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#gallery1", "../partials/gamesCardRowGallery.html");
await loadHTMLAndExecuteScripts("#gallery2", "../partials/gamesCardRowGallery.html");
await loadHTMLAndExecuteScripts("#gallery3", "../partials/gamesCardRowGallery.html");
initializeGalleries();