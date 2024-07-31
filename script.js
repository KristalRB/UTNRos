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
    
    { area: 'Civil', charla: 'Lab. de Informática ', horario: '16:00 - 16:20', aula: 'Anfiteatro', descripcion: 'Se presentaran los Sofware que maneja un ingeniero civil a lo largo de su profesión. Herramienta fundamentas para Diseño, Dibujo y Calculo. ' },
    { area: 'Civil', charla: 'Lab. de Informática ', horario: '17:30 - 17:50', aula: 'Anfiteatro', descripcion: 'Se presentaran los Sofware que maneja un ingeniero civil a lo largo de su profesión. Herramienta fundamentas para Diseño, Dibujo y Calculo. ' },
    { area: 'Civil', charla: 'Lab. de Informática ', horario: '16:30 - 16:50', aula: 'Anfiteatro', descripcion: 'Se presentaran los Sofware que maneja un ingeniero civil a lo largo de su profesión. Herramienta fundamentas para Diseño, Dibujo y Calculo. ' },
    { area: 'Civil', charla: 'Lab. de Informática ', horario: '17:00 - 17:20', aula: 'Anfiteatro', descripcion: 'Se presentaran los Sofware que maneja un ingeniero civil a lo largo de su profesión. Herramienta fundamentas para Diseño, Dibujo y Calculo. ' },
    { area: 'Civil', charla: 'Lab. de Hidráulica  ', horario: '15:20 - 15:50', aula: 'Planta Piloto (enfrente)', descripcion: 'Canal Hidráulico' },
    { area: 'Civil', charla: 'Lab. de Hidráulica  ', horario: '16:00 - 16:20', aula: 'Planta Piloto (enfrente)', descripcion: 'Canal Hidráulico' },
    { area: 'Civil', charla: 'Lab. de Hidráulica  ', horario: '16:30 - 16:50', aula: 'Planta Piloto (enfrente)', descripcion: 'Canal Hidráulico' },
    { area: 'Civil', charla: 'Lab. de Hidráulica  ', horario: '17:00 - 17:20', aula: 'Planta Piloto (enfrente)', descripcion: 'Canal Hidráulico' },
    { area: 'Civil', charla: 'Lab. de ensayos', horario: '15:20 - 15:50', aula: 'Planta Piloto (enfrente)', descripcion: 'Ensayo de tracción en barra de acero y en probeta de hormigón' },
    { area: 'Civil', charla: 'Lab. de ensayos', horario: '16:00 - 16:20', aula: 'Planta Piloto (enfrente)', descripcion: 'Ensayo de tracción en barra de acero y en probeta de hormigón' },
    { area: 'Civil', charla: ' Perfil del profesional de la Ingeniería Civil', horario: '14:50 - 15:10', aula: 'Anfiteatro', descripcion: 'Presentación de la carrera de Ingeniería Civil. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Civil. Actividades reservadas.' },
    { area: 'Civil', charla: ' Perfil del profesional de la Ingeniería Civil', horario: '15:20 - 15:40', aula: 'Anfiteatro', descripcion: 'Presentación de la carrera de Ingeniería Civil. Características generales del cursado y de la actividad profesional Perfil del profesional de la Ingeniería en Civil. Actividades reservadas.' },
 
/*ELECTRICA*/
  {area: 'Eléctrica', charla: 'Captura y visualización de datos para sistemas de generación de Energías Renovables', horario: '16:00 - 16:50', aula: '017', descripcion: 'Sin descripción' },
  {area: 'Eléctrica', charla: ' Perfil del profesional de la Ingeniería en Energía Eléctrica', horario: '15:20 - 15:40', aula: '017', descripcion: 'Sin descripción' },
    
/*INGRESO*/    
    
    { area: 'Ingreso', charla: 'Arduino', horario: '16:00 - 16:20', aula: 'SUM', descripcion: 'Tablero de juegos, Simón dice, Sensor de CO, Sensor de movimiento' },
    { area: 'Ingreso', charla: 'Arduino', horario: '16:30 - 16:50', aula: 'SUM', descripcion: 'Tablero de juegos, Simón dice, Sensor de CO, Sensor de movimiento' },
    { area: 'Ingreso', charla: 'Arduino', horario: '17:30 - 17:50', aula: 'SUM', descripcion: 'Tablero de juegos, Simón dice, Sensor de CO, Sensor de movimiento' },
    { area: 'Ingreso', charla: 'Test Vocacional', horario: '17:30 - 17:50', aula: 'SUM', descripcion: 'Estudiantes de Ingenieria en Sistemas programaro el Test del doctor Holland, denominado Test Chaside  que consta de 98 preguntas enfocadas a identificar tus intereses y aptitudes.' },
    { area: 'Ingreso', charla: 'Test Vocacional', horario: '16:00 - 16:20', aula: 'SUM', descripcion: 'Estudiantes de Ingenieria en Sistemas programaro el Test del doctor Holland, denominado Test Chaside  que consta de 98 preguntas enfocadas a identificar tus intereses y aptitudes.' },
    { area: 'Ingreso', charla: 'Test Vocacional', horario: '16:30 - 16:50', aula: 'SUM', descripcion: 'Estudiantes de Ingenieria en Sistemas programaro el Test del doctor Holland, denominado Test Chaside  que consta de 98 preguntas enfocadas a identificar tus intereses y aptitudes.' },
    
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
