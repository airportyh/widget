var B = require('./bob')
var Bug = require('./bug')
var M = require('./messenger')

module.exports = function(text){
  var button = {
    element: B('button', text),
    "element:click": function(){
      M.emit(button, 'click')
    }
  }

  Bug.attach(button)

  return button
}