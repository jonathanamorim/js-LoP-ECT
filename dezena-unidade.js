var $entrada = prompt('aaaa ')
var $dezenas = ($entrada%100) / 10
var $unidades = (($entrada%100)%10)
console.log(parseInt($dezenas)+'\n'+$unidades)