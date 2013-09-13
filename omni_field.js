var M = require('./messenger')
var Bug = require('./bug')
var TextField = require('./text_field')
var Task = require('./task')

function OmniField(todos){
  var textField = TextField()
  textField['element:keyup'] = function(e){
    if (e.keyCode === 13){
      M.emit(textField, 'enter')
    }
  }

  M.on(textField, 'enter', function(){
    addTask(textField.value())
    textField.clear()
  })
  
  function addTask(task){
    var t = Task(task)
    todos.push(t)
  }

  Bug.attach(textField)
  return textField
}

module.exports = OmniField