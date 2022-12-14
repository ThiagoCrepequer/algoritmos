import lista2 from '../ordenacao-por-selecao/lista2.js'
import lista from '../ordenacao-por-selecao/lista.js'

function soma(array) {
    var total
    // Caso base
    if(array.length == 1) {
        return array[0]
    }
    // Caso recursivo
    // Nessa operação ele tira o primeiro elemento e prepara para ser somado ao que irá retornar da recursão.
    total = array.shift() + soma(array)
    return total
}

// Essa função conta quantos elementos tem em um array usando recursão
function conta(array) {
    var total
    // Caso base
    if(array.length == 1) {
        return 1
    }
    // Caso recursivo
    // Elimina o primeiro elemento do array e soma 1 ao valor que irá retornar
    array.shift()
    total = 1 + conta(array)
    return total
}

// Essa função diz qual o valor do maior elemento de um array
function valorMaior(array) {
    // Caso recursivo - Quando o array tiver somente um elemento, então esse será o maior
    if(array.length == 1) {
        return
    }
    // Se o primeiro elemento for maior que o segundo então ele é eliminado, em seguida chama a mesma função novamente
    if(array[0] > array[1]) {
        array.splice(1, 1)
        valorMaior(array)
    // Caso não seja maior, o primeiro elemento é eleminado e após isso a função é chamada novamente
    } else {
        array.shift()
        valorMaior(array)   
    }
    return array[0]
}