const RENDIMENTO = 12;


function gastoCombustivel(tempoGasto, velocidadeMedia){
    const distancia = tempoGasto * velocidadeMedia;
    const consumo = distancia / RENDIMENTO;
    return consumo.toFixed(2);
}

console.log(gastoCombustivel(10,85));
console.log(gastoCombustivel(2,92));
console.log(gastoCombustivel(22,67));




