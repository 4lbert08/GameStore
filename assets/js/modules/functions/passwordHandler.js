export function passwordHandler(formSelector) {

    let form = document.querySelector(formSelector);

    if (!form) {
        console.warn(`No se encontró el formulario con el selector '${formSelector}'`);
        return;
    }

    form.addEventListener("submit", function (e) {
        let passwordField = document.getElementById('PasswordField').value;
        let passwordRepeatField = document.getElementById('PasswordRepeatField').value;

        let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

        if (!regex.test(passwordField)) {
            e.preventDefault();
            alert("Contraseña debe tener una mayúscula,un numero y un caracter especial ");
        }else if (passwordField!==passwordRepeatField) {
            e.preventDefault();
            alert("Las contraseñas deben ser iguales")
        }
    });
}





