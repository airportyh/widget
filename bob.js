module.exports = function Bob(tagName){
  var elm = document.createElement(tagName)
  for (var i = 1; i < arguments.length; i++){
    var arg = arguments[i]
    if (arg.nodeType){
      // treat this as a child node
      elm.appendChild(arg)
    }else if (typeof arg === 'object'){
      // treat this as a map of attributes
      for (var name in arg){
        elm.setAttribute(name, arg[name])
      }
    }else if (typeof arg === 'string'){
      // treat as text content
      elm.appendChild(document.createTextNode(arg))
    }else{
      throw new Error('Don\'t know how to handle argument' + i + ': ' + arg)
    }
  }
  return elm
}

