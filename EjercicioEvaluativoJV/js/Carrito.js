function mostrarOpciones() {
    document.getElementById("opcionesMenu").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("contenido").style.display = "block";
}

function calcularTotal() {
    var telefonia = document.getElementById("telefonia").value;
    var cantidad = parseInt(prompt("Ingrese la cantidad de planes que desea alquirir el dia hoy,(SI QUIERE VER EL PRECIO UNITARIO DE DICHO PLAN DIGITE 0)"));

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
            var precioUnitario = 28500; // Precio de un plan de Virgilio Móvil
            break;
        case "Movistar":
            var precioUnitario = 35400; // Precio de un plan de Movistar
            break;
        default:
            console.log("Compañía no válida");
            return;
    }

    var totalPagar = cantidad * precioUnitario;

    // Mostrar los datos del pedido y el total a pagar
    var datosPedido = `Compañía: ${telefonia}\nLa Cantidad De Planes Adquiridos Por Esta Compañía Es De: ${cantidad}\nPrecio Del Plan Unitario(Mes): ${precioUnitario}\nTotal a Pagar: ${totalPagar}`;

    document.getElementById("pedido").innerText = datosPedido;
    document.getElementById("total").innerText = `Total a Pagar Por su Plan De Telefonia Seria De: $${totalPagar}`;
}
