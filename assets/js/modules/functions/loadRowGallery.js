import { loadHTMLAndExecuteScripts } from "./includeHTMLRecursive.js";
import { loadJson } from "./loadJson.js";

export async function loadGames(container, galleryIndex, jsonPath, customTitle = null) {
    console.log(`Ejecutando loadGames() para la galería ${galleryIndex}`);
    const gamesData = await loadJson(jsonPath);
    if (!gamesData) {
        console.error('No se pudieron cargar los datos de los videojuegos.');
        return;
    }

    const gameSlots = container.querySelectorAll(".cart__game");

    gameSlots.forEach((slot, index) => {
        if (index < gamesData.length) {
            const game = gamesData[index];
            const gameId = `game-${galleryIndex}-${index + 1}`;
            slot.id = gameId;
            console.log(`Asignado ID: ${gameId}, cargando datos del juego: ${game.name}`);

            loadHTMLAndExecuteScripts(`#${gameId}`, "../partials/gameCard.html").then(() => {
                const gameCard = slot.querySelector('.game-card');
                if (gameCard) {
                    gameCard.querySelector('.game-card__cover').src = game.gameCover;
                    gameCard.querySelector('.game-card__cover').alt = `${game.name} Cover`;
                    gameCard.querySelector('.game-card__title').textContent = game.name;
                    const priceElement = gameCard.querySelector('.game-card__price');
                    if (game.discount > 0) {
                        const discountedPrice = game.price * (1 - game.discount / 100);
                        priceElement.textContent = `$${discountedPrice.toFixed(2)}`;
                    } else {
                        priceElement.textContent = `$${game.price.toFixed(2)}`;
                    }
                    const gameLink = gameCard.closest('a');
                    if (gameLink) {
                        gameLink.href = `../views/gameShowcase.html?gameId=${game.id}`;
                    }
                }
            });
        }
    });

    const titleElement = container.querySelector('.title h2');
    const finalTitle = customTitle || container.dataset.title || `Juegos Populares ${galleryIndex + 1}`;
    if (titleElement) {
        titleElement.textContent = finalTitle;
    }
}

export function initializeRowGalleries(titles = [], jsonPaths = []) {
    setTimeout(() => {
        const galleries = document.querySelectorAll(".gallery-container");
        galleries.forEach((gallery, galleryIndex) => {
            const title = titles[galleryIndex] || "Juegos Populares";
            const jsonPath = jsonPaths[galleryIndex] || '../../../backend/jsons/games.json';
            loadGames(gallery, galleryIndex, jsonPath, title);
        });
    }, 0);
}