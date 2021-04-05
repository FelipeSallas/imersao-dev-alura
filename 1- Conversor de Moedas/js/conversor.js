var valorEmAnosLuzTexto = prompt("Quantos Anos-Luz separam o nosso Pálido Ponto Azul do que você tem em mente?")

var valorEmAnosLuzNumero = parseFloat(valorEmAnosLuzTexto)

var valorEmQuilometros = valorEmAnosLuzNumero * 0.00000000000010570
var valorEmQuilometrosFixado = valorEmQuilometros.toFixed(2)

alert(valorEmQuilometrosFixado)

//Revisão
//variáveis var - floar - string 
//alert - parseInt - parseFloat - prompt
//operações + somar * multiplicar
//comentário final
