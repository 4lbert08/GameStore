import { loadHTMLAndExecuteScripts } from "../handlers/includeHTMLRecursive.js";
import { loadJson } from "./loadJson.js";

const GAMES_PER_PAGE = 20;

const updateGameCard = (gameCard, game) => {
    const elements = {
        cover: gameCard.querySelector('.game-card__cover'),
        title: gameCard.querySelector('.game-card__title'),
        price: gameCard.querySelector('.game-card__price'),
        link: gameCard.closest('a')
    };

    elements.cover.src = game.gameCover;
    elements.cover.alt = `${game.name} Cover`;
    elements.title.textContent = game.name;
    elements.price.textContent = game.discount > 0
        ? `$${(game.price * (1 - game.discount / 100)).toFixed(2)}`
        : `$${game.price.toFixed(2)}`;
    if (elements.link) {
        elements.link.href = `../views/gameShowcase.html?gameId=${game.id}`;
    }
};

const createGameSlot = (galleryIndex, game, index) => {
    const slot = document.createElement('div');
    slot.className = 'card__game';
    const gameId = `game-${galleryIndex}-${index + 1}`;
    slot.id = gameId;
    return slot;
};

export async function loadGames(container, galleryIndex, jsonPath, customTitle = null) {
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

    const titleElement = container.querySelector('.title h2');
    const finalTitle = customTitle || container.dataset.title || `Juegos Populares ${galleryIndex + 1}`;
    if (titleElement) titleElement.textContent = finalTitle;

    await renderPage(currentPage);
}

export function initializeGalleries(titles = [], jsonPaths = []) {
    setTimeout(() => {
        const galleries = document.querySelectorAll(".gallery-container");

        galleries.forEach((gallery, index) => {
            const title = titles[index] || "Juegos Populares";
            const jsonPath = jsonPaths[index] || '../../../backend/jsons/games.json';
            loadGames(gallery, index, jsonPath, title);
        });
    }, 0);
}