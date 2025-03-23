import {loadHTMLAndExecuteScripts} from "../functions/handlers/includeHTMLRecursive.js";
import {setupTeamSection} from "../functions/loaders/developersCardsLoader.js";
console.log("Funciones cargadas correctamente.")

console.log("Ejecutando script del aboutUs...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");

await loadHTMLAndExecuteScripts("#memberCard1", "../partials/memberCard.html");
await loadHTMLAndExecuteScripts("#memberCard2", "../partials/memberCard.html");
await loadHTMLAndExecuteScripts("#memberCard3", "../partials/memberCard.html");

const json = ["../../../backend/jsons/developers.json"];
setupTeamSection(json);