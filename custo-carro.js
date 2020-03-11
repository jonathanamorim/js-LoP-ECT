// soma preco fabrica + percentual de lucro do distribuidor + impostos 
// lucro e imposto tem base o valor de fabrica

var $precoFabrica = parseInt(prompt('Preco'))
var $perLucroDist = parseInt(prompt('Lucro do distribuidor')) 
var $impostos = parseInt(prompt('Impostos'))

var $perLucroDist_1 = ($precoFabrica * ($perLucroDist/100))
var $impostos_1 = ($precoFabrica * ($impostos/100))
var $valorTotalCarro = ($impostos_1+$perLucroDist_1+$precoFabrica)

console.log($perLucroDist_1+'\n'+$impostos_1+'\n'+$valorTotalCarro)