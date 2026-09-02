// =============================
// Actividades 2026 - fuente: Actividades_2026_V4.xlsx
// =============================
const charlas = [
    {
        area: "Básicas",
        charla: "Visualización de Carga y descarga de un capacitor",
        horario: "16:00 - Repetición: 16:30",
        aula: "Lab Fisica II",
        descripcion: "Experiencia en el Laboratorio de Física II.",
    },
    {
        area: "Básicas",
        charla: "Generador de Van de Graaff",
        horario: "15:30 - Repetición: 17:00",
        aula: "Lab Fisica II",
        descripcion: "Experiencia en el Laboratorio de Física II.",
    },
    {
        area: "Básicas",
        charla: "De la visión a la Colisión: Desentrañando la luz y el Movimiento",
        horario: "15:30 - Repetición: 16:00 - Repetición: 16:30",
        aula: "Lab Fisica I",
        descripcion: "Experimento en el Laboratorio de Física I de Óptica Geométrica. Estudio de la Reflexión y refracción de la luz en superficies planas y curvas. Determinación de la rápidez de salida de un proyectil",
    },
    {
        area: "Centro de Estudiantes - CEUTN",
        charla: "¿Cómo sobrevivir a la universidad y no morir en el intento?",
        horario: "16:00 - Repetición: 17:00",
        aula: "110",
        descripcion: "Tips y experiencias reales sobre cómo organizar el estudio, el tiempo y la vida social en la facultad, contados por quienes ya están transitando el camino, organizada pro el Centro de Estudiantes de la UTN",
    },
    {
        area: "Ingeniería Civil",
        charla: "Lab. de Hidráulica",
        horario: "16:30",
        aula: "Anexo I: Lab IC",
        descripcion: "Canal Hidráulico",
    },
    {
        area: "Ingeniería Civil",
        charla: "Lab. de ensayos.",
        horario: "16:00 - Repetición: 17:00",
        aula: "Anexo I: Lab IC",
        descripcion: "Ensayo de tracción en barra de acero y en probeta de hormigón",
    },
    {
        area: "Ingeniería Civil",
        charla: "Perfil del profesional de la Ingeniería Civil",
        horario: "15:30",
        aula: "309",
        descripcion: "Presentación de la carrera de Ingeniería Civil. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Civil. Actividades reservadas.",
    },
    {
        area: "Ingeniería en Energía Eléctrica",
        charla: "Captura y visualización de datos para sistemas de generación de Energías Renovables",
        horario: "16:30",
        aula: "Anfiteatro",
        descripcion: "En esta charla se mostrarán aspectos relevantes de una plataforma de telegestión instalada en la planta fotovoltaica de la Cooperativa de Armstrong, que permite captar, transmitir y visualizar en tiempo real datos de irradiancia, temperatura y potencia mediante sensores y protocolos IoT (Internet de las Cosas). Su desarrollo clave, el PRMeter, calcula el Performance Ratio, indicador de eficiencia de una planta solar. Más allá de optimizar la gestión de cooperativas eléctricas, esta herramienta funciona como laboratorio remoto para formar a futuros ingenieros en energías renovables.",
    },
    {
        area: "Ingeniería en Energía Eléctrica",
        charla: "Perfil del profesional de la Ingeniería en Energía Eléctrica",
        horario: "16:00",
        aula: "Anfiteatro",
        descripcion: "Presentación de la carrera de Ingenieríaen Energía Eléctrica. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Energía Eléctrica. Actividades reservadas.",
    },
    {
        area: "Ingreso",
        charla: "Test Vocacional",
        tipo: "Muestra",
        horario: "16:00",
        aula: "1er piso",
        descripcion: "Estudiantes de Ingenieria en Sistemas programaro el Test del doctor Holland, denominado Test Chaside que consta de 98 preguntas enfocadas a identificar tus intereses y aptitudes para la selección de una vocación.",
    },
    {
        area: "Ingreso",
        charla: "Charla informativa acerca del Seminario Universitario de ingreso",
        horario: "17:00",
        aula: "Anfiteatro",
        descripcion: "Modalidad del Seminario Universitario de Ingreso - Recorrido por el Campus Virtual",
    },
    {
        area: "Ingreso",
        charla: "Arduino y programación de videojuegos",
        tipo: "Muestra",
        horario: "16:00",
        aula: "1er piso",
        descripcion: "Tablero de juegos, Simón dice y +",
    },
    {
        area: "Ingreso",
        charla: "Entre el Ingenio y las Matemáticas",
        horario: "16:30",
        aula: "110",
        descripcion: "Un espacio donde el ingenio y el trabajo en equipo hacen que las matemáticas sean un juego.",
    },
    {
        area: "Ingreso",
        charla: "Kit de Detective Vocacional",
        horario: "16:00",
        aula: "309",
        descripcion: "",
    },
    {
        area: "Ingeniería Mecánica",
        charla: "Cadena de valor de la ingeniería mecánica",
        horario: "17:00",
        aula: "309",
        descripcion: "Descripción de todas las actividades y procesos involucrados en la creación de productos mecánicos, desde la concepción hasta la entrega final al cliente. Actividades reservadas.",
    },
    {
        area: "Ingeniería Mecánica",
        charla: "La ingeniería mecánica a través del microscopio",
        horario: "16:00 - Repetición: 16:30",
        aula: "Lab Metalografía",
        descripcion: "Nuevo lab de metalografia",
    },
    {
        area: "Ingeniería Mecánica",
        charla: "Perfil del Profesional de Ingeniería Mecánica",
        horario: "15:30",
        aula: "Sum",
        descripcion: "Presentación de la carrera de Ingeniería Mecánica. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Mecánica. Actividades reservadas.Título intermedio.",
    },
    {
        area: "Ingeniería Mecánica",
        charla: "Análisis Automatizado de Metalografías mediante Inteligencia Artificial",
        horario: "16:00 - Repetición: 17:00",
        aula: "303",
        descripcion: "Un recorrido por el desarrollo de sistemas de IA capaces de analizar metalografías, mostrando cómo la tecnología potencia la investigación en ciencia de materiales.",
    },
    {
        area: "Ingeniería Química",
        charla: "Producción de bioplasticos a partir de residuos alimenticios",
        horario: "16:00 - Repetición: 17:00",
        aula: "308",
        descripcion: "El proyecto busca valorizar residuos vegetales generados en la provincia de Santa Fe mediante su transformación en bioplásticos sostenibles. La investigación se centra en el aprovechamiento del almidón extraído de cáscaras de papa y camote provenientes de descartes industriales y gastronómicos. A través de técnicas de extracción por decantación y del desarrollo de formulaciones optimizadas, se propone obtener materiales biodegradables que constituyan una alternativa a los plásticos convencionales derivados del petróleo. Desarrollado en la UTN Regional Rosario, el proyecto integra principios de economía circular, formación de recursos humanos y transferencia tecnológica, promoviendo el aprovechamiento de residuos y el desarrollo de soluciones sostenibles para la comunidad local.",
    },
    {
        area: "Ingeniería Química",
        charla: "Estudiante de Ingeniería Química por un día",
        horario: "15:30 - Repetición: 16:30",
        aula: "308",
        descripcion: "Presentación de la carrera de ingeniería química, características generales del cursado y de la actividad profesional. Sabremos si hay diferencias entre ingenieros/as químicos/as y licenciados/as químicos/as y se brindarán más detalles sobre las funciones principales de los/as ingenieros/as químicos/as.¿Cómo se hace una reacción química? La química es la ciencia natural que estudia la composición, estructura y propiedades de la materia, así como también los cambios que esta experimenta durante las reacciones. Veremos un ejemplo de un cambio químico y como detectamos que la sustancia ha sufrido una modificación.",
    },
    {
        area: "Secretaría de Asuntos Universitarios",
        charla: "Secretaría de Asuntos Universitarios: Becas, deportes, Bolsa de Trabajo, Pasantías y +",
        tipo: "Muestra",
        horario: "16:00",
        aula: "1er piso",
        descripcion: "Conocé los programas de becas y ayudas económicas, bolsa de trabajo, pasantías, actividades deportivas y propuestas de salud y bienestar para acompañarte durante toda tu vida universitaria.",
    },
    {
        area: "Ingeniería en Sistemas de Información",
        charla: "Ingeniero de Sistemas como arquitecto del futuro",
        horario: "16:00 - Repetición: 17:00",
        aula: "Sum",
        descripcion: "Presentación de la carrera de Ingeniería en sistemas de información. Características generales del cursado y de la actividad del profesional de la ingeniería en sistemas de Información. Actividades reservadas.Título intermedio. Experiencia laboral personal",
    },
    {
        area: "Ingeniería en Sistemas de Información",
        charla: "Si la IA escribe el código, ¿qué vas a crear vos?",
        horario: "16:30",
        aula: "303",
        descripcion: "El código lo puede escribir una IA. Lo que no puede reemplazar es tu capacidad de pensar, diseñar y crear soluciones. Te contamos cómo prepararte para ese nuevo escenario.",
    },
    {
        area: "Ingeniería en Sistemas de Información",
        charla: "IA: Guía de buenas prácticas para el estudiante",
        horario: "16:30",
        aula: "Sum",
        descripcion: "Una guía para integrar la IA a la vida académica de forma inteligente: potenciando el aprendizaje sin resignar el pensamiento propio.",
    },
];
// =============================
// Referencias al DOM
// =============================
const areasSection = document.getElementById('areas');
const charlasSection = document.getElementById('charlasSection');
const charlasDiv = document.getElementById('charlas');

// =============================
// Crear tarjetas de ÁREAS
// =============================
const areasUnicas = [...new Set(charlas.map(c => c.area))];
areasUnicas.forEach(area => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = area;
    card.addEventListener('click', () => mostrarCharlas(area));
    areasSection.appendChild(card);
});

// =============================
// Mostrar ACTIVIDADES por área
// Separa automáticamente Charlas y Muestras
// =============================
function mostrarCharlas(area) {
    charlasDiv.innerHTML = '';
    charlasSection.classList.remove('hidden');

    // Actualiza el título general de la sección
    const tituloSeccion = charlasSection.querySelector('h2');
    if (tituloSeccion) {
        tituloSeccion.textContent = `Actividades de ${area}`;
    }

    const actividadesFiltradas = charlas.filter(c => c.area === area);
    const charlasDelArea = actividadesFiltradas.filter(c => c.tipo !== 'Muestra');
    const muestrasDelArea = actividadesFiltradas.filter(c => c.tipo === 'Muestra');

    function renderGrupo(tituloGrupo, actividades, icono) {
        if (actividades.length === 0) return;

        const titulo = document.createElement('h3');
        titulo.textContent = `${icono} ${tituloGrupo}`;
        titulo.style.margin = '32px 0 14px';
        titulo.style.color = '#004080';
        titulo.style.fontSize = '1.35rem';
        titulo.style.fontWeight = '700';
        charlasDiv.appendChild(titulo);

        const mapaActividades = {};
        actividades.forEach(c => {
            if (!mapaActividades[c.charla]) mapaActividades[c.charla] = [];
            mapaActividades[c.charla].push(c);
        });

        Object.keys(mapaActividades).forEach(nombre => {
            const card = document.createElement('div');
            card.className = 'card';

            const title = document.createElement('h3');
            title.textContent = nombre;
            card.appendChild(title);

            mapaActividades[nombre].forEach(c => {
                const subCard = document.createElement('div');
                subCard.className = 'sub-card';

                let contenido = `
                    <p><strong>Horario:</strong> ${c.horario}</p>
                    <p><strong>Aula:</strong> ${c.aula}</p>
                `;

                if (c.descripcion && c.descripcion.trim() !== '') {
                    contenido += `<p><strong>Descripción:</strong> ${c.descripcion}</p>`;
                }

                subCard.innerHTML = contenido;
                card.appendChild(subCard);
            });

            charlasDiv.appendChild(card);
        });
    }

    renderGrupo('Charlas', charlasDelArea, '🎤');
    renderGrupo('Muestras', muestrasDelArea, '🔬');

    charlasSection.scrollIntoView({ behavior: 'smooth' });
}

