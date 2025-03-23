export const getPegiName = (pegiId, pegiData) => {
    if (!pegiData) {
        console.warn('No hay datos de PEGI disponibles.');
        return 'N/A';
    }
    const pegi = pegiData.find(p => p.id === pegiId);
    if (!pegi) {
        console.warn(`PEGI con ID ${pegiId} no encontrado.`);
        return 'N/A';
    }
    return pegi.name;
};