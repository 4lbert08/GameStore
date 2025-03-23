import { loadJson } from "./jsonLoader.js";
import {initializeGalleries} from "./galleryLoader.js";

export async function loadViewMoreContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const jsonPath = decodeURIComponent(urlParams.get('jsonPath') || '');
    const title = decodeURIComponent(urlParams.get('title') || '');

    console.log('jsonPath decodificado:', jsonPath);
    console.log('title decodificado:', title);

    // Validar jsonPath
    if (!jsonPath || jsonPath === '[object Object]') {
        console.error('jsonPath inválido:', jsonPath);
        return;
    }

    const titleElement = document.querySelector('.Title.Section h1');
    if (titleElement) {
        titleElement.textContent = title;
    }

    const galleryContainer = document.getElementById('gallery1');
    if (!galleryContainer) {
        console.error('No se encontró el contenedor de la galería.');
        return;
    }

    const gamesData = await loadJson(jsonPath);
    if (!gamesData) {
        console.error('No se pudieron cargar los datos del JSON desde:', jsonPath);
        return;
    }

    const jsons = [jsonPath];
    await initializeGalleries(jsons);
}