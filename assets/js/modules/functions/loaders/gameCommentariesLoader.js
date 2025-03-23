import { loadHTMLAndExecuteScripts } from "../handlers/includeHTMLRecursive.js";
import { loadJson } from "./jsonLoader.js";

// Rutas globales de los JSONs
const COMMENTS_JSON_PATH = '../../../backend/jsons/commentaries.json';
const GAMES_JSON_PATH = '../../../backend/jsons/games.json';
const USERS_JSON_PATH = '../../../backend/jsons/users.json';

// Función para cargar los juegos y crear un mapa de id_juego a datos del juego
const loadGamesMap = async () => {
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

// Función para cargar los usuarios y crear un mapa de id_usuario a datos del usuario
const loadUsersMap = async () => {
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

// Getter para obtener los comentarios de un juego específico
const getCommentsByGame = async (gameId) => {
    const commentsData = await loadJson(COMMENTS_JSON_PATH);
    if (!commentsData) {
        console.error('No se pudieron cargar los datos de los comentarios desde:', COMMENTS_JSON_PATH);
        return [];
    }

    console.log('Comentarios cargados:', commentsData);
    console.log('Buscando comentarios para el juego con ID:', gameId);

    // Convertir gameId a número para asegurar la comparación
    const numericGameId = Number(gameId);
    const filteredComments = commentsData.filter(comment => comment.id_juego === numericGameId);

    console.log('Comentarios encontrados para el juego:', filteredComments);
    return filteredComments;
};

// Getter para obtener los comentarios de un usuario específico
const getCommentsByUser = async (userId) => {
    const commentsData = await loadJson(COMMENTS_JSON_PATH);
    if (!commentsData) {
        console.error('No se pudieron cargar los datos de los comentarios desde:', COMMENTS_JSON_PATH);
        return [];
    }

    console.log('Comentarios cargados:', commentsData);
    console.log('Buscando comentarios para el usuario con ID:', userId);

    // Convertir userId a número para asegurar la comparación
    const numericUserId = Number(userId);
    const filteredComments = commentsData.filter(comment => comment.id_usuario === numericUserId);

    console.log('Comentarios encontrados para el usuario:', filteredComments);
    return filteredComments;
};

// Función para crear un slot (div) para cada comentario
const createReviewSlot = (containerIndex, review, index) => {
    const slot = document.createElement('div');
    slot.className = 'review';
    const reviewId = `review-${containerIndex}-${index + 1}`;
    slot.id = reviewId;
    return slot;
};

// Función para actualizar el contenido de una tarjeta de comentario
const updateReviewCard = (reviewCard, review, gamesMap, usersMap) => {
    const elements = {
        gameImg: reviewCard.querySelector('.userReview__game-img'),
        gameTitle: reviewCard.querySelector('.userReview__game-title'),
        userImg: reviewCard.querySelector('.userReview__user-img'),
        userName: reviewCard.querySelector('.userReview__user-name'),
        text: reviewCard.querySelector('.userReview__text')
    };

    // Actualizar la imagen del juego
    const gameData = gamesMap[review.id_juego] || {};
    if (elements.gameImg) {
        elements.gameImg.src = gameData.gameCover || '../../assets/imgs/default.png';
        elements.gameImg.alt = `${gameData.name || 'Juego desconocido'} Cover`;
    }

    // Actualizar el título del juego
    if (elements.gameTitle) {
        elements.gameTitle.textContent = gameData.name || 'Juego desconocido';
    }

    // Actualizar la imagen del usuario
    const userData = usersMap[review.id_usuario] || {};
    if (elements.userImg) {
        elements.userImg.src = userData.profileImage || '../../assets/imgs/default-user.png';
        elements.userImg.alt = `${userData.username || 'Usuario desconocido'} Profile`;
    }

    // Actualizar el nombre del usuario
    if (elements.userName) {
        elements.userName.textContent = userData.username || 'Usuario desconocido';
    }

    // Actualizar el texto del comentario
    if (elements.text) {
        elements.text.textContent = review.texto || 'Sin comentario';
    }
};

// Función para renderizar los comentarios (común para ambos tipos de consulta)
const renderComments = async (container, containerIndex, comments) => {
    // Cargar los mapas de juegos y usuarios
    const gamesMap = await loadGamesMap();
    const usersMap = await loadUsersMap();

    // Usar el contenedor .ReviewsContainer
    if (!container) {
        console.error('El contenedor .ReviewsContainer no existe.');
        return;
    }

    // Buscar o crear el contenedor .reviews dentro de .ReviewsContainer
    let reviewsContainer = container.querySelector('.reviews');
    if (!reviewsContainer) {
        reviewsContainer = document.createElement('div');
        reviewsContainer.className = 'reviews';
        container.appendChild(reviewsContainer);
    }

    // Limpiar el contenedor antes de añadir nuevos comentarios
    reviewsContainer.innerHTML = '';

    // Si no hay comentarios, mostrar un mensaje dinámicamente
    if (comments.length === 0) {
        const noCommentsMessage = document.createElement('p');
        noCommentsMessage.className = 'Review';
        noCommentsMessage.textContent = 'No se encontraron comentarios.';
        reviewsContainer.appendChild(noCommentsMessage);
        return;
    }

    // Crear y cargar los slots para cada comentario
    const loadPromises = comments.map((review, index) => {
        const slot = createReviewSlot(containerIndex, review, index);
        reviewsContainer.appendChild(slot);
        console.log(`Asignado ID: ${slot.id}, cargando comentario para el juego ${review.id_juego}`);

        return loadHTMLAndExecuteScripts(`#${slot.id}`, "../../templates/partials/userReview.html")
            .then(() => {
                const reviewCard = slot.querySelector('.userReview');
                if (reviewCard) updateReviewCard(reviewCard, review, gamesMap, usersMap);
            });
    });

    await Promise.all(loadPromises);
};

// Función para cargar los comentarios (puede ser por juego o por usuario)
export async function loadReviews(container, containerIndex, filterType, filterId) {
    console.log(`Cargando comentarios para el contenedor ${containerIndex}, tipo: ${filterType}, ID: ${filterId}`);

    let comments = [];
    if (filterType === 'game') {
        comments = await getCommentsByGame(filterId);
    } else if (filterType === 'user') {
        comments = await getCommentsByUser(filterId);
    } else {
        console.error('Tipo de filtro no válido. Use "game" o "user".');
        return;
    }

    await renderComments(container, containerIndex, comments);
}

// Función para inicializar los contenedores de comentarios
export function initializeReviews(filterType, filterId) {
    setTimeout(() => {
        const reviewsContainers = document.querySelectorAll(".ReviewsContainer");
        if (reviewsContainers.length === 0) {
            console.warn("No se encontraron contenedores .ReviewsContainer");
            return;
        }

        reviewsContainers.forEach((container, index) => {
            loadReviews(container, index, filterType, filterId);
        });
    }, 0);
}