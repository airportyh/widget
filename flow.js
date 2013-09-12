var B = require('./bob')
var A = require('./arrayhelpers')
var Widget = require('./widget')

module.exports = function(){
  var flow = {element: B('flow')}
  A.each(arguments, function(arg){
    Widget.append(flow, arg)
  })
  flow.styles = [
    'flow > * { display: inline-block }'
  ]
  return flow
}