export function passwordHandler(formSelector) {
    let form = document.querySelector(formSelector);

    if (!form) {
        console.warn(`No se encontró el formulario con el selector '${formSelector}'`);
        return;
    }

    let passwordField = document.getElementById('PasswordField');
    let passwordRepeatField = document.getElementById('PasswordRepeatField');

    if (!passwordField || !passwordRepeatField) {
        console.warn("No se encontraron los campos de contraseña.");
        return;
    }

    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

    passwordField.addEventListener("input", function () {
        if (!regex.test(passwordField.value)) {
            passwordField.setCustomValidity("La contraseña debe tener al menos una mayúscula, un número y un carácter especial.");
        } else {
            passwordField.setCustomValidity("");
        }
    });

    passwordRepeatField.addEventListener("input", function () {
        if (passwordField.value !== passwordRepeatField.value) {
            passwordRepeatField.setCustomValidity("Las contraseñas no coinciden.");
        } else {
            passwordRepeatField.setCustomValidity("");
        }
    });

    form.addEventListener("submit", function (e) {
        if (!form.checkValidity()) {
            e.preventDefault();
        }
    });
}
