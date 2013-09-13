var Stack = require('./stack')
var OmniField = require('./omni_field')
var A = require('./arrayhelpers')
var Widget = require('./widget')
var M = require('./messenger')
var Task = require('./task')
var Text = require('./text')
var Flow = require('./flow')
var FilterBar = require('./filter_bar')
var FilterableArray = require('./filterable_array')
var TasksView = require('./tasks_view')

var todos = FilterableArray(A.map([
  'water the lawn',
  'feed the baby',
  'pickup emma'
], Task))

function UI(todos){

  var textField
  var tasksView
  var countText
  var filterBar

  var ui = Stack(
    textField = OmniField(),
    tasksView = TasksView(todos),
    Flow(
      countText = Text(todos.length),
      Text(' items left'),
      filterBar = FilterBar(todos)
    )
  )

  M.on(textField, 'enter', function(){
    addTask(textField.value())
    textField.clear()
  })

  M.on(todos, 'change', updateCountText)

  function addTask(task){
    var t = Task(task)
    todos.push(t)
  }

  function updateCountText(){
    var undoneTasks = A.filter(todos, function(t){ return !t.done })
    countText.setText(undoneTasks.length)
  }

  return ui

}

Widget.install(UI(todos))
