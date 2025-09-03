const charlas = [
    { area: 'Básicas', charla: 'Análisis de Fenómenos Ópticos', horario: '14:50 - 15:10', aula: 'Laboratorio Física I', descripcion: 'Experimento de óptica.' },
    { area: 'Básicas', charla: 'Péndulo Balístico', horario: '15:20 - 15:40', aula: 'Laboratorio Física I', descripcion: 'Determinación de la rapidez de lanzamiento.' },
    { area: 'Ingeniería Civil', charla: 'Lab. de Informática', horario: '16:00 - 16:20', aula: 'Anfiteatro 4to Piso', descripcion: 'Software de ingeniería civil.' },
    { area: 'Ingeniería Mecánica', charla: 'La Ingeniería Mecánica en el Agro', horario: '17:00 - 17:20', aula: 'Aula 210', descripcion: 'Aplicación en maquinaria agrícola.' },
    { area: 'Ingeniería Química', charla: 'Ingeniería Química ¿es lo que parece?', horario: '14:50 - 15:40', aula: 'Aula 308', descripcion: 'Introducción a la Ingeniería Química.' },
    { area: 'Ingreso', charla: 'Arduino', horario: '16:00 - 16:20', aula: 'SUM', descripcion: 'Tablero de juegos, Sensor de movimiento.' },
    { area: 'Ingeniería en Sistemas de Información', charla: 'El Laberinto de Ideas: Caso práctico', horario: '15:20 - 15:40', aula: 'Aula 309', descripcion: 'Resolución de un caso práctico.' },
    // Agrega más charlas según tu listado original
];

// Crear tarjetas de áreas
const areasSection = document.getElementById('areas');
const charlasSection = document.getElementById('charlasSection');
const charlasDiv = document.getElementById('charlas');

const areasUnicas = [...new Set(charlas.map(c => c.area))];
areasUnicas.forEach(area => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = area;
    card.addEventListener('click', () => mostrarCharlas(area));
    areasSection.appendChild(card);
});

// Mostrar charlas de un área
function mostrarCharlas(area) {
    charlasDiv.innerHTML = '';
    charlasSection.classList.remove('hidden');

    const charlasFiltradas = charlas.filter(c => c.area === area);

    const charlasUnicas = [...new Map(charlasFiltradas.map(c => [c.charla, c]))].values();

    charlasUnicas.forEach(c => {
        const card = document.createElement('div');
        card.className = 'card';
        const title = document.createElement('h3');
        title.textContent = c.charla;
        const details = document.createElement('div');
        details.className = 'card-details';
        details.innerHTML = `<p><strong>Horario:</strong> ${c.horario}</p>
                             <p><strong>Aula:</strong> ${c.aula}</p>
                             <p><strong>Descripción:</strong> ${c.descripcion}</p>`;

        card.appendChild(title);
        card.appendChild(details);

        card.addEventListener('click', () => {
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });

        charlasDiv.appendChild(card);
    });

    // Scroll a la sección de charlas
    charlasSection.scrollIntoView({ behavior: 'smooth' });
}
