function calcular() {
    var operacion = parseInt(prompt("Opciones de marcadas,1.Suma,2.Resta,3.Multiplicacion,4.Division,5.¿Cual es Mayor?"))
    switch (operacion) {
         case 1: //suma
            a = parseFloat(prompt("Inserte un numero:"))
            b = parseFloat(prompt("Inserte otro numero:"))
            resultado = a + b;
            document.write("El resultado es igual a: "+resultado)
            break;
        case 2: //Resta
            a = parseFloat(prompt("Inserte un numero:"))
            b = parseFloat(prompt("Inserte otro numero:"))
            document.write("El resultado es igual a: "+resultado)
            resultado = a - b;
            break;
        case 3: //Multiplicacion
            a = parseFloat(prompt("Inserte un numero:"))
            b = parseFloat(prompt("Inserte otro numero:"))
            document.write("El resultado es igual a: "+resultado)
            resultado = a * b;
            break;
        case 4: //Dision
            a = parseFloat(prompt("Inserte un numero:"))
            b = parseFloat(prompt("Inserte otro numero:"))
            resultado = a / b;
            document.write("El resultado es igual a: "+resultado)
            break;
        case 5: //
            a = parseFloat(prompt("Inserte un numero:"))
            b = parseFloat(prompt("Inserte otro numero:"))
            var resultado = a / b;
            if (a > b){
                document.write(+a+" MAYOR QUE "+b)
            }else{
                document.write(+b+" MAYOR QUE "+a)
            }
            break;
        default:
            resultado = "Operación no válida";
            break;
    }
}