/*
Desafio

Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada

Você receberá 5 valores inteiros.

Saída

Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.
*/

let a = parseInt(gets());
let b = parseInt(gets());
let c = parseInt(gets());
let d = parseInt(gets());
let e = parseInt(gets());

let valores = [a,b,c,d,e];

let par=0;
let impar=0;
let pos=0;
let neg=0;
let cont;


for (cont=0; cont < valores.length; cont++){
  if (valores[cont]%2 == 0) {
    par++;
  } else {
    impar++;
  }
  if (valores[cont]>0){
    pos++;
  } else if (valores[cont]<0){
    neg++;
  }
}

console.log(par + " valor(es) par(es)");
console.log(impar + " valor(es) impar(es)");
console.log(pos + " valor(es) positivo(s)");
console.log(neg + " valor(es) negativo(s)");
