var B = require('./bob')

module.exports = function(){
  var textField = {}
  var input = textField.element = B('input', {type: 'text'})
  textField.value = function(){
    return input.value
  }
  textField.clear = function(){
    input.value = ''
  }
  return textField
}