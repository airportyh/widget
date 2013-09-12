var DomHelper = require('./domhelper')
var AppStyleSheet = require('./appstylesheet')

var Widget = module.exports = {
  setText: function(w, text){
    DomHelper.setText(w.element, text)
  },
  addChild: function(parent, child){
    if (!parent.children){
      parent.children = []
    }
    parent.children.push(child)
  },
  append: function(parent, child){
    parent.element.appendChild(child.element)
    Widget.addChild(parent, child)
  },
  walk: function(w, visitor){
    if (!w) return
    visitor(w)
    if (w.children){
      for (var i = 0; i < w.children.length; i++){
        Widget.walk(w.children[i], visitor)
      }
    }
  },
  install: function(widget, parentElement){
    parentElement = parentElement || document.body
    var styleSheet = AppStyleSheet()
    Widget.walk(widget, function(w){
      if (w.styles){
        for (var i = 0; i < w.styles.length; i++){
          styleSheet.addRule(w.styles[i])
        }
      }
    })
    styleSheet.install()
    parentElement.appendChild(widget.element)
  }
}