import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del userConfiguration...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#userMenuButton", "../partials/userMenuButton.html");