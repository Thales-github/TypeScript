function somarRenda(...meses: number[]): number {

    return meses.reduce((rendaAtual: number, rendaTotal: number) => rendaTotal + rendaAtual, 0);
}

console.log(somarRenda(158, 305, 2000));