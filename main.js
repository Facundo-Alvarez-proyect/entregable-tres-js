// Calculadora del valor total de un alquiler

function calculoAlquiler (valorMensual, duracionContrato) {
    let resultado = 0
    resultado = valorMensual*duracionContrato
    return resultado 
}

function calculoIngreso (valorMensual, duracionContrato, porcentajeInmobiliaria){
    let resultadoGastos = 0
    resultadoGastos = valorMensual*duracionContrato*porcentajeInmobiliaria
    return resultadoGastos
}

function calculoComision (gastosDeIngreso) {
    let total = 0
    total = gastosDeIngreso * 0.5
    return total
}

const saludar = (nombreInquilino) => {
    return "Hola " + nombreInquilino +"! Vamos a calcular el valor total de tu contrato de alquiler y los gastos de ingreso"
}



let nombreInquilino = prompt("Nombre completo del inquilino: ")

alert(saludar(nombreInquilino))

let valorMensual = Number(prompt("Valor mensual del alquiler sin puntos ni signos: "))

while(isNaN(valorMensual) || valorMensual <=0){
    alert("Ingresa un numero valido")
    valorMensual = Number(prompt("Valor mensual del alquiler sin puntos ni signos: "))
}

let duracionContrato = Number(prompt("Cuantos meses dura tu contrato?: "))

while (isNaN(duracionContrato) || duracionContrato <=0){
    alert("Ingresa cantidad de meses valida")
    duracionContrato = Number(prompt("Valor mensual del alquiler sin puntos ni signos: "))
}

//Porcentaje de las inmobiliarias de gasto de ingreso
const porcentajeInmobiliaria = 0.04

let ingreso = calculoIngreso(valorMensual, duracionContrato, porcentajeInmobiliaria)
let comisionInmobiliaria = calculoComision(ingreso)


console.log("El valor total de tu contrato es de " + "$" + calculoAlquiler(valorMensual, duracionContrato))
console.log("Los gastos de ingreso para tu alquiler son de " + "$" + calculoIngreso(valorMensual, duracionContrato, porcentajeInmobiliaria))
console.log("La comision por parte de la inmobiliaria es de " + "$" + comisionInmobiliaria)

if(valorMensual<=500000) { 
    console.log("Tu alquiler tiene un valor bajo") 
    } else if (valorMensual <=700000) { 
        console.log("El valor de tu alquiler es un valor medio") 
    } 
    else { 
        console.log("Tu alquiler tiene un valor elevado") 
    }