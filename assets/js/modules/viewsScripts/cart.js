import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
import {initializeGameSlots} from "../functions/loadGamesSlots.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script de ShoppingCart...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");

initializeGameSlots()

await loadHTMLAndExecuteScripts("#gameSuggested1", "../partials/gameSuggested.html");
await loadHTMLAndExecuteScripts("#gameSuggested2", "../partials/gameSuggested.html");
await loadHTMLAndExecuteScripts("#gameSuggested3", "../partials/gameSuggested.html");

await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");