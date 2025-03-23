export function handleFormSubmission(formSelector, redirectUrl) {
    const form = document.querySelector(formSelector);

    if (!form) {
        console.warn(`No se encontró el formulario con el selector '${formSelector}'`);
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.querySelector("#EmailField").value;
        const password = document.querySelector("#PasswordField").value;

        const storedUser = JSON.parse(localStorage.getItem(email));

        if (storedUser && storedUser.password === password) {

            const userWithSession = {
                ...storedUser,
                isLoggedIn: true,
                lastLogin: new Date().toISOString()
            };

            localStorage.setItem("user", JSON.stringify(userWithSession));

            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 0);
        } else {
            alert("Email o contraseña incorrectos.");
        }
    });
}