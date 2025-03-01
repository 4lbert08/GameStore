import { loadHTMLAndExecuteScripts } from "./modules/functions/includeHTMLRecursive.js";
import { initializeGalleries } from "./modules/functions/loadGallery.js";
import { handleFormSubmission } from "./modules/functions/formHandler.js";
import { initializeGameSlots } from "./modules/functions/loadGamesSlots.js";
import { initializeReviews } from "./modules/functions/loadGameReviews.js";

console.log("Módulos importados correctamente.");

document.addEventListener("DOMContentLoaded", async () => {
    console.log("Página cargada, inicializando scripts...");

    const page = document.body.dataset.page;

    switch (page) {
        case "home":

            break;

        case "aboutUs":
            break;

        case "userConfiguration":
            console.log("Ejecutando script del userConfiguration...");
            await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");
            await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
            await loadHTMLAndExecuteScripts("#userMenuButton", "../partials/userMenuButton.html");
            break;

        case "userReceipts":
            console.log("Ejecutando script del userConfiguration...");
            await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");
            await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
            await loadHTMLAndExecuteScripts("#userMenuButton", "../partials/userMenuButton.html");
            break;
        case "login":
            console.log("Ejecutando script de login...");
            handleFormSubmission("#loginForm", "userConfiguration.html");
            break;

        case "signUp":
            console.log("Ejecutando script del signUp...");
            handleFormSubmission("#signUpForm", "userConfiguration.html");
            break;

        case "lostPassword":
            break;

        case "OTPVerification":
            console.log("Ejecutando script de OTPVerification...");
            handleFormSubmission("#OTPForm", "ResetPassword.html");
            break;

        case "shoppingCart":

            break;

        case "advancedSearch":
            break;

        case "sectionView":
            console.log("Ejecutando script del sectionView...");
            await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");

            await loadHTMLAndExecuteScripts("#gallery1", "../partials/gamesCardGallery.html");
            initializeGalleries();

            await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
            break;

        case "GameShowcase":
            break;

        case "payment":
            break;

        case "userReviews":
            console.log("Ejecutando script del userReviews...");
            await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");
            await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
            await loadHTMLAndExecuteScripts("#UserMenuButton", "../partials/userMenuButton.html");
            initializeReviews();
            break;

        default:
            console.warn("No se ha definido una acción para esta página.");
    }
});
