// ============================================
// Actividades 2026
// Fuente: Actividades_2026_V4.xlsx
// Áreas normalizadas para mostrar nombres completos.
// ============================================
const actividades = [
  {
    "area": "Básicas",
    "charla": "Visualización de Carga y descarga de un capacitor",
    "tipo": "Charla",
    "horario": "16:00 - Repetición: 16:30",
    "aula": "Lab Fisica II",
    "descripcion": "Experiencia en el Laboratorio de Física II."
  },
  {
    "area": "Básicas",
    "charla": "Generador de Van de Graaff",
    "tipo": "Charla",
    "horario": "15:30 - Repetición: 17:00",
    "aula": "Lab Fisica II",
    "descripcion": "Experiencia en el Laboratorio de Física II."
  },
  {
    "area": "Básicas",
    "charla": "De la visión a la Colisión: Desentrañando la luz y el Movimiento",
    "tipo": "Charla",
    "horario": "15:30 - Repetición: 16:00 - Repetición: 16:30",
    "aula": "Lab Fisica I",
    "descripcion": "Experimento en el Laboratorio de Física I de Óptica Geométrica. Estudio de la Reflexión y refracción de la luz en superficies planas y curvas. Determinación de la rápidez de salida de un proyectil"
  },
  {
    "area": "Centro de Estudiantes - CEUTN",
    "charla": "¿Cómo sobrevivir a la universidad y no morir en el intento?",
    "tipo": "Charla",
    "horario": "16:00 - Repetición: 17:00",
    "aula": "110",
    "descripcion": "Tips y experiencias reales sobre cómo organizar el estudio, el tiempo y la vida social en la facultad, contados por quienes ya están transitando el camino, organizada pro el Centro de Estudiantes de la UTN"
  },
  {
    "area": "Ingeniería Civil",
    "charla": "Lab. de Hidráulica",
    "tipo": "Charla",
    "horario": "16:30",
    "aula": "Anexo I: Lab IC",
    "descripcion": "Canal Hidráulico"
  },
  {
    "area": "Ingeniería Civil",
    "charla": "Lab. de ensayos.",
    "tipo": "Charla",
    "horario": "16:00 - Repetición: 17:00",
    "aula": "Anexo I: Lab IC",
    "descripcion": "Ensayo de tracción en barra de acero y en probeta de hormigón"
  },
  {
    "area": "Ingeniería Civil",
    "charla": "Perfil del profesional de la Ingeniería Civil",
    "tipo": "Charla",
    "horario": "15:30",
    "aula": "309",
    "descripcion": "Presentación de la carrera de Ingeniería Civil. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Civil. Actividades reservadas."
  },
  {
    "area": "Ingeniería en Energía Eléctrica",
    "charla": "Captura y visualización de datos para sistemas de generación de Energías Renovables",
    "tipo": "Charla",
    "horario": "16:30",
    "aula": "Anfiteatro",
    "descripcion": "En esta charla se mostrarán aspectos relevantes de una plataforma de telegestión instalada en la planta fotovoltaica de la Cooperativa de Armstrong, que permite captar, transmitir y visualizar en tiempo real datos de irradiancia, temperatura y potencia mediante sensores y protocolos IoT (Internet de las Cosas). Su desarrollo clave, el PRMeter, calcula el Performance Ratio, indicador de eficiencia de una planta solar. Más allá de optimizar la gestión de cooperativas eléctricas, esta herramienta funciona como laboratorio remoto para formar a futuros ingenieros en energías renovables."
  },
  {
    "area": "Ingeniería en Energía Eléctrica",
    "charla": "Perfil del profesional de la Ingeniería en Energía Eléctrica",
    "tipo": "Charla",
    "horario": "16:00",
    "aula": "Anfiteatro",
    "descripcion": "Presentación de la carrera de Ingenieríaen Energía Eléctrica. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Energía Eléctrica. Actividades reservadas."
  },
  {
    "area": "Ingreso",
    "charla": "Test Vocacional",
    "tipo": "Muestra",
    "horario": "16:00",
    "aula": "1er piso",
    "descripcion": "Estudiantes de Ingenieria en Sistemas programaro el Test del doctor Holland, denominado Test Chaside que consta de 98 preguntas enfocadas a identificar tus intereses y aptitudes para la selección de una vocación."
  },
  {
    "area": "Ingreso",
    "charla": "Charla informativa acerca del Seminario Universitario de ingreso",
    "tipo": "Charla",
    "horario": "17:00",
    "aula": "Anfiteatro",
    "descripcion": "Modalidad del Seminario Universitario de Ingreso - Recorrido por el Campus Virtual"
  },
  {
    "area": "Ingreso",
    "charla": "Arduino y programación de videojuegos",
    "tipo": "Muestra",
    "horario": "16:00",
    "aula": "1er piso",
    "descripcion": "Tablero de juegos, Simón dice y +"
  },
  {
    "area": "Ingreso",
    "charla": "Entre el Ingenio y las Matemáticas",
    "tipo": "Charla",
    "horario": "16:30",
    "aula": "110",
    "descripcion": "Un espacio donde el ingenio y el trabajo en equipo hacen que las matemáticas sean un juego."
  },
  {
    "area": "Ingreso",
    "charla": "Kit de Detective Vocacional",
    "tipo": "Charla",
    "horario": "16:00",
    "aula": "309",
    "descripcion": ""
  },
  {
    "area": "Ingeniería Mecánica",
    "charla": "Cadena de valor de la ingeniería mecánica",
    "tipo": "Charla",
    "horario": "17:00",
    "aula": "309",
    "descripcion": "Descripción de todas las actividades y procesos involucrados en la creación de productos mecánicos, desde la concepción hasta la entrega final al cliente. Actividades reservadas."
  },
  {
    "area": "Ingeniería Mecánica",
    "charla": "La ingeniería mecánica a través del microscopio",
    "tipo": "Charla",
    "horario": "16:00 - Repetición: 16:30",
    "aula": "Lab Metalografía",
    "descripcion": "Nuevo lab de metalografia"
  },
  {
    "area": "Ingeniería Mecánica",
    "charla": "Perfil del Profesional de Ingeniería Mecánica",
    "tipo": "Charla",
    "horario": "15:30",
    "aula": "Sum",
    "descripcion": "Presentación de la carrera de Ingeniería Mecánica. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Mecánica. Actividades reservadas.Título intermedio."
  },
  {
    "area": "Ingeniería Mecánica",
    "charla": "Análisis Automatizado de Metalografías mediante Inteligencia Artificial",
    "tipo": "Charla",
    "horario": "16:00 - Repetición: 17:00",
    "aula": "303",
    "descripcion": "Un recorrido por el desarrollo de sistemas de IA capaces de analizar metalografías, mostrando cómo la tecnología potencia la investigación en ciencia de materiales."
  },
  {
    "area": "Ingeniería Química",
    "charla": "Producción de bioplasticos a partir de residuos alimenticios",
    "tipo": "Charla",
    "horario": "16:00 - Repetición: 17:00",
    "aula": "308",
    "descripcion": "El proyecto busca valorizar residuos vegetales generados en la provincia de Santa Fe mediante su transformación en bioplásticos sostenibles. La investigación se centra en el aprovechamiento del almidón extraído de cáscaras de papa y camote provenientes de descartes industriales y gastronómicos. A través de técnicas de extracción por decantación y del desarrollo de formulaciones optimizadas, se propone obtener materiales biodegradables que constituyan una alternativa a los plásticos convencionales derivados del petróleo. Desarrollado en la UTN Regional Rosario, el proyecto integra principios de economía circular, formación de recursos humanos y transferencia tecnológica, promoviendo el aprovechamiento de residuos y el desarrollo de soluciones sostenibles para la comunidad local."
  },
  {
    "area": "Ingeniería Química",
    "charla": "Estudiante de Ingeniería Química por un día",
    "tipo": "Charla",
    "horario": "15:30 - Repetición: 16:30",
    "aula": "308",
    "descripcion": "Presentación de la carrera de ingeniería química, características generales del cursado y de la actividad profesional. Sabremos si hay diferencias entre ingenieros/as químicos/as y licenciados/as químicos/as y se brindarán más detalles sobre las funciones principales de los/as ingenieros/as químicos/as.¿Cómo se hace una reacción química? La química es la ciencia natural que estudia la composición, estructura y propiedades de la materia, así como también los cambios que esta experimenta durante las reacciones. Veremos un ejemplo de un cambio químico y como detectamos que la sustancia ha sufrido una modificación."
  },
  {
    "area": "Secretaría de Asuntos Universitarios",
    "charla": "Secretaría de Asuntos Universitarios: Becas, deportes, Bolsa de Trabajo, Pasantías y +",
    "tipo": "Muestra",
    "horario": "16:00",
    "aula": "1er piso",
    "descripcion": "Conocé los programas de becas y ayudas económicas, bolsa de trabajo, pasantías, actividades deportivas y propuestas de salud y bienestar para acompañarte durante toda tu vida universitaria."
  },
  {
    "area": "Ingeniería en Sistemas de Información",
    "charla": "Ingeniero de Sistemas como arquitecto del futuro",
    "tipo": "Charla",
    "horario": "16:00 - Repetición: 17:00",
    "aula": "Sum",
    "descripcion": "Presentación de la carrera de Ingeniería en sistemas de información. Características generales del cursado y de la actividad del profesional de la ingeniería en sistemas de Información. Actividades reservadas.Título intermedio. Experiencia laboral personal"
  },
  {
    "area": "Ingeniería en Sistemas de Información",
    "charla": "Si la IA escribe el código, ¿qué vas a crear vos?",
    "tipo": "Charla",
    "horario": "16:30",
    "aula": "303",
    "descripcion": "El código lo puede escribir una IA. Lo que no puede reemplazar es tu capacidad de pensar, diseñar y crear soluciones. Te contamos cómo prepararte para ese nuevo escenario."
  },
  {
    "area": "Ingeniería en Sistemas de Información",
    "charla": "IA: Guía de buenas prácticas para el estudiante",
    "tipo": "Charla",
    "horario": "16:30",
    "aula": "Sum",
    "descripcion": "Una guía para integrar la IA a la vida académica de forma inteligente: potenciando el aprendizaje sin resignar el pensamiento propio."
  }
];

const areasSection = document.getElementById('areas');
const charlasSection = document.getElementById('charlasSection');
const charlasDiv = document.getElementById('charlas');

const areasUnicas = [...new Set(actividades.map(a => a.area))];

areasUnicas.forEach(area => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'card area-card';
  card.innerHTML = `<span>${area}</span><span class="area-arrow" aria-hidden="true">→</span>`;
  card.addEventListener('click', () => mostrarActividades(area));
  areasSection.appendChild(card);
});

function crearGrupo(titulo, items, tipoClase) {
  if (!items.length) return;

  const grupo = document.createElement('section');
  grupo.className = `activity-group ${tipoClase}`;

  const encabezado = document.createElement('div');
  encabezado.className = 'activity-group-title';
  encabezado.innerHTML = `<span class="group-mark" aria-hidden="true"></span><h3>${titulo}</h3>`;
  grupo.appendChild(encabezado);

  items.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card activity-card';

    const title = document.createElement('h4');
    title.textContent = item.charla;
    card.appendChild(title);

    const meta = document.createElement('div');
    meta.className = 'activity-meta';
    meta.innerHTML = `
      <div><span class="meta-label">Horario</span><strong>${item.horario}</strong></div>
      <div><span class="meta-label">Lugar</span><strong>${item.aula || 'A confirmar'}</strong></div>
    `;
    card.appendChild(meta);

    if (item.descripcion && item.descripcion.trim()) {
      const desc = document.createElement('p');
      desc.className = 'activity-description';
      desc.textContent = item.descripcion;
      card.appendChild(desc);
    }

    grupo.appendChild(card);
  });

  charlasDiv.appendChild(grupo);
}

function mostrarActividades(area) {
  charlasDiv.innerHTML = '';
  charlasSection.classList.remove('hidden');

  const tituloSeccion = charlasSection.querySelector('h2');
  if (tituloSeccion) tituloSeccion.textContent = area;

  const filtradas = actividades.filter(a => a.area === area);
  const charlas = filtradas.filter(a => a.tipo !== 'Muestra');
  const muestras = filtradas.filter(a => a.tipo === 'Muestra');

  crearGrupo('Charlas', charlas, 'group-charlas');
  crearGrupo('Muestras', muestras, 'group-muestras');

  charlasSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
