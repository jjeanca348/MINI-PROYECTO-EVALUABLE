// Funcion con parametros

function saludarAprendiz(nombre){
    return `Hola, ${nombre}! Bienvenido al curso de JavaScript, `;
}

console.log(saludarAprendiz("Maria"));

function saludarAprendiz2(nombre){
    return `Hola, ${nombre}! Bienvenido al curso de JavaScript, `;
}
saludarAprendiz2("Carlos");

function sumar (num1, num2)  {
    return num1 + num2;
}

//console.log(`La suma de 5 y 3 es: ${sumar(5, 3)}`); // llamada a la funcion con los numeros 5 y 3

const resultadoSuma = sumar(5, 3);
console.log(`El resultado de la suma es: ${resultadoSuma}`);

// exorecion de funcion

const dividir = function (num1, num2) {
    if (num2 === 0) {
        return "Error: no se puede dividir por cero";
    }
    return num1 / num2;
}

console.log(`El resultado de la division es: ${dividir(10,2)}`); //llamada a la funcioin con los numeros 10 y 2

// arrow function

const multiplicar = (num1, num2) => num1 * num2;
console.log(`El resultado de la multiplicacion es: ${multiplicar(4, 5)}`); //llamada a la funcion

const impuesto = 0.19;
function calcularPrecioConImpuesto(precio){
    const valorImpuesto = precio * impuesto;
    return precio + valorImpuesto;
}
console.log(`El precio del impuesto es: ${calcularPrecioConImpuesto(100)}`)

//Ejercicios

//1. Calcular área rectangulo (base, altura)
const calcularArea = (base, altura) => base * altura
console.log(`El área del réctangulo es: ${calcularArea(20, 15)}`);

//2. Preguntar si un aprendiz es mayor de edad (edad)
function validarEdadAprendiz(edad){
    if (edad >= 18) {
        return "La edad del aprendiz es Valida";
    }
    else {
        return "La edad el aprendiz es invalida"
    }
}
//3. Convertir celsius a fahrenheit (celsius)
function celsiusToFahrenheit(valor) {
    let fahrenheit = (valor * 9 / 5) + 32;
    return `${valor}°C = ${fahrenheit}°F`
}
console.log(`El valor en fahrenheit es: ${celsiusToFahrenheit(60)}`);
//4. Calcular descuento de un producto (precio, porcentaje)
let precioFinal ;
function calcularDescuento(precio, porcentaje){
    let descuento = precio * porcentaje / 100;
   precioFinal = precio - descuento;
   return `El descuento del producto es: ${descuento}`
}
console.log(calcularDescuento(5000, 10))

console.log(`El precio final del producto es: ${precioFinal}`)
//5. Preguntar si un número es par (numero)
function validarNumeroPar(numero){
    if (numero % 2 === 0){
        return `El numero ${numero} es par`
    }
    else {
        return `El numero ${numero} no es par`
    }
}
console.log(validarNumeroPar(4))

// arrays 
const calificaciones = [85, 90, 78, 92, 88];
console.log(`La primera calificacion es: ${calificaciones[0]}`); //posicion 1
console.log(`La segunda primera calificacion es: ${calificaciones[1]}`);
console.log(`La tercera calificacion es: ${calificaciones[2]}`);
console.log(`La cuarta calificacion es: ${calificaciones[3]}`);
console.log(`La quinta calificacion es: ${calificaciones[4]}`);
console.log(`La última calificación es: ${calificaciones[calificaciones.length -1]}`); //Accediendo al último elemento de la lista

// recorre arreglos
const precios = [1000, 2000, 3000, 4000, 5000];

for (let i = 0; i < precios.length; i++) {
    console.log(precios[i]);
}

for (const precio of precios) {
    console.log(precio);
}

const productos = ["Laptop", "Telefono", "Tablet", "Monitor", "Teclado"];
productos.push("Mouse"); //agrega un nuevo producto del arreglo
console.log(productos);

productos.pop(); //elimina el ultimo producto del arreglo
console.log(productos);

//Objetos
const aprendiz = {
    nombre: "Ana",
    edad: 25,
    curso: "JavaScript",
    matriculado: true
}

console.log(`El nombre del aprendiz es: ${aprendiz.nombre}`);
console.log(`La edad del aprendiz es: ${aprendiz.edad}`)
console.log(`El curso del aprendiz es: ${aprendiz.curso}`)
console.log(`La matricula del aprendiz es: ${aprendiz.matriculado}`)

const products = [
    {nombre: "Laptop", precio: 1000 },
    {nombre: "Telefono", precio: 2000 },
    {nombre: "Tablet", precio: 3000 },
    {nombre: "Monitor", precio: 4000 }
];

console.log(products[0].nombre); //accede al nombre del primer producto
console.log(products[1].precio); //accede al precio del segundo producto

//Destructuracion de objetos: traer una propiedad y asignarsela a una variable
const aprendiz2 = {
    nombre: "Luis",
    edad: 30,
    curso: "JavaScript",
    matriculado: false
}
const {nombre, edad, curso, matriculado} = aprendiz2;
console.log(nombre);
console.log(edad);
console.log(curso);
console.log(matriculado);

//Destructurar arreglos
const numeros = [100, 500, 300, 200];
const [primerNumero, segundoNumero, tercerNumero, cuartoNumero] = numeros;
console.log(primerNumero);
console.log(segundoNumero);
console.log(tercerNumero);
console.log(cuartoNumero);

//Spreas operator / Operador de propagación
const colores = ["Rojo", "Verde", "Azul"];
const copiaColores = [...colores]; //Crea una copia del arreglo de colores
copiaColores.push("Amarillo"); //Agrega un color a la copia del arreglo
console.log(colores);
console.log(copiaColores);

const tarea = {
    titulo: "Aprender JavaScript",
    descripcion: "Completar el curso de JavaScript en 30 días",
    completado: false,
}
const actualizaTarea = {...tarea, completado: true}; //Crea una copia del objeto tarea
console.log(tarea); //Muestra el objeto original
console.log(actualizaTarea); //Muestra la copia del objeto con la actualización
console.log(actualizaTarea.completado); //Muestra el valor de la propiedad completado de la copia del objeto

// METODOS DE PROCESAMIENTO DE COLECCIONES

//METODO MAP
const precios3 = [1000, 2000, 3000, 4000, 5000];
const preciosConImpuesto = precios3.map(precio => precio * 1.19); // Aplica un impuesto del 19% a cada preci
console.log(preciosConImpuesto); // Muestra el arreglo con los precios con impuesto

// METODO FILTER
const edadesDos = [15, 22, 18, 30, 25, 17];
const mayoresDeEdad = edadesDos.filter(edad => edad >= 18); // Filtra las edades mayores o iguales a 18
console.log(mayoresDeEdad); // Muestra el arreglo con las edades mayores de edad

const productosDos = [
    { nombre: "Laptop", precio: 10000 },
    { nombre: "Teléfono", precio: 5000 },
    { nombre: "Tablet", precio: 3000 },
    { nombre: "Monitor", precio: 2000 },
];
const productosCaros = productosDos.filter(producto => producto.precio > 4000); // Filtra los productos con precio mayor a 4000
console.log(productosCaros); // Muestra el arreglo con los productos caros

// METODO FIND
const productosTres = [
    { nombre: "Laptop", precio: 10000 },
    { nombre: "Teléfono", precio: 5000 },
    { nombre: "Tablet", precio: 3000 },
    { nombre: "Monitor", precio: 2000 },
];
const encontrado = productosTres.find(producto => producto.nombre === "Tablet"); // Busca el producto con nombre "Tablet"
console.log(encontrado); // Muestra el producto encontrado

// metodo SOME EVERY
const notas = [85, 90, 78, 92, 88];
const hayAprobados = notas.some(nota => nota >= 60);
console.log(hayAprobados); // Muestra true si hay al menos una nota aprobatoria

// metodo EVERY
const todasAprobadas = notas.every(nota => nota >= 60);
console.log(todasAprobadas); // Muestra true si todas las notas son aprobatorias


// METODO REDUCE
const ventasDos = [1000, 2000, 3000, 4000, 5000];
const totalVentas = ventasDos.reduce((acumulador, venta) => acumulador + venta, 0); // Suma todas las ventas
console.log(totalVentas); // Muestra el total de ventas

// metodo sort
const numerosDos = [5, 2, 9, 1, 5, 6];
const numerosOrdenados = numerosDos.sort((a, b) => a - b); // Ordena los números de menor a mayor
console.log(numerosOrdenados); // Muestra el arreglo con los números ordenados

const empleados = [
    {id: 3, nombre: "Ana", salario: 3000, estado:"Activo"},
    {id: 1, nombre: "Luis", salario: 5000, estado:"Inactivo"},
    {id: 2, nombre: "Carlos", salario: 4000, estado:"Activo" },
    {id: 4, nombre: "Maria", salario: 6000, estado:"Inactivo"},
];

//1. obtener un arreglo con solo los nombres usando map
//2. obtener empleados activos utilizando filter
//3. encontrar el empleado  con id: 3 mediante find
//4. determinar si existe un salario superior a 7000 nediante some
//5. Verificar si todos los salarios son mayores a cero usando every
//6. Calcular la suma de los salarios usando reduce
//7. Ordenar los empleados por salario de menor a mayor usando sort

// 1.
const nombres = empleados.map(empleados => empleados.nombre);
console.log(nombres);

// 2.
const empleadosActivos = empleados.filter(empleado => empleado.estado === "Activo");
console.log(empleadosActivos);

// 3.
const empleadoConId = empleados.find(empleados => empleados.id === 3);
console.log(empleadoConId);

// 4.
const salario = empleados.some(empleados => empleados.salario >= 7000);
console.log(salario);

// 5.
const salario2 = empleados.every(empleados => empleados.salario > 0);
console.log(salario2);

// 6.
const sumaSalarios = empleados.reduce((acumulador, salario) => acumulador + salario.salario, 0);
console.log(sumaSalarios);

// 7.
const salarioOrdenado = empleados.sort((salarios, orden) => salarios.salario - orden.salario);
console.log(salarioOrdenado); 





