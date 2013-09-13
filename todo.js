var Stack = require('./stack')
var OmniField = require('./omni_field')
var A = require('./arrayhelpers')
var Task = require('./task')
var Widget = require('./widget')
var Text = require('./text')
var Flow = require('./flow')
var FilterBar = require('./filter_bar')
var FilterableArray = require('./filterable_array')
var TasksView = require('./tasks_view')
var TodoCount = require('./todo_count')

var todos = FilterableArray(A.map([
  'water the lawn',
  'feed the baby',
  'pickup emma'
], Task))

function UI(todos){
  
  return Stack(
    OmniField(todos),
    TasksView(todos),
    Flow(
      TodoCount(todos),
      Text(' items left'),
      FilterBar(todos)
    )
  )

}

Widget.install(UI(todos))
