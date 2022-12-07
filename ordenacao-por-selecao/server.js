import lista from './lista.js'
import lista2 from './lista2.js'

var novoArr = []

// 28 < 3 - True
// '28' < '3' - False

// A função busca o maior valor do array e retorna o indice (posição) dele
function maiorArray(lista) {
    // Começa pelo indice 0 caso ocorroca a coindicêndia desse ser o maior
    var maior = lista[0]
    var maior_valor = 0
    var i = 1
    while(i < lista.length) {
        // Testa se esse é realmente o maior, se não, será o proximo arr[1], arr[2]... até o ultimo  
        if(maior < lista[i]) {
            maior = lista[i]
            maior_valor = i;
        }
        i++
    }
    return maior_valor;
}

//while(lista.length) {
//    var numero = maiorArray(lista);
//
//    // Adiciona o numero no novoArr e remove da lista
//    novoArr.push(lista[numero])
//    lista.splice(numero, 1)
//}

// A Lógica dessa função é bem parecida com o while comentado, a única diferença lógia é a recursão.
function ordena(array) {
    if(array.length) {
        var numero = maiorArray(array);
        
        novoArr.push(array[numero])
        array.splice(numero, 1)
        ordena(array)
    }
    if(array.length == 0) { 
        var reposta = novoArr;
        return reposta
    }
}



console.log(ordena(lista2))
//console.log(ordena(lista2))