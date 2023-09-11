const numeroCartao = '1111222233334444';

let arrayNumeros = [];

arrayNumeros.push(numeroCartao.slice(0,4));
arrayNumeros.push(numeroCartao.slice(-4))

arrayNumeros = arrayNumeros[1].padStart(16,arrayNumeros[0] + '********');


console.log(arrayNumeros)
