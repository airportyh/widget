var B = require('./bob')
var A = require('./arrayhelpers')
var Widget = require('./widget')

function appendAll(things, stack){
  A.each(things, function(arg){
    if (arg instanceof Array){
      appendAll(arg, stack)
    }else{
      Widget.append(stack, arg)
    }
  })
}

module.exports = function(){
  var stack = {element: B('stack')}
  appendAll(arguments, stack)
  stack.styles = [
    'stack > * { display: block }'
  ]
  return stack
}