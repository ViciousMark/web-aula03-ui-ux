const cards = document.querySelector('main');
cards.innerHTML = 'Carregando...';
fetch('./dados.json')
    .then(resp => resp.json())
    .then(resp => {
        resp.forEach(p => {
            let cards = document.createElement('div');
            cards.innerHTML = `
        <h3>${p.nome}</h3>
        <img src="${p.avatar}" alt="Avatar">
        <p>${p.cidade}</p>
        `;
            cards.appendChild(card);

        });
    })