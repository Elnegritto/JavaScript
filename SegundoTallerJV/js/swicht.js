function mostrar(){
    var opc=parseInt(prompt("Digite 1 para cuadrado, 2 para rectagulo, 3 para triangulo u otra opción para salir"))
    switch (opc) {
        case 1: //cuadrado
            cuaMed1 = parseFloat(prompt("ingresa medida"));
            var areaCuad = cuaMed1 * cuaMed1;
            if (cuaMed1 > 0){
                document.write("El area del cuadrado con la base "+cuaMed1+" por la altura de "+cuaMed1+" es igual a: "+areaCuad);
            }else{
                document.write("Verifique los datos insertados");
            }
            break;
        case 2: //rectangulo
            recMed1 = parseFloat(prompt("Inserte base:"));
            recMed2 = parseFloat(prompt("Inserte altura:"));
            var areaRec = recMed1 * recMed2;
            if (recMed2 > 0 && recMed2 > 0){
                document.write("El area del rectangulo con la base "+recMed1+" por la altura de "+recMed2+" es igual a: "+areaRec);
            }else{
                document.write("Verifique los datos insertados");
            }
            break;
        case 3: //triangulo
            triMed1 = parseFloat(prompt("Inserte base"));
            triMed2 = parseFloat(prompt("Inserte altura:"));
            var areaTri = (triMed1 * triMed2) / 2;
            if (triMed1 > 0 && triMed2 > 0){
                document.write("El area del triangulo con la base "+triMed1+" por la altura de "+triMed2+" es igual a: "+areaTri);
            }else{
                document.write("Verifique los datos insertados");
            break;
            }
        default: //salir
            break;
    }
}
