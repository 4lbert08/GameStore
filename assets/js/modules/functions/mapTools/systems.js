export const getSystemName = (systemId, systemsData, gameId) => {
    const systemData = systemsData?.find(s => s.id === systemId);
    let systemName = 'N/A';
    if (systemData) {
        if (systemData.games.includes(gameId)) {
            systemName = systemData.name;
        } else {
            console.warn(`El juego ${gameId} no está soportado por el sistema ${systemId} (${systemData.name}).`);
        }
    } else {
        console.warn(`Sistema con ID ${systemId} no encontrado.`);
    }
    return systemName;
};