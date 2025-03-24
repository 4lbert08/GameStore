import { loadHTMLAndExecuteScripts } from "../handlers/includeHTMLRecursive.js";
import { loadJson } from "./jsonLoader.js";
import { getGameData } from "../getters/gamesDataMappingGetter.js";

const updateCartCard = (cartCard, cartItem) => {
    const elements = {
        productImage: cartCard.querySelector('.product-image img'),
        productName: cartCard.querySelector('.product-name'),
        system: cartCard.querySelector('.gameInShopping-specs .spec-item:nth-child(1)'),
        platform: cartCard.querySelector('.gameInShopping-specs .spec-item:nth-child(2)'),
        price: cartCard.querySelector('.gameInShopping-specs .spec-item:nth-child(3)'),
        quantityInput: cartCard.querySelector('.quantity-input')
    };

    if (elements.productImage) {
        elements.productImage.src = cartItem.productImage;
        elements.productImage.alt = `${cartItem.productName} Cover`;
    }
    if (elements.productName) elements.productName.textContent = cartItem.productName || 'Producto sin nombre';
    if (elements.system) elements.system.innerHTML = `<span class="spec-label">Sistema:</span> ${cartItem.system || 'N/A'}`;
    if (elements.platform) elements.platform.innerHTML = `<span class="spec-label">Plataforma:</span> ${cartItem.platform || 'N/A'}`;
    if (elements.price) elements.price.innerHTML = `<span class="spec-label">Precio:</span> $${cartItem.price ? cartItem.price.toFixed(2) : 'N/A'}`;
    if (elements.quantityInput) elements.quantityInput.value = cartItem.quantity || 1;
};

const createCartSlot = (cartIndex, item, index) => {
    const slot = document.createElement('div');
    slot.className = 'cart-item';
    const cartItemId = `cart-item-${cartIndex}-${index + 1}`;
    slot.id = cartItemId;
    return slot;
};

export async function loadCartItems(container, cartIndex, jsonPath) {
    const userData = await loadJson(jsonPath);
    if (!userData || !userData.cart || !userData.cart.items) return;

    const cartItemsData = await Promise.all(userData.cart.items.map(async (item) => {
        const gameData = await getGameData(item.productId);
        return {
            productId: item.productId,
            productImage: gameData.productImage,
            productName: gameData.productName,
            system: gameData.system,
            platform: gameData.platform,
            price: item.price,
            quantity: item.quantity
        };
    }));

    const cartContainer = document.createElement('div');
    cartContainer.className = 'cart-items';
    container.innerHTML = '';
    container.appendChild(cartContainer);

    const loadPromises = cartItemsData.map((item, index) => {
        const slot = createCartSlot(cartIndex, item, index);
        cartContainer.appendChild(slot);

        return loadHTMLAndExecuteScripts(`#${slot.id}`, "../../templates/partials/gameInShoppingCart.html")
            .then(() => {
                const cartCard = slot.querySelector('.gameInShopping-card');
                if (cartCard) updateCartCard(cartCard, item);
            });
    });

    await Promise.all(loadPromises);
}

export function initializeCart(jsonPath) {
    setTimeout(async () => {
        const cartContainer = document.querySelector(".cart_carousel");
        if (cartContainer) {
            await loadCartItems(cartContainer, 0, jsonPath);
        } else {
            console.warn("No se encontró el contenedor .cart_carousel");
        }
    }, 0);
}