
class Usuario {
    email;
    senha;
    nome;

    validarSenha(email,senha) {
        return email + senha === this.nome;
    }

    constructor (email,senha,nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }

}

class Administrador extends Usuario{
    permissões;

    validarSenha(email,senha) {
        return this.email === email && this.senha === senha;
    }

    constructor(email,senha,nome,permissões){
        super(email,senha,nome);
        this.permissões = permissões;
    }

}

class Comprador extends Usuario{
    compras;

    constructor(email,senha,nome,compras){
        super(email,senha,nome);
        this.compras = compras;
    }
}

const comprador1 = new Comprador('comprador1@exemplo.com', 'senhafacil', 'Comprador1',[1, 6]);

console.log(comprador1);

const usuario = new Usuario('email', 'senha', 'nome');

console.log(usuario.validarSenha('email','senha'));

const admin1 = new Administrador('admin1@exemplo.com', 'senhadifícil', 'Admin1',[1,2,3,4,5,6]);

console.log(admin1.validarSenha('admin1@exemplo.com','senhadifícil'));
