"use strict";
// declarando array com union types modelo 1
const filmesCategorias = ["comédia", "Drama", 44556, 555555];
// declarando array com union types modelo 2
const filmesAnos = [];
for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano);
}
console.log(filmesCategorias);
console.log("----------------------");
console.log(filmesAnos);
//# sourceMappingURL=array.js.map