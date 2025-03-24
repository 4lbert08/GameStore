import {loadHTMLAndExecuteScripts} from "../functions/handlers/includeHTMLRecursive.js";
import {initializeCart} from "../functions/loaders/userCartGamesLoader.js";
import {initializeSuggestedGames} from "../functions/loaders/userGamesSuggestedLoader.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del cart...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");

initializeCart("../../../backend/jsons/userExample.json");

await loadHTMLAndExecuteScripts("#gameSuggested1", "../partials/gameSuggested.html");
await loadHTMLAndExecuteScripts("#gameSuggested2", "../partials/gameSuggested.html");
await loadHTMLAndExecuteScripts("#gameSuggested3", "../partials/gameSuggested.html");

initializeSuggestedGames("../../../backend/jsons/games.json")

await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");