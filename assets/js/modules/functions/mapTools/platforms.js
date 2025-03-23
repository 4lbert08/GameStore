export const getPlatformName = (platformId, platformsData, gameId) => {
    const platformData = platformsData?.find(p => p.id === platformId);
    let platformName = 'N/A';
    if (platformData) {
        if (platformData.games.includes(gameId)) {
            platformName = platformData.name;
        } else {
            console.warn(`El juego ${gameId} no está soportado por la plataforma ${platformId} (${platformData.name}).`);
        }
    } else {
        console.warn(`Plataforma con ID ${platformId} no encontrada.`);
    }
    return platformName;
};