import { loadHTMLAndExecuteScripts } from "../handlers/includeHTMLRecursive.js";
import { loadJson } from "./loadJson.js";

export async function loadTeamMembers(container, jsonPath) {
    console.log(`Ejecutando loadTeamMembers() para la sección de equipo`);
    const developersData = await loadJson(jsonPath);
    if (!developersData) {
        console.error('No se pudieron cargar los datos de los desarrolladores.');
        return;
    }

    const developerSlots = container.querySelectorAll(".cart__developer");

    developerSlots.forEach((slot, index) => {
        if (index < developersData.length) {
            const developer = developersData[index];
            const developerId = slot.id || `developer-${index + 1}`; // Usa el ID existente o genera uno
            console.log(`Cargando datos del desarrollador: ${developer.name} en ${developerId}`);

            loadHTMLAndExecuteScripts(`#${developerId}`, "../partials/memberCard.html").then(() => {
                const developerCard = slot.querySelector('.card');
                if (developerCard) {
                    const imageElement = developerCard.querySelector('img');
                    if (imageElement) {
                        imageElement.src = developer.image;
                        imageElement.alt = `${developer.name}`;
                    }
                    const nameElement = developerCard.querySelector('.member-info h3');
                    if (nameElement) {
                        nameElement.textContent = developer.name;
                    }
                    const jobElement = developerCard.querySelector('.member-info .member-job');
                    if (jobElement) {
                        jobElement.textContent = developer.work || '';
                    }
                    const emailLink = developerCard.querySelector('.member-info a');
                    if (emailLink) {
                        emailLink.href = `mailto:${developer.gmail}`;
                        emailLink.textContent = developer.gmail || '';
                    }
                }
            });
        }
    });
}

export function setupTeamSection(jsonPath = '../../../backend/jsons/developers.json') {
    setTimeout(() => {
        const teamSection = document.querySelector(".aboutUs__team-section");
        if (teamSection) {
            loadTeamMembers(teamSection, jsonPath);
        } else {
            console.error('No se encontró la sección del equipo (.aboutUs__team-section)');
        }
    }, 0);
}