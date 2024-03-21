// Dado um número não negativo n, escreva uma
// função recursiva para calcular a soma dos
// números de 1 até n.

process.stdin.setEncoding('utf8');


function soma_recursiva (n){
    if (n < 0 || n > 100){
        throw new Error('Valor inválido, programa será encerrado.')
    }
    if (n === 0){
        return n;
    }
    return n + soma_recursiva (n-1); 
}

process.stdin.on('data', function(data) {
    try {
        console.log('soma: ', soma_recursiva(Number(data)));
    } catch (error) {
        console.log(error.message);
        process.stdin.pause();
    }
});
//console.log('resultado: ', soma_recursiva(100));
//console.log('resultado: ', soma_recursiva(99));
//console.log('resultado: ', soma_recursiva(101));
//console.log('resultado: ', soma_recursiva(1000));

