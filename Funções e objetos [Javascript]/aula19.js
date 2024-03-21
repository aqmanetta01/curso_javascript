

function calcular(){
    console.log('calcular');
    console.log(arguments);
}


const calcular2 = function(){
    console.log('calcular 2');
    return 2;
}

const calcular3 = (funcao) => { //arrow function
    console.log('calcular 3');
    return funcao();

}


calcular(1,2,3,4);
console.log('resultado: ',calcular2());
const x = calcular3(calcular2);
console.log('resultado: ', x);
