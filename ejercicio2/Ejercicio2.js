alert(
  "Tenemos ahora mismo en el almacen estos productos: 50 manzanas, 60 peras, 5 sandías, 7 melones, 8 plátanos y 37 paraguayas."
);
// Precios
const manzanaP = 0.2;
const peraP = 0.18;
const sandiaP = 3.24;
const melonP = 2.89;
const platanoP = 0.12;
const paraguayaP = 0.15;

//Unidades
const manzanaU = 50;
const peraU = 60;
const sandiaU = 5;
const melonU = 7;
const platanoU = 8;
const paraguayaU = 37;

var manzana = Number(window.prompt("Introduce numero de Manzanas: "));
if (manzana >= manzanaU) {
  alert("Solo tenemos " + manzanaU + " manzanas.");
  var manzana = Number(window.prompt("Introduce numero de Manzanas: "));
}

var pera = Number(window.prompt("Introduce numero de Peras: "));
if (pera >= peraU) {
  alert("Solo tenemos " + peraU + " peras.");
  var pera = Number(window.prompt("Introduce numero de Peras: "));
}

var sandia = Number(window.prompt("Introduce numero de Sandia: "));
if (sandia >= sandiaU) {
  alert("Solo tenemos " + sandiaU + " sandias.");
  var sandia = Number(window.prompt("Introduce numero de Sandia: "));
}

var melon = Number(window.prompt("Introduce numero de Melon: "));
if (melon >= melonU) {
  alert("Solo tenemos " + melonU + " melones");
  var melon = Number(window.prompt("Introduce numero de Melon: "));
}

var platano = Number(window.prompt("Introduce numero de Platano: "));
if (platano >= platanoU) {
  alert("Solo tenemos " + platanoU + " platanos");
  var platano = Number(window.prompt("Introduce numero de Platano: "));
}

var paraguaya = Number(window.prompt("Introduce numero de Paraguaya: "));
if (paraguaya >= paraguayaU) {
  alert("Solo tenemos " + paraguayaU + " paraguaya");
  var paraguaya = Number(window.prompt("Introduce numero de Paraguaya: "));
}

//Redondeo a dos decimales
manzana = Math.round(manzana * 100) / 100;
pera = Math.round(pera * 100) / 100;
sandia = Math.round(sandia * 100) / 100;
melon = Math.round(melon * 100) / 100;
platano = Math.round(platano * 100) / 100;
paraguaya = Math.round(paraguaya * 100) / 100;

//TOTALES
var manzanaT, peraT, sandiaT, melonT, platanoT, paraguayaT;
manzanaT = manzanaP * manzana;
peraT = peraP * pera;
sandiaT = sandiaP * sandia;
melonT = melonP * melon;
platanoT = platanoP * platano;
paraguayaT = paraguayaP * paraguaya;

// REDONDEO DEL TOTAL
manzanaT = Math.round(manzanaT * 100) / 100;
peraT = Math.round(peraT * 100) / 100;
sandiaT = Math.round(sandiaT * 100) / 100;
melonT = Math.round(melonT * 100) / 100;
platanoT = Math.round(platanoT * 100) / 100;
paraguayaT = Math.round(paraguayaT * 100) / 100;

document.getElementById("manzana").innerHTML = manzana;
document.getElementById("pera").innerHTML = pera;
document.getElementById("sandia").innerHTML = sandia;
document.getElementById("melon").innerHTML = melon;
document.getElementById("platano").innerHTML = platano;
document.getElementById("paraguaya").innerHTML = paraguaya;

document.getElementById("toManzana").innerHTML = manzanaT;
document.getElementById("toPera").innerHTML = peraT;
document.getElementById("toSandia").innerHTML = sandiaT;
document.getElementById("toMelon").innerHTML = melonT;
document.getElementById("toPlatano").innerHTML = platanoT;
document.getElementById("toParaguaya").innerHTML = paraguayaT;

//Calculo IVA TOTAL

cIVA = manzanaT + peraT + sandiaT + melonT + platanoT + paraguayaT;
sIVA = cIVA - cIVA * 0.04;

cIVA = Math.round(cIVA * 100) / 100;
sIVA = Math.round(sIVA * 100) / 100;

document.getElementById("sIVA").innerHTML = sIVA;
document.getElementById("cIVA").innerHTML = cIVA;
