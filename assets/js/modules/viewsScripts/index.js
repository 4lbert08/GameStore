import {loadHTMLAndExecuteScripts} from "../functions/includeHTMLRecursive.js";
import {initializeRowGalleries} from "../functions/loadRowGallery.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del index...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#gallery1", "../partials/gamesCardRowGallery.html");
await loadHTMLAndExecuteScripts("#gallery2", "../partials/gamesCardRowGallery.html");
await loadHTMLAndExecuteScripts("#gallery3", "../partials/gamesCardRowGallery.html");
const titles = [
    "Nuevos Lanzamientos",
    "Ofertas del Momento",
    "Mas Comprados"
];
const jsons = [
    "../../../backend/jsons/newGames.json",
    "../../../backend/jsons/oferts.json",
    "../../../backend/jsons/popularGames.json"
];
initializeRowGalleries(titles, jsons);