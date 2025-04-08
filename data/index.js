import { indexPage } from "./pages/indexPage";

const commonData = {
    navigation: [
        { url: 'index.html', label: 'Inicio' },
        { url: 'main/servicios/servicios.html', label: 'Servicios' },
        { url: 'main/agendar_cita/agendar_cita.html', label: 'Agenda Cita' },
        { url: 'main/recursos_legales/requisitos.html', label: 'Requisitos' },
    ]
}

export const getPageContext = (pagePath) => {
    let pageData = {};

    switch (pagePath) {
        case '../index.html':
            pageData = indexPage
            break;
        default:
            break;
    }
    return {
        ...commonData,
        ...pageData
    }
}