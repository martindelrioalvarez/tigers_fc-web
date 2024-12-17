// Placeholder para actualizaciones futuras (dinamismo o API si se necesita)
console.log("Página de Tigers FC cargada correctamente.");

// Abre el modal con información del jugador
function openModal(name, number, description, imageUrl) {
    document.getElementById('playerName').innerText = name;
    document.getElementById('playerNumber').innerText = number;
    document.getElementById('playerDescription').innerText = description;
    document.getElementById('playerImage').src = imageUrl;
    document.getElementById('playerModal').style.display = 'block';
}

// Cierra el modal
function closeModal() {
    document.getElementById('playerModal').style.display = 'none';
}

// Cierra el modal si se hace clic fuera de la ventana
window.onclick = function(event) {
    const modal = document.getElementById('playerModal');
    if (event.target === modal) {
        closeModal();
    }
};

