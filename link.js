var B = require('./bob')

module.exports = function(text, href){
  href = href || '#'
  var link = {
    element: B('a', {href: href}, text)
  }
  return link
}