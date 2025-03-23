import { loadJson } from "../loaders/jsonLoader.js";

const GAMES_JSON_PATH = '../../../backend/jsons/games.json';

export const loadGamesMap = async () => {
    const gamesData = await loadJson(GAMES_JSON_PATH);
    if (!gamesData) {
        console.error('No se pudieron cargar los datos de los juegos desde:', GAMES_JSON_PATH);
        return {};
    }

    const gamesMap = {};
    gamesData.forEach(game => {
        gamesMap[game.id] = {
            name: game.name,
            gameCover: game.gameCover
        };
    });
    return gamesMap;
};