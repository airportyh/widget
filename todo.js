var Stack = require('./stack')
var OmniField = require('./omni_field')
var A = require('./arrayhelpers')
var Widget = require('./widget')
var M = require('./messenger')
var TaskView = require('./task_view')
var Task = require('./task')
var Text = require('./text')
var Flow = require('./flow')
var prop = require('./prop')
var Link = require('./link')
var FilterBar = require('./filter_bar')
var FilterableArray = require('./filterable_array')

var todos = FilterableArray(A.map([
  'water the lawn',
  'feed the baby',
  'pickup emma'
], Task))

function UI(todos){

  var textField
  var todoList
  var countText
  var filterBar

  var viewableTodos = todos

  var ui = Stack(
    textField = OmniField(),
    todoList = Stack(A.map(todos, makeTaskView)),
    Flow(
      countText = Text(viewableTodos.length),
      Text(' items left'),
      filterBar = FilterBar()
    )
  )

  M.on(textField, 'enter', function(){
    addTask(textField.value())
    textField.clear()
  })

  function makeTaskView(task){
    var taskView = TaskView(task)
    M.on(taskView, 'remove', function(){
      A.remove(todos, task)
      Widget.remove(todoList, taskView)
      updateCountText()
    })
    M.on(taskView, 'check', function(){
      updateCountText()
    })
    return taskView
  }

  M.on(todos, 'change', function(){
    updateTaskViews()
  })

  M.on(filterBar, 'change', function(hash){
    if (hash === '#active'){
      todos.setFilter(function(task){
        return !task.done
      })
    }else if (hash === '#completed'){
      todos.setFilter(function(task){
        return task.done
      })
    }else{
      todos.setFilter(null)
    }
  })

  function addTask(task){
    todos.push(Task(task))
    Widget.append(todoList, makeTaskView(Task(task)))
    updateCountText()
  }

  function updateCountText(){
    var undoneTasks = A.filter(todos, function(t){ return !t.done })
    countText.setText(undoneTasks.length)
  }

  function updateTaskViews(){
    Widget.removeAllChildren(todoList)
    A.each(todos, function(task){
      Widget.append(todoList, makeTaskView(task))
    })
    updateCountText()
  }

  return ui

}

Widget.install(UI(todos))
