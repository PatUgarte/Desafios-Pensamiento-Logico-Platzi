function serieNumericaPlatzi(valor1, valor2) {
    let resta = valor1 - valor2
    let suma = valor1 + valor2
    let resultado = parseInt("" + resta + suma)

    console.log(valor1 + " + " + valor2 + " = " + resultado)
    return resultado
}

serieNumericaPlatzi(5, 4)       // Imprime: 5 + 4 = 19
serieNumericaPlatzi(8, 2)       // Imprime: 8 + 2 = 610
serieNumericaPlatzi(10, 8)      // Imprime: 10 + 8 = 218
serieNumericaPlatzi(12, 9)      // Imprime: 12 + 9 = 321
serieNumericaPlatzi(18, 2)      // Imprime: 18 + 2 = 1620
serieNumericaPlatzi(21, 5)      // Imprime: 21 + 5 = 1626
serieNumericaPlatzi(12, 8)      // Imprime: 12 + 8 = 420
