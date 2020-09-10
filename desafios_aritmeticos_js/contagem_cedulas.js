/*
Desafio

Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.
Entrada

Você receberá um valor inteiro N (0 < N < 1000000).
Saída

Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha, caso contrário será apresentada a seguinte mensagem: “Presentation Error”.
*/

let numero = parseInt(gets());

console.log(numero);

console.log(parseInt(numero/100) + " nota(s) de R$ 100,00");
numero = numero%100;

console.log(parseInt(numero/50) + " nota(s) de R$ 50,00");
numero = numero%50;

console.log(parseInt(numero/20) + " nota(s) de R$ 20,00");
numero = numero%20;

console.log(parseInt(numero/10) + " nota(s) de R$ 10,00");
numero = numero%10;

console.log(parseInt(numero/5) + " nota(s) de R$ 5,00");
numero = numero%5;

console.log(parseInt(numero/2) + " nota(s) de R$ 2,00");
numero = numero%2;

console.log(parseInt(numero/1) + " nota(s) de R$ 1,00");
