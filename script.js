const charlas = [
    { area: 'Básicas', charla: 'Análisis de Fenómenos Ópticos', horarios: ['15:20 - 15:40'], aula: 'Lab Física I', descripcion: 'Experimento en el Laboratorio de Física I de Óptica Geométrica. Estudio de la Reflexión y refracción de la luz en superficies planas y curvas.' },
    { area: 'Civil', charla: 'Lab. de Informática', horarios: ['16:00 - 16:20'], aula: 'Anfiteatro', descripcion: 'Se presentaran los Sofware que maneja un ingeniero civil a lo largo de su profesión. Herramienta fundamentales para Diseño, Dibujo y Cálculo.' },
    { area: 'Eléctrica', charla: 'Captura y visualización de datos para sistemas de generación de Energías Renovables', horarios: ['16:30 - 16:50'], aula: '017', descripcion: 'Sin descripción' },
    { area: 'Ingreso', charla: 'Arduino', horarios: ['16:00 - 16:20', '17:00 - 17:20'], aula: 'SUM', descripcion: 'Tablero de juegos, Simón dice, Sensor de CO, Sensor de movimiento' },
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
    const horariosUnicos = [...new Set(charlasFiltradas.flatMap(c => c.horarios))];

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
