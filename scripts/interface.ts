// criando a interface
interface IEndereco {

    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
}

// dizendo que o objeto endereco é do tipo da interface criada IEndereco
let endereco: IEndereco;

endereco = {
    logradouro: "Av. Paulista",
    numero: 1000,
    bairro: "Bela Cintra",
    cidade: "São Paulo"
}

console.log(endereco);
