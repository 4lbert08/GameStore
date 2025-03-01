import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
console.log("Funciones cargadas correctamente.")

console.log("Ejecutando script del payment...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");