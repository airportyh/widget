var DomHelper = require('./domhelper')
var B = require('./bob')
var A = require('./arrayhelpers')
var Flow = require('./flow')
var Stack = require('./stack')
var Bug = require('./bug')
var Widget = require('./widget')

module.exports = function(){
  var panel
  var navBar
  var contentStack
  var contents = []
  
  panel = Stack(
    navBar = Flow(),
    contentStack = Stack()
  )

  DomHelper.addClass(navBar.element, 'nav-bar')
  DomHelper.addClass(contentStack.element, 'content')

  panel.styles = [
    '.nav-bar > * { margin: 5px; }'
  ]
  
  A.each(arguments, function(pair, i){
    var navItem = pair[0]
    var content = pair[1]
    contents.push(content)
    setup(navItem, content, i === 0)
    Widget.append(navBar, navItem)
    Widget.append(contentStack, content)
  })

  function setup(navItem, content, initiallyVisible){
    navItem['element:click'] = function(){
      content.element.style.display = 'block'
      for (var i = 0; i < contents.length; i++){
        if (contents[i] !== content){
          contents[i].element.style.display = 'none'
        }
      }
    }
    if (!initiallyVisible){
      content.element.style.display = 'none'
    }
    Bug.attach(navItem)
  }

  return panel
}