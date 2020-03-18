var $valor1 = prompt('valor 1')
var $valor2 = prompt('valor 2')
var $valor3 = prompt('valor 3')
var $array = [$valor1,$valor2,$valor3]
var $valorminimo = Math.min(...$array)
alert($valorminimo)