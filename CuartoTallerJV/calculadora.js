// Función para sumar dos números y mostrar el resultado en un elemento HTML
function sumar(n1, n2) {
    // Calcular la suma de los dos números
    var resultado = n1 + n2;
    // Obtener el elemento HTML donde se mostrará el resultado
    var res = document.getElementById("resultado");
    
    // Verificar si ambos números son distintos de cero
    if (n1 != 0 && n2 != 0) {
        // Mostrar el resultado con formato y cambiar el color del texto a verde
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        // Mostrar mensaje de verificación de datos y cambiar el color del texto a rojo
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Función para restar dos números y mostrar el resultado en un elemento HTML
function restar(n1, n2) {
    // Calcular la resta de los dos números
    var resultado = n1 - n2;
    // Obtener el elemento HTML donde se mostrará el resultado
    var res = document.getElementById("resultado");
    
    // Verificar si ambos números son distintos de cero
    if (n1 != 0 && n2 != 0) {
        // Mostrar el resultado con formato y cambiar el color del texto a verde
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        // Mostrar mensaje de verificación de datos y cambiar el color del texto a rojo
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Función para multiplicar dos números y mostrar el resultado en un elemento HTML
function multiplicar(n1, n2) {
    // Calcular el producto de los dos números
    var resultado = n1 * n2;
    // Obtener el elemento HTML donde se mostrará el resultado
    var res = document.getElementById("resultado");
    
    // Verificar si ambos números son distintos de cero
    if (n1 != 0 && n2 != 0) {
        // Mostrar el resultado con formato y cambiar el color del texto a verde
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        // Mostrar mensaje de verificación de datos y cambiar el color del texto a rojo
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Función para dividir dos números y mostrar el resultado en un elemento HTML
function dividir(n1, n2) {
    // Calcular la división de los dos números
    var resultado = n1 / n2;
    // Obtener el elemento HTML donde se mostrará el resultado
    var res = document.getElementById("resultado");
    
    // Verificar si ambos números son distintos de cero
    if (n1 != 0 && n2 != 0) {
        // Mostrar el resultado con formato y cambiar el color del texto a verde
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        // Mostrar mensaje de verificación de datos y cambiar el color del texto a rojo
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Función para obtener los valores de entrada y realizar la operación seleccionada
function mostrar() {
    // Obtener los valores de los elementos de entrada
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let opc = parseInt(document.getElementById("opc").value);

    // Realizar la operación correspondiente según la opción seleccionada
    switch (opc) {
        case 1:
            sumar(n1, n2);
            break;
        case 2:
            restar(n1, n2);
            break;
        case 3:
            multiplicar(n1, n2);
            break;
        case 4:
            dividir(n1, n2);
            break;
        default:
            // Mostrar alerta en caso de opción inválida
            alert("Opcion Inválida");
    }
}
