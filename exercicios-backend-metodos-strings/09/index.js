const nome = 'Guido Cerqueira';

let nomeSemEspaco = nome.replace(' ', '');
let nomeMinusculo = nomeSemEspaco.toLocaleLowerCase();
let nomeComArrouba = '@' + nomeMinusculo
let tamahoDenome = nomeComArrouba.length
let nomeFormatado = '';

if (tamahoDenome > 13){
    nomeFormatado = nomeComArrouba.slice(0,13)
}else{
    nomeFormatado = nomeComArrouba ; 
}

console.log(nomeFormatado)





