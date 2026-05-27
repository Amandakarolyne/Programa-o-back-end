let numero1 = number(prompt("Informe o primeiro numero"));
let numero2 = number(prompt("Informe o segundo numero"));
if(numero1 > numero2) {
    alert("O numero 1 é maior")
    document.write('O numero ${mumero1} é maior que o numero $ {numero2}')
}else if(numero2 > numero1){
    alert("O numero 2 é maior")
    document.write('O numero ${mumero2} é maior que o numero $ {numero1}')
}else {
     alert("Os numeros são iguais")
    document.write('O numero ${mumero2} é igual ao numero ${numero1}')
}