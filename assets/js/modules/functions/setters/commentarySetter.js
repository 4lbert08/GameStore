export const updateReviewCard = (reviewCard, review, gamesMap, usersMap) => {
    const elements = {
        gameImg: reviewCard.querySelector('.userReview__game-img'),
        gameTitle: reviewCard.querySelector('.userReview__game-title'),
        userImg: reviewCard.querySelector('.userReview__user-img'),
        userName: reviewCard.querySelector('.userReview__user-name'),
        text: reviewCard.querySelector('.userReview__text')
    };

    const gameData = gamesMap[review.id_juego] || {};
    if (elements.gameImg) {
        elements.gameImg.src = gameData.gameCover || '../../assets/imgs/default.png';
        elements.gameImg.alt = `${gameData.name || 'Juego desconocido'} Cover`;
    }

    if (elements.gameTitle) {
        elements.gameTitle.textContent = gameData.name || 'Juego desconocido';
    }

    const userData = usersMap[review.id_usuario] || {};
    if (elements.userImg) {
        elements.userImg.src = userData.profileImage || '../../assets/imgs/default-user.png';
        elements.userImg.alt = `${userData.username || 'Usuario desconocido'} Profile`;
    }

    if (elements.userName) {
        elements.userName.textContent = userData.username || 'Usuario desconocido';
    }

    if (elements.text) {
        elements.text.textContent = review.texto || 'Sin comentario';
    }
};
