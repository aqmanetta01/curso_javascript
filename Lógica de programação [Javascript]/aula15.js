process.stdin.setEncoding('utf8');

console.log("digite algo:");

let maiorPalavra = '';
let resultado = [];

function contarCaracteres(valor){
    let retorno = '';
    const removeEnter = valor.replace('\n', '');
    const palavras = removeEnter.split(' ');
    for (let i = 0 ; i< palavras.length; i++){
        if ( i === 0){
            retorno = `${palavras[i].length}`
        } else {
            retorno = `${retorno}-${palavras[i].length}`
        }

        if (palavras[i].length >= maiorPalavra.length){
            maiorPalavra = palavras[i];
        }
    }


    return retorno;
}

process.stdin.on('data', function(data) {
    if (data == 0){
        for (let i = 0 ; i < resultado.length ; i++){
            console.log(resultado[i]);
        }
        console.log('Maior palavra:', maiorPalavra);

        process.stdin.pause();
    }
    else{
        console.log('Voce digitou:' + data);
        resultado.push(contarCaracteres(data));
        //console.log(contarCaracteres(data));
        console.log('Digite novamente');
    }
});

