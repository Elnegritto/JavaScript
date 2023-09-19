// var nombres=prompt("Ingrese tu nombre");
// var Edad=parseInt(prompt("Ingresa la edad"));
// document.write("Bienvenido señor(a) "+nombres+" usted tiene "+edad+" años de edad")

// var nombres=prompt("Ingrese tu nombre");
//  nacimiento=parseInt(prompt("Ingrese tu año de nacimiento"))
//  const fecha = new Date();
//  const fechaActual = fecha.getFullYear();
//  let edad = fechaActual-nacimiento;
//  document.write("Bienvenido señor(a) "+nombres+" usted tiene "+edad+" años de edad")

 
// var nombres=prompt("Ingrese tu nombre");
//  nacimiento=parseInt(prompt("Ingrese tu año de nacimiento"))
//  const fecha = new Date();
//  const fechaActual = fecha.getFullYear();
//  let edad = fechaActual-nacimiento;
//  if(edad<=18){
//     document.write("Bienvenido joven "+nombres+" usted tiene "+edad+" años de edad y es menor de edad")
// }else{
//     document.write("Bienvenido joven "+nombres+" usted tiene "+edad+" años de edad y es mayor de edad")    
// }

var nombres=prompt("Ingresa tu nombre");

nacimiento = parseInt(prompt("Ingresa tu año de Nacimiento"))
const fecha = new Date();
const fechaActual = fecha.getFullYear();
let edad = fechaActual - nacimiento;
if(edad<=8){
    document.write("Bienvenid@ niñ@ "+nombres+" usted tiene "+edad+" años de edad y es un niñ@")
}
else if(edad<=17){
    document.write("Bienvenid@ joven "+nombres+" usted tiene "+edad+" años de edad y es menor de edad")
}

else{
    document.write("Bienvenid@ señor(a) "+nombres+" usted tiene "+edad+" años de edad y es mayor de edad")
}