import { loadHTMLAndExecuteScripts } from "./modules/includeHTMLRecursive.js";
import { initializeGalleries } from "./modules/loadGallery.js";
import { handleFormSubmission } from "./modules/formHandler.js";
import { initializeGameSlots } from "./modules/loadGamesSlots.js";

console.log("Módulos importados correctamente.");

document.addEventListener("DOMContentLoaded", async () => {
    console.log("Página cargada, inicializando scripts...");

    const page = document.body.dataset.page;

    switch (page) {
        case "home":
            console.log("Ejecutando script del home...");
            await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");
            await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
            await loadHTMLAndExecuteScripts("#gallery1", "../partials/gamesCardRowGallery.html");
            await loadHTMLAndExecuteScripts("#gallery2", "../partials/gamesCardRowGallery.html");
            await loadHTMLAndExecuteScripts("#gallery3", "../partials/gamesCardRowGallery.html");
            initializeGalleries();
            break;

        case "aboutUs":
            console.log("Ejecutando script del aboutUs...");
            await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");

            await loadHTMLAndExecuteScripts("#memberCard1", "../partials/memberCard.html");
            await loadHTMLAndExecuteScripts("#memberCard2", "../partials/memberCard.html");
            await loadHTMLAndExecuteScripts("#memberCard3", "../partials/memberCard.html");
            break;

        case "userConfiguration":
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
            console.log("Ejecutando script de lostPassword...");
            handleFormSubmission("#lostPasswordForm", "OTPVerification.html");
            break;

        case "OTPVerification":
            console.log("Ejecutando script de OTPVerification...");
            handleFormSubmission("#OTPForm", "ResetPassword.html");
            break;

        case "shoppingCart":
            console.log("Ejecutando script de ShoppingCart...");
            await loadHTMLAndExecuteScripts("#main_header", "../partials/main_header.html");

            initializeGameSlots()

            await loadHTMLAndExecuteScripts("#gameSuggested1", "../partials/gameSuggested.html");
            await loadHTMLAndExecuteScripts("#gameSuggested2", "../partials/gameSuggested.html");
            await loadHTMLAndExecuteScripts("#gameSuggested3", "../partials/gameSuggested.html");

            await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
            break;

        case "advancedSearch":
            await loadHTMLAndExecuteScripts("#second-header", "../partials/second_header.html");

            await loadHTMLAndExecuteScripts("#search-results", "../partials/gamesCardGallery.html");
            initializeGalleries();

            await loadHTMLAndExecuteScripts("#footer", "../partials/footer.html");
            break;

        default:
            console.warn("No se ha definido una acción para esta página.");
    }
});
