// Aquí llevamos el conteo y total de las consolas Xbox y PlayStation.
let cantidadXbox = 0;
let cantidadPlayStation = 0;
let totalXbox = 0;
let totalPlayStation = 0;
let total = 0;

// La función incremento se encarga de sumar uno al contador y actualizar el total.
function incremento(producto, precio) {
    if (producto === 'Xbox') {
        cantidadXbox += 1;
        document.getElementById('cantidadXbox').innerHTML = cantidadXbox;
        totalXbox = cantidadXbox * precio;
        document.getElementById('totalXbox').innerHTML = totalXbox;
    } else if (producto === 'PlayStation') {
        cantidadPlayStation += 1;
        document.getElementById('cantidadPlayStation').innerHTML = cantidadPlayStation;
        totalPlayStation = cantidadPlayStation * precio;
        document.getElementById('totalPlayStation').innerHTML = totalPlayStation;
    }

    total = totalXbox + totalPlayStation;
    document.getElementById('total').innerHTML = total;
}

// La función decremento resta uno si hay al menos una unidad y actualiza el total.
function decremento(producto, precio) {
    if (producto === 'Xbox' && cantidadXbox > 0) {
        cantidadXbox -= 1;
        document.getElementById('cantidadXbox').innerHTML = cantidadXbox;
        totalXbox = cantidadXbox * precio;
        document.getElementById('totalXbox').innerHTML = totalXbox;
    } else if (producto === 'PlayStation' && cantidadPlayStation > 0) {
        cantidadPlayStation -= 1;
        document.getElementById('cantidadPlayStation').innerHTML = cantidadPlayStation;
        totalPlayStation = cantidadPlayStation * precio;
        document.getElementById('totalPlayStation').innerHTML = totalPlayStation;
    }

    total = totalXbox + totalPlayStation;
    document.getElementById('total').innerHTML = total;
}

// La función resetear reinicia todo a cero.
function resetear() {
    cantidadXbox = 0;
    cantidadPlayStation = 0;
    totalXbox = 0;
    totalPlayStation = 0;
    total = 0;

    document.getElementById('cantidadXbox').innerHTML = cantidadXbox;
    document.getElementById('cantidadPlayStation').innerHTML = cantidadPlayStation;
    document.getElementById('totalXbox').innerHTML = totalXbox;
    document.getElementById('totalPlayStation').innerHTML = totalPlayStation;
    document.getElementById('total').innerHTML = total;
}


