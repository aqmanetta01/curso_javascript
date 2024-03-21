
function calcular(valor){
    if (valor === 0){
        throw new Error('Não pode ser 0')
    }
    return 2 / valor;
}

try {
    const resultado = calcular(0);
    console.log('resultado: ', resultado);

} catch (error) {
    console.log(error.message);
} finally {
    console.log('Chegou ao finally');
}

