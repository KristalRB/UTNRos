function mostrarResultados(resultados) {
    const container = document.getElementById('charlasContainer');
    container.innerHTML = '';

    if (resultados.length === 0) {
        container.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
    }

    // Agrupar por área
    const areas = [...new Set(resultados.map(c => c.area))];

    areas.forEach(area => {
        const areaSection = document.createElement('div');
        areaSection.className = 'area-section';

        const areaTitle = document.createElement('h3');
        areaTitle.className = 'area-title';
        areaTitle.textContent = area;
        areaSection.appendChild(areaTitle);

        const charlasArea = resultados.filter(c => c.area === area);
        charlasArea.sort((a, b) => a.horario.localeCompare(b.horario));

        charlasArea.forEach(charla => {
            const card = document.createElement('div');
            card.className = 'charla-card';

            const header = document.createElement('div');
            header.className = 'charla-header';

            const title = document.createElement('div');
            title.className = 'charla-title';
            title.textContent = charla.charla;

            const horario = document.createElement('div');
            horario.className = 'charla-horario';
            horario.textContent = charla.horario;

            header.appendChild(title);
            header.appendChild(horario);
            card.appendChild(header);

            const details = document.createElement('div');
            details.className = 'charla-details';
            details.innerHTML = `<p><strong>Aula:</strong> ${charla.aula}</p>
                                 <p>${charla.descripcion}</p>`;

            card.appendChild(details);

            header.addEventListener('click', () => {
                details.style.display = details.style.display === 'block' ? 'none' : 'block';
            });

            areaSection.appendChild(card);
        });

        container.appendChild(areaSection);
    });
}

// Mantener funciones de filtro y select de tu JS original
// Solo cambiar en filtrarCharlas() que llame a mostrarResultados(resultados)

