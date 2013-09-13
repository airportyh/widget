var M = require('./messenger')
var Stack = require('./stack')
var A = require('./arrayhelpers')
var Widget = require('./widget')
var TaskView = require('./task_view')

module.exports = function TasksView(todos){
  var tasksView = Stack(A.map(todos, makeTaskView))

  M.on(todos, 'change', function(){
    updateTaskViews()
  })

  function updateTaskViews(){
    Widget.removeAllChildren(tasksView)
    A.each(todos, function(task){
      Widget.append(tasksView, makeTaskView(task))
    })
  }

  function makeTaskView(task){
    var taskView = TaskView(task)
    M.on(taskView, 'remove', function(){
      A.remove(todos, task)
      Widget.remove(tasksView, taskView)
    })
    M.on(taskView, 'check', function(){
      M.emit(todos, 'change')
    })
    return taskView
  }

  return tasksView
}