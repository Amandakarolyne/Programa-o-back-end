let alunos = ["Ana", "Pedro", "Maria"];
for(let i = 0; i < alunos.length; i ++){
    console.log("Presente: ",aluno[i])
}

alunos.forEach(function(aluno){
    console.log("Presente: ",aluno)
})

//Exercício 2: Calculando o Dobro
let base = [5, 10, 15];
for(let i = 0; i < base.length; i ++){
    console.log(base[i] * 2)
}

//Exercício 3: Localizador de Posição (Uso do Índice)
let marcas = ['Fiat', 'Ford', 'VW'];
marcas.forEach(function(item, indice) {
    console.log("Índice " + indice + ": " + item);
});

//Exercício 4: Somatória de Pontos
let pontos = [10, 20, 30];
let total = 0;
for (let i = 0; i < pontos.length; i++) {
    total += pontos[i];
console.log(total);
}


//Exercício 5: Alerta de Estoque Baixo
 let estoque = [5, 12, 3, 20, 8];
estoque.forEach(function(quantidade) {
    if (quantidade < 10) {
        console.log("Repor produto!");
    }
});