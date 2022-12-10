/*
# Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
*/

const arrayNumbers = [0, 1, 2, ]
const arrayStrings = ['item 1', 'item 2', 'item 3']
const arrayMix = [0, 'item 2 indice 1', true]

const addNumber = arrayNumbers.shift('number')
console.log(addNumber)
console.table(arrayNumbers)

const removerUltimo = arrayStrings.pop()
console.log(removerUltimo)


console.log(arrayMix)
console.log(arrayMix.splice(1, 1))
console.log(arrayMix)