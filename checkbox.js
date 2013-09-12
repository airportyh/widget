var B = require('./bob')
var M = require('./messenger')
var Bug = require('./bug')

module.exports = function CheckBox(){
  var cb = {
    element: B('input', {type: 'checkbox'}),
    "element:change": function(){
      M.emit(cb, 'change')
    },
    value: function(){
      return cb.element.checked
    }
  }

  Bug.attach(cb)

  return cb
}