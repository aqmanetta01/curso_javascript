const lista = [
    {
        nome: 'Jose',
        idade: 13
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

for(let i = 0;i <lista.length; i++){
    console.log(lista[i]);
}

let soma = 0;

const somaIdade = (objeto) => {
    soma+= objeto.idade;
}

lista.forEach(somaIdade);

console.log('Soma: ', soma);