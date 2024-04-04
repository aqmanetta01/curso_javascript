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


const resultadoSome = lista.some((objeto) => objeto.idade > 50);

console.log('resultadoSome:', resultadoSome);

const resultadoEvery = lista.every((objeto) => objeto.idade > 18);

console.log('resultadoEvery:', resultadoEvery);
