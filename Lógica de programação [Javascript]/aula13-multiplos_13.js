function multiplos13(x,y){
    soma = 0;
    for (x;x<=y;x++){
        if (x % 13 !== 0){
            soma = soma + x;
        }
    }
    return soma;

}

console.log(multiplos13(100, 200));