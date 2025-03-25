export const createGameSlot = (galleryIndex, game, index) => {
    const slot = document.createElement('div');
    slot.className = 'card__game';
    const gameId = `game-${galleryIndex}-${index + 1}`;
    slot.id = gameId;
    return slot;
};

export const updateGameCard = (gameCard, game) => {
    const elements = {
        cover: gameCard.querySelector('.game-card__cover'),
        title: gameCard.querySelector('.game-card__title'),
        price: gameCard.querySelector('.game-card__price'),
        link: gameCard.closest('a')
    };

    elements.cover.src = game.gameCover;
    elements.cover.alt = `${game.name} Cover`;
    elements.title.textContent = game.name;
    elements.price.textContent = game.discount > 0
        ? `$${(game.price * (1 - game.discount / 100)).toFixed(2)}`
        : `$${game.price.toFixed(2)}`;
    if (elements.link) {
        elements.link.href = `../views/gameShowcase.html?gameId=${game.id}`;
    }
};