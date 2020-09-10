/*
Desafio

Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.
Entrada

Você receberá seis valores, negativos e/ou positivos.
Saída

Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.
*/

let a = parseInt(gets());
let b = parseInt(gets());
let c = parseInt(gets());
let d = parseInt(gets());
let e = parseInt(gets());
let f = parseInt(gets());

let nums = [a,b,c,d,e,f];

let pos = nums.filter(value => value > 0);

console.log(pos.length + " valores positivos");

