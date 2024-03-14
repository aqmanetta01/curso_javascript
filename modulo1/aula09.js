
function soma(item1, item2){
    return item1 + item2;
}

function soma3 (item1,item2,item3){
    return soma(soma(item1,item2),item3);
}

function diminuir(item1, item2){
    return item1 - item2;
}

console.log("SOMA:", soma(5,6,7));

console.log("DIMINUIR:", diminuir(643,64373));