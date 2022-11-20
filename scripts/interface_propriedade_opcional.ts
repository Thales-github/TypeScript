interface IProduto {

    nome: string;
    preco: number;
    descricao?: string;// opcional por isso colocamos a interrogação
    dataValidade: Date;
}

const produtoDados: IProduto = {

    nome: "Caneca Cdz",
    preco: 59.99,
    descricao: "Minha caneca geek",
    dataValidade: new Date(2022, 11, 20),
}

const produtoDados2: IProduto = {

    nome: "Caneca Cdz",
    preco: 59.99,
    // descricao: "Minha caneca geek", opcional
    dataValidade: new Date(2022, 11, 20),
}

console.log(produtoDados);
console.log(produtoDados2);
