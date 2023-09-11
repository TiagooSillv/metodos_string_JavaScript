let cpf = "12345678900";
let cnpj = "12345678900034";
cpfFormatado = ''
let listaComCpf = [];
let listaComCnpj = [];
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
    while(cnpj.length > 0){

        listaComCnpj.push(cnpj.slice(0,3));
        cnpj.slice(3);
    }
    console.log(listaComCnpj)

}
console.log(cpfFormatado)