# 🎮 GameStore - Plataforma de Venta de Videojuegos (41.3)


## 🚀 Sprint 2 - Desarrollo de funcionalidades clave

El **SPRINT 2** consta de tres partes principales:

### 1️⃣ Carga dinámica de contenido con JavaScript  
Se ha implementado la carga dinámica del contenido final del sitio web utilizando **vanilla JavaScript**.  
Para ello, los datos se almacenan en **ficheros JSON**, estructurados de manera similar a una base de datos, con el objetivo de que en el futuro puedan ser exportados desde un servidor remoto.  
Actualmente, estos archivos JSON están alojados localmente junto con los ficheros HTML, CSS y JavaScript del proyecto.
 
### 2️⃣ Implementación y validación de formularios  
Se ha incorporado varios **formularios** en el sitio web, validado en el **lado cliente** mediante la funcionalidad nativa de **HTML5**.  
Se ha desarrollado un formulario de **registro y autenticación de usuarios**, lo que permite a los usuarios registrados modificar sus datos y cerrar la sesión.

### 3️⃣ Aplicación de Responsive Web Design (RWD)  
Para mejorar la accesibilidad y experiencia del usuario, se ha optimizado el diseño de las páginas mediante **Responsive Web Design (RWD)**.  
Se han desarrollado **tres versiones del diseño** para cada template, adaptándolo a distintos tamaños de pantalla:  

- **Dispositivos grandes**

  Se ha utilizado el tamaño por defecto de un Desktop.

- **Dispositivos medianos**

  iPad Air 5
    Width: 820px
    Height: 1180px
   
- **Dispositivos pequeños**
  
  iPhone 14 Pro Max
    Width: 431px
    Height: 932px



## 📂 Estructura actualizada del proyecto

<pre>
GameStore/
├── assets/              # Recursos estáticos (imágenes, estilos, scripts, fuentes)
│   ├── css/             # Estilos del proyecto
│   │   ├── partials/    # Estilos de los componentes
│   │   ├── views/       # Estilos de las páginas
│   ├── fonts/           # Fuentes utilizadas
│   ├── imgs/            # Imágenes del proyecto
│   ├── js/              # Scripts del proyecto
│   │   ├── modules/     
│   │   │   ├── functions/       # Funciones reutilizables
│   │   │   │   ├── getters/     # Funciones que obtienen datos de distintas fuentes (ej. JSON, API)
│   │   │   │   ├── setters/     # Funciones que modifican o actualizan datos en la aplicación
│   │   │   │   ├── handlers/    # Manejadores de eventos y lógica de interacción del usuario
│   │   │   │   ├── loaders/     # Funciones encargadas de cargar dinámicamente contenido en la página
│   │   │   │   ├── mapTools/    # Herramientas para mapear 
│   │   │   ├── viewsScripts/    # Scripts específicos de cada página
│
├── templates/           # Archivos HTML del proyecto
│   ├── partials/        # Componentes reutilizables en HTML
│   ├── views/           # Páginas principales
│
└── documentation/       # Documentación del proyecto
|   ├── mockups/         # Diseños visuales (Mockups)
│   │   ├── largeDevicesMockups/   # Diseños visuales para dispositivos grandes
│   │   ├── mediumDevicesMockups/  # Diseños Visuales para dispositivos medianos
│   │   ├── smallDevicesMockups/   # Diseños Visuales para dispositivos pequeños
|
└── backend/            # Carpeta relacionada con todo el backend del proyecto
│   ├── jsons/          # Ficheros JSON, estructurados de manera similar a una base de datos

</pre>


## 📂 Estructura general de los jsons del proyecto

<pre>
backend/                          # Carpeta relacionada con todo el backend del proyecto
│   ├── jsons/                        # Ficheros JSON, estructurados de manera similar a una base de datos
│   │   ├── commentaries.json         # Comentarios de los usuarios sobre los juegos
│   │   │   ├── id_comentario        # Identificador único del comentario
│   │   │   ├── id_juego             # Identificador del juego comentado
│   │   │   ├── id_usuario           # Identificador del usuario que hizo el comentario
│   │   │   ├── texto                # Contenido del comentario
│   │   │   
│   │   ├── games.json               # Información sobre los videojuegos
│   │   │   ├── id                   # Identificador único del juego
│   │   │   ├── title                # Nombre del videojuego
│   │   │   ├── developer            # Nombre de la empresa desarrolladora
│   │   │   ├── release_date        # Fecha de lanzamiento
│   │   │   ├── price                # Precio en la tienda
│   │   │   ├── genre                # Lista de identificadores de géneros asociados
│   │   │   ├── platforms            # Lista de identificadores de plataformas en las que está disponible
│   │   │   ├── pegi                 # Identificador de la clasificación PEGI
│   │   │   ├── systems              # Lista de identificadores de sistemas compatibles
│   │   │   
│   │   ├── genres.json              # Géneros de videojuegos
│   │   │   ├── id                   # Identificador único del género
│   │   │   ├── name                 # Nombre del género
│   │   │   ├── games                # Lista de identificadores de juegos que pertenecen a este género
│   │   │   
│   │   ├── pegis.json               # Clasificación por edades de los juegos
│   │   │   ├── id                   # Identificador único de la clasificación
│   │   │   ├── name                 # Nombre de la clasificación PEGI
│   │   │   ├── games                # Lista de identificadores de juegos con esta clasificación
│   │   │   
│   │   ├── platforms.json           # Plataformas de distribución de juegos
│   │   │   ├── id                   # Identificador único de la plataforma
│   │   │   ├── name                 # Nombre de la plataforma (ej. Steam, Epic Games, Battle.net)
│   │   │   ├── games                # Lista de identificadores de juegos disponibles en esta plataforma
│   │   │   
│   │   ├── systems.json             # Sistemas en los que pueden ejecutarse los videojuegos
│   │   │   ├── id                   # Identificador único del sistema
│   │   │   ├── name                 # Nombre del sistema (ej. PC, PS5, Xbox)
│   │   │   ├── games                # Lista de identificadores de juegos compatibles con este sistema
│   │   │   
│   │   ├── users.json               # Datos de los usuarios registrados en la plataforma
│   │   │   ├── id                   # Identificador único del usuario
│   │   │   ├── username             # Nombre de usuario
│   │   │   ├── email                # Dirección de correo electrónico
│   │   │   ├── provider             # Método de registro (ej. local, Google, Facebook)
│   │   │   ├── confirmed            # Indica si la cuenta ha sido verificada
│   │   │   ├── blocked              # Indica si la cuenta está bloqueada
│   │   │   ├── birthdate            # Fecha de nacimiento del usuario
│   │   │   ├── region               # Región del usuario (ej. EU, NA, ASIA)
│   │   │   ├── profileImage         # URL de la imagen de perfil del usuario
</pre>

## 📂 Mockups y Storyboards

- **Ubicación largeDevicesMockups**: `documentation/largeDevicesMockups`
- **Ubicación mediumDevicesMockups**: `documentation/mockups/mediumDevicesMockups`
- **Ubicación smallDevicesMockups**: `documentation/mockups/smallDevicesMockups`
- **Ubicación Storyboard Login**: `documentation/StoryBoard-Login.png`
- **Ubicación Storyboard**: `documentation/StoryBoard.png`
- **Ubicación Storyboard por escrito**: `documentation/Storyboard redactado.pdf`


## 📄 Páginas (Templates) HTML del proyecto

Estas son las páginas de nuestra web. 

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


## 🖼️ Componentes (Templates) utilizados

Estos son elementos html "componentes" que son cargados en las páginas de la web.

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


## ➕ Otros aspectos

El registro, el inicio de sesión, la configuración del perfil y la recuperación de contraseña se están realizando actualmente en **localStorage**, pero en el futuro se implementarán mediante el uso de una base de datos real.

La recuperación de contraseña no está requiriendo un método de confirmación para verificar que el solicitante es el propietario de la cuenta. Esto se debe a que estamos considerando utilizar la verificación con un código OTP, pero en esta versión con **localStorage** no es posible.

Todo el **contenido cargado proviene de archivos JSON** que simulan una base de datos, pero la estructura del código permitirá obtener los datos de una base de datos real en el futuro.


## 🔗 Enlaces

- **Figma**: [https://www.figma.com/design/cce85AsKYbHsWryGC4aJGa/MOCKUPS-PWM?m=auto&t=PlizMet0r5Rgm5UZ-6](#)
- **Trello**: [https://trello.com/b/qtJ1w6iJ/tablero-pwm](#)
- **PowerPoint**: [](#)
- **Video de presentación**: [](#)

