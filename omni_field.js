var M = require('./messenger')
var Bug = require('./bug')
var TextField = require('./text_field')

function OmniField(){
  var textField = TextField()
  textField['element:keyup'] = function(e){
    if (e.keyCode === 13){
      M.emit(textField, 'enter')
    }
  }
  Bug.attach(textField)
  return textField
}

module.exports = OmniField