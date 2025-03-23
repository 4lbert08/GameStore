import { loadJson } from "../loaders/jsonLoader.js";

const COMMENTS_JSON_PATH = '../../../backend/jsons/commentaries.json';

export const getCommentsByGame = async (gameId) => {
    const commentsData = await loadJson(COMMENTS_JSON_PATH);
    if (!commentsData) {
        console.error('No se pudieron cargar los datos de los comentarios desde:', COMMENTS_JSON_PATH);
        return [];
    }

    console.log('Comentarios cargados:', commentsData);
    console.log('Buscando comentarios para el juego con ID:', gameId);

    const numericGameId = Number(gameId);
    const filteredComments = commentsData.filter(comment => comment.id_juego === numericGameId);

    console.log('Comentarios encontrados para el juego:', filteredComments);
    return filteredComments;
};

export const getCommentsByUser = async (userId) => {
    const commentsData = await loadJson(COMMENTS_JSON_PATH);
    if (!commentsData) {
        console.error('No se pudieron cargar los datos de los comentarios desde:', COMMENTS_JSON_PATH);
        return [];
    }

    console.log('Comentarios cargados:', commentsData);
    console.log('Buscando comentarios para el usuario con ID:', userId);

    const numericUserId = Number(userId);
    const filteredComments = commentsData.filter(comment => comment.id_usuario === numericUserId);

    console.log('Comentarios encontrados para el usuario:', filteredComments);
    return filteredComments;
};