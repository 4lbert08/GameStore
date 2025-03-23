import { loadJson } from "../loaders/jsonLoader.js";

const USERS_JSON_PATH = '../../../backend/jsons/users.json';

export const loadUsersMap = async () => {
    const usersData = await loadJson(USERS_JSON_PATH);
    if (!usersData) {
        console.error('No se pudieron cargar los datos de los usuarios desde:', USERS_JSON_PATH);
        return {};
    }

    const usersMap = {};
    usersData.forEach(user => {
        usersMap[user.id] = {
            username: user.username,
            profileImage: user.profileImage
        };
    });
    return usersMap;
};