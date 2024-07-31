const charlas = [
    { area: 'ciencias', charla: 'Física Cuántica', horario: '10:00 - 12:00', aula: 'Aula 1', descripcion: 'Introducción a los principios de la física cuántica.' },
    { area: 'ingenieria', charla: 'Introducción a la Robótica', horario: '12:00 - 14:00', aula: 'Aula 2', descripcion: 'Fundamentos y aplicaciones de la robótica.' },
    { area: 'artes', charla: 'Historia del Arte', horario: '14:00 - 16:00', aula: 'Aula 3', descripcion: 'Un recorrido por las principales corrientes artísticas.' },
    { area: 'humanidades', charla: 'Filosofía Moderna', horario: '16:00 - 18:00', aula: 'Aula 4', descripcion: 'Exploración de las ideas y pensadores modernos.' },
    // Agrega más charlas según sea necesario
];

function actualizarCharlasYHorarios() {
    const area = document.getElementById('area').value;
    const charlaSelect = document.getElementById('charla');
    const horarioSelect = document.getElementById('horario');

    charlaSelect.innerHTML = '<option value="">Seleccione una charla</option>';
    horarioSelect.innerHTML = '<option value="">Seleccione un horario</option>';

    if (area === "") {
        charlaSelect.disabled = true;
        horarioSelect.disabled = true;
        return;
    }

    const charlasFiltradas = charlas.filter(c => c.area === area);
    const charlasUnicas = [...new Set(charlasFiltradas.map(c => c.charla))];
    const horariosUnicos = [...new Set(charlasFiltradas.map(c => c.horario))];

    charlasUnicas.forEach(charla => {
        const option = document.createElement('option');
        option.value = charla;
        option.textContent = charla;
        charlaSelect.appendChild(option);
    });

    horariosUnicos.forEach(horario => {
        const option = document.createElement('option');
        option.value = horario;
        option.textContent = horario;
        horarioSelect.appendChild(option);
    });

    charlaSelect.disabled = false;
    horarioSelect.disabled = false;
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