import {loadHTMLAndExecuteScripts} from "../functions/handlers/includeHTMLRecursive.js";
import {setupTeamSection} from "../functions/loaders/developersCardsLoader.js";
console.log("Funciones cargadas correctamente.")

console.log("Ejecutando script del aboutUs...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");

const json = ["../../../backend/jsons/developers.json"];
setupTeamSection(json);