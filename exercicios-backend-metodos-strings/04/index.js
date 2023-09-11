let identificador = "123";
let nome = "laila de souza carvalho";
let email = "      jose@email.com  ";
let nomeFormatado = '';
let cont = 0;
let quantidadeDeLetras
let arrayDeNome = [];
let = identificadorFormatado = identificador.padStart(6,'0');
arrayDeNome = nome.split(' ')


for(let i = 0; i < (nome.length - arrayDeNome.length );i++){
    if (i == arrayDeNome.length){
        break
    }
    for(let verificador of arrayDeNome[i]){
        
        if(cont == 0){
            nomeFormatado += verificador[0].toUpperCase();
        }else{

            nomeFormatado +=verificador;

        }
        cont ++          
    }
    nomeFormatado += ' '
    cont = 0;
}

console.log(nomeFormatado.trim())
