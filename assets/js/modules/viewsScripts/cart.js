import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
import {initializeGameSlots} from "../functions/loadGamesSlots.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del cart...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");

initializeGameSlots()

await loadHTMLAndExecuteScripts("#gameSuggested1", "../partials/gameSuggested.html");
await loadHTMLAndExecuteScripts("#gameSuggested2", "../partials/gameSuggested.html");
await loadHTMLAndExecuteScripts("#gameSuggested3", "../partials/gameSuggested.html");

await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");