

function numerosImpares(valor){
    let contar = 0;
    let novoValor = valor;

    while(contar< 6){
        if (novoValor % 2 !== 0){
            console.log(novoValor);
            contar++;
        }

        novoValor++;
    }

}

numerosImpares(8);
numerosImpares(9);

