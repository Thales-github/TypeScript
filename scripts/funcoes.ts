
function mostrarMensagem(texto: string | number | object): boolean {

    console.log(texto);

    return true;

}

console.log(mostrarMensagem("Hcode"));
console.log(mostrarMensagem(500));
console.log(mostrarMensagem({url: "ww.systemforweb.com.br"}));