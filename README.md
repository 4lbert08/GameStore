# 🎮 GameStore - Plataforma de Venta de Videojuegos (41.3)

## 📌 Integrantes del proyecto

- Juan Francisco Del Rosario Machin
- Juan Boissier García
- Alberto José Rodríguez Ruano

## 📝 Descripción del proyecto

GameStore es una plataforma de comercio electrónico especializada en la venta de videojuegos digitales. Los usuarios pueden explorar un catálogo de juegos, ver detalles y reseñas, agregar productos al carrito y realizar compras de manera rápida y segura.

## 📋 Requisitos del proyecto

### Requisitos Funcionales (RF)

1. Los usuarios deben poder iniciar, cerrar sesión, y registrarse.
2. Los usuarios deben poder pagar con el método de pago definido que prefieran.
3. Los usuarios deben poder agregar y eliminar productos del carrito.
4. Los usuarios deben poder ver su historial de compras.
5. Los usuarios deben poder recuperar su contraseña en caso de olvido.
6. Los usuarios deben poder dejar una reseña en los juegos disponibles.
7. El sistema debe permitir a los usuarios buscar juegos por filtros.
8. Los usuarios podrán ordenar las reseñas por fecha.
9. Los usuarios deben poder cambiar los datos de su perfil.
10. Los usuarios deben poder cambiar el idioma.

### Requisitos No Funcionales (RNF)

1. La web debe manejar fuentes del alfabeto en inglés.
2. Se deben aceptar múltiples métodos de pago (tarjeta de crédito, PayPal, Bizum).
3. Cada videojuego debe tener una descripción, imágenes, precio y calificación de usuarios.
4. Se dispondrán juegos similares para cada videojuego, facilitando así la búsqueda.
5. El sistema debe calcular automáticamente el total de la compra.
6. Debe de tener una temática atractiva visualmente usando una escala de colores de rojo, azul y morado.
7. Permitir una fácil interacción.

## 📂 Mockups y Storyboards

- **Ubicación Mockups**: `documentacion/mockups`
- **Ubicación Storyboards**: `documentacion/mockups_storyboards.pdf`

## 📄 Páginas(Templates) HTML del proyecto

| Página          | Mockup implementado | Notas                              |
| --------------- | ------------------- | ---------------------------------- |
| `index.html`    | `home_mockup`       | Página de inicio                   |
| `advancedSearch.html`    | `advancedSearch_mockup`       | Página de busqueda avanzada                  |
| `gameShowcase.html`    | `gameShowcase_mockup`       | Página del título seleccionado                   |
| `viewMoreSections.html`    | `viewMoreSections_mockup`       | Página de ver más                   |
| `login.html`    | `login_mockup`       | Página de login de usuario                   |
| `forgotPassword.html`    | `forgotPassword_mockup`       | Página de contraseña olvidada                   |
| `OTPVerification.html`    | `OTPVerification_mockup`       | Página de verificación de código                   |
| `signUp.html`    | `signUp_mockup`       | Página de signUp                   |
| `resetPassword.html`    | `resetPassword_mockup`       | Página de cambio de contraseña                   |
| `userSettings.html`    | `userSettings_mockup`       | Página de configuración de usuario                   |
| `myReviews.html`    | `myReviews_mockup`       | Página de reseñas de usuario                   |
| `myOrders.html`    | `myOrders_mockup`       | Página de pedidos de usuario                   |
| `cart.html`    | `cart_mockup`       | Página de carrito                   |
| `checkout.html`    | `checkout_mockup`       | Página de pago                   |
| `aboutUs.html`    | `aboutUs_mockup`       | Página de AboutUs                   |



## 🖼️ Templates parciales utilizados

| Archivo Template     | Archivo en el que se carga      |
| -------------------- | ------------------------------- |
| `mainHeader.html`        | Todas las páginas menos en advancedSearch.html               |
| `secondHeader.html`        | advancedSearch.html               |
| `footer.html`        | Todas las páginas               |
| `gameCard.html`        | Páginas que usan gamesCardGallery.html y gamesCardRowGallery.html|
| `gameInShoppingCart.html`        | shoppingCart.html               |
| `gameSuggested.html`        | shoppingCart.html               |
| `memberCard.html`        | aboutUs.html               |
| `userMenuButton.html`        | userSetting.html, myOrders.html y myReviews.html               |
| `userReview.html`        | myReviews.html               |
| `gamesCardGallery.html`        | advancedSearch.html y viewMoreSections.html               |
| `gamesCardRowGallery.html`        | index.html y gameShowcase.html               |


## 🔗 Enlaces

- **Figma**: [https://www.figma.com/design/cce85AsKYbHsWryGC4aJGa/MOCKUPS-PWM?m=auto&t=PlizMet0r5Rgm5UZ-6](#)
- **Trello**: [https://trello.com/b/qtJ1w6iJ/tablero-pwm](#)

---

