import { loadHTMLAndExecuteScripts } from "../functions/handlers/includeHTMLRecursive.js";
import { initializeRowGalleries } from "../functions/loaders/rowGalleryLoader.js";
import { loadGameDetails } from "../functions/loaders/gameDetailsLoader.js";

console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del gameShowcase...");

await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#gallery1", "../partials/gamesCardRowGallery.html");

loadGameDetails();

// Deberíamos hacer una función que filtre los juegos
const titles = ["Juegos Relacionados"];
const relatedGames = ["../../../backend/jsons/games.json"];
initializeRowGalleries(titles, relatedGames);
const jsons = ["../../../backend/jsons/games.json"];

