/* # Exercício 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 
*/

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const arrayNumbers = [0, 1, 2]
const arrayStrings = ['item 1', 'item 2', 'item 3']
const arrayMix = [0, 'item 2 indice 1', true]


const frase1 = "Array tem total de items : "
console.log(arrayNumbers, arrayStrings, arrayMix)
console.log(arrayNumbers.length)
console.log(arrayStrings.length)
console.log(arrayMix.length)



console.log('Primeiro item do arrayNumbers e ' + arrayNumbers[0])
console.log('O segundo item do arrayStrings e  ' + arrayStrings[1])
console.log('O Terceiro item do arrayMix e : ' + arrayMix[2])

const includes0 = arrayNumbers.includes(0)
console.log('o arrayNumbers includes o 0 = ' + includes0)

const includesItem2 = arrayStrings.includes('item 2')
console.log('o arrayStrings includes o item 2 = ' + includesItem2)



const includesItem3 = arrayMix.includes(false)
console.log('o arrayMix includes  FALSE = ' + includesItem3)

// const arrayString = []
// arrayString.push(minhaString)
// console.table(arrayString)
// console.log(arrayString.length)
// console.log(arrayString[0])