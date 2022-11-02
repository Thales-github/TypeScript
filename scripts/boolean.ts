/**
 * No javascript podemos utilizar UM ou ZERO como VERDADEIRO ou FALSO
 * PORÉM no typescript o tipo booleano é true ou false apenas, caso venha um valor numérico
 * nós precisamos convertê-lo para boolean e só assim testar o seu valor
 */

let admin: boolean = true;

admin = Boolean("1");// convertendo para o tipo booleano
console.log(admin);

let senha: string = "12345";
let senhaSegura: boolean;

senhaSegura = (senha.length >= 8);
console.log(senhaSegura);


