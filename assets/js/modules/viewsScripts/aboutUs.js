import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
console.log("Funciones cargadas correctamente.")

console.log("Ejecutando script del aboutUs...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");

await loadHTMLAndExecuteScripts("#memberCard1", "../partials/memberCard.html");
await loadHTMLAndExecuteScripts("#memberCard2", "../partials/memberCard.html");
await loadHTMLAndExecuteScripts("#memberCard3", "../partials/memberCard.html");