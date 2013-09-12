var B = require('./bob')
var Widget = require('./widget')

module.exports = function(){
  var bar = {}
  bar.element = B('ul', {'class': 'nav-bar flow'})
  bar.add = function(thing){
    var item = NavItem()
    Widget.append(item, thing)
    Widget.append(bar, item)
  }
  bar.styles = [
    '.nav-bar { padding: 0; }', 
    '.nav-bar * { cursor: pointer; }', 
    '.nav-bar li { padding: 5px; }',
    '.nav-bar li.selected { background: #ddd; }'
  ]
  return bar
}