import { loadHTMLAndExecuteScripts } from "../functions/includeHTMLRecursive.js";
import { initializeRowGalleries } from "../functions/loadRowGallery.js";
import { initializeReviews } from "../functions/loadGameReviews.js";
import { loadGameDetails } from "../functions/loadGameDetails.js";

console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del gameShowcase...");

await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#gallery1", "../partials/gamesCardRowGallery.html");

loadGameDetails();

const titles = ["Juegos Relacionados"];
const jsons = ["../../../backend/jsons/games.json"];
initializeRowGalleries(titles, jsons);

initializeReviews();
