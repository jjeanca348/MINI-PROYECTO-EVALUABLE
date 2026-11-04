console.log("Hello world");
console.log("Estoy aprendiendo JavaScript");

//variables y tipos de datos
let edad = 25;
const nombre = "Juan";

console.log(nombre);
console.log(edad);

//diferencia entre let y const
//se utiliza para reasignar
let ciudad = "Madrid";
ciudad = "Barcelona";
//const no permite reasignar
const pais = "España";

//tipos de datos
const nombre_usuario = "Juan"; //String
const edad_usuario = 30; //Number
const esEstudiante = true; //Boolean
let temporada; //Undefiend
const direccion = null; //Null es para represemtar la ausencia de un valor

console.log(typeof nombre_usuario);
console.log(typeof edad);
console.log(typeof esEstudiante);
console.log(typeof temporada);
console.log(typeof direccion); //"object"(esto es un comportamiento conocido de JavaScript)

//La diferencia entre null y undefiend
//Undefiend significa que una variable a sido declareada pero aun no se le asigna un valor
//null es un valor asignado a una variable para indicar que no tiene ningun valor

const nombreCliente = "Maria";
const edadCliente = 25;

const mensaje = `El nombre del cliente es ${nombreCliente} y su edad es ${edadCliente}`;
console.log(mensaje);

const a = 10;
const b = 3;

console.log(a + b); //Suma
console.log(a - b); //Resta
console.log(a * b); //Multiplicacion
console.log(a / b); //Division
console.log(a % b); //Modulo: residuo de la division

//Operadores de comparacion
console.log(a > b); //Mayor que
console.log(a < b); //Menor que
console.log(a >= b); //Mayor o igual que
console.log(a <= b); //Menor o igual que
console.log(a === b); //Igualdad estricta
console.log(a == b); //Igualdad
console.log(a !== b); //Desigualdad

//Operadores logicos
const edadPersona = 20;
const tieneDocumento = true;

const puedeIngresar = edadPersona >= 18 && tieneDocumento; //true si la persona es mayor de edad y tiene documento
console.log(puedeIngresar); //true

const esMayorDeEdad = edadPersona >= 18 || tieneDocumento; //true si la persona es mayor de edad o tiene documento
console.log(esMayorDeEdad); //true

const noPuedeIngresar = !puedeIngresar; //Navegacion: true si la persona no puede ingresar
console.log(noPuedeIngresar); //true

//Conversion de datos
const precio = "100";
const cantidad = "5";

const total = Number(precio) * Number(cantidad); //conversion de datos string a number
console.log(total); //true

//Desarrollar un programa que calcule el salario semanal de un trabajador
//Considerando horas trabajadas y tarifa por hora. Agreagar una bonificacion de 10%
//Cuando el salario supere $500.000



//condicionales multiples
const calificacion = 85;

if(calificacion >= 90){
    console.log("Exelente");
}else if (calificacion>= 80){
    console.log("Muy bien");
}else if (calificacion >= 70){
    console.log("Bien");
}else if (calificacion >= 60){
    console.log("Suficiente");
} else {
    console.log("Insuficiente");
}

//condicionales compuestas
const edad3 = 25;
const tieneEntrada = true;

if (edad3 >= 18 && tieneEntrada){
    console.log("puedes ingresar al evento");
} else {
    console.log("no puedes ingresar al envento");
}

const cliente = "Andres"
const compra = 120000;

if (compra < 100000){
    console.log("no tiene descuento");
    console.log(compra);
}else if (compra >= 100000 && compra < 300000){
    let descuento = (compra * 5)/100;
    console.log("el valor de la compra  es de");
    console.log(compra - descuento);
}else if (compra >= 300000 && compra < 500000){
    let descuento = (compra * 10)/100;
    console.log("el valor de la compra  es de");
    console.log(compra - descuento);
}else if (compra > 500000){
    let descuento = (compra * 15)/100;
    console.log("el valor de la compra es de");
    console.log(compra - descuento);
}

// estructuras de control de flujo
//switch
const dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    default:
        console.log("Dia no valido");
        break;
    }

//Ciclo for
for (let i = 1; i < 5; i++) {
    console.log(`Numero ${i}`); // imprime los numeros del 1 al 5
}

//While
let j = 1;
while (j <= 5) {
    console.log(`Numero ${j}`); // imprime los numeros del 1 al 5
    j++;
}

//Do while
let k = 1;
do {
    console.log(`Numero ${k}`); // imprime los numeros del 1 al 5
    k++;
} while (k <= 5);

//imprimir la tabla de multiplicar de un nuemro
//calcular la suma de los numeros del 1 al 100
//simular un ahorro mensual durante 12 meses y mostar el acumulado de cada mes

for (let i = 3; i <= 30; i+=3) {
    console.log(`Tabla del 3`);
    console.log(i);
}

let m = 0;
let n = 0;
while (m <= 100) {
    n = n + m;
    m++;
}
console.log(`suma del 1 al 100 ${n}`);

let mes = 1;
let acumulado_mes = 0;
do {
    acumulado_mes = acumulado_mes + 10000;
    mes++;
} while (mes <= 12);
console.log(`El ahorro acumulado del mes es ${acumulado_mes}`);

//funciones y reutilizacion de codigo
function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar("juan")); //llamada a la funcion con el nombre "juan"

function calcularIva(precio) {
    return precio * 0.19; //calcula el iva (19%) del valor total
}

function calcularTotalConIva(precio) {
    const iva = calcularIva(precio);
    return precio + iva; //calcula el total con iva
}

function calcularTotal(precio, cantidad) {
    return precio * cantidad; //calcula el total sin iva
}

function calcularTotalIva(precio, cantidad) {
    const total = calcularTotal(precio, cantidad);
    return calcularTotalConIva(total);
}

console.log(`El total con iva es: $${calcularTotalConIva(100000)}`);
console.log(`El total de la compra es: $${calcularTotal(100000, 3)}`);
console.log(`El total de la compra con iva es: $${calcularTotalIva(100000, 3)}`);

//arrow functions
const calcularIva =(precio) => precio * 0.19; //calcula el iva (19%) del valor total
console.log(`El iva de $100000 es: $${calcularIva(100000)}`); //llamada a la funcion con el precio 100000

//alcance de variables
let variableGlobal = "Soy una variable global";

function mostrarVariableGlobal() {
    let variableLocal = "Soy una variable local dentro de la funcion";
    console.log(variableGlobal); //accede a la variable global dentro de la funcion
}

mostrarVariableGlobal();

function mostrarVaribleBloque() {
    if (true) {
        let variableBloque = "Soy una variable de bloque dentro del if";
        console.log(variableBloque) //accede a la variable de bloque dentro del if
    }
    //console.log(variableBloque); //Esto genera un error pq variableBloque no es accesible fuera del bloque if
}

mostrarVVariableBloque();

function validarMonto(monto) {
    
    return typeof monto === "number" && monto > 0; //retorna true si el monto es un numero y mayor a 0
}
console.log(validarMonto(100)); //true
console.log(validarMonto(-50)); //false