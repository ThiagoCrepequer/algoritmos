import lista from '../ordenacao-por-selecao/lista.js'
var novaLista = []
// Incompleto

function quicksort(lista) {
    var listaMaiores = []
    var listaMenores = []
    
    if(lista.length < 2) {
        return lista[0]
    }

    var pivo = lista.shift()
    var i = 0
    while(lista.length - 1 > i) {
        if(lista[i] > pivo) {
            listaMaiores.push(lista[i])
        }
        if(lista[i] <= pivo) {
            listaMenores.push(lista[i])
        }
        i++
    }
}

quicksort(lista)