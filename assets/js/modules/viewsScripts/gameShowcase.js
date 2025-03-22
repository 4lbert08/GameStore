import { loadHTMLAndExecuteScripts } from "../functions/handlers/includeHTMLRecursive.js";
import { initializeRowGalleries } from "../functions/loaders/loadRowGallery.js";
import { initializeReviews } from "../functions/loaders/loadGameReviews.js";
import { loadGameDetails } from "../functions/loaders/loadGameDetails.js";

console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del gameShowcase...");

await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#gallery1", "../partials/gamesCardRowGallery.html");

// Dentro de aqui se deberia de cargar los comentairos tambien
loadGameDetails();
initializeReviews();

// Deberíamos hacer una función que filtre los juegos
const titles = ["Juegos Relacionados"];
const relatedGames = ["../../../backend/jsons/games.json"];
initializeRowGalleries(titles, relatedGames);
const jsons = ["../../../backend/jsons/games.json"];

