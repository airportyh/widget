var B = Bob

Panel = function(){
  var panel = {}
  panel.element = B('div')
  for (var i = 0; i < arguments.length; i++){
    var child = arguments[i]
    Widget.append(panel, child)
  }
  return panel
}

Form = function(){
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

ToggleButton = function(text){
  var button = {}

  button.element = Bob('button', {'class': 'toggle-button'})
  Widget.setText(button, text)
  button.state = true
  DomHelper.addClass(button.element, 'on')

  button['element:click'] = function(e){
    button.state = !button.state
    if (button.state){
      DomHelper.addClass(button.element, 'on')
    }else{
      DomHelper.removeClass(button.element, 'on')
    }
  }

  button.styles = [
    '.toggle-button.on{ background: red; }'
  ]
  
  Bug.attach(button)

  return button
}

Label = function(text){
  var label = {}
  label.element = B('label', text)
  return label
}

TextField = function(){
  var textField = {}
  textField.element = B('input', {type: 'text'})
  return textField
}

PasswordField = function(){
  var textField = {}
  textField.element = B('input', {type: 'password'})
  return textField
}

NavItem = function(){
  var item = {}
  item.element = B('li')
  return item
}

Stack = function(){
  var stack = {element: B('stack')}
  A.each(arguments, function(arg){
    Widget.append(stack, arg)
  })
  stack.styles = [
    'stack > * { display: block }'
  ]
  return stack
}

Flow = function(){
  var flow = {element: B('flow')}
  A.each(arguments, function(arg){
    Widget.append(flow, arg)
  })
  flow.styles = [
    'flow > * { display: inline-block }'
  ]
  return flow
}

NavBar = function(){
  var bar = {}
  bar.element = B('ul', {'class': 'nav-bar flow'})
  bar.add = function(thing){
    var item = NavItem()
    Widget.append(item, thing)
    Widget.append(bar, item)
  }
  bar.styles = [
    '.nav-bar { padding: 0; }', 
    '.nav-bar * { cursor: pointer; }', 
    '.nav-bar li { padding: 5px; }',
    '.nav-bar li.selected { background: #ddd; }'
  ]
  return bar
}

Link = function(text, href){
  href = href || '#'
  var link = {
    element: B('a', {href: href}, text)
  }
  return link
}

TabbedPanel = function(){
  var panel
  var navBar
  var contentStack
  var contents = []
  
  panel = Stack(
    navBar = Flow(),
    contentStack = Stack()
  )

  DomHelper.addClass(navBar.element, 'nav-bar')
  DomHelper.addClass(contentStack.element, 'content')

  panel.styles = [
    '.nav-bar > * { margin: 5px; }'
  ]
  
  A.each(arguments, function(pair, i){
    var navItem = pair[0]
    var content = pair[1]
    contents.push(content)
    setup(navItem, content, i === 0)
    Widget.append(navBar, navItem)
    Widget.append(contentStack, content)
  })

  function setup(navItem, content, initiallyVisible){
    navItem['element:click'] = function(){
      content.element.style.display = 'block'
      for (var i = 0; i < contents.length; i++){
        if (contents[i] !== content){
          contents[i].element.style.display = 'none'
        }
      }
    }
    if (!initiallyVisible){
      content.element.style.display = 'none'
    }
    Bug.attach(navItem)
  }

  return panel
}
