var $entrada = parseInt(prompt('valor: '))
var $v1 = parseInt(($entrada / 100))
var $entrada = ($entrada-$v1*100)
var $v2 = parseInt(($entrada / 10))
var $entrada = ($entrada-$v2*10)
var $v3 = parseInt($entrada)
alert($v3+''+$v1+''+$v2)