var Flow = require('./flow')
var Label = require('./label')
var CheckBox = require('./checkbox')
var Button = require('./button')
var M = require('./messenger')
var DomHelper = require('./domhelper')

module.exports = function TaskView(task){
  var checkbox
  var label
  var rmButton
  var view = Flow(
    {'class': 'task'},
    checkbox = CheckBox(),
    label = Label(task.name),
    rmButton = Button('x')
  )
  
  M.on(checkbox, 'change', function(){
    task.done = checkbox.value()
    if (task.done){
      DomHelper.addClass(view.element, 'done')
    }else{
      DomHelper.removeClass(view.element, 'done')
    }
  })

  M.on(rmButton, 'click', function(){
    console.log('emitted remove')
    M.emit(view, 'remove')
  })

  view.styles = [
    '.task.done label { text-decoration: line-through; }'
  ]

  return view
}