import {loadHTMLAndExecuteScripts} from "../functions/handlers/includeHTMLRecursive.js";
import {profilePictureHandler} from "../functions/handlers/profilePictureHandler.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del userConfiguration...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#userMenuButton", "../partials/userMenuButton.html");

profilePictureHandler();