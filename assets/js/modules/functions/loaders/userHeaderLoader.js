export function updateHeaderBasedOnUser() {
    const userData = localStorage.getItem("user");

    if (userData) {
        try {
            const user = JSON.parse(userData);

            const loginLink = document.querySelector("#logLink");
            const cartLink = document.querySelector("#cartLink");

            if (loginLink) {
                loginLink.href = "../views/userSettings.html";

                if (cartLink) {
                    cartLink.href = "../views/cart.html";
                }

                const loginIcon = document.querySelector("#logIcon");

                if (loginIcon) {
                    if (user.profileImage && user.profileImage.trim() !== "") {
                        loginIcon.src = user.profileImage;
                    } else {
                        loginIcon.src = "../../assets/imgs/default-profile.png";
                    }
                    loginIcon.alt = "Perfil de usuario";

                    console.log("Header actualizado con la imagen de perfil del usuario");
                }
            }
        } catch (error) {
            console.error("Error al procesar los datos del usuario:", error);
        }
    }
}