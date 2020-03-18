var $peso = parseFloat(prompt('digite seu peso'))
var $altura = parseFloat(prompt('digite sua altura'))
var $imc = $peso / Math.pow($altura,2)
if ($imc < 18.5){
  alert('Abaixo do peso')
}else if($imc >= 18.5 && $imc < 25){
  alert('Peso normal')
}else if($imc >= 25 && $imc < 30){
  alert('Sobrepeso')
}else{
  alert('Obesidade')
}