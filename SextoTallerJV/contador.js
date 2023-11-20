// Event Listener para detectar teclas presionadas
window.addEventListener("keydown", (e) => {
    // Si la tecla presionada es "+", llama a la función incremento()
    if (e.key == "+") {
        incremento();
    } 
    // Si la tecla presionada es "-", llama a la función decremento()
    else if (e.key == "-") {
        decremento();
    }
});

// Inicialización del contador y obtención del elemento HTML por su ID
let contador = 0;
const valor = document.getElementById("valor");

// Función para incrementar el contador y actualizar el elemento HTML
function incremento() {
    contador += 1;
    valor.innerHTML = contador;
}

// Función para decrementar el contador (si es mayor que 0) y actualizar el elemento HTML
function decremento() {
    // Verifica si el contador es mayor que 0 antes de decrementar
    if (contador > 0) {
        contador -= 1;
        valor.innerHTML = contador;
    } 
    // Si el contador es 0, establece el contador en 0 y actualiza el elemento HTML
    else {
        contador = 0;
        valor.innerHTML = contador;
    }
}

// Función para resetear el contador a 0 y actualizar el elemento HTML
function resetear() {
    contador = 0;
    valor.innerHTML = contador;
}
