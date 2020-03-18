var $altura = parseFloat(prompt('digite sua altura'))
var $peso = parseFloat(prompt('digite seu peso'))
var $imc = $peso / Math.pow($altura,2)
let $aMedia = 1.73
if ($altura < $aMedia ){
  alert('Abaixo da media')
}