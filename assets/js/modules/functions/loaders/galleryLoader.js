import { loadHTMLAndExecuteScripts } from "../handlers/includeHTMLRecursive.js";
import { loadJson } from "./jsonLoader.js";
import {createGameSlot, updateGameCard} from "../setters/gameCardSetter.js";

const GAMES_PER_PAGE = 20;

export async function loadGames(container, galleryIndex, jsonPath) {
    console.log(`Cargando juegos para la galería ${galleryIndex}`);

    const gamesData = await loadJson(jsonPath);
    if (!gamesData) {
        console.error('No se pudieron cargar los datos de los videojuegos.');
        return;
    }

    const gallery = container.querySelector('.gallery');
    const pagination = container.querySelector('.pagination');
    const prevButton = pagination.querySelector('#prevPage');
    const nextButton = pagination.querySelector('#nextPage');
    const pageNumber = pagination.querySelector('#pageNumber');
    let currentPage = 1;

    const totalPages = Math.ceil(gamesData.length / GAMES_PER_PAGE);

    const renderPage = async (page) => {
        const start = (page - 1) * GAMES_PER_PAGE;
        const end = Math.min(start + GAMES_PER_PAGE, gamesData.length);
        const pageGames = gamesData.slice(start, end);

        gallery.innerHTML = '';

        const loadPromises = pageGames.map((game, index) => {
            const slot = createGameSlot(galleryIndex, game, start + index);
            gallery.appendChild(slot);
            console.log(`Asignado ID: ${slot.id}, cargando: ${game.name}`);

            return loadHTMLAndExecuteScripts(`#${slot.id}`, "../partials/gameCard.html")
                .then(() => {
                    const gameCard = slot.querySelector('.game-card');
                    if (gameCard) updateGameCard(gameCard, game);
                });
        });

        await Promise.all(loadPromises);
        pageNumber.textContent = page;
        prevButton.disabled = page === 1;
        nextButton.disabled = page === totalPages;
    };

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    await renderPage(currentPage);
}

export function initializeGalleries(jsonPaths = []) {
    setTimeout(() => {
        const galleries = document.querySelectorAll(".gallery-container");

        galleries.forEach((gallery, index) => {
            const jsonPath = jsonPaths[index] || '../../../backend/jsons/games.json';
            loadGames(gallery, index, jsonPath);
        });
    }, 0);
}