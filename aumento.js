let nome = prompt("Informe seu nome:")
let salario = Number(prompt("Informe seu salário:"))
let tempoEmpresa = Number(prompt("A quantos anos voce trabalha na empresa?; "))
let aumento = 0

if(anos <=3) {
    aumento = anos *1.03
    document.writeln("Parabens seu aumento será de "+ aumento)
}
else if (anos >=3) {
    aumento = anos * 1.125
    document.writeln("parabens seu aumento será de "+ aumento)
}
else {
    aumento = anos * 1.20
    document.writeln("parabens você recebeu o aumento de " + aumento)
}