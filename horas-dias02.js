var $entrada = prompt('digite as horas')
var $dias = parseInt($entrada/24)
var $horas = parseFloat($entrada%24)
alert($entrada+' horas = '+$dias+' dias e '+$horas.toFixed(2)+' horas.')