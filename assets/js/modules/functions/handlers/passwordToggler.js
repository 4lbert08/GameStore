export function passwordToggler(password,Toggler) {

document.addEventListener("DOMContentLoaded", function () {

    const privacyToggler = document.querySelector(Toggler);
    const passwordField = document.querySelector(password);

    if (privacyToggler) {
        privacyToggler.addEventListener("click", function () {
            if (passwordField.type === "password") {
                passwordField.type = "text";
                privacyToggler.src = "../../assets/imgs/privacyDisabled.png";
            } else {
                passwordField.type = "password";
                privacyToggler.src = "../../assets/imgs/privacyEnabled.png"; //
            }
        });
    } else {
        console.error("No se encontró el elemento privacyToggler");
    }
});
}