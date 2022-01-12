// /*  declarar funcion*/
// function Saludar() {
//     alert("Hola a todos");
// }
// Saludar();

// //expresion de funcion
// var cantar = function () {
//     alert("Me gusta cantar");
// }

// //funcion sin parametros
// function sumar() {
//     var num1 = 5;
//     var num2 = 6;
//     var suma = num1 + num2;
//     alert("La suma de la funcion sin parametros es: " + suma);
// }

// sumar();

// //funcion con parametros
// function restar(num1, num2, resta) {
//     var num1 = 6;
//     var num2 = 8;
//     var resta = num1 - num2;
//     alert("La resta de la funcion con parámetros es:" + resta);
// }
// restar();

// //otra func con parametros

// function Cuadrado( cuadrado) {
//     var rescuadrado = cuadrado * cuadrado;
//     alert("El cuadrado del numero es:" +rescuadrado)
// }

// Cuadrado(4);

// function Operaciones(num1, num2, num3, suma, resta, multi) {
//     var suma = num1 + num2 + num3;
//     var resta = num1 - num2 - num3;
//     var multi = num1 * num2 * num3;
//     alert("La suma es:" + suma);
//     alert("La resta es:" + resta);
//     alert("La multiplicaciones es:" + multi);
// }

// Operaciones(5,9,3);

//area triangulo

//Funcion área de triangulo con 
function AreaTriangulo () {
  var base = 2;
  var altura = 4;
  var resultado = (base * altura)/2;
  alert ("El área del triangulo es: " + resultado);
}

AreaTriangulo ();


//Función área de un circulo 
function AreaCirculo (pi,radio,resultado) {
  var pi = 3.1416;
  var radio = 5;
    var resultado = pi * (radio * radio);
    // resultado = resultado.toFixed(10)
alert ("El área del circulo es: " + resultado);
}

AreaCirculo ();


//Función área de un rectangulo 
function AreaRectangulo (base,altura,resultado){
  var resultado = base*altura;
  alert ("El área del rectangulo es: " + resultado);
}

AreaRectangulo(5,8);
