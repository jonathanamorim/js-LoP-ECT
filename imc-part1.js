var $altura = parseFloat(prompt('digite sua altura'))
var $peso = parseFloat(prompt('digite seu peso'))
var $imc = $peso / Math.pow($altura,2)
if ($imc > 24.9){
  alert('acima')
}else{
  alert('abaixo')
}