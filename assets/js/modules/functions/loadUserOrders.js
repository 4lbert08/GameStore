import { loadHTMLAndExecuteScripts } from "./includeHTMLRecursive.js";

export function loadOrders(container) {
    console.log("Ejecutando loadOrders() en el contenedor:", container);

    const userOrders = container.querySelectorAll(".order");
    userOrders.forEach((order, index) => {
        const orderId = `order-${index + 1}`;
        order.id = orderId;
        console.log(`Asignado ID: ${orderId}, llamando a loadHTMLAndExecuteScripts`);

        loadHTMLAndExecuteScripts(`#${orderId}`, "../../templates/partials/order.html");
    });
}

export function initializeOrders() {
    setTimeout(() => {
        const orderContainer = document.querySelector(".myOrders__ordersContainer");
        if (orderContainer) {
            loadOrders(orderContainer);
        } else {
            console.warn("No se encontró el contenedor");
        }
    }, 0);
}