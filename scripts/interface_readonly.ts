interface ICurso {

    readonly titulo: string; //propriedade que ficará no modo de somente leitura
    descricao?: string;
    preco: number;
    cargaHoraria: number;
    classificacao: number;
}

const curso: ICurso = {

    titulo: "Typescript",
    preco: 5000,
    cargaHoraria: 15,
    classificacao: 5
}

// curso.titulo = "PHP 8";
console.log(curso);

/*
constantes são para VARIÁVEIS que não podem ter o seu valor alterado
readonly são para PROPRIEDADES que não podem ter o seu valor alterado
*/