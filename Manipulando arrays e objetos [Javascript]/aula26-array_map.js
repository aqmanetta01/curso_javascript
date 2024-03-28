
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

const converterObjeto = (objeto)=>{
    return {
        ...objeto,
        nomeIdade: `${objeto.nome} : ${objeto.idade}`
    }
}

const converterObjetoIdade = (objeto)=>{
    return objeto.idade;
}

const converterObjeto2 = (objeto)=>{
    return {
        idade: objeto.idade,
        nome: objeto.nome,
        nomeIdade: `${objeto.nome} : ${objeto.idade}`
    }
}

console.log(lista.map(converterObjetoIdade));
console.log(lista.map(converterObjeto));
console.log(lista.map(converterObjeto2));