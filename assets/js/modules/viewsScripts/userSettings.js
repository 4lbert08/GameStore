import {loadHTMLAndExecuteScripts} from "../functions/handlers/includeHTMLRecursive.js";
import {profilePictureHandler} from "../functions/handlers/profilePictureHandler.js";
import {setupLogoutButton} from "../functions/setters/setupLogoutButton.js";
import {loadUserData} from "../functions/loaders/loadUserData.js";
import {setupFormSubmission} from "../functions/setters/setupFormUserSettings.js";

console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del userConfiguration...");
await loadHTMLAndExecuteScripts("#main_header", "../partials/mainHeader.html");
await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
await loadHTMLAndExecuteScripts("#userMenuButton", "../partials/userMenuButton.html");

profilePictureHandler();
setupLogoutButton();
loadUserData();
setupFormSubmission();
