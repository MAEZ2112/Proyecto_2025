import { indexPage } from "./pages/indexPage.js";
import { serviciosPage } from "./pages/serviciosPage.js";
import { requisitosPage } from "./pages/requisitosPage.js";
import { testimoniosPage } from "./pages/testimoniosPage.js";
import { equipoPage } from "./pages/equipoPage.js";
import { agentar_citaPage } from "./pages/agendar_citaPage.js";
import { blogPage } from "./pages/blogPage.js";
import { preguntasPage } from "./pages/preguntasPage.js";
import { contactoPage } from "./pages/contactoPage.js";


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

        case '/main/blog/blog.html': 
            pageData = blogPage
            break;
            
        case '/main/preguntas_frecuentes/faq.html':
            pageData = preguntasPage
            break;

        case '/main/contactenos/contactenos.html':
            pageData = contactoPage
            break;

        default:
            break;
    }
    return {
        ...footer,
        ...pageData,
        ...cardServicioContractanos,
        ...botones,
        ...head,
        ...panel_1,
        ...panel_2,
        ...headerData,
        ...docsUrl,
    }
}

const docsUrl = {
    recursos: [
        {
            pdf_ruta: "recursos/requisitos/MATRIMONIO CIVIL.pdf",
            pdfDesc: "MATRIMONIO CIVIL",
        },
        {
            pdf_ruta: "/recursos/requisitos/INFORMACIÓN AD-PERPETUAM.pdf",
            pdfDesc: "INFORMACION AD-PERPETUAM",
        },
        {
            pdf_ruta: "/Proyecto_2025/recursos/requisitos/CONSTITUCIÓN DE COMERCIANTE INDIVIDUAL.pdf",
            pdfDesc: "CONSTITUCIÓN DE COMERCIANTE INDIVIDUAL",
        },
        {
            pdf_ruta: "../recursos/requisitos/ESCRITURA DE COMPRAVENTA.pdf",
            pdfDesc: "ESCRITURA DE COMPRAVENTA",
        },
        {
            pdf_ruta: "././recursos/requisitos/DIVORCIO POR MUTUO CONSENTIMIENTO.pdf",
            pdfDesc: "DIVORCIO POR MUTUO CONSENTIMIENTO",
        },
        {
            pdf_ruta: "/recursos/requisitos/DONACIONES.pdf",
            pdfDesc: "DONACIONES",
        },
        {
            pdf_ruta: "/recursos/requisitos/DECLARATORIA DE HEREDEROS AD INSTESTATO-TESTAMENTARIA.pdf",
            pdfDesc: "DECLARATORIA DE HEREDEROS AD INTESTATO Y TESTAMENTARIA",
        },
        {
            pdf_ruta: "/recursos/requisitos/GUARDA Y CUIDADO DE MENORES.pdf",
            pdfDesc: "GUARDA Y CUIDADO DE MENORES",
        },
        {
            pdf_ruta: "/recursos/requisitos/CONSTITUCION DE SOCIEDADES.pdf",
            pdfDesc: "CONSTITUCIÓN DE SOCIEDADES",
        },
        {
            pdf_ruta: "/recursos/requisitos/TESTAMENTO.pdf",
            pdfDesc: "TESTAMENTOS",
        },
        {
            pdf_ruta: "/recursos/requisitos/UNION DE HECHO.pdf",
            pdfDesc: "UNION DE HECHO",
        },
        {
            pdf_ruta: "/recursos/requisitos/PODERES DE REPRESENTACION, PLEITOS Y ADMINISTRACION.pdf",
            pdfDesc: "PODERES DE REPRESENTACIÓN, PLEITOS Y ADMINISTRACIÓN",
        },
        {
            pdf_ruta: "/recursos/requisitos/ENAJENACIÓN (VENTA) DE BIENES DE MENORES.pdf",
            pdfDesc: "ENAJENACIÓN (VENTA) DE BIENES DE MENORES",
        },
        {
            pdf_ruta: "/recursos/requisitos/LEVANTAMIENTO DE ACTAS NOTARIALES.pdf",
            pdfDesc: "LEVANTAMIENTO DE ACTAS NOTARIALES",
        },
        {
            pdf_ruta: "/recursos/requisitos/CONTRAER SEGUNDAS O ULTERIORES NUPCIAS.pdf",
            pdfDesc: "CONTRAER SEGUNDAS O ULTERIORES NUPCIAS",
        },
        {
            pdf_ruta: "/recursos/requisitos/UNION DE HECHO MORTIS CAUSA.pdf",
            pdfDesc: "UNION DE HECHO MORTIS CAUSA",
        }
    ]
}

const footer = {
    navigation_1: [
        { url: 'index.html', label: 'Inicio' },
        { url: 'main/servicios/servicios.html', label: 'Servicios' },
        { url: 'main/agendar_cita/agendar_cita.html', label: 'Agenda Cita' },
        { url: 'main/recursos_legales/requisitos.html', label: 'Requisitos' },
    ],

    navigation_2: [
        { url: '../../index.html', label: 'Inicio' },
        { url: '../../main/servicios/servicios.html', label: 'Servicios' },
        { url: '../../main/agendar_cita/agendar_cita.html', label: 'Agenda Cita' },
        { url: '../../main/recursos_legales/requisitos.html', label: 'Requisitos' },
    ]
}

const cardServicioContractanos = {
    servicio_contacto:[
        {
            clase: 'servicio_contacto',
            mensaje:'mensaje',
            msj_cont: '¿Tienes alguna duda antes de agendar? ¡Contactanos y con gusto te orientaremos!',
            link: '/Proyecto_2025/main/contactenos/contactenos.html',
            nombre: 'Contáctanos',
            boton: 'btn_mensaje',
        },
        {
            clase: 'servicio_contacto',
            mensaje:'mensaje',
            msj_cont: 'Tienes dudas sobre los servicios, da clic en el botón para consultarlos',
            link: '/Proyecto_2025/main/servicios/servicios.html',
            nombre: 'Servicios',
            boton: 'btn_mensaje',
        },
],

contactanos:[
    {
        clase: 'contactanos',
        mensaje:'mensaje_contactanos',
        msj_cont: '¿Necesitas ayuda con tu trámite legal? en Valladares Guifarro, tenemos la solución que necesita.',
        link: '/Proyecto_2025/main/contactenos/contactenos.html',
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

const head = {
    links:[
        {
            href: 'https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css',
            rel: 'stylesheet',
        },
        {
            href: '../../less/main.less',
            rel: 'stylesheet',
        },
    ],

    links_inicio:[
        {
            href: 'https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css',
            rel: 'stylesheet',
        },
        {
            href: 'less/main.less',
            rel: 'stylesheet',
        },
    ],
    
}

const panel_1 = {
    inicio:[
        {
            h1: 'Asesoría legal de confianza para todas tus necesidades jurídicas',
            a: 'Con más de 10 años de experiencia, brindamos soluciones legales rápidas y efectivas.',
        },        
    ],
    agendar_cita:[
        {
            h1: '¡Agenda tu cita!',
            a: 'Estamos aqui para ayudarte con tus tramites legales y notariales. Reserva tu cita en unos minutos y recibe una atención personalizada.',
        },        
    ],
}

const panel_2 = {
    blog:[
        {
            h1: 'Conoce más sobre temas legales',
            p: 'Explora nuestro blog y obtén información valiosa sobre procesos legales, requisitos y consejos utiles para resulver tus dudas.',
        },        
    ],

    contactenos:[
        {
            h1: '¡Contactenos!',
            p: 'Resolveremos tus dudas y atendemos tus necesidades legales',
        },        
    ],

    faq:[
        {
            h1: 'Preguntas Frecuentes',
            p: 'Resolvemos tus dudas sobre trámites notariales y legales. Si tienes otra consulta, no dudes en contactarnos directamente.',
        },        
    ],

    requisitos:[
        {
            h1: 'Recursos Legales',
            p: 'Encuentra los requisitos y guías necesarias para completar tus trámites legales de manera efectiva.',
        },        
    ],

    nosotros:[
        {
            h1: '¿Quiénes Somos?',
            p: 'En nuestro bufete notarial, ofrecemos servicios legales y notariales con un compromiso inquebrantable hacia la ética, la transparencia y la excelencia. Con años de experiencia y un enfoque personalizado, garantizamos soluciones jurídicas confiables que protegen los intereses y derechos de nuestros clientes.',
        },        
    ],

    testimonio:[
        {
            h1: 'Casos de Exito',
            p: 'En Valladares Guifarro, nos dedicamos a brindar servicios legales excepcionales. Las historias de satisfacción de nuestros clientes reflejan nuestro compromiso con la ley del país y nuestra dedicación a ofrecer soluciones confiables y efectivas para cada caso.',
        },        
    ],
}


export const headerData = {
    logoSrc: "/logos/LOGO VALLADARES GUIFARRO fondo azul, estilo blanco.png",
    logoTexto: "VALLADARES GUIFARRO",
    link_inicio: [
      { href: "index.html", texto: "Inicio" },
      {
        dropdown: true,
        titulo: "Servicios",
        opciones: [
          { href: "main/servicios/servicios.html", texto: "Nuestros Servicios", icon: "ri-service-line" },
          { href: "main/recursos_legales/requisitos.html", texto: "Requisitos", icon: "ri-task-line" },
        ],
      },
      {
        dropdown: true,
        titulo: "Nosotros",
        opciones: [
          { href: "main/sobre_nosotros/nosotros.html", texto: "¿Quienes Somos?", icon: "ri-information-line" },
          { href: "main/testimonios/testimonios.html", texto: "Casos Ad Honorem", icon: "ri-bard-line" },
          { href: "main/equipo/equipo.html", texto: "Equipo", icon: "ri-group-line" },
        ],
      },
      {
        dropdown: true,
        titulo: "Recursos",
        opciones: [
          { href: "main/recursos_legales/requisitos.html", texto: "Recursos Legales", icon: "ri-file-line" },
          { href: "main/blog/blog.html", texto: "Blog de Noticias", icon: "ri-news-line" },
          { href: "main/preguntas_frecuentes/faq.html", texto: "Preguntas Frecuentes", icon: "ri-question-answer-line" },
        ],
      },
      { href: "main/contactenos/contactenos.html", texto: "Contacto" },
      { href: "main/agendar_cita/agendar_cita.html", texto: "Agenda Cita" },
    ],

    link_general: [
        { href: "../../index.html", texto: "Inicio" },
        {
          dropdown: true,
          titulo: "Servicios",
          opciones: [
            { href: "../../main/servicios/servicios.html", texto: "Nuestros Servicios", icon: "ri-service-line" },
            { href: "../../main/recursos_legales/requisitos.html", texto: "Requisitos", icon: "ri-task-line" },
          ],
        },
        {
          dropdown: true,
          titulo: "Nosotros",
          opciones: [
            { href: "../../main/sobre_nosotros/nosotros.html", texto: "¿Quienes Somos?", icon: "ri-information-line" },
            { href: "../../main/testimonios/testimonios.html", texto: "Casos Ad Honorem", icon: "ri-bard-line" },
            { href: "../../main/equipo/equipo.html", texto: "Equipo", icon: "ri-group-line" },
          ],
        },
        {
          dropdown: true,
          titulo: "Recursos",
          opciones: [
            { href: "../../main/recursos_legales/requisitos.html", texto: "Recursos Legales", icon: "ri-file-line" },
            { href: "../../main/blog/blog.html", texto: "Blog de Noticias", icon: "ri-news-line" },
            { href: "../../main/preguntas_frecuentes/faq.html", texto: "Preguntas Frecuentes", icon: "ri-question-answer-line" },
          ],
        },
        { href: "../../main/contactenos/contactenos.html", texto: "Contacto" },
        { href: "../../main/agendar_cita/agendar_cita.html", texto: "Agenda Cita" },
      ]
  };