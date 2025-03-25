import { getCommentsByGame, getCommentsByUser } from "../getters/commentariesGetter.js";
import {loadUsersMap} from "../getters/basicUserDataGetter.js";
import {loadGamesMap} from "../getters/basicGameDataGetter.js";
import {loadHTMLAndExecuteScripts} from "../handlers/includeHTMLRecursive.js";
import {createReviewSlot, updateReviewCard} from "../setters/commentarySetter.js";

const renderComments = async (container, containerIndex, comments) => {
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