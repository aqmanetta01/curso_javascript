const idade = 12;

const exibirIdade = () => {
    const idade = 23;
    console.log(idade);
}

const exibirExibirIdade = () => {
    exibirIdade();
    console.log(idade);
}

console.log(idade); //escopo global

exibirIdade(); //escopo local

exibirExibirIdade(); 