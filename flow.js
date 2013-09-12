var B = require('./bob')
var A = require('./arrayhelpers')
var Widget = require('./widget')

function appendAll(things, parent){
  A.each(things, function(arg){
    if (arg instanceof Array){
      appendAll(arg, parent)
    }else if(arg.element){
      Widget.append(parent, arg)
    }else if(arg instanceof Object){
      for (var name in arg){
        parent.element.setAttribute(name, arg[name])
      }
    }
  })
}

module.exports = function(){
  var flow = {element: B('flow')}
  appendAll(arguments, flow)
  flow.styles = [
    'flow > * { display: inline-block }'
  ]
  return flow
}