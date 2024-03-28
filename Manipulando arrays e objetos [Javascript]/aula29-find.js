const lista = [
    {
        nome: 'Jose',
        idade: 13,
        exibir: true
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Gabriela',
        idade: 25
    },
    {
        nome: 'Fernanda',
        idade: 65
    },
    {
        nome: 'André',
        idade: 69
    },
    {
        nome: 'Heitor',
        idade: 32
    },
    {
        nome: 'Gustavo',
        idade: 64
    },

    {
        nome: 'Sandra',
        idade: 33
    },
]

const buscarPessoa2 = (pessoa) => pessoa.nome === 'Gustavo';

const buscarPessoa = (pessoa) => pessoa.idade > 30;

const novaPessoa = lista.find(buscarPessoa);

const novaPessoa2 = lista.find(buscarPessoa2);


console.log(novaPessoa);

console.log(novaPessoa2);