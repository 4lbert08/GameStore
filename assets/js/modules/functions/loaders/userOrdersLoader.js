import { loadHTMLAndExecuteScripts } from "../handlers/includeHTMLRecursive.js";
import { loadJson } from "./jsonLoader.js";
import { getGameData } from "../getters/getGamesData.js";

const updateOrderCard = (orderCard, order) => {
    const elements = {
        productImage: orderCard.querySelector('.product-image img'),
        productName: orderCard.querySelector('.product-name'),
        orderNumber: orderCard.querySelector('.order-number'),
        orderDate: orderCard.querySelector('.order-date'),
        system: orderCard.querySelector('.order-specs .spec-item:nth-child(1)'),
        platform: orderCard.querySelector('.order-specs .spec-item:nth-child(2)'),
        price: orderCard.querySelector('.order-specs .spec-item:nth-child(3)'),
        downloadLink: orderCard.querySelector('.download-link')
    };

    if (elements.productImage) {
        elements.productImage.src = order.productImage || '../../assets/imgs/default.png';
        elements.productImage.alt = `${order.productName} Cover`;
    }
    if (elements.productName) elements.productName.textContent = order.productName || 'Producto sin nombre';
    if (elements.orderNumber) elements.orderNumber.textContent = `ID: #${order.id || 'N/A'}`;
    if (elements.orderDate) elements.orderDate.textContent = order.date || 'Sin fecha';
    if (elements.system) elements.system.innerHTML = `<span class="spec-label">Sistema:</span> ${order.system || 'N/A'}`;
    if (elements.platform) elements.platform.innerHTML = `<span class="spec-label">Plataforma:</span> ${order.platform || 'N/A'}`;
    if (elements.price) elements.price.innerHTML = `<span class="spec-label">Precio:</span> $${order.price ? order.price.toFixed(2) : 'N/A'}`;
    if (elements.downloadLink) elements.downloadLink.href = order.invoiceLink || '#';
};

const createOrderSlot = (orderIndex, order, index) => {
    const slot = document.createElement('div');
    slot.className = 'order';
    const orderId = `order-${orderIndex}-${index + 1}`;
    slot.id = orderId;
    return slot;
};

export async function loadOrders(container, orderIndex, jsonPath) {
    const userData = await loadJson(jsonPath);
    if (!userData || !userData.purchaseHistory) return;

    const ordersData = await Promise.all(userData.purchaseHistory.map(async order => {
        const gameData = await getGameData(order.productId);
        return {
            id: order.purchaseId,
            productImage: gameData.productImage,
            productName: gameData.productName,
            date: order.date,
            system: gameData.system,
            platform: gameData.platform,
            price: gameData.price,
            invoiceLink: order.invoiceLink
        };
    }));

    const ordersContainer = document.createElement('div');
    ordersContainer.className = 'orders';
    container.innerHTML = '';
    container.appendChild(ordersContainer);

    const loadPromises = ordersData.map((order, index) => {
        const slot = createOrderSlot(orderIndex, order, index);
        ordersContainer.appendChild(slot);

        return loadHTMLAndExecuteScripts(`#${slot.id}`, "../../templates/partials/order.html")
            .then(() => {
                const orderCard = slot.querySelector('.order-card');
                if (orderCard) updateOrderCard(orderCard, order);
            });
    });

    await Promise.all(loadPromises);
}

export function initializeUserOrders(jsonPath) {
    setTimeout(async () => {
        const orderContainer = document.querySelector(".myOrders__ordersContainer");
        if (orderContainer) {
            await loadOrders(orderContainer, 0, jsonPath);
        } else {
            console.warn("No se encontró el contenedor .myOrders__ordersContainer");
        }
    }, 0);
}