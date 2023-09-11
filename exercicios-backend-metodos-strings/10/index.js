const nomeArquivo = 'Foto da Familia.pdf';

let validadorDearquivo = nomeArquivo.slice(nomeArquivo.indexOf('.'))

if(validadorDearquivo == '.jpg' || validadorDearquivo == '.jpeg' ||         validadorDearquivo == '.gif' || validadorDearquivo == '.png'){
    console.log('Arquivo valido')

}else{

    console.log('Arquivo invalido')

}