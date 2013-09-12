var B = require('./bob')
var Widget = require('./widget')

module.exports = function(){
  var panel = {}
  panel.element = B('div')
  for (var i = 0; i < arguments.length; i++){
    var child = arguments[i]
    Widget.append(panel, child)
  }
  return panel
}