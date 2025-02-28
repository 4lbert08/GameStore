import { loadHTMLAndExecuteScripts } from "./includeHTMLRecursive.js";

export function loadGames(container, galleryIndex) {
    console.log(`Ejecutando loadGames() para la galería ${galleryIndex}`);

    const gameSlots = container.querySelectorAll(".game-slot");
    gameSlots.forEach((slot, index) => {
        const gameId = `game-${galleryIndex}-${index + 1}`;
        slot.id = gameId;
        console.log(`Asignado ID: ${gameId}, llamando a loadHTMLAndExecuteScripts`);

        loadHTMLAndExecuteScripts(`#${gameId}`, "../partials/gameCard.html");
    });
}

export function initializeGalleries() {
    setTimeout(() => {
        const galleries = document.querySelectorAll(".gallery-container");
        galleries.forEach((gallery, galleryIndex) => {
            loadGames(gallery, galleryIndex);
        });
    }, 0);
}
