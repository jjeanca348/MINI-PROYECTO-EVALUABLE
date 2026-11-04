
const readline = require("readline/promises");

const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({
    input: input,
    output: output
});


// Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Metros a kilometros
function metrosAKilometros(metros) {
    return metros / 1000;
}

// Kilometros a metros
function kilometrosAMetros(kilometros) {
    return kilometros * 1000;
}

function validarNumero(entrada) {

    if (entrada.trim() === "") {
        return {
            valido: false,
            mensaje: "El campo esta vacio. Ingrese un valor."
        };
    }

    const numero = Number(entrada);

    if (!Number.isFinite(numero)) {
        return {
            valido: false,
            mensaje: "El valor ingresado no es un numero."
        };
    }

    return {
        valido: true,
        numero: numero
    };
}

function mostrarMenu() {
    console.log("elija una opcion");
    console.log("1. Celsius a Fahrenheit");
    console.log("2. Fahrenheit a Celsius");
    console.log("3. Metros a Kilometros");
    console.log("4. Kilometros a Metros");
    console.log("5. Salir");
}

async function solicitarInformacion(unidad, longitud) {

    while (true) {

        const entrada = await rl.question(
            `Ingrese el valor en ${unidad}: `
        );

        const validacion = validarNumero(entrada);

        if (!validacion.valido) {
            console.log(validacion.mensaje);
            continue;
        }

        if (longitud && validacion.numero < 0) {
            console.log("El valor ingresado no puede ser negativo.");
            continue;
        }

        return validacion.numero;
    }
}

function formatear(numero) {
    return Number(numero.toFixed(2)).toLocaleString("es-CO");
}

async function ejecutarConversor() {

    let opcion;
    do {
        mostrarMenu();

        opcion = (await rl.question(
            "Seleccione una opcion (1-5): "
        )).trim();

        let valor;
        let resultado;
        let unidadOrigen;
        let unidadDestino;
        let conversion;

        switch (opcion) {

            case "1":
                unidadOrigen = "grados Celsius";
                unidadDestino = "grados Fahrenheit";
                conversion = "Celsius a Fahrenheit";

                valor = await solicitarInformacion(unidadOrigen, false);
                resultado = celsiusToFahrenheit(valor);
                break;

            case "2":
                unidadOrigen = "grados Fahrenheit";
                unidadDestino = "grados Celsius";
                conversion = "Fahrenheit a Celsius";

                valor = await solicitarInformacion(unidadOrigen, false);
                resultado = fahrenheitToCelsius(valor);
                break;

            case "3":
                unidadOrigen = "metros";
                unidadDestino = "kilometros";
                conversion = "Metros a kilometros";

                valor = await solicitarInformacion(unidadOrigen, true);
                resultado = metrosAKilometros(valor);
                break;

            case "4":
                unidadOrigen = "kilometros";
                unidadDestino = "metros";
                conversion = "Kilometros a metros";

                valor = await solicitarInformacion(unidadOrigen, true);
                resultado = kilometrosAMetros(valor);
                break;

            case "5":
                console.log("\nGracias por utilizar el conversor.");
                console.log("Programa finalizado.");
                break;

            default:
                console.log("\nOpcion invalida. Intente nuevamente.");
        }

        if (["1", "2", "3", "4"].includes(opcion)) {

            console.log("RESULTADO");
            console.log(`Valor original: ${formatear(valor)} ${unidadOrigen}`);
            console.log(`Conversion: ${conversion}`);
            console.log(`Resultado: ${formatear(resultado)} ${unidadDestino}`);

        }

    } while (opcion !== "5");
    rl.close();
}

ejecutarConversor().catch((error) => {
    console.error("Ocurrio un error:", error.message);
    rl.close();
});
