// =============================
// Datos de ejemplo de las charlas
// =============================
// ⚠️ Acá podés ir cargando todas las charlas que tengas
const charlas = [
    {
        area: "Ingeniería en Sistemas de Información",
        charla: "Introducción a la Inteligencia Artificial",
        horario: "10:00",
        aula: "Lab 3",
        descripcion: "Exploramos los conceptos básicos de IA y sus aplicaciones."
    },
    {
        area: "Ingeniería en Sistemas de Información",
        charla: "Introducción a la Inteligencia Artificial",
        horario: "14:00",
        aula: "Lab 2",
        descripcion: "Repetición para otro grupo de estudiantes."
    },
    {
        area: "Ingeniería Mecánica",
        charla: "Diseño de Máquinas",
        horario: "09:00",
        aula: "Aula Magna",
        descripcion: "Charla sobre fundamentos de diseño y simulaciones mecánicas."
    },
    {
        area: "Ingeniería Química",
        charla: "Energías Renovables",
        horario: "11:00",
        aula: "Sala Q1",
        descripcion: "Cómo la ingeniería química aporta a la transición energética."
    }
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

    // Agrupar charlas por nombre
    const mapaCharlas = {};
    charlasFiltradas.forEach(c => {
        if (!mapaCharlas[c.charla]) mapaCharlas[c.charla] = [];
        mapaCharlas[c.charla].push(c);
    });

    // Crear tarjeta para cada charla
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
