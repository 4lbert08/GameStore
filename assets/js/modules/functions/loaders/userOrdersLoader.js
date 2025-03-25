import { loadHTMLAndExecuteScripts } from "../handlers/includeHTMLRecursive.js";
import { loadJson } from "./jsonLoader.js";
import { getGameData } from "../getters/gamesDataMappingGetter.js";
import {updateOrderCard} from "../setters/orderCardSetter.js";

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