const comentario = "Esse COVID é muito perigoso!";
let palavrasEmMaiuscula = comentario.toUpperCase();
let verificadorDePalavras = palavrasEmMaiuscula.includes('COVID','PANDEMIA')

let resultado = (verificadorDePalavras ? 'Comentário bloqueado por conter palavras proibidas': 'Comentário autorizado' )

console.log(resultado)