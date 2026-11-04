const salario = 2500000;
const ingresosExtra = 500000;

const totalSalario = salario + ingresosExtra;

const arriendo = 800000;
const servicios = 200000;
const transporte = 150000;
const alimentacion = 300000;

const totalGastos = arriendo + servicios + transporte + alimentacion;

const saldoFinal = totalSalario - totalGastos;

function evaluarPresupuesto(saldoFinal) {

    if (saldoFinal < 0) {
        return "El presupuesto es positivo. Puedes ahorrar o invertir."
    } else if (saldoFinal === 0) {
        return "El presupuesto es equilibrado. No hay saldo disponible"
    } else {
        return "El presupuesto es negativo. Debes reducir gastos o aumentar ingresos."
    }
}

//calcular el porcentaje de ahorro en relacion con el total de los ingresos

function calcularPorcentajeAhorro(saldoFinal, totalSalario) {
    
    if (totalSalario === 0) {
        return 0; //Evitar division por cero
    }
    const porcentajeAhorro = (saldoFinal / totalSalario) * 100;
    return porcentajeAhorro;
}

console.log("=== presupuesto semanal ===");
console.log(`Total de ingresos: ${totalSalario}`);
console.log(`Total de gastos: ${totalGastos}`);
console.log(`Saldo final: ${saldoFinal}`);
console.log(evaluarPresupuesto(saldoFinal));
const porcentajeAhorro = calcularPorcentajeAhorro(saldoFinal, totalSalario);
console.log(`Porcentaje de ahorro: ${porcentajeAhorro.toFixed(2)}%`);

//validar q los ingresos no sean negativos y q sean validos
//q se incorpore un gasto adicional
//calcular el saldo anual estimado
//q se genere una alerta cuando los gastod superen el 80% de los ingresos