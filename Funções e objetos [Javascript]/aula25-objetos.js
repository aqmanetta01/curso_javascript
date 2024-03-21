const José = {
    idade: 35,
    peso: 70,
    nome: 'José',
    nacionalidade: 'Brasileiro',
    endereco: 'Rua qualquer',
    numero: 432,
    pais: 'Brasil',
    temFilhos: true,
}

const exibirInformacoes = (pessoa, qualInformacao) => {
    console.log('Dados: ',pessoa);
    console.log(`Peso do ${pessoa.nome}:`, pessoa.peso);
    console.log(`Idade do ${pessoa.nome}:`, pessoa.idade);
    console.log(`Endereço do ${pessoa.nome}:`, pessoa.endereco);

}

const exibirInformacaoEspecifica = (pessoa, qualInformacao) => {
    console.log(`${qualInformacao} do(a) ${pessoa.nome}:`, pessoa[qualInformacao]);
}

exibirInformacoes(José);

exibirInformacaoEspecifica(José, 'peso');
exibirInformacaoEspecifica(José, 'pais');