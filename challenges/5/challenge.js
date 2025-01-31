/*
 * Paginação
 */

/* ENUNCIADO
 *
 *  Você deve escrever uma função de paginação de listas que receba o número da página e o número de itens por página como parâmetros
 *  e retorne no seguinte formato:
 * 
 * 
 *  {
        currentPage: 1,
        perPage: 10,
        total: 20,
        totalPages: 2,
        data: [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur (...)"
            },
            [...]
        ]
    }
 */

const posts = require('./posts.json')

const paginate = (collection, pageNumber = 1, itemsPerPage = 10) => {
  if (typeof collection == 'string') {
    throw Error('Expect array and got string')
  }
  return {
    currentPage: pageNumber,
    perPage: itemsPerPage,
    total: collection.length,
    totalPages: Math.ceil(collection.length / itemsPerPage),
    data: collection.slice(itemsPerPage * (pageNumber - 1), itemsPerPage),
  }
}

module.exports = paginate
