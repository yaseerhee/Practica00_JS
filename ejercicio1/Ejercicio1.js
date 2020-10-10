var numero = [];
var result = [];
var aleatorio;
var mensaje = "Porfavor debe ser positivo";

var par = [];
var impar = [];

console.log(aleatorio);
//1. Pedir 10 valores positivos
for (var i = 0; i < 10; i++) {
  //Convertir el String en Number
  numero[i] = Number(window.prompt("Introduce un número positivo: "));
  //Frenar el bluque si introduce un numero que no sea positivo
  if (numero[i] < 0) {
    document.write(mensaje + "--> " + numero[i]);
    break;
  }
  //Numero aleatorio del 0 al 10 redondeado
  //  2 y 3. Numero aleatorio por numero introducido y redondear las propiedades
  aleatorio = Math.round(Math.random() * 10);
  result[i] = aleatorio * numero[i];

  // 4. Meter cada resultado en par o impar.
  if (result[i] % 2 == 0) {
    par.push(result[i]);
  } else {
    impar.push(result[i]);
  }
}

var par_long = par.length;
var impar_long = impar.length;

//7. Comprobaciones

document.write("<br/>");
document.write("Numeros introducidos: " + numero);
document.write("<br/>");
document.write(
  "Resultado de la multiplicación de introducido por aleatorio: " + result
);
document.write("<br/>");

//      6. Mostrar por pantalla
document.write("Muestra por pantalla el que más longitud tenga");
if (par_long > impar_long) {
  document.write("Pares: " + par);
} else {
  document.write("Impares: " + impar);
}
