var B = require('./bob')

module.exports = function(){
  var textField = {}
  textField.element = B('input', {type: 'password'})
  return textField
}