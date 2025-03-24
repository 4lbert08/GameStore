export const updateSuggestedGameCard = (gameCard, game) => {
    const elements = {
        productImage: gameCard.querySelector('.product-image img'),
        productName: gameCard.querySelector('.product-name'),
        system: gameCard.querySelector('.gameRecommended-specs .spec-item:nth-child(1)'),
        platform: gameCard.querySelector('.gameRecommended-specs .spec-item:nth-child(2)'),
        price: gameCard.querySelector('.gameRecommended-specs .spec-item:nth-child(3)'),
        detailsBtn: gameCard.querySelector('.details-btn'),
        addToCartBtn: gameCard.querySelector('.add-to-cart-btn')
    };

    if (elements.productImage) {
        const imageSrc = game.productImage || '/GameStore/assets/imgs/default.png';
        elements.productImage.src = imageSrc;
        elements.productImage.alt = `${game.productName} Cover`;
        elements.productImage.onerror = () => {
            console.warn(`No se pudo cargar la imagen: ${imageSrc}`);
        };
    }
    if (elements.productName) elements.productName.textContent = game.productName || 'Producto sin nombre';
    if (elements.system) elements.system.innerHTML = `<span class="spec-label">Sistema:</span> ${game.system || 'N/A'}`;
    if (elements.platform) elements.platform.innerHTML = `<span class="spec-label">Plataforma:</span> ${game.platform || 'N/A'}`;
    if (elements.price) elements.price.innerHTML = `<span class="spec-label">Precio:</span> $${game.price ? game.price.toFixed(2) : 'N/A'}`;
    if (elements.detailsBtn) {
        elements.detailsBtn.addEventListener('click', () => {
            window.location.href = `../views/gameShowcase.html?gameId=${game.productId}`;
        });
    }
};