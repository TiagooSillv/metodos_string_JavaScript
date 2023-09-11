const cpf = "011.022.033-44";
listaDeNumeros = [];
let cpfFormatado = '';
listaDeNumeros.push(cpf.slice(0,3));
listaDeNumeros.push(cpf.slice(4,7));
listaDeNumeros.push(cpf.slice(8,11));
listaDeNumeros.push(cpf.slice(12,14));

for(let i of listaDeNumeros){
    cpfFormatado += i;
}
console.log(cpfFormatado)