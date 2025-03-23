import { getCommentsByGame, getCommentsByUser } from "../getters/commentariesGetter.js";
import {loadUsersMap} from "../getters/basicUserDataGetter.js";
import {loadGamesMap} from "../getters/basicGameDataGetter.js";
import {loadHTMLAndExecuteScripts} from "../handlers/includeHTMLRecursive.js";

export const createReviewSlot = (containerIndex, review, index) => {
    const slot = document.createElement('div');
    slot.className = 'review';
    const reviewId = `review-${containerIndex}-${index + 1}`;
    slot.id = reviewId;
    return slot;
};

export const updateReviewCard = (reviewCard, review, gamesMap, usersMap) => {
    const elements = {
        gameImg: reviewCard.querySelector('.userReview__game-img'),
        gameTitle: reviewCard.querySelector('.userReview__game-title'),
        userImg: reviewCard.querySelector('.userReview__user-img'),
        userName: reviewCard.querySelector('.userReview__user-name'),
        text: reviewCard.querySelector('.userReview__text')
    };

    const gameData = gamesMap[review.id_juego] || {};
    if (elements.gameImg) {
        elements.gameImg.src = gameData.gameCover || '../../assets/imgs/default.png';
        elements.gameImg.alt = `${gameData.name || 'Juego desconocido'} Cover`;
    }

    if (elements.gameTitle) {
        elements.gameTitle.textContent = gameData.name || 'Juego desconocido';
    }

    const userData = usersMap[review.id_usuario] || {};
    if (elements.userImg) {
        elements.userImg.src = userData.profileImage || '../../assets/imgs/default-user.png';
        elements.userImg.alt = `${userData.username || 'Usuario desconocido'} Profile`;
    }

    if (elements.userName) {
        elements.userName.textContent = userData.username || 'Usuario desconocido';
    }

    if (elements.text) {
        elements.text.textContent = review.texto || 'Sin comentario';
    }
};

export const renderComments = async (container, containerIndex, comments) => {
    const gamesMap = await loadGamesMap();
    const usersMap = await loadUsersMap();

    if (!container) {
        console.error('El contenedor .ReviewsContainer no existe.');
        return;
    }

    let reviewsContainer = container.querySelector('.reviews');
    if (!reviewsContainer) {
        reviewsContainer = document.createElement('div');
        reviewsContainer.className = 'reviews';
        container.appendChild(reviewsContainer);
    }

    reviewsContainer.innerHTML = '';

    if (comments.length === 0) {
        const noCommentsMessage = document.createElement('p');
        noCommentsMessage.className = 'Review';
        noCommentsMessage.textContent = 'No se encontraron comentarios.';
        reviewsContainer.appendChild(noCommentsMessage);
        return;
    }

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