import {createCartSlot, updateCartCard} from "../setters/cartCardSetter.js";
import { updatePaymentSummary } from '../setters/paymentSummarySetter.js';

let cartItems = [];

export const setCartItems = (items) => {
    cartItems = items;
};

export const getCartItems = () => {
    return cartItems;
};

export const calculatePaymentSummary = () => {
    let subtotal = 0;
    let totalDiscount = 0;

    cartItems.forEach(item => {
        const quantity = item.quantity || 1;
        const price = item.price || 0;
        const discountPercentage = item.discount || 0;

        const itemSubtotal = price * quantity;
        const itemDiscount = (price * (discountPercentage / 100)) * quantity;

        subtotal += itemSubtotal;
        totalDiscount += itemDiscount;
    });

    return { subtotal, totalDiscount };
};

export const refreshSummary = () => {
    const { subtotal, totalDiscount } = calculatePaymentSummary();
    updatePaymentSummary(subtotal, totalDiscount);
};

export const removeItem = (productId, cartContainer, cartIndex, loadHTMLAndExecuteScripts, updateCartCard) => {
    cartItems = cartItems.filter(item => item.productId !== productId);
    cartContainer.innerHTML = '';
    cartItems.forEach((item, index) => {
        const slot = document.createElement('div');
        slot.className = 'cart-item';
        const cartItemId = `cart-item-${cartIndex}-${index + 1}`;
        slot.id = cartItemId;
        cartContainer.appendChild(slot);
        loadHTMLAndExecuteScripts(`#${slot.id}`, "../../templates/partials/gameInShoppingCart.html")
            .then(() => {
                const cartCard = slot.querySelector('.gameInShopping-card');
                if (cartCard) updateCartCard(cartCard, item, refreshSummary, (id) => removeItem(id, cartContainer, cartIndex, loadHTMLAndExecuteScripts, updateCartCard));
            });
    });
    refreshSummary();
    if (cartItems.length === 0) {
        updatePaymentSummary(0, 0);
    }
};