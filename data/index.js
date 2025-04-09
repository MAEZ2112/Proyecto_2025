import { indexPage } from "./pages/indexPage.js";
import { serviciosPage } from "./pages/serviciosPage.js";
import { requisitosPage } from "./pages/requisitosPage.js";
import { testimoniosPage } from "./pages/testimoniosPage.js";
import { equipoPage } from "./pages/equipoPage.js";
import { agentar_citaPage } from "./pages/agendar_citaPage.js";

const commonData = {
    navigation: [
        { url: 'index.html', label: 'Inicio' },
        { url: 'main/servicios/servicios.html', label: 'Servicios' },
        { url: 'main/agendar_cita/agendar_cita.html', label: 'Agenda Cita' },
        { url: 'main/recursos_legales/requisitos.html', label: 'Requisitos' },
    ]
}

const cardServicioContractanos = {
    servicio_contacto:[
        {
            clase: 'servicio_contacto',
            mensaje:'mensaje',
            msj_cont: '¿Tienes alguna duda antes de agendar? ¡Contactanos y con gusto te orientaremos!',
            link: 'main/contactenos/contactenos.html',
            nombre: 'Contáctanos',
            boton: 'btn_mensaje',
        },
        {
            clase: 'servicio_contacto',
            mensaje:'mensaje',
            msj_cont: 'Tienes dudas sobre los servicios, da clic en el botón para consultarlos',
            link: 'main/servicios/servicios.html',
            nombre: 'Servicios',
            boton: 'btn_mensaje',
        },
],

contactanos:[
    {
        clase: 'contactanos',
        mensaje:'mensaje_contactanos',
        msj_cont: '¿Necesitas ayuda con tu trámite legal? en Valladares Guifarro, tenemos la solución que necesita.',
        link: 'main/contactenos/contactenos.html',
        nombre: 'Contáctanos',
        boton: 'btn_contactanos',
    },
],
}

const botones = {
    btn_testimonios_inicio:[
        {
            nombre_btn: 'btn_testimonios',
            link: 'main/testimonios/testimonios.html',
            contenido:'Ver mas...',
        },
    ],

    btn_equipo_inicio:[
        {
            nombre_btn: 'btn_equipo',
            link: 'main/equipo/equipo.html',
            contenido:'Ver miembros',
        },
    ],

    btn_cita_inicio:[
        {
            nombre_btn: 'btn_cita',
            link: 'main/agendar_cita/agendar_cita.html',
            contenido:'Agendar Cita',
        },
    ],

    btn_servicios_inicio:[
        {
            nombre_btn: 'btn_servicios',
            link: 'main/servicios/servicios.html',
            contenido:'Ver todos los servicios',
        },
    ],
}

export const getPageContext = (pagePath) => {
    console.log('Rendering:', pagePath);

    let pageData = {};

    switch (pagePath) {
        case '/index.html':
            pageData = indexPage
            break;

        case '/main/servicios/servicios.html':
            pageData = serviciosPage
            break;

        case '/main/recursos_legales/requisitos.html':
            pageData = requisitosPage
            break;

        case '/main/testimonios/testimonios.html':
            pageData = testimoniosPage
            break;

        case '/main/equipo/equipo.html':
            pageData = equipoPage
            break;

        case '/main/agendar_cita/agendar_cita.html':
            pageData = agentar_citaPage
            break;

        default:
            break;
    }
    return {
        ...commonData,
        ...pageData,
        ...cardServicioContractanos,
        ...botones
    }
}