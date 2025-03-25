export function handlerFormSubmissionForgotPassword(formSelector, redirectUrl) {
    const form = document.querySelector(formSelector);
    console.log("Buscando formulario con selector:", formSelector, "Resultado:", form);

    if (!form) {
        console.warn(`No se encontró el formulario con el selector '${formSelector}'`);
        return;
    }

    console.log("Formulario encontrado, agregando event listener...");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.querySelector("#EmailField").value;
        const password = document.querySelector("#PasswordField").value;
        const passwordRepeat = document.querySelector("#PasswordRepeatField").value;

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, ingresa un email válido.");
            return;
        }

        if (password !== passwordRepeat) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+.:,;-])[A-Za-z\d!@#$%^&*()_+.]{8,}$/;
        if (!passwordPattern.test(password)) {
            alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial.");
            return;
        }

        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 0);
    });
}