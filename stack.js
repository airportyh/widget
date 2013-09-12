var B = require('./bob')
var A = require('./arrayhelpers')
var Widget = require('./widget')

module.exports = function(){
  var stack = {element: B('stack')}
  A.each(arguments, function(arg){
    Widget.append(stack, arg)
  })
  stack.styles = [
    'stack > * { display: block }'
  ]
  return stack
}