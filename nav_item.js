var B = require('./bob')

module.exports = function(){
  var item = {}
  item.element = B('li')
  return item
}