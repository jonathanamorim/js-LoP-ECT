var $raio = prompt('Entre com o termo')
var $area = Math.PI*Math.pow($raio,2)
var $vol = (4/3)*(Math.PI*Math.pow($raio,3))
alert($area.toFixed(2)+' '+$vol.toFixed(2))