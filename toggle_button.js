var Widget = require('./widget')
var Bug = require('./bug')
var B = require('./bob')
var DomHelper = require('./domhelper')

module.exports = function(text){
  var button = {}

  button.element = B('button', {'class': 'toggle-button'})
  Widget.setText(button, text)
  button.state = true
  DomHelper.addClass(button.element, 'on')

  button['element:click'] = function(e){
    button.state = !button.state
    if (button.state){
      DomHelper.addClass(button.element, 'on')
    }else{
      DomHelper.removeClass(button.element, 'on')
    }
  }

  button.styles = [
    '.toggle-button.on{ background: red; }'
  ]
  
  Bug.attach(button)

  return button
}
