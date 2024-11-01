
document.getElementById('login-btn').addEventListener('click', function() {
    const btn = this;
    btn.textContent = btn.textContent === 'Iniciar sesión' ? 'Cerrar sesión' : 'Iniciar sesión';
});

document.getElementById('add-def-btn').addEventListener('click', function() {
    this.style.display = 'none';
});

const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert(`${this.dataset.mascota} was liked`);
        const likeCount = parseInt(this.textContent.split(' ')[0]);
        this.textContent = `${likeCount + 1} me gusta`;
    });
});
