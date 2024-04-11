class Produto {
    nome;
    preco;
    descricao;
    codigo;
    quantidadeDisponivel;

    constructor(nome,preco,descricao,codigo,quantidadeDisponivel) {
        Object.defineProperties(this,{
            nome: {
                get: () => nome,
                set: (value) => nome = value
            },
            preco: {
                get: () => preco,
                set: (value) => {
                    if (value <= 0){
                        throw new TypeError('Preço precisa ser um valor positivo');
                    }
                    preco = value;
                }
            },
            descricao: {
                get: () => descricao,
                set: (value) => descricao = value
            },
            codigo: {
                get: () => codigo,
                set: (value) => codigo = value
            },
            quantidadeDisponivel: {
                get: () => quantidadeDisponivel,
                set: (value) => {
                    if (value < 0){
                        throw new TypeError('A quantidade disponível em estoque não pode ser um valor negativo');
                    }
                    quantidadeDisponivel = value;
                }
            }
            
        });
    } 

    aumentarEstoque (value){
        if (value <=0){
            throw new TypeError('A quantidade a ser aumentada deve ser positiva.');
        }
        this.quantidadeDisponivel = this.quantidadeDisponivel + value;
    }

    diminuirEstoque (value){
        if (value <=0){
            throw new TypeError('A quantidade a ser diminuida deve ser positiva.');
        }
        this.quantidadeDisponivel = this.quantidadeDisponivel - value;
    }

    alterarPreco(value){
        if (value <=0){
            throw new TypeError('O novo preço deve ser um valor positivo.');
        }
        this.preco = value;
    }

}

class Smartphone  extends Produto {
    marca;
    modelo;
    sistemaOperacional;

    constructor(nome,preco,descricao,codigo,quantidadeDisponivel,marca,modelo, sistemaOperacional) {
        super(nome,preco,descricao,codigo,quantidadeDisponivel);
        Object.defineProperties(this,{
            marca: {
                get: () => marca,
                set: (value) => marca = value
            },
            modelo: {
                get: () => modelo,
                set: (value) => modelo = value
            },
            sistemaOperacional: {
                get: () => sistemaOperacional,
                set: (value) => sistemaOperacional = value
            }
            
        });
    }

    descritor () {
        return 'Nome : '+this.nome+'\nPreço : '+this.preco+' reais'+
        '\nDescrição : '+this.descricao+'\nCódigo : '+this.codigo+
        '\nQuantidade disponível em estoque : '+this.quantidadeDisponivel+
        '\nMarca : '+this.marca+'\nModelo : '+this.modelo+
        '\nSistema operacional : '+this.sistemaOperacional;
    }
}



const smartphone = new Smartphone('Smartphone1',1000,'Smartphone muito bom',1, 10, 'Sansung', 'A20','Android');
smartphone.alterarPreco(900);
smartphone.diminuirEstoque(5);
console.log(smartphone.descritor());