var B = require('./bob')

module.exports = function(text){
  var label = {}
  label.element = B('label', text)
  return label
}