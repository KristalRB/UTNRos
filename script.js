const charlas = [
    /*BÁSICAS*/
    
    { area: 'Básicas', charla: 'Análisis de Fenómenos Ópticos', horario: '14:50 - 15:10', aula: 'Lab Física I', descripcion: 'Experimento en el Laboratorio de Física I de Óptica Geométrica. Estudio de la Reflexión y refracción de la luz en superficies planas y curvas.' },
    { area: 'Básicas', charla: 'Análisis de Fenómenos Ópticos', horario: '16:00 - 16:20', aula: 'Lab Física I', descripcion: 'Experimento en el Laboratorio de Física I de Óptica Geométrica. Estudio de la Reflexión y refracción de la luz en superficies planas y curvas.' },
    { area: 'Básicas', charla: 'Análisis de Fenómenos Ópticos', horario: '17:00 - 17:20', aula: 'Lab Física I', descripcion: 'Experimento en el Laboratorio de Física I de Óptica Geométrica. Estudio de la Reflexión y refracción de la luz en superficies planas y curvas.' },
    { area: 'Básicas', charla: 'Péndulo Balístico', horario: '15:20 - 15:40', aula: 'Lab Física I', descripcion: 'Determinación de la rapidez de lanzamiento de un proyectil por medio de un péndulo balístico.' },
    { area: 'Básicas', charla: 'Péndulo Balístico', horario: '16:00 - 16:20', aula: 'Lab Física I', descripcion: 'Determinación de la rapidez de lanzamiento de un proyectil por medio de un péndulo balístico.' },
    { area: 'Básicas', charla: 'Péndulo Balístico', horario: '16:30 - 16:50', aula: 'Lab Física I', descripcion: 'Determinación de la rapidez de lanzamiento de un proyectil por medio de un péndulo balístico.' },
    { area: 'Básicas', charla: 'Péndulo Balístico', horario: '17:00 - 17:20', aula: 'Lab Física I', descripcion: 'Determinación de la rapidez de lanzamiento de un proyectil por medio de un péndulo balístico.' },
    { area: 'Básicas', charla: 'Visualización de Carga y descarga de un capacitor', horario: '15:20 - 15:40', aula: 'Lab Física 2', descripcion: 'Experiencia en el Laboratorio de Física II.' },
    { area: 'Básicas', charla: 'Visualización de Carga y descarga de un capacitor', horario: '16:30 - 16:50', aula: 'Lab Física 2', descripcion: 'Experiencia en el Laboratorio de Física II.' },
    { area: 'Básicas', charla: 'Visualización de Carga y descarga de un capacitor', horario: '17:30 - 17:50', aula: 'Lab Física 2', descripcion: 'Experiencia en el Laboratorio de Física II.' },
    { area: 'Básicas', charla: 'Introducción al diseño 3D', horario: '15:20 - 15:40', aula: 'Lab Física 1', descripcion: 'Introducción al diseño 3D' },
    { area: 'Básicas', charla: 'Introducción al diseño 3D', horario: '16:30 - 16:50', aula: 'Lab Física 1', descripcion: 'Introducción al diseño 3D' },
    { area: 'Básicas', charla: 'Introducción al diseño 3D', horario: '17:30 - 17:50', aula: 'Lab Física 1', descripcion: 'Introducción al diseño 3D' },

/*CIVIL*/
    
    { area: 'Ingeniería Civil', charla: 'Lab. de Informática ', horario: '16:00 - 16:20', aula: 'Anfiteatro', descripcion: 'Se presentaran los Sofware que maneja un ingeniero civil a lo largo de su profesión. Herramienta fundamentas para Diseño, Dibujo y Calculo. ' },
    { area: 'Ingeniería Civil', charla: 'Lab. de Informática ', horario: '17:30 - 17:50', aula: 'Anfiteatro', descripcion: 'Se presentaran los Sofware que maneja un ingeniero civil a lo largo de su profesión. Herramienta fundamentas para Diseño, Dibujo y Calculo. ' },
    { area: 'Ingeniería Civil', charla: 'Lab. de Informática ', horario: '16:30 - 16:50', aula: 'Anfiteatro', descripcion: 'Se presentaran los Sofware que maneja un ingeniero civil a lo largo de su profesión. Herramienta fundamentas para Diseño, Dibujo y Calculo. ' },
    { area: 'Ingeniería Civil', charla: 'Lab. de Informática ', horario: '17:00 - 17:20', aula: 'Anfiteatro', descripcion: 'Se presentaran los Sofware que maneja un ingeniero civil a lo largo de su profesión. Herramienta fundamentas para Diseño, Dibujo y Calculo. ' },
    { area: 'Ingeniería Civil', charla: 'Lab. de Hidráulica  ', horario: '15:20 - 15:50', aula: 'Laboratorio IC- Anexo I', descripcion: 'Canal Hidráulico' },
    { area: 'Ingeniería Civil', charla: 'Lab. de Hidráulica  ', horario: '16:00 - 16:20', aula: 'Laboratorio IC- Anexo I', descripcion: 'Canal Hidráulico' },
    { area: 'Ingeniería Civil', charla: 'Lab. de Hidráulica  ', horario: '16:30 - 16:50', aula: 'Laboratorio IC- Anexo I', descripcion: 'Canal Hidráulico' },
    { area: 'Ingeniería Civil', charla: 'Lab. de Hidráulica  ', horario: '17:00 - 17:20', aula: 'Laboratorio IC- Anexo I', descripcion: 'Canal Hidráulico' },
    { area: 'Ingeniería Civil', charla: 'Lab. de ensayos', horario: '15:20 - 15:50', aula: 'Laboratorio IC- Anexo I', descripcion: 'Ensayo de tracción en barra de acero y en probeta de hormigón' },
    { area: 'Ingeniería Civil', charla: 'Lab. de ensayos', horario: '16:00 - 16:20', aula: 'Laboratorio IC- Anexo I', descripcion: 'Ensayo de tracción en barra de acero y en probeta de hormigón' },
    { area: 'Ingeniería Civil', charla: ' Perfil del profesional de la Ingeniería Civil', horario: '14:50 - 15:10', aula: 'Anfiteatro', descripcion: 'Presentación de la carrera de Ingeniería Civil. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Civil. Actividades reservadas.' },
    { area: 'Ingeniería Civil', charla: ' Perfil del profesional de la Ingeniería Civil', horario: '15:20 - 15:40', aula: 'Anfiteatro', descripcion: 'Presentación de la carrera de Ingeniería Civil. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Civil. Actividades reservadas.' },
 
/*ELECTRICA*/
    
  {area: 'Ingeniería en Energía Eléctrica', charla: 'Captura y visualización de datos para sistemas de generación de Energías Renovables', horario: '16:00 - 16:50', aula: '017', descripcion: 'Sin descripción' },
  {area: 'Ingeniería en Energía Eléctrica', charla: ' Perfil del profesional de la Ingeniería en Energía Eléctrica', horario: '15:20 - 15:40', aula: '017', descripcion: 'Sin descripción' },
    
/*INGRESO*/    
    
    { area: 'Ingreso', charla: 'Arduino', horario: '16:00 - 16:20', aula: 'SUM', descripcion: 'Tablero de juegos, Simón dice, Sensor de CO, Sensor de movimiento' },
    { area: 'Ingreso', charla: 'Arduino', horario: '16:30 - 16:50', aula: 'SUM', descripcion: 'Tablero de juegos, Simón dice, Sensor de CO, Sensor de movimiento' },
    { area: 'Ingreso', charla: 'Arduino', horario: '17:30 - 17:50', aula: 'SUM', descripcion: 'Tablero de juegos, Simón dice, Sensor de CO, Sensor de movimiento' },
    { area: 'Ingreso', charla: 'Test Vocacional', horario: '17:30 - 17:50', aula: 'SUM', descripcion: 'Estudiantes de Ingenieria en Sistemas programaro el Test del doctor Holland, denominado Test Chaside  que consta de 98 preguntas enfocadas a identificar tus intereses y aptitudes.' },
    { area: 'Ingreso', charla: 'Test Vocacional', horario: '16:00 - 16:20', aula: 'SUM', descripcion: 'Estudiantes de Ingenieria en Sistemas programaro el Test del doctor Holland, denominado Test Chaside  que consta de 98 preguntas enfocadas a identificar tus intereses y aptitudes.' },
    { area: 'Ingreso', charla: 'Test Vocacional', horario: '16:30 - 16:50', aula: 'SUM', descripcion: 'Estudiantes de Ingenieria en Sistemas programaro el Test del doctor Holland, denominado Test Chaside  que consta de 98 preguntas enfocadas a identificar tus intereses y aptitudes.' },
    { area: 'Ingreso', charla: 'Pull Extrusora - Impresora 3D', horario: '17:30 - 17:50', aula: 'SUM', descripcion: 'Muestra' },
    { area: 'Ingreso', charla: 'Pull Extrusora - Impresora 3D', horario: '16:00 - 16:20', aula: 'SUM', descripcion: 'Muestra' },
    { area: 'Ingreso', charla: 'Pull Extrusora - Impresora 3D', horario: '16:30 - 16:50', aula: 'SUM', descripcion: 'Muestra' },
    { area: 'Ingreso', charla: 'Charla sobre cómo es el curso de ingreso ', horario: '14:50 - 17:10', aula: 'SUM', descripcion: 'Charla' },
    { area: 'Ingreso', charla: 'Charla sobre cómo es el curso de ingreso ', horario: '16:00 - 16:20', aula: 'SUM', descripcion: 'Charla' },
    { area: 'Ingreso', charla: 'Charla sobre cómo es el curso de ingreso ', horario: '17:30 - 17:50', aula: 'SUM', descripcion: 'Charla' },
    { area: 'Ingreso', charla: 'De la Realidad al Papel: La Magia de la Ingeniería en el Diseño y la Construcción', horario: '16:00 - 16:20', aula: '309', descripcion: '¿Alguna vez se preguntaron cómo pasan las ideas de nuestra mente al mundo real? ¿Cómo es posible que algo que solo imaginamos se convierta en un puente, un edificio o incluso una ciudad? En esta charla nos enfocamos en cómo los ingenieros toman ideas y necesidades del mundo real y las convierten en proyectos concretos a través de planos y diseños, y como esos diseños se transforman en estructuras que vemos y usamos todos los días.' },
    { area: 'Ingreso', charla: 'De la Realidad al Papel: La Magia de la Ingeniería en el Diseño y la Construcción', horario: '17:30 - 17:50', aula: '309', descripcion: '¿Alguna vez se preguntaron cómo pasan las ideas de nuestra mente al mundo real? ¿Cómo es posible que algo que solo imaginamos se convierta en un puente, un edificio o incluso una ciudad? En esta charla nos enfocamos en cómo los ingenieros toman ideas y necesidades del mundo real y las convierten en proyectos concretos a través de planos y diseños, y como esos diseños se transforman en estructuras que vemos y usamos todos los días.' },

/*MECANICA*/ 
    
    { area: 'Ingeniería Mecánica', charla: 'La ingeniería mecánica en el Agro', horario: '17:00 - 17:20', aula: '210', descripcion: 'Aplicación de la mecánica en el desarrollo de la maquinaria agrícola.' },
    { area: 'Ingeniería Mecánica', charla: 'La ingeniería mecánica en el Agro', horario: '17:30 - 17:50', aula: '210', descripcion: 'Aplicación de la mecánica en el desarrollo de la maquinaria agrícola.' },
    { area: 'Ingeniería Mecánica', charla: 'Cadena de valor de la ingeniería mecánica', horario: '16:00 - 16:50', aula: '210', descripcion: 'Descripción de todas las actividades y procesos involucrados en la creación de productos mecánicos, desde la concepción hasta la entrega final al cliente. Actividades reservadas.' },
    { area: 'Ingeniería Mecánica', charla: 'Perfil del Profesional de Ingeniería Mecánica', horario: '14:50 - 15:10', aula: 'Salón de Actos (Subsuelo)', descripcion: 'Presentación de la carrera de Ingeniería Mecánica. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Mecánica. Actividades reservadas.Título intermedio.' },   
    { area: 'Ingeniería Mecánica', charla: 'Perfil del Profesional de Ingeniería Mecánica', horario: '16:30 - 16:50', aula: 'Salón de Actos (Subsuelo)', descripcion: 'Presentación de la carrera de Ingeniería Mecánica. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Mecánica. Actividades reservadas.Título intermedio.' }, 
    { area: 'Ingeniería Mecánica', charla: 'Perfil del Profesional de Ingeniería Mecánica', horario: '15:20 - 15:40', aula: 'Salón de Actos (Subsuelo)', descripcion: 'Presentación de la carrera de Ingeniería Mecánica. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Mecánica. Actividades reservadas.Título intermedio.' }, 
    { area: 'Ingeniería Mecánica', charla: 'Industria 4.0', horario: '16:00 - 16:50', aula: '216', descripcion: 'Industria 4.0' },
    { area: 'Ingeniería Mecánica', charla: 'La ingeniería mecánica a través del microscopio', horario: '15:20 - 15:40', aula: 'Lab Mecánica (2do Piso)', descripcion: '' },   
    { area: 'Ingeniería Mecánica', charla: 'La ingeniería mecánica a través del microscopio', horario: '16:00 - 16:20', aula: 'Lab Mecánica (2do Piso)', descripcion: '' }, 
    { area: 'Ingeniería Mecánica', charla: 'La ingeniería mecánica a través del microscopio', horario: '16:30 - 16:50', aula: 'Lab Mecánica (2do Piso)', descripcion: '' }, 

    
/*QUÍMICA*/    
    
    { area: 'Ingeniería Química', charla: 'Ingeniería Química ¿es lo que parece?', horario: '14:50 - 15:40', aula: '308', descripcion: 'Presentación de la carrera de ingeniería química, características generales del cursado y de la actividad profesional. Sabremos si hay diferencias entre ingenieros/as químicos/as y licenciados/as químicos/as y se brindarán más detalles sobre las funciones principales de los/as ingenieros/as químicos/as.¿Cómo se hace una reacción química? La química es la ciencia natural que estudia la composición, estructura y propiedades de la materia, así como también los cambios que esta experimenta durante las reacciones. Veremos un ejemplo de un cambio químico y como detectamos que la sustancia ha sufrido una modificación.' },   
    { area: 'Ingeniería Química', charla: 'Ingeniería Química ¿es lo que parece?', horario: '16:00 - 16:50', aula: '308', descripcion: 'Presentación de la carrera de ingeniería química, características generales del cursado y de la actividad profesional. Sabremos si hay diferencias entre ingenieros/as químicos/as y licenciados/as químicos/as y se brindarán más detalles sobre las funciones principales de los/as ingenieros/as químicos/as.¿Cómo se hace una reacción química? La química es la ciencia natural que estudia la composición, estructura y propiedades de la materia, así como también los cambios que esta experimenta durante las reacciones. Veremos un ejemplo de un cambio químico y como detectamos que la sustancia ha sufrido una modificación.' }, 
    { area: 'Ingeniería Química', charla: 'Ingeniería Química ¿es lo que parece?', horario: '17:00 - 17:50', aula: '308', descripcion: 'Presentación de la carrera de ingeniería química, características generales del cursado y de la actividad profesional. Sabremos si hay diferencias entre ingenieros/as químicos/as y licenciados/as químicos/as y se brindarán más detalles sobre las funciones principales de los/as ingenieros/as químicos/as.¿Cómo se hace una reacción química? La química es la ciencia natural que estudia la composición, estructura y propiedades de la materia, así como también los cambios que esta experimenta durante las reacciones. Veremos un ejemplo de un cambio químico y como detectamos que la sustancia ha sufrido una modificación.' },

/*SAU*/
    
    { area: 'Secretaría de Asuntos Universitarios', charla: 'Becas, Intercambios y Deportes', horario: '15:20 - 15:40', aula: '213', descripcion: 'Becas, Intercambios y Deportes' },   
    { area: 'Secretaría de Asuntos Universitarios', charla: 'Becas, Intercambios y Deportes', horario: '16:30 - 16:50', aula: '213', descripcion: 'Becas, Intercambios y Deportes' }, 
    { area: 'Secretaría de Asuntos Universitarios', charla: 'Becas, Intercambios y Deportes', horario: '17:00 - 17:30', aula: '213', descripcion: 'Becas, Intercambios y Deportes' },
    
 /*SISTEMAS*/   

    { area: 'Ingeniería en Sistemas de Información', charla: 'Estudiando Ingeniería en Sistemas ¿qué estudiamos cuándo estudiamos ingeniería en sistemas?¿para qué estudiamos?', horario: '14:50 - 15:10', aula: '211', descripcion: 'Presentación de la carrera de Ingeniería en sistemas de información. Características generales del cursado y de la actividad del profesional de la ingeniería en sistemas de Información. Actividades reservadas.Título intermedio. Experiencia laboral personal' },
    { area: 'Ingeniería en Sistemas de Información', charla: 'Estudiando Ingeniería en Sistemas ¿qué estudiamos cuándo estudiamos ingeniería en sistemas?¿para qué estudiamos?', horario: '17:30 - 17:50', aula: '211', descripcion: 'Presentación de la carrera de Ingeniería en sistemas de información. Características generales del cursado y de la actividad del profesional de la ingeniería en sistemas de Información. Actividades reservadas.Título intermedio. Experiencia laboral personal' },
    { area: 'Ingeniería en Sistemas de Información', charla: 'El Laberinto de Ideas: Caso practico', horario: '15:20 - 15:40', aula: '309', descripcion: 'En esta charla interactiva, juntos exploraremos diferentes enfoques para resolver un caso práctico. A través de la participación y el intercambio de ideas, los participantes descubrirán cómo un problema puede ser abordado desde múltiples perspectivas, destacando la importancia de la creatividad y el pensamiento crítico en la resolución de problemas.' },
    { area: 'Ingeniería en Sistemas de Información', charla: 'El Laberinto de Ideas: Caso practico', horario: '17:30 - 17:50', aula: '309', descripcion: 'En esta charla interactiva, juntos exploraremos diferentes enfoques para resolver un caso práctico. A través de la participación y el intercambio de ideas, los participantes descubrirán cómo un problema puede ser abordado desde múltiples perspectivas, destacando la importancia de la creatividad y el pensamiento crítico en la resolución de problemas.' },
    { area: 'Ingeniería en Sistemas de Información', charla: '¿Qué hace un profesional de la ingeniería en sistemas de información?', horario: '17:00 - 17:20', aula: 'SUM', descripcion: '' },
    { area: 'Ingeniería en Sistemas de Información', charla: 'Detrás de Escena: El Analista en los Proyectos', horario: '14:50 - 15:10', aula: '309', descripcion: 'Exploraremos el rol del analista en los proyectos. Descubriremos cómo este profesional actúa como el puente entre los requisitos del cliente y las soluciones tecnológicas, asegurando que cada aspecto del proyecto se alinee con los objetivos.' },
    { area: 'Ingeniería en Sistemas de Información', charla: 'Detrás de Escena: El Analista en los Proyectos', horario: '17:00 - 17:20', aula: '309', descripcion: 'Exploraremos el rol del analista en los proyectos. Descubriremos cómo este profesional actúa como el puente entre los requisitos del cliente y las soluciones tecnológicas, asegurando que cada aspecto del proyecto se alinee con los objetivos.' },
    { area: 'Ingeniería en Sistemas de Información', charla: 'Lo que no te dicen de la Ingeniería en Sistemas.', horario: '15:20 - 15:40', aula: '211', descripcion: 'Estudiante de Ingeniería en Sistemas te cuenta todo lo que nadie te dice sobre esta carrera. Desde lo que vale la pena hasta lo que te van a hacer creer, sumate para descubrir la posta de la Ingeniería en Sistemas.' },
    { area: 'Ingeniería en Sistemas de Información', charla: 'Lo que no te dicen de la Ingeniería en Sistemas.', horario: '16:00 - 16:20', aula: '211', descripcion: 'Estudiante de Ingeniería en Sistemas te cuenta todo lo que nadie te dice sobre esta carrera. Desde lo que vale la pena hasta lo que te van a hacer creer, sumate para descubrir la posta de la Ingeniería en Sistemas.'},
    { area: 'Ingeniería en Sistemas de Información', charla: 'Lo que no te dicen de la Ingeniería en Sistemas.', horario: '16:30 - 16:50', aula: '211', descripcion: 'Estudiante de Ingeniería en Sistemas te cuenta todo lo que nadie te dice sobre esta carrera. Desde lo que vale la pena hasta lo que te van a hacer creer, sumate para descubrir la posta de la Ingeniería en Sistemas.'},
    { area: 'Ingeniería en Sistemas de Información', charla: 'Ingeniería en Sistemas de Información. Descripción de la Carrera', horario: '14:50 - 15:10', aula: 'SUM', descripcion: 'Presentación de la carrera de Ingeniería en Sistemas de Información. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Sistemas de Información. Actividades reservadas.Título intermedio.' },
    { area: 'Ingeniería en Sistemas de Información', charla: 'Ingeniería en Sistemas de Información. Descripción de la Carrera', horario: '15:20 - 15:40', aula: 'SUM', descripcion: 'Presentación de la carrera de Ingeniería en Sistemas de Información. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Sistemas de Información. Actividades reservadas.Título intermedio.'},
    
    // Agrega más charlas según sea necesario
];

function actualizarCharlasYHorarios() {
    const area = document.getElementById('area').value;
    const charlaSelect = document.getElementById('charla');

    charlaSelect.innerHTML = '<option value="">Seleccione una charla</option>';

    if (area === "") {
        charlaSelect.disabled = true;
        return;
    }

    const charlasFiltradas = charlas.filter(c => c.area === area);
    const charlasUnicas = [...new Set(charlasFiltradas.map(c => c.charla))];

    charlasUnicas.forEach(charla => {
        const option = document.createElement('option');
        option.value = charla;
        option.textContent = charla;
        charlaSelect.appendChild(option);
    });

    charlaSelect.disabled = false;
}

function filtrarCharlas() {
    const area = document.getElementById('area').value;
    const charla = document.getElementById('charla').value;
    const horario = document.getElementById('horario').value;

    const resultados = charlas.filter(c => {
        return (area === "" || c.area === area) &&
               (charla === "" || c.charla === charla) &&
               (horario === "" || c.horario === horario);
    });

    mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
    const tableBody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    if (resultados.length === 0) {
        const row = tableBody.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = 5;
        cell.textContent = 'No se encontraron resultados.';
    } else {
        resultados.forEach(r => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = r.area;
            row.insertCell(1).textContent = r.charla;
            row.insertCell(2).textContent = r.horario;
            row.insertCell(3).textContent = r.aula;
            row.insertCell(4).textContent = r.descripcion;
        });
    }
}

// Inicializa los horarios cuando se carga la página
window.onload = function() {
    actualizarHorarios();
    mostrarMensajeInicial();
};

function actualizarHorarios() {
    const horarioSelect = document.getElementById('horario');
    const horariosUnicos = [...new Set(charlas.map(c => c.horario))];

    horarioSelect.innerHTML = '<option value="">Seleccione un horario</option>';

    horariosUnicos.forEach(horario => {
        const option = document.createElement('option');
        option.value = horario;
        option.textContent = horario;
        horarioSelect.appendChild(option);
    });

    horarioSelect.disabled = false;
}

function mostrarMensajeInicial() {
    const tableBody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    const row = tableBody.insertRow();
    const cell = row.insertCell(0);
    cell.colSpan = 5;
    cell.textContent = 'Encontrá la información que necesitas utilizando los filtros de la parte superior.';
}
