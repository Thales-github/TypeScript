interface ISoma {

    (num1: number, num2: number): number;// dizendo aqui o que a minha função terá de ter ao ser criada quando herdar essa interface
}

let primeiraSoma: ISoma;
primeiraSoma = (num1: number, num2: number): number => {
    return num1 + num2;
}

console.log(primeiraSoma(15, 44));

interface ICalculos {
    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
    multiplicar?(a: number, b: number): number; // função opcional
    dividir(a: number, b: number): number;
}

let calculadora: ICalculos;

function adicao(a: number, b: number) {
    return a + b;
}

const multiplicacao = (a: number, b: number) => a * b;

calculadora = {
    dividir: (a: number, b: number) => {
        return a / b;
    },
    subtrair: function (a: number, b: number) {
        return a - b;
    },
    somar: adicao,
    multiplicar: multiplicacao
}

console.log(calculadora.subtrair(15, 5));
