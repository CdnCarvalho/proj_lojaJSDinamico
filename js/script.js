class Produto {
    constructor() {
        this.produtoId = 0
        this.produtoNome = ''
        this.produtoValor = 0
    }


    cadastrar() {
        alert('Produto cadastrado com sucesso')
    }


    excluir() {


        alert('Produto Excluido')
    }
}

const produto = new Produto()