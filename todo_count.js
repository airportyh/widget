var M = require('./messenger')
var Text = require('./text')
var A = require('./arrayhelpers')

module.exports = function TodoCount(todos){
  var todoCount = Text(todos.length)

  M.on(todos, 'change', function(){
    var undoneTasks = A.filter(todos, function(t){
      return !t.done
    })
    todoCount.setText(undoneTasks.length)
  })

  return todoCount
}