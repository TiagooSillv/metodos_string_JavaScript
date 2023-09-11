let celular = 95221599;
celular = celular.toString()
let numerosFormatado = '';
let arrayDeNumeros = [];

let quantidadeDeNumeros = celular.length;

const verificadorDeNumeros = {
    semDddESemONove: 8,
    comDddESemONove: 10,
    comDddENove: 11,
    comNoveSemDdd: 9,
}

if(quantidadeDeNumeros == verificadorDeNumeros.comDddENove){
    arrayDeNumeros.push(celular.slice(0,2))
    arrayDeNumeros.push(celular.slice(2,3))
    arrayDeNumeros.push(celular.slice(3,7))
    arrayDeNumeros.push(celular.slice(7))
    
    numerosFormatado = '(' + arrayDeNumeros[0] + ')' + arrayDeNumeros [1] + ' ' + arrayDeNumeros[2] + '-' + arrayDeNumeros[3];
}
if(quantidadeDeNumeros == verificadorDeNumeros.comDddESemONove){
    arrayDeNumeros.push(celular.slice(0,2)) // peguei o ddd
    // arrayDeNumeros.push(celular.slice(2,3)) 
    arrayDeNumeros.push(celular.slice(2,6))
    arrayDeNumeros.push(celular.slice(6))
    
    numerosFormatado = '(' + arrayDeNumeros[0] + ')' + '9' + ' ' + arrayDeNumeros[1] + '-' + arrayDeNumeros[2];

}
if(quantidadeDeNumeros == verificadorDeNumeros.comNoveSemDdd){
    // arrayDeNumeros.push(celular.slice(0,2)) // peguei o ddd
    arrayDeNumeros.push(celular.slice(0,1)) 
    arrayDeNumeros.push(celular.slice(1,5))
    arrayDeNumeros.push(celular.slice(5))
    
    numerosFormatado = arrayDeNumeros[0] + ' ' + arrayDeNumeros[1] + '-' + arrayDeNumeros[2];
}
if(quantidadeDeNumeros == verificadorDeNumeros.semDddESemONove){
    arrayDeNumeros.push(celular.slice(0,5))
    arrayDeNumeros.push(celular.slice(5))
    
    numerosFormatado = '9 '+ arrayDeNumeros[0] + '-' + arrayDeNumeros[1];
}
console.log(numerosFormatado)