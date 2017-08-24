
module.exports = {
    validar: (nome) => {
        return new Promise((resolve, reject) => {
            if (nome != 'murilo') {
                return reject({
                    statusCode: 500,
                    message: {
                        userMessage: 'This man doesn`t have acess',
                        developerMessage: 'He is not on the list of Administrators'
                    }
                });
            }
            clienteRep.inserir(nome)
                .then(q => resolve({ sucesso: 'ok' }))
                .catch(err => reject({ erro: 'erro' }));
        });
    }
}