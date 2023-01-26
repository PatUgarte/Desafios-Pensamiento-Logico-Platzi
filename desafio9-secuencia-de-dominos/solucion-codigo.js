const fichaInicial = [4, 5]

function fichasDeDomino(fichaInicial, cantidadFichas) {
    let serieDeFichas = [fichaInicial]
    for (let i = 0; i < cantidadFichas; i++) {
        let previoNumInferior = serieDeFichas[i][1]
        let nuevoNumSuperior = previoNumInferior
        let nuevoNumInferior

        let sumador
        if ((i + 1) % 2) sumador = 2
        else sumador = 1
        if (previoNumInferior + sumador > 6) nuevoNumInferior = previoNumInferior + sumador - 7
        else nuevoNumInferior = previoNumInferior + sumador

        const nuevaFicha = []
        nuevaFicha.push(nuevoNumSuperior, nuevoNumInferior)
        serieDeFichas.push(nuevaFicha)
    }

    console.log(serieDeFichas)
}

fichasDeDomino(fichaInicial, 10)

/* 
Imprime:
[   
  [ 4, 5 ],
  [ 5, 0 ],
  [ 0, 1 ],
  [ 1, 3 ],
  [ 3, 4 ],
  [ 4, 6 ],
  [ 6, 0 ],
  [ 0, 2 ],
  [ 2, 3 ],
  [ 3, 5 ],
  [ 5, 6 ]
]
*/
