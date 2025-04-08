import { indexPage } from "./pages/indexPage";
import { serviciosPage } from "./pages/serviciosPage.js"
import { requisitosPage } from "./pages/requisitosPage.js";


const commonData = {
    navigation: [
        { url: 'index.html', label: 'Inicio' },
        { url: 'main/servicios/servicios.html', label: 'Servicios' },
        { url: 'main/agendar_cita/agendar_cita.html', label: 'Agenda Cita' },
        { url: 'main/recursos_legales/requisitos.html', label: 'Requisitos' },
    ]
}

export const getPageContext = (pagePath) => {
    console.log('Rendering:', pagePath); // <--- esto

    let pageData = {};

    switch (pagePath) {
        case 'index.html':
            pageData = indexPage
            break;

        case '/main/servicios/servicios.html':
            pageData = serviciosPage
            break;
        
        case '/main/recursos_legales/requisitos.html':
            pageData = requisitosPage
            break;
            
        default:
            break;
    }
    return {
        ...commonData,
        ...pageData
    }
}