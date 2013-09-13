var B = require('./bob')
var Bug = require('./bug')
var M = require('./messenger')

module.exports = function(text, href){
  href = href || '#'
  var link = {
    element: B('a', {href: href}, text),
    "element:click": function(){
      M.emit(link, 'click')
    },
    href: function(){
      return link.element.href
    },
    hash: function(){
      return link.element.hash
    }
  }

  Bug.attach(link)

  return link
}