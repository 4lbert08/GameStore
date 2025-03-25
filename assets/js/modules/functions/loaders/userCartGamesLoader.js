import { loadHTMLAndExecuteScripts } from "../handlers/includeHTMLRecursive.js";
import { loadJson } from "./jsonLoader.js";
import { getGameData } from "../getters/gamesDataMappingGetter.js";
import {createCartSlot, updateCartCard} from "../setters/cartCardSetter.js";
import {setCartItems, getCartItems, removeItem, refreshSummary } from "../handlers/cartHandler.js";

export async function loadCartItems(container, cartIndex, jsonPath) {
    const userData = await loadJson(jsonPath);
    if (!userData || !userData.cart || !userData.cart.items) {
        setCartItems([]);
        refreshSummary();
        return;
    }

    const cartItemsData = await Promise.all(userData.cart.items.map(async (item) => {
        const productId = parseInt(item.productId);
        if (!productId || isNaN(productId)) {
            console.warn(`productId inválido para el ítem del carrito:`, item);
            return null;
        }

        const gameData = await getGameData(productId);
        return {
            productId: productId,
            productImage: gameData.productImage,
            productName: gameData.productName,
            system: gameData.system,
            platform: gameData.platform,
            price: item.price,
            quantity: item.quantity || 1,
            discount: gameData.discount || 0
        };
    }));

    const validCartItems = cartItemsData.filter(item => item !== null);
    setCartItems(validCartItems);

    const cartContainer = document.createElement('div');
    cartContainer.className = 'cart-items';
    container.innerHTML = '';
    container.appendChild(cartContainer);

    const loadPromises = getCartItems().map((item, index) => {
        const slot = createCartSlot(cartIndex, item, index);
        cartContainer.appendChild(slot);

        return loadHTMLAndExecuteScripts(`#${slot.id}`, "../../templates/partials/gameInShoppingCart.html")
            .then(() => {
                const cartCard = slot.querySelector('.gameInShopping-card');
                if (cartCard) {
                    updateCartCard(cartCard, item, refreshSummary, (id) => removeItem(id, cartContainer, cartIndex, loadHTMLAndExecuteScripts, updateCartCard));
                }
            });
    });

    await Promise.all(loadPromises);

    refreshSummary();
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