import { loadHTMLAndExecuteScripts } from "../handlers/includeHTMLRecursive.js";
import { loadJson } from "./jsonLoader.js";
import { getGameData } from "../getters/gamesDataMappingGetter.js";

const updateSuggestedGameCard = (gameCard, game) => {
    const elements = {
        productImage: gameCard.querySelector('.product-image img'),
        productName: gameCard.querySelector('.product-name'),
        system: gameCard.querySelector('.gameRecommended-specs .spec-item:nth-child(1)'),
        platform: gameCard.querySelector('.gameRecommended-specs .spec-item:nth-child(2)'),
        price: gameCard.querySelector('.gameRecommended-specs .spec-item:nth-child(3)'),
        detailsBtn: gameCard.querySelector('.details-btn'),
        addToCartBtn: gameCard.querySelector('.add-to-cart-btn')
    };

    if (elements.productImage) {
        const imageSrc = game.productImage || '/GameStore/assets/imgs/default.png';
        elements.productImage.src = imageSrc;
        elements.productImage.alt = `${game.productName} Cover`;
        elements.productImage.onerror = () => {
            console.warn(`No se pudo cargar la imagen: ${imageSrc}`);
            elements.productImage.src = '/GameStore/assets/imgs/fallback.png'; // Imagen de respaldo alternativa
        };
    }
    if (elements.productName) elements.productName.textContent = game.productName || 'Producto sin nombre';
    if (elements.system) elements.system.innerHTML = `<span class="spec-label">Sistema:</span> ${game.system || 'N/A'}`;
    if (elements.platform) elements.platform.innerHTML = `<span class="spec-label">Plataforma:</span> ${game.platform || 'N/A'}`;
    if (elements.price) elements.price.innerHTML = `<span class="spec-label">Precio:</span> $${game.price ? game.price.toFixed(2) : 'N/A'}`;
    if (elements.detailsBtn) {
        elements.detailsBtn.addEventListener('click', () => {
            window.location.href = `../views/gameShowcase.html?gameId=${game.productId}`;
        });
    }
};

export async function loadSuggestedGames(jsonPath) {
    const suggestedGamesData = await loadJson(jsonPath);
    if (!suggestedGamesData || !suggestedGamesData.length) return;

    const suggestedGameSlots = [
        document.querySelector('#gameSuggested1'),
        document.querySelector('#gameSuggested2'),
        document.querySelector('#gameSuggested3')
    ];

    const loadPromises = suggestedGamesData.slice(0, 3).map(async (game, index) => {
        const slot = suggestedGameSlots[index];
        if (!slot) return;

        const gameId = `suggested-game-${index + 1}`;
        slot.id = gameId;

        const productId = game.id ? parseInt(game.id) : null;
        if (!productId || isNaN(productId)) {
            console.warn(`productId inválido para el juego en el índice ${index}:`, game);
            return;
        }

        await loadHTMLAndExecuteScripts(`#${gameId}`, "../../templates/partials/gameSuggested.html");
        const gameCard = slot.querySelector('.gameRecommended-card');
        if (gameCard) {
            const gameData = await getGameData(productId);
            const suggestedGame = {
                productId: productId,
                productImage: gameData.productImage || game.gameCover,
                productName: gameData.productName || game.name,
                system: gameData.system || game.system,
                platform: gameData.platform || game.platform,
                price: gameData.price || game.price
            };
            updateSuggestedGameCard(gameCard, suggestedGame);
        }
    });

    await Promise.all(loadPromises);
}

export function initializeSuggestedGames(jsonPath) {
    setTimeout(async () => {
        await loadSuggestedGames(jsonPath);
    }, 0);
}