// valores 5 6 4 . 6 6 6
// peso das notas 2 3 5
// somatoria todos elementos, multiplicado pelo respectivo peso, dividodo pela somatoria dos pesos

var $nota_1 = parseFloat(prompt('Digite a primeira nota'))
var $nota_2 = parseFloat(prompt('Digite a segunda nota'))
var $nota_3 = parseFloat(prompt('Digite a terceira nota'))
var $nota_1Peso = 2
var $nota_2Peso = 3 
var $nota_3Peso = 5
var $totalPeso = ($nota_1Peso+$nota_2Peso+$nota_3Peso)
var $media = (($nota_1*$nota_1Peso + $nota_2*$nota_2Peso + $nota_3*$nota_3Peso) / ($totalPeso))
console.log($media)