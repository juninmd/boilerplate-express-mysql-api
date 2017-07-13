const clienteRep = require('../repository/clienteRep');

module.exports = {
    validar: (nome) => {
        return new Promise((resolve, reject) => {
            if (nome != 'murilo') {
                return reject({
                    statusCode: 400,
                    message: {
                        userMessage: 'O nome do cliente é diferente de murilo',
                        developerMessage: 'nome != "murilo"'
                    }
                });
            }
            clienteRep.inserir(nome)
                .then(q => {
                    return resolve({ sucesso: 'ok' });
                })
                .catch(err => {
                    return reject({ erro: 'erro' });
                });
        });
    }
}