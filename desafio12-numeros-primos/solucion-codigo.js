function numerosPrimosHastaEl(num) {
    let resultado = num >= 2 ? [2] : []
    for (let i = 3; i <= num; i += 2) {
        let esPrimo = true
        for (let j = 3; j <= i - 1; j += 2) {
            if (i % j == 0) {
                esPrimo = false
                break
            }
        }
        if (esPrimo) resultado.push(i)
    }
    console.log(resultado)
    return (resultado)
}

numerosPrimosHastaEl(1)     /* Imprime: [] */
numerosPrimosHastaEl(2)     /* Imprime: [ 2 ] */
numerosPrimosHastaEl(3)     /* Imprime: [ 2, 3 ] */
numerosPrimosHastaEl(5)     /* Imprime: [ 2, 3, 5 ] */
numerosPrimosHastaEl(11)    /* Imprime: [ 2, 3, 5, 7, 11 ] */
numerosPrimosHastaEl(13)    /* Imprime: [ 2, 3, 5, 7, 11, 13 ] */
numerosPrimosHastaEl(20)    /* Imprime: [ 2, 3, 5, 7, 11, 13, 17, 19 ] */
