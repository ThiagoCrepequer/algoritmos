import array2 from './nomes.js'

// Algoritmo de busca mais eficiente
// A teoria é chutar sempre a metade do intervalo possível, assim podemos chegar ao valor em até log2(n), ou nesse caso 7 tentativas
// sendo n a quantidade de dados da lista. O único problema desse algoritmo é que ele só funciona em listas ordenadas.  
function pesquisa(buscando, array2) {
    var inicio = 0
    var final = array2.length - 1
    
    while(final >= inicio) {
        var meio = Math.round((final + inicio) / 2) 
        // Testando se o valor buscando é igual ao do teste, se for retorna a posição
        if(buscando === array2[meio][0]) {
            return meio;
        // Teste se o valor buscado é maior que o teste, se for então o intervalo é do meio pra um valor acima
        } else if(buscando > array2[meio][0]) {
            inicio = meio + 1;
            // Se não for acima testa se é abaixo, se for então o intervalo é do meio para um valor abaixo.
        } else if(buscando < array2[meio][0]) {
            final = meio - 1;
        } else {
            // No caso de passar um valor que não está na lista, ele irá retornar 'undefined'
            return
        }
    }        
}
// Laço de repetição apenas para testar todos os valores da lista e provar que todos estão funcionando corretamente
// Para usar o algoritmo basta chamar a função pesquisa({buscando}, {lista}), o valor que está buscando e a lista
var n = array2[0][0]
while(array2[array2.length - 1][0] >= n) {
    var posicao = pesquisa(n.toString(), array2);
    console.log('O valor ' + n + ' está na posição ' + posicao + ' com o valor de ' + array2[posicao][1])
    n++
}
// Valor que retorna undefined
console.log(pesquisa('-10', array2))