// Esta es la función para calcular el total del pedido
function calcularTotal(cantidad, valor) {
    return cantidad * valor;
}

// Función principal que se llama al hacer clic en el botón "Realizar Pedido"
function mostrarOrden() {
    // Aqui se obtienen los valores de la cantidad , valor y tipo de plato , que desea
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let valor = parseInt(document.getElementById("valor").value);
    let tipo = document.getElementById("tipo").value;
    
    // Aqui se valida si los datos que digito sean validos
    if (cantidad > 0 && valor > 0 && tipo !== "Tipo de Plato") {
        // aqui se calcula el total del pedido
        let total = calcularTotal(cantidad, valor);
        // Y aqui se muestra el total del pedido
        mostrarResultado(`Pedido realizado: ${cantidad} platos de ${tipo}. Total a pagar: $${total}`);
    } else {
        // Aqui se muestra un mensaje si los datos son erroneos o no corresponden
        mostrarResultado("Verifique sus datos. Complete la cantidad, valor y tipo de plato correctamente.");
    }
}

// En esta función se muestra el resultado en la interfaz
function mostrarResultado(mensaje) {
    
    let resultadoElemento = document.getElementById("resultado");
    let respuestaElemento = document.getElementById("respuesta");

    // Esto es como por ais decirlo mostrar el area de respuesta
    respuestaElemento.style.display = "block";

    // Esto sirve para mostrar en mensaje del resultado
    resultadoElemento.innerHTML = mensaje;

    // aqui se establece el color del texto en verde si es un pedido exitoso, rojo si hay un error
    if (mensaje.includes("Pedido realizado")) {
        resultadoElemento.style.color = "green";
    } else {
        resultadoElemento.style.color = "red";
    }
}