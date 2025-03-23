export const getGenreNames = (genreIds, genreData) => {
    if (!genreData || !Array.isArray(genreIds)) {
        console.warn('No hay datos de géneros disponibles o genreIds no es un array.');
        return ['N/A'];
    }
    return genreIds.map(genreId => {
        const genre = genreData.find(g => g.id === genreId);
        return genre ? genre.name : 'N/A';
    });
};