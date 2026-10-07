//Exercício 1: Crie uma variável frase com o texto "Programar é muito  legal!". Use o método  para descobrir a posição da palavra "muito" e exiba o resultado no console.

let frase = "Programar é muito legal!";

let posicao = frase.indexOf("muito");

console.log(posicao);



//Exercício 2: Dada a string texto = "banana", utilize o método para encontrar a posição da última ocorrência da letra "a".

let texto = "banana";

let posicaoUltimaA = texto.lastIndexOf("a");

console.log(posicao);



//Exercício 3: Escreva um código que verifica se a string email = "aluno@escola.com" contém o caractere \@ usando o método correto. O resultado deve ser true ou false.

let email = "aluno@escola.com";

let existe = email.includes("@");

console.log(existe);



//Exercício 4: Crie uma variável arquivo com o valor "relatorio.pdf". Use o método endsWith para verificar se o arquivo termina com ".pdf".

let valor = "relatorio.pdf";

let final = valor.endsWith(".pdf");

console.log(final);



//Exercício 5: Dada a frase mensagem = "Bom dia, aluno!", use o método startsWith para checar se ela começa com o texto "Bom".

let mensagem = "Bom dia, aluno!";

let existe = mensagem.startsWith("Bom");

console.log(existe);



//Exercício 6: Defina a string palavra = "Computador". Utilize o método slice para recortar e exibir apenas a palavra "Put" .

let palavra = "computador"

let novo = palavra.slice(3, 6);

console.log(novo)



//Exercício 7: Usando a mesma string do exercício anterior (palavra = "Computador"), aplique o método substring do índice 0 até o 4 para ver qual parte da palavra é retornada.

let palavra = "Computador";

let novo = palavra.substring(0, 4);

console.log(novo);
