import { loadHTMLAndExecuteScripts } from "./includeHTMLRecursive.js";

export function loadSlots(container) {
    console.log("Ejecutando loadCommentaries() en el contenedor:", container);

    const gameCommentaries = container.querySelectorAll(".game-commentary");
    gameCommentaries.forEach((commentary, index) => {
        const slotId = `commentary-${index + 1}`;
        commentary.id = commentaryId;
        console.log(`Asignado ID: ${commentaryId}, llamando a loadHTMLAndExecuteScripts`);

        loadHTMLAndExecuteScripts(`#${commentaryId}`, "../../templates/partials/gameCommentary.html");
    });
}

export function initializeCommentaries() {
    setTimeout(() => {
        const cartContainer = document.querySelector(".CartDiv");
        if (cartContainer) {
            loadSlots(cartContainer);
        } else {
            console.warn("No se encontró el contenedor .CartDiv");
        }
    }, 0);
}
