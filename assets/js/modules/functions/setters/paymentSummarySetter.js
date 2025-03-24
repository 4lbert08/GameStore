export const updatePaymentSummary = (subtotal, totalDiscount) => {
    const subtotalElement = document.querySelector('.payment__details .payment__row:nth-child(1) .payment__value');
    const discountElement = document.querySelector('.payment__details .payment__row:nth-child(2) .payment__value.payment__discount');
    const totalElement = document.querySelector('.payment__details .payment__row.payment__total .payment__value');

    if (subtotalElement) {
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }
    if (discountElement) {
        discountElement.textContent = totalDiscount > 0 ? `-$${totalDiscount.toFixed(2)}` : '$0.00';
    }
    if (totalElement) {
        const total = subtotal - totalDiscount;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
};