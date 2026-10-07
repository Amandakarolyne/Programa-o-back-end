//Exercíci 1
var frase = "Aprender JavaScript é muito divertido";

var palavras = frase.split(" ");

console.log(palavras);


//Exercíci 2
var titulo = "Como criar um site";

var slug = titulo.toLowerCase().split(" ").join("-");

console.log(slug);


//Exercíci 3
var email = " CONTATO@MEUSITE.COM ";

var emailPadronizado = email.trim().toLowerCase();

console.log(emailPadronizado);


//Exercíci 4
var nome = "ana maria silva";

var partes = nome.split(" ");
var iniciais = partes[0][0].toUpperCase() +
               partes[1][0].toUpperCase() +
               partes[2][0].toUpperCase();

console.log(iniciais);


//Exercíci 5
var lista = "maçã,banana,laranja,uva";

var compras = lista.split(",").join(" | ");

console.log(compras);


//Exercíci 6
var frase = "Isso é MUITO Perigoso";

var resultado = frase.toLowerCase().includes("perigoso");

console.log(resultado);


//Exercíci 7
var cpf = "123.456.789-00";

var novoCpf = cpf.split(".").join("-");

console.log(novoCpf);
