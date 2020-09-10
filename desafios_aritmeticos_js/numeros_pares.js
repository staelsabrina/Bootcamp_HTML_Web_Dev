/*
Desafios

Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada

Você receberá 1 valor inteiro N, onde N > 0.

Saída

Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 
*/

let num = parseInt(gets());
let cont;

for (cont=1; cont <= num; cont++){
  if (cont%2 == 0) {
    console.log(cont);
  }
}
