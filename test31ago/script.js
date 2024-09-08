
function contador(team) {
    let scoreElement = document.getElementById(team);
    let score = parseInt(scoreElement.innerText);
    scoreElement.innerText = score + 1;

    check(team); 

    }
function incrementar(team) {
    let scoreElement = document.getElementById(team);
    let score = parseInt(scoreElement.innerText);
    scoreElement.innerText = score + 1;

    check(team); 
}
function mensaje() {
    alert("The ninja have won.");
}
window.onload = function() {
    setTimeout(mensaje, 13000);
};

function ocultar() {
    const suscripcion = document.getElementById("suscripcion");
    suscripcion.style.display = "none";
}
