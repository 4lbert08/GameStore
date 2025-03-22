import {passwordToggler} from "../functions/handlers/passwordToggler.js";

console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del logIn...");

passwordToggler("#PasswordField","#privacyToggler");
handleFormSubmission("#loginDiv__Form", "index.html");


function handleFormSubmission(formSelector, redirectUrl) {
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

        const storedUser = JSON.parse(localStorage.getItem(email));

        if (storedUser && storedUser.password === password) {
            console.log("Inicio de sesión exitoso.");

            localStorage.setItem("user", JSON.stringify(storedUser));

            console.log("Datos del usuario:", storedUser.userName, storedUser.address);

            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 0);
        } else {
            console.log("Email o contraseña incorrectos.");
            alert("Email o contraseña incorrectos.");
        }
    });
}