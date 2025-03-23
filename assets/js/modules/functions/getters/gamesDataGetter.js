import { getSystemName } from "../mapTools/systems.js";
import { getPlatformName } from "../mapTools/platforms.js";
import { loadGameData } from "../mapTools/games.js";

export const getGameData = async (productId, resources = ["games", "systems", "platforms"]) => {
    const allData = await loadGameData(resources);
    if (!allData || !allData.gamesData) {
        console.warn('No hay datos de videojuegos disponibles.');
        return {};
    }

    const { gamesData, systemsData, platformsData } = allData;

    const gameId = parseInt(productId);
    const game = gamesData.find(g => g.id === gameId);
    if (!game) {
        console.warn(`Juego con ID ${gameId} no encontrado.`);
        return {};
    }

    const systemName = getSystemName(game.system, systemsData, gameId);

    const platformName = getPlatformName(game.platform, platformsData, gameId);

    return {
        productName: game.name,
        productImage: game.gameCover,
        system: systemName,
        platform: platformName,
        price: game.price
    };
};