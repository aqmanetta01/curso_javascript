const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: false, // se true => usuario.nome = 'novo nome'
    configurable: false, // se true => posso deletar o nome
    enumerable:true  // se true => será exibido no objeto
            
})

class Usuario {

    constructor(email,senha,nome) {
        Object.defineProperties(this,{
            nome: propriedadePadrao(nome),
            senha: propriedadePadrao(senha),
            email: propriedadePadrao(email)
        });
    }  
}

const usuario = new Usuario('emails', 'senhas', 'nomes');
usuario.nome = 'novo nome';

console.log(usuario);

