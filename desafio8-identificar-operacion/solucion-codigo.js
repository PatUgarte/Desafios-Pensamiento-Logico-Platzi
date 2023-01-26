function generarSerie(valor1, valor2) {
    let potencia = Math.pow(valor1, valor1)
    let producto = valor1 * valor2
    let resultado = potencia + producto

    console.log(valor1 + " + " + valor2 + " = " + resultado)
}

generarSerie(3, 2)
generarSerie(4, 8)
generarSerie(5, 3)
generarSerie(6, 3)
