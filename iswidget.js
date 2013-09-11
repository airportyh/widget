/*

A widget has these things:

* `element` - a DOM element.
* `styles` (optional) - an array of CSS rules as strings
* `children` (optional) - an array of child widgets, 
  you don't need to create these manually because they 
  will automatically be created when you call 
  `Widget.addChild()` or `Widget.append()`.

*/

function isWidget(obj){
  if (!obj.element) return false
  if (!obj.element.nodeType) return false
  return true
}

