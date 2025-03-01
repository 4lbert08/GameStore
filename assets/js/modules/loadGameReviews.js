import { loadHTMLAndExecuteScripts } from "./includeHTMLRecursive.js";

export function loadReviews(container) {
    console.log("Ejecutando loadCommentaries() en el contenedor:", container);

    const gameCommentaries = container.querySelectorAll(".review");
    gameCommentaries.forEach((commentary, index) => {
        const commentaryId = `review-${index + 1}`;
        commentary.id = commentaryId;
        console.log(`Asignado ID: ${commentaryId}, llamando a loadHTMLAndExecuteScripts`);

        loadHTMLAndExecuteScripts(`#${commentaryId}`, "../../templates/partials/userReview.html");
    });
}

export function initializeReviews() {
    setTimeout(() => {
        const cartContainer = document.querySelector(".ReviewsContainer");
        if (cartContainer) {
            loadReviews(cartContainer);
        } else {
            console.warn("No se encontró el contenedor .game-slot-container");
        }
    }, 0);
}
