let resultado: unknown; // este tipo de dado significa desconhecido

resultado = {
    sucesso: true
}

resultado = "Deu tudo certo. OK!";
resultado = 200;

console.log("===================================");

const informacao: any = 150;
const informacaoDesconhecida: unknown = 250;

const primeiroNumero: number = informacao;

// const segundoNumero: number = informacaoDesconhecida; exemplo de erro do tipo unknown
/**
 * Diferente do any, o tipo unknown não pode ser atribuído a outra variável.
 */