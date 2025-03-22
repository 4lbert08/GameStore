export function handleFormSubmission(formSelector, redirectUrl) {

    const form = document.querySelector(formSelector);
    console.log("Buscando formulario con selector:", formSelector, "Resultado:", form);

    if (!form) {
        console.warn(`No se encontró el formulario con el selector '${formSelector}'`);
        return;
    }

    console.log("Formulario encontrado, agregando event listener...");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Formulario enviado correctamente. Redirigiendo...");

        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 0);
    });
}
