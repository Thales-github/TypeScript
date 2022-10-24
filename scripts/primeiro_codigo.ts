console.log("typescript rodando...");

console.log("====================");

const nome = "Thales";

console.log(`Olá ${nome} seja bem vindo`);

class Produto {

    nome: string;
    valor: number;

    constructor(produtoNome: string, produtoValor: number) {
        this.nome = produtoNome;
        this.valor = produtoValor;
    }
}
const playStation5 = new Produto("PlayStation", 5000);