const email = "@";


let verificadorDeArrouba = email.includes('@');
let verificadorDePonto = email.includes('.');

if(verificadorDeArrouba){
    if(verificadorDePonto){
        if(email[0] == '.'){
            console.log('reprovado tem um ponto no inicio')
        }else{
            if (email[email.length - 1] == '.'){
                console.log('reprovado tem um ponto no final')
            }else{
                console.log('Email aprovado')
            }
        }
    }else{
        console.log('reprovado não tem o ponto')
    }
}else{
    
    console.log('reprovado não tem o @')

}