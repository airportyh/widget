var B = require('./bob')
var Widget = require('./widget')

module.exports = function(){
  var form = {}
  form.element = B('table', {'class': 'form'})
  for (var i = 0; i < arguments.length; i++){
    var pair = arguments[i]
    var row, cell1, cell2
    Widget.addChild(form, pair[0])
    Widget.addChild(form, pair[1])
    row = B('tr', 
      cell1 = B('td', pair[0].element), 
      cell2 = B('td', pair[1].element))
    form.element.appendChild(row)

  }
  return form
}