let ValorCompra = Number(prompt("Informe o valor da compra: "));
let genero = prompt("Informe seu genero, digite F para Feminino ou M para Masculino");
let ValorAPagar
if (genero == "F"){
    ValorAPagar = ValorCompra * 0.91
}
else{
    ValorAPagar = ValorCompra
}
alert(ValorApPgar)
document.write('O valor a pagar é de ${ValorAPagar}')