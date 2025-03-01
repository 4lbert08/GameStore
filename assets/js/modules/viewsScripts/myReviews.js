import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
import {initializeReviews} from "../functions/loadGameReviews.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del myReviews...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#UserMenuButton", "../partials/userMenuButton.html");
initializeReviews();