export const createCartSlot = (cartIndex, item, index) => {
    const slot = document.createElement('div');
    slot.className = 'cart-item';
    const cartItemId = `cart-item-${cartIndex}-${index + 1}`;
    slot.id = cartItemId;
    return slot;
};

export const updateCartCard = (cartCard, cartItem, onQuantityChange, onRemove) => {
    const elements = {
        productImage: cartCard.querySelector('.product-image img'),
        productName: cartCard.querySelector('.product-name'),
        system: cartCard.querySelector('.gameInShopping-specs .spec-item:nth-child(1)'),
        platform: cartCard.querySelector('.gameInShopping-specs .spec-item:nth-child(2)'),
        price: cartCard.querySelector('.gameInShopping-specs .spec-item:nth-child(3)'),
        quantityInput: cartCard.querySelector('.quantity-input'),
        removeBtn: cartCard.querySelector('.remove-btn')
    };

    if (elements.productImage) {
        const imageSrc = cartItem.productImage || '/GameStore/assets/imgs/default.png';
        elements.productImage.src = imageSrc;
        elements.productImage.alt = `${cartItem.productName} Cover`;
        elements.productImage.onerror = () => {
            console.warn(`No se pudo cargar la imagen: ${imageSrc}`);
            elements.productImage.src = '/GameStore/assets/imgs/fallback.png';
        };
    }
    if (elements.productName) elements.productName.textContent = cartItem.productName || 'Producto sin nombre';
    if (elements.system) elements.system.innerHTML = `<span class="spec-label">Sistema:</span> ${cartItem.system || 'N/A'}`;
    if (elements.platform) elements.platform.innerHTML = `<span class="spec-label">Plataforma:</span> ${cartItem.platform || 'N/A'}`;
    if (elements.price) elements.price.innerHTML = `<span class="spec-label">Precio:</span> $${cartItem.price ? cartItem.price.toFixed(2) : 'N/A'}`;
    if (elements.quantityInput) {
        elements.quantityInput.value = cartItem.quantity || 1;
        elements.quantityInput.addEventListener('input', (e) => {
            const newQuantity = parseInt(e.target.value);
            if (newQuantity >= 1) {
                cartItem.quantity = newQuantity;
                onQuantityChange();
            } else {
                e.target.value = 1;
                cartItem.quantity = 1;
                onQuantityChange();
            }
        });
    }
    if (elements.removeBtn) {
        elements.removeBtn.addEventListener('click', () => {
            onRemove(cartItem.productId);
        });
    }
};