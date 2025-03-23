import { loadData } from "../loaders/dataLoader.js";

const GAMES_JSON_PATH = "../../../backend/jsons/games.json";
const SYSTEMS_JSON_PATH = "../../../backend/jsons/systems.json";
const PLATFORMS_JSON_PATH = "../../../backend/jsons/platforms.json";
const GENRE_JSON_PATH = "../../../backend/jsons/genre.json";
const PEGI_JSON_PATH = "../../../backend/jsons/pegi.json";

// Mapa de recursos disponibles
const RESOURCE_PATHS = {
    games: GAMES_JSON_PATH,
    systems: SYSTEMS_JSON_PATH,
    platforms: PLATFORMS_JSON_PATH,
    genre: GENRE_JSON_PATH,
    pegi: PEGI_JSON_PATH
};

export const loadGameData = async (resources = ["games"]) => {
    const data = {
        gamesData: null,
        systemsData: null,
        platformsData: null,
        genreData: null,
        pegiData: null
    };

    const loadPromises = resources.map(resource => {
        if (!RESOURCE_PATHS[resource]) {
            console.warn(`Recurso ${resource} no reconocido.`);
            return Promise.resolve(null);
        }
        return loadData(RESOURCE_PATHS[resource]).then(result => {
            data[`${resource}Data`] = result;
        });
    });

    await Promise.all(loadPromises);
    return data;
};