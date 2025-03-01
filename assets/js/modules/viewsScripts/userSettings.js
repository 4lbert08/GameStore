import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del userConfiguration...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#userMenuButton", "../partials/userMenuButton.html");