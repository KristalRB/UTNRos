// =============================
const charlas = [
    {
        area: "Ingreso",
        charla: "Charla informativa acerca del curso de ingreso.",
        horario: "14:30 - Repetición: 15:30 - Repetición: 16:30" ,
        aula: "Anfiteatro (4to Piso)",
        descripcion: "",
    },
    {
        area: "Ingreso",
        charla: "Entre el Ingenio y las Matemáticas.",
        horario: "15:00 - Repetición: 16:00" ,
        aula: "210 (2do Piso)",
        descripcion: "Un espacio donde el ingenio y el trabajo en equipo hacen que las matemáticas sean un juego.",
    },
     {
        area: "Ingreso",
        charla: "Test Vocacional",
        horario: "14:30 - Repetición: 15:00 - Repetición: 15:30" ,
        aula: "211 (2do Piso)",
        descripcion: "Estudiantes de Ingenieria en Sistemas programaron el Test del doctor Holland, denominado Test Chaside  que consta de 98 preguntas enfocadas a identificar tus intereses y aptitudes para la selección de una vocación. ",
    },
     {
        area: "Ingreso",
        charla: "Arduinos",
        horario: "14:30 - Repetición: 15:30 - Repetición: 16:30" ,
        aula: "210 (2do Piso)",
        descripcion: "Tablero de juegos, Simón dice.",
    },
       {
        area: "Ingreso",
        charla: "Impresión 3D",
        horario: "15:00 - Repetición: 15:30" ,
        aula: "1er Piso",
        descripcion: "",
    },
     {
        area: "Secretaría de Asuntos Universitarios",
        charla: "Mujeres que Ingenian",
        horario: "15:30" ,
        aula: "SUM",
        descripcion: "",
    },
     {
        area: "Centro de Estudiantes - CEUTN",
        charla: "¿Cómo sobrevivir a la universidad y no morir en el intento?",
        horario: "15:00 - Repetición: 16:00" ,
        aula: "Anfiteatro (4to Piso)",
        descripcion: "",
    },
    {
        area: "Básicas",
        charla: "La Física en Ingeniería",
        horario: "14:30 - Repetición: 15:00" ,
        aula: "Lab Física I (4to Piso)",
        descripcion: "Una mirada al papel esencial de la física en el pensamiento y la práctica ingenieril.",
    },
     {
        area: "Básicas",
        charla: "Ánalisis de Fenómenos Ópticos",
        horario: "15:30 - Repetición: 16:00 - Repetición: 16:30" ,
        aula: "Lab Física I (4to Piso)",
        descripcion: "Experimento en el Laboratorio de Física I de Óptica Geométrica. Estudio de la Reflexión y refracción de la luz en superficies planas y curvas.",
    },
    {
        area: "Básicas",
        charla: "Generador de Van de Graaff",
        horario: "15:00 - Repetición: 16:00" ,
        aula: "Lab Física II (4to Piso)",
        descripcion: "Experiencia en el Laboratorio de Física II.",
    },
      {
        area: "Básicas",
        charla: "Visualización de Carga y descarga de un capacitor",
        horario: "15:30 - Repetición: 16:30" ,
        aula: "Lab Física II (4to Piso)",
        descripcion: "Experiencia en el Laboratorio de Física II.",
    },
    {
        area: "Ingeniería en Energía Eléctrica",
        charla: " Perfil del profesional de la Ingeniería en Energía Eléctrica",
        horario: "14:30 - Repetición: 16:00",
        aula: "17 (Subsuelo)",
        descripcion: "Presentación de la carrera de Ingenieríaen Energía Eléctrica. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Energía Eléctrica. Actividades reservadas.",
    },
    {
        area: "Ingeniería en Energía Eléctrica",
        charla:"Captura y visualización de datos para sistemas de generación de Energías Renovables",
        horario: "15:00 - Repetición: 16:00",
        aula: "17 (Subsuelo)",
        descripcion: "",
    },
    {
        area: "Ingeniería Química",
        charla:"Ingeniería Química ¿es lo que parece?",
        horario: "14:30 - Repetición: 15:30 - Repetición: 16:30",
        aula: "308 (3er Piso)",
        descripcion: "Presentación de la carrera de ingeniería química, características generales del cursado y de la actividad profesional. Sabremos si hay diferencias entre ingenieros/as químicos/as y licenciados/as químicos/as y se brindarán más detalles sobre las funciones principales de los/as ingenieros/as químicos/as.¿Cómo se hace una reacción química? La química es la ciencia natural que estudia la composición, estructura y propiedades de la materia, así como también los cambios que esta experimenta durante las reacciones. Veremos un ejemplo de un cambio químico y como detectamos que la sustancia ha sufrido una modificación.",
    },
  {
        area: "Ingeniería Civil",
        charla:" Perfil del profesional de la Ingeniería Civil ",
        horario: "14:30",
        aula: "SUM",
        descripcion: "Presentación de la carrera de Ingeniería Civil. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Civil. Actividades reservadas.",
    },
  {
        area: "Ingeniería Civil",
        charla:"Lab. de Hidráulica",
        horario: "15:30 - Repetición: 16:30",
        aula: "Anexo I (enfrente de la facultad)",
        descripcion: "Muestra canal hidráulico",
    },
  {
        area:"Ingeniería Civil",
        charla:"Lab. de ensayos",
        horario: "15:00 - Repetición: 16:00",
        aula: "Anexo I (enfrente de la facultad)",
        descripcion: "Ensayo de tracción en barra de acero y en probeta de hormigón.",
    },

 {
        area:"Ingeniería Mecánica",
        charla:"Perfil del Profesional de Ingeniería Mecánica",
        horario: "14:30",
        aula: "309 (3er Piso)",
        descripcion: "Presentación de la carrera de Ingeniería Mecánica. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Mecánica. Actividades reservadas.Título intermedio.",
    },
    {
        area:"Ingeniería Mecánica",
        charla:"Diseño de máquinas",
        horario: "15:00",
        aula: "309 (3er Piso)",
        descripcion: "Un primer acercamiento al proceso de imaginar, proyectar y construir sistemas mecánicos funcionales.",
    },     
    {
        area:"Ingeniería Mecánica",
        charla:"Industria 4.0",
        horario: "15:30",
        aula: "309 (3er Piso)",
        descripcion: "Conocé cómo la tecnología está transformando la industria: automatización, datos y conectividad en acción.",
    }, 
    {
        area:"Ingeniería Mecánica",
        charla:"Ingeniería Mecánica, del aula al campo de aplicación",
        horario: "16:00",
        aula: "309 (3er Piso)",
        descripcion: "Aplicación de la mecánica en el desarrollo de la maquinaria agrícola.",
    }, 
    {
        area:"Ingeniería Mecánica",
        charla:"Cadena de valor de la Ingeniería Mecánica",
        horario: "16:30",
        aula: "309 (3er Piso)",
        descripcion: "Descripción de todas las actividades y procesos involucrados en la creación de productos mecánicos, desde la concepción hasta la entrega final al cliente. Actividades reservadas.",
    }, 
     {
        area:"Ingeniería Mecánica",
        charla:"La Ingeniería Mecánica a través del microscopio",
        horario: "16:00 - Repetición: 16:30",
        aula: "Lab. de metalografia (2do Piso)",
        descripcion: "",
    }, 
    {
        area: "Ingeniería en Sistemas de Información",
        charla: "Estudiando Ingeniería en Sistemas ¿qué estudiamos cuándo estudiamos ingeniería en sistemas?¿para qué estudiamos?",
        horario: "14:30 - Repetición: 15:30 - Repetición: 16:30",
        aula: "303 (3er Piso)",
        descripcion: " Presentación de la carrera de Ingeniería en sistemas de información. Características generales del cursado y de la actividad del profesional de la ingeniería en sistemas de Información. Actividades reservadas.Título intermedio. Experiencia laboral personal",
    },
     {
        area: "Ingeniería en Sistemas de Información",
        charla: "IA, presente y futuro",
        horario: "15:00 - Repetición: 16:00",
        aula: "303 (3er Piso)",
        descripcion: "Un acercamiento a cómo la IA está moldeando la tecnología y el mundo que viene.",
    },
     {
        area: "Ingeniería en Sistemas de Información",
        charla: "Manos que construyen futuro",
        horario: "15:00 - Repetición: 16:00",
        aula: "SUM",
        descripcion: "Una mirada cercana a cómo la ingeniería y el diseño pueden devolver oportunidades. Descubrí cómo un proyecto universitario se transforma en algo real, útil y humano.",
    },
     {
        area: "Ingeniería en Sistemas de Información",
        charla: "Detrás de Escena: El Analista en los Proyectos",
        horario: "16:00 - Repetición: 16:30",
        aula: "211 (2do Piso)",
        descripcion: "Exploraremos el rol del analista en los proyectos. Descubriremos cómo este profesional actúa como el puente entre los requisitos del cliente y las soluciones tecnológicas, asegurando que cada aspecto del proyecto se alinee con los objetivos.",
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
// Mostrar CHARLAS por área
// =============================
function mostrarCharlas(area) {
    charlasDiv.innerHTML = '';
    charlasSection.classList.remove('hidden');

    const charlasFiltradas = charlas.filter(c => c.area === area);

    // Agrupa
    const mapaCharlas = {};
    charlasFiltradas.forEach(c => {
        if (!mapaCharlas[c.charla]) mapaCharlas[c.charla] = [];
        mapaCharlas[c.charla].push(c);
    });

  
    Object.keys(mapaCharlas).forEach(nombre => {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('h3');
        title.textContent = nombre;
        card.appendChild(title);

        // Sub-tarjetas por cada HORARIO de esa charla
        mapaCharlas[nombre].forEach(c => {
            const subCard = document.createElement('div');
            subCard.className = 'sub-card';
            subCard.innerHTML = `
                <p><strong>Horario:</strong> ${c.horario}</p>
                <p><strong>Aula:</strong> ${c.aula}</p>
                <p><strong>Descripción:</strong> ${c.descripcion}</p>
            `;
            card.appendChild(subCard);
        });

        charlasDiv.appendChild(card);
    });

    // Scroll suave hacia la sección de charlas
    charlasSection.scrollIntoView({ behavior: 'smooth' });
}











