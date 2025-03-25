import {loadHTMLAndExecuteScripts} from "../functions/handlers/includeHTMLRecursive.js";
import {VISAHandler} from "../functions/handlers/VISAHandler.js";
import {dropdownButtonHandler} from "../functions/handlers/dropdownContentHandler.js";
console.log("Funciones cargadas correctamente.")

console.log("Ejecutando script del checkout...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
VISAHandler();
dropdownButtonHandler();
