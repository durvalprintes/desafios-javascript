/*
 * Soma Combinacional
 */
/* ENUNCIADO
 * Dado um conjunto de dados e um número alvo, você deve encontrar todas as combinações exclusivas
 * entre valores do conjunto que resultem na soma do número alvo.
 *
 * Observações:
 *
 * Todos os números, inclusive o alvo, serão inteiros positivos
 * O resultado não deve obter combinações com valores repetidos. Exemplo:
 *
 *  combinate([2, 3, 5], 8) retornando
 *
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,2,3],
 *       [3,3,2]
 *       [3,5]
 *       [5,3]
 *   ]
 *
 * Os valores do conjunto de dados podem se repetir entre si, como por exemplo:
 *
 * combinate([2, 3, 5], 8) retornando [2,2,2,2] e [2,3,3] como conjuntos que resultam na soma alvo.
 *
 *
 * Seguem mais alguns exemplos do retorno esperado:
 *
 *  combinate([2, 3, 5], 8) deve retornar
 *
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,5]
 *   ]
 *
 *    outro exemplo:
 *
 *    combinate([2, 3, 6, 7], 7) retorna
 *
 *    [
 *       [2, 2, 3],
 *       [7]
 *    ]
 */

const combinate = (set, target) => {
  let result, data
  result = []
  for (
    let index = 0, factor = 1;
    index < set.length;
    index = factor == Math.floor(target / set[index]) ? index + 1 : index,
      factor = factor <= Math.floor(target / set[index]) ? factor + 1 : 1
  ) {
    for (const next of set) {
      if (target - set[index] * factor >= 0 && (target - set[index] * factor) % next == 0) {
        data = [
          ...Array(factor).fill(set[index]),
          ...Array(Math.floor((target - set[index] * factor) / next)).fill(next),
        ].sort()
        if (!result.find((e) => JSON.stringify(e) === JSON.stringify(data))) {
          result.push(data)
        }
      }
    }
  }
  return result
}

module.exports = combinate
