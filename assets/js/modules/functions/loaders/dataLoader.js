import { loadJson } from "./loadJson.js";

export const loadData = async (path) => {
    const data = await loadJson(path);
    if (!data) {
        console.error(`No se pudieron cargar los datos desde ${path}.`);
    }
    return data;
};