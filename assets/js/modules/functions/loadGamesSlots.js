import { loadHTMLAndExecuteScripts } from "./includeHTMLRecursive.js";

export function loadSlots(container) {
    console.log("Ejecutando loadSlots() en el contenedor:", container);

    const gameSlots = container.querySelectorAll(".cart__game");
    gameSlots.forEach((slot, index) => {
        const slotId = `game-slot-${index + 1}`;
        slot.id = slotId;
        console.log(`Asignado ID: ${slotId}, llamando a loadHTMLAndExecuteScripts`);

        loadHTMLAndExecuteScripts(`#${slotId}`, "../../templates/partials/gameInShoppingCart.html");
    });
}

export function initializeGameSlots() {
    setTimeout(() => {
        const cartContainer = document.querySelector(".cart");
        if (cartContainer) {
            loadSlots(cartContainer);
        } else {
            console.warn("No se encontró el contenedor .game-slot-container");
        }
    }, 0);
}
