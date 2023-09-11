let cpf = "12345678900";
let cnpj = "27733195000135";
let cpfFormatado = '';
let cnpjFormatado = '';
let listaComCpf = [];
let listaComCnpj = [];
let verificadorDePosicao = 14; 
let verificadorCpf = cpf.length;
let verificadorCnpj = cnpj.length;

if (verificadorCpf == 11) {
    while (cpf.length > 0) {
        listaComCpf.push(cpf.slice(0, 3));
        cpf = cpf.slice(3);

    }
    for (let i of listaComCpf){
        if(i.length == 3 ){
            cpfFormatado += i + '.';
        }else{
            cpfFormatado += i;
        }
    }


} else {
    console.log("CPF inválido.");
}
if (verificadorCnpj == 14){
    while(cnpj.length > 1){

        if(cnpj.length == 14 || cnpj.length == 2){
            listaComCnpj.push(cnpj.slice(0,2));
            cnpj = cnpj.slice(2);
        }
        if(cnpj.length == 6){

            listaComCnpj.push(cnpj.slice(0,4));
            cnpj = cnpj.slice(4);

        }
        if (cnpj.length != 6 && cnpj.length != 14)
        {
            listaComCnpj.push(cnpj.slice(0,3));
            cnpj = cnpj.slice(3);

        }
    }
    for(let i of listaComCnpj){

        if(verificadorDePosicao == 14){
            cnpjFormatado += i + '.';
            verificadorDePosicao -= 2;

       }
       else if(verificadorDePosicao == 12){

            cnpjFormatado += i + '.';
            verificadorDePosicao -= 3;

       }
        else if(verificadorDePosicao == 9){

            cnpjFormatado += i + '/';
            verificadorDePosicao -= 3;

       }
        else if(verificadorDePosicao == 6){

            cnpjFormatado += i + '-';
            verificadorDePosicao -= 4;
        
       }
        else if(verificadorDePosicao == 2){
        
            cnpjFormatado += + i;
        
            verificadorDePosicao -= 2;
       }
        
       else if(verificadorDePosicao == 0){
       
         break;
       }
    }
}
console.log(cpfFormatado)
console.log(cnpjFormatado)