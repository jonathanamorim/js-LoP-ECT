var $a = parseInt(prompt('valor de A: '))
var $b = parseInt(prompt('valor de B: '))
var $c = $a
this.$a = $b
this.$b = $c
alert('Inicial: '+$a+' '+$b+'\n'+'Final: '+this.$a+' '+this.$b) 