import {loadHTMLAndExecuteScripts} from "../functions/handlers/includeHTMLRecursive.js";
import {initializeUserOrders} from "../functions/loaders/userOrdersLoader.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del myOrders...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#userMenuButton", "../partials/userMenuButton.html");

//TODO
// Deberíamos hacer que dependiendo de la url coja un json u otro (dependiendo del user)
const json = [
    "../../../backend/jsons/userExample.json",
];
initializeUserOrders(json);