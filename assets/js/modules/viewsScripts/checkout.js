import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
console.log("Funciones cargadas correctamente.")

console.log("Ejecutando script del checkout...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");