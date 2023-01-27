let arrayEjemplo = [3, 4, 5, 6, 7, 8, 9]

function generarSerie(array) {
    let serie = []
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i] * 9
        serie.push(elemento)
    }
    console.log(serie)
}

generarSerie(arrayEjemplo)