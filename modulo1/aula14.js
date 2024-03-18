const mensagem = 'mensagem';
const mensagem2 = 'mensagem2';
const mensagem3 = 'mens agem mens agem mens agem'

console.log(mensagem.concat(mensagem2));
console.log(mensagem + mensagem2);
console.log(mensagem.substring(5,7));
console.log(mensagem3.split(' '));
console.log(mensagem.split(''));
console.log(mensagem3.length);
console.log('ES:',`mensagens: ${mensagem} ${mensagem2}`);
console.log('UP:', mensagem.toUpperCase());
mensagem4 = mensagem.toLowerCase();
console.log('DOWN:', mensagem.toLowerCase());
console.log('Replace:', mensagem.replace('mensagem', 'ola'));
