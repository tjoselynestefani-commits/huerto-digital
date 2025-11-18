document.getElementById('plantForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('plantName').value;
    const height = document.getElementById('plantHeight').value;
    const date = document.getElementById('plantDate').value;

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Altura:</strong> ${height} cm</p>
        <p><strong>Fecha:</strong> ${date}</p>
    `;

    document.getElementById('plantCards').appendChild(card);

    document.getElementById('plantForm').reset();
});
