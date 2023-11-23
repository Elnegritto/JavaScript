// Función para mostrar las opciones de compañías y ocultar el menú inicial
function mostrarOpciones() {
    document.getElementById("opcionesMenu").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("contenido").style.display = "block";
}

// Función para calcular el total a pagar según la compañía y la cantidad de planes
function calcularTotal() {
    var telefonia = document.getElementById("telefonia").value;
    var cantidad = parseInt(prompt("Ingrese la cantidad de planes que desea alquilar hoy (si desea ver el precio unitario, digite 0)"));

    // Definición de precios unitarios por compañía
    switch (telefonia) {
        case "Tigo":
            var precioUnitario = 36000; // Precio de un plan de Tigo
            break;
        case "Claro":
            var precioUnitario = 38300; // Precio de un plan de Claro
            break;
        case "Wom":
            var precioUnitario = 30000; // Precio de un plan de Wow
            break;
        case "Virgin Mobile":
            var precioUnitario = 28500; // Precio de un plan de Virgin Mobile
            break;
        case "Movistar":
            var precioUnitario = 35400; // Precio de un plan de Movistar
            break;
        default:
            console.log("Compañía no válida");
            return;
    }

    // Cálculo del total a pagar
    var totalPagar = cantidad * precioUnitario;

    // Mostrar los datos del pedido y el total a pagar
    var datosPedido = `Compañía: ${telefonia}\nCantidad de planes: ${cantidad}\nPrecio Unitario (Mes): ${precioUnitario}\nTotal a Pagar: ${totalPagar}`;

    document.getElementById("pedido").innerText = datosPedido;
    document.getElementById("total").innerText = `Total a Pagar por tu Plan de Telefonía: $${totalPagar}`;
}

