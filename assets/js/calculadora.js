let i = 0;
let val = 0;

while (i < 1) {
    let valores = parseInt(prompt("Ingrese cantidad de Pesos Uruguayos para transformar a Euros o Dólares"));

    if (valores < 0) {
        alert("¬--o.o--¬ Transformando a numero positivo ¬--o.o--¬");
        valores = valores * -1;
        i++;
    } else if (valores == 0) {
        alert("Ingrese un monto válido!");
    } else if (isNaN(valores)) {
        alert("Cáracter no válido!");
    } else {
        i++;
    }
    val = valores;
}


let opcion = prompt("Ingrese opcion para transformar Euros o Dólares", "Dólares")


function transformar() {
    let resultado = 0;
    let dolares = 42.50;
    let euro = 41.95;
    if (('dólares' == opcion) || ('Dólares' == opcion) || ('DóLARES' == opcion)) {
        resultado = val / dolares;
        document.write(`<div class="alert alert-success" role="alert">El valor del Dólar en Pesos Uruguayos es:$ ${resultado.toFixed(2)}</div>`);
        alert(`El valor en Dólares es:$ ${resultado.toFixed(2)}`);
    }
    else if (('euros' == opcion) || ('euros' == opcion) || ('EUROS' == opcion)) {
        resultado = val / euro;
        document.write(`<div class="alert alert-success" role="alert">El valor del Euro en Pesos Uruguayos es:$ ${resultado.toFixed(2)}</div>`);
        alert(`El valor en Euros es:$ ${resultado.toFixed(2)}`);
    }
    
}

transformar(opcion);
