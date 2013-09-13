var B = require('./bob')
var M = require('./messenger')
var Bug = require('./bug')

module.exports = function CheckBox(checked){
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

  if (checked !== undefined){
    cb.element.checked = checked
  }

  return cb
}