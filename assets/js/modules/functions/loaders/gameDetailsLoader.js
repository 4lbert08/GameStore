import {loadJson} from "./jsonLoader.js";
import {initializeReviews} from "./gameCommentariesLoader.js";

export async function loadGameDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('gameId');

    if (!gameId) {
        console.error('No se proporcionó un gameId en la URL');
        document.getElementById('GameShowcase').innerHTML = '<p>Error: No se especificó un juego.</p>';
        return;
    }

    const gamesData = await loadJson('../../../backend/jsons/games.json');
    if (!gamesData) {
        console.error('Error al cargar los datos de los juegos');
        document.getElementById('GameShowcase').innerHTML = '<p>Error al cargar los datos del juego.</p>';
        return;
    }

    const game = gamesData.find(g => g.id == gameId);
    if (!game) {
        console.error('Juego no encontrado');
        document.getElementById('GameShowcase').innerHTML = '<p>Juego no encontrado.</p>';
        return;
    }

    document.querySelector('#GameShowcase .Titles').textContent = game.name;

    document.getElementById('GameImage').src = game.gameCover;
    document.getElementById('GameImage').alt = `${game.name} Cover`;

    // Precio (con descuento si aplica)
    const priceElement = document.getElementById('Price');
    if (game.discount > 0) {
        const discountedPrice = game.price * (1 - game.discount / 100);
        priceElement.textContent = `$${discountedPrice.toFixed(2)}`;
    } else {
        priceElement.textContent = `$${game.price.toFixed(2)}`;
    }

    document.getElementById('DescriptionParagraph').textContent = game.description || 'Sin descripción disponible.';

    // Imágenes adicionales (en #GameMedia)
    const imagesContainer = document.getElementById('ImagesContainer');
    if (game.Images && Array.isArray(game.Images)) {
        imagesContainer.innerHTML = '';
        const rows = Math.ceil(game.Images.length / 2);
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');
            row.className = 'MediaImagesRow';
            for (let j = 0; j < 2; j++) {
                const imgIndex = i * 2 + j;
                if (imgIndex < game.Images.length) {
                    const img = document.createElement('img');
                    img.className = 'MediaImage';
                    img.src = game.Images[imgIndex];
                    img.alt = `${game.name} Image ${imgIndex + 1}`;
                    row.appendChild(img);
                }
            }
            imagesContainer.appendChild(row);
        }
    }

    const videoIframe = document.querySelector('#GameMedia__GameVideo iframe');
    if (game.trailer) {
        const videoId = game.trailer.match(/(?:v=)([^&]+)/)?.[1];
        if (videoId) {
            videoIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
        } else {
            document.getElementById('GameMedia__GameVideo').style.display = 'none';
        }
    } else {
        document.getElementById('GameMedia__GameVideo').style.display = 'none';
    }

    const cartButton = document.getElementById('CartButton');
    cartButton.setAttribute('data-game-id', game.id);
    cartButton.onclick = () => {
        console.log(`Añadiendo al carrito el juego con ID: ${game.id}`);
        // TODO
        // Zona que configurar para añadir al carrito el juego
        // Deberemos hacer una función aparte para esta funcionalidad
    };


    initializeReviews("game", gameId);
}