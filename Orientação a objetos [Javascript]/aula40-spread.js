const qualquer = {
    abc: 'abc',
    flkd: 'flkd',
    fjdl: 'fjdl',
    afna: 'afna'
}

const novoQualquer = {
    ...qualquer,
    final: 'FINAL'
}

console.log(qualquer);
console.log(novoQualquer);


const lista = [54, 643, 564, 345];
const lista2 = [143, 235, 796, 369];

console.log(lista);
console.log(lista2);

const listaJunta = [
    ...lista, 
    ...lista2
];

console.log(listaJunta);