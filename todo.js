var Stack = require('./stack')
var TextField = require('./text_field')
var A = require('./arrayhelpers')
var Widget = require('./widget')
var Label = require('./label')
var Bug = require('./bug')
var M = require('./messenger')

var todos = [
  'water the lawn',
  'feed the baby',
  'pickup emma'
]

var textField
var todoList
var ui = Stack(
  textField = OmniField(),
  todoList = Stack.apply(null, A.map(todos, Label))
)



function OmniField(){
  var textField = TextField()
  textField['element:keyup'] = function(e){
    if (e.keyCode === 13){
      addTask(textField.value())
      textField.clear()
    }
  }
  Bug.attach(textField)
  return textField
}

Widget.install(ui)

function addTask(task){
  Widget.append(todoList, Label(task))
}
