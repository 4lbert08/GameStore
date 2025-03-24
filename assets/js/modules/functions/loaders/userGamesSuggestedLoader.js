import { loadHTMLAndExecuteScripts } from "../handlers/includeHTMLRecursive.js";
import { loadJson } from "./jsonLoader.js";
import { getGameData } from "../getters/gamesDataMappingGetter.js";
import {updateSuggestedGameCard} from "../setters/suggestedCardSetter.js";

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