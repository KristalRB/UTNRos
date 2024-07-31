const charlas = [
    { area: 'Básicas', charla: 'Análisis de Fenómenos Ópticos', horario: '15:20 - 15:40', aula: 'Lab Física I', descripcion: 'Experimento en el Laboratorio de Física I de Óptica Geométrica. Estudio de la Reflexión y refracción de la luz en superficies planas y curvas.' },
    { area: 'Civil', charla: 'Lab. de Informática ', horario: '16:00 - 16:20', aula: 'Anfiteatro', descripcion: 'Se presentaran los Sofware que maneja un ingeniero civil a lo largo de su profesión. Herramienta fundamentas para Diseño, Dibujo y Calculo. ' },
    { area: 'Eléctrica', charla: 'Captura y visualización de datos para sistemas de generación de Energías Renovables', horario: '16:30 - 16:50', aula: '017', descripcion: 'Sin descripción' },
    { area: 'Ingreso', charla: 'Arduino', horario: '16:00 - 16:20', aula: 'SUM', descripcion: 'Tablero de juegos, Simón dice, Sensor de CO, Sensor de movimiento' },
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
