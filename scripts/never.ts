function showError(message: string): never {

    throw new Error(message);

}

console.log(showError("Algo deu errado"));
/* tipo de dados apenas para FUNÇÕES/MÉTODOS que NUCA terão retorno algum pois terá a sua 
/*execução interrompida mas ao mesmo tempo NÃO É UM ERRO
*/

